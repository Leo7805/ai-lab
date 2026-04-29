using TtsStudio.Api.Dtos;
using TtsStudio.Api.Services;

namespace TtsStudio.Api.Endpoints;

public static class TtsEndpoints
{
    public static IEndpointRouteBuilder MapTtsEndpoints(this IEndpointRouteBuilder app)
    {
        app.MapPost("/tts", async (TtsRequest req, TtsService ttsService, HttpContext httpContext) =>
        {
            var audioData = await ttsService.SynthesizeAsync(req);

            // Prevent any caching (browser/CDN/proxies); ensure each request returns fresh audio
            httpContext.Response.Headers.CacheControl = "no-store";

            return Results.File(
                audioData,
                "audio/mpeg"
            );
        });

        return app;
    }
}