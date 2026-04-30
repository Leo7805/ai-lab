using Microsoft.Data.Sqlite;

namespace TtsStudio.Api.Data;

public static class UsageDb
{
    public static async Task InitializeAsync()
    {
        var dbPath = "Data/usage.db";

        // Ensure the directory exists
        Directory.CreateDirectory("Data");

        await using var connection = new SqliteConnection($"Data Source={dbPath}");
        await connection.OpenAsync();

        var command = connection.CreateCommand();
        command.CommandText = """
                              CREATE TABLE IF NOT EXISTS usage_monthly (
                                  provider TEXT NOT NULL,
                                  month TEXT NOT_NULL,
                                  request_count INTEGER NOT NULL DEFAULT 0,
                                  char_count INTEGER NOT NULL DEFAULT 0,
                                  updated_at TEXT NOT NULL,
                                  PRIMARY KEY (provider, month)
                                  );
                              """;
        await command.ExecuteNonQueryAsync();
    }
}