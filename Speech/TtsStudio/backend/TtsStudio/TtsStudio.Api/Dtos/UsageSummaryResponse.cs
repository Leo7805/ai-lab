namespace TtsStudio.Api.Dtos;

public sealed record UsageSummaryResponse(
    string Provider,
    string Month,
    int RequestCount,
    int CharCount,
    int QuotaCharLimit,
    int RemainingCharCount
);