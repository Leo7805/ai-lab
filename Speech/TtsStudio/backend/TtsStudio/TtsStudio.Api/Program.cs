using Microsoft.CognitiveServices.Speech;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

// Add/register a CORS service
var allowedOrigins = builder.Configuration.GetSection("Cors:AllowedOrigins").Get<string[]>() ?? [];
builder.Services.AddCors(options =>
{
    options.AddPolicy("Frontend", policy =>
    {
        policy.WithOrigins(allowedOrigins) // limit the allowed source
            .AllowAnyHeader() // Allow all kinds of header
            .AllowAnyMethod(); // Allow all kinds of methods
    });
});

// Register services used to generate API metadata and Swagger UI.
builder.Services.AddEndpointsApiExplorer(); // Discovers Minimal API endpoints for OpenAPI.
builder.Services.AddSwaggerGen(); // Generates the Swagger JSON and Swagger UI. (Swashbuckle)

var app = builder.Build();

app.UseCors("Frontend"); // Start the CORS service: Frontend

// Configure the HTTP request pipeline.
// if (app.Environment.IsDevelopment())
// {
//     app.UseSwagger();
//     app.UseSwaggerUI();
// }
app.UseSwagger();
app.UseSwaggerUI();

app.MapGet("/", () => "TtsStudio is running!");

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
    {
        return Results.Problem("Speech synthesis returned empty audio data.", statusCode: 502);
    }

    // Prevent any caching (browser/CDN/proxies); ensure each request returns fresh audio
    httpContext.Response.Headers.CacheControl = "no-store";

    return Results.File(
        result.AudioData,
        "audio/mpeg"
    );
});

app.Run();

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

/// <summary>
///     Azure Speech configuration wrapper.
///     Values are loaded from IConfiguration (appsettings.json + user-secrets + env).
/// </summary>
public sealed record AzureSpeechSettings(
    string? Key,
    string? Region,
    string? VoiceName)
{
    public static AzureSpeechSettings FromConfiguration(IConfiguration config)
    {
        return new AzureSpeechSettings(
            config["AzureSpeech:Key"],
            config["AzureSpeech:Region"],
            config["AzureSpeech:VoiceName"] ?? "en-AU-NatashaNeural"
        );
    }

    public bool IsValid(out string error)
    {
        if (string.IsNullOrWhiteSpace(Key))
        {
            error = "Missing AzureSpeech: Key";
            return false;
        }

        if (string.IsNullOrWhiteSpace(Region))
        {
            error = "Missing AzureSpeech: Region";
            return false;
        }

        error = string.Empty;
        return true;
    }
}