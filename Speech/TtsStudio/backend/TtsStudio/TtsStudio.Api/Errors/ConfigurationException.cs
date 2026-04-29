namespace TtsStudio.Api.Errors;

public sealed class ConfigurationException : AppException
{
    public ConfigurationException(string message)
        : base(message, StatusCodes.Status500InternalServerError)
    {
    }
}