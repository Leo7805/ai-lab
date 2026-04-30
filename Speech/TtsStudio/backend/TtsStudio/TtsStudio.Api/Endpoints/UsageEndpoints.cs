using TtsStudio.Api.Dtos;

namespace TtsStudio.Api.Endpoints;

public static class UsageEndpoints
{
    public static IEndpointRouteBuilder MapUsageEndpoints(this IEndpointRouteBuilder app)
    {
        app.MapGet("/usage", () =>
        {
            var now = DateTime.UtcNow;
            var response = new UsageSummaryResponse(
                "Azure",
                "2026-4",
                123,
                8450,
                500000,
                491550
            );
            return Results.Ok(response);
        });

        return app;
    }
}