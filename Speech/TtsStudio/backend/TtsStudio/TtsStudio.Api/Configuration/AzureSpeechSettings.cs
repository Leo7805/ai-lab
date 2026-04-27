namespace TtsStudio.Api.Configuration;

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