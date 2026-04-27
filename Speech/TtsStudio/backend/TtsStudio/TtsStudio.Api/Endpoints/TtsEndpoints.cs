using Microsoft.CognitiveServices.Speech;
using TtsStudio.Api.Configuration;

namespace TtsStudio.Api.Endpoints;

/// <summary>
///     Request model for Text-to-Speech (TTS).
/// </summary>
/// <param name="Text">
///     The input text to synthesize into speech.
/// </param>
/// <param name="VoiceName">
///     Optional Azure voice name (e.g., "en-AU-NatashaNeural").
///     If not provided, the system will fall back to the default voice
///     configured in appsettings or secrets.
/// </param>
public sealed record TtsRequest(
    string Text,
    string? VoiceName
);

public static class TtsEndpoints
{
    public static IEndpointRouteBuilder MapTtsEndpoints(this IEndpointRouteBuilder app)
    {
        app.MapPost("/tts", async (TtsRequest req, IConfiguration config, HttpContext httpContext) =>
        {
            if (string.IsNullOrWhiteSpace(req.Text)) return Results.BadRequest("Text is required");

            var settings = AzureSpeechSettings.FromConfiguration(config);

            if (!settings.IsValid(out var error))
                return Results.Problem(error);

            // Create Azure speech config object
            var speechConfig = SpeechConfig.FromSubscription(
                settings.Key!,
                settings.Region!
            );
            speechConfig.SpeechSynthesisVoiceName = req.VoiceName ?? settings.VoiceName;

            // MP3 is smaller and tends to be more robust across browser playback pipelines.
            speechConfig.SetSpeechSynthesisOutputFormat(SpeechSynthesisOutputFormat.Audio24Khz48KBitRateMonoMp3);

            // Disable local speaker output on the backend process.
            // We only need the synthesized bytes returned to the frontend.
            // audioConfig: null, do not play using local device
            using var synthesizer = new SpeechSynthesizer(speechConfig, null);

            // Synthesize the speech
            var result = await synthesizer.SpeakTextAsync(req.Text);

            if (result.Reason != ResultReason.SynthesizingAudioCompleted)
            {
                var cancellation = SpeechSynthesisCancellationDetails.FromResult(result);

                var detail = string.IsNullOrWhiteSpace(cancellation.ErrorDetails)
                    ? "Speech synthesis failed."
                    : cancellation.ErrorDetails;

                return Results.Problem(detail, statusCode: 502);
            }

            if (result.AudioData is null || result.AudioData.Length == 0)
                return Results.Problem("Speech synthesis returned empty audio data.", statusCode: 502);

            // Prevent any caching (browser/CDN/proxies); ensure each request returns fresh audio
            httpContext.Response.Headers.CacheControl = "no-store";

            return Results.File(
                result.AudioData,
                "audio/mpeg"
            );
        });

        return app;
    }
}