using TtsStudio.Api.Configuration;
using TtsStudio.Api.Data;
using TtsStudio.Api.Endpoints;
using TtsStudio.Api.Extensions;
using TtsStudio.Api.Services;

var builder = WebApplication.CreateBuilder(args);

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

// Register configuration
builder.Services.Configure<TtsSettings>(builder.Configuration.GetSection("Tts"));
builder.Services.Configure<AzureSpeechSettings>(builder.Configuration.GetSection("AzureSpeech"));

// Register tts
builder.Services.AddScoped<TtsService>();

var app = builder.Build();

// Create DB
await UsageDb.InitializeAsync();

app.UseCors("Frontend"); // Start the CORS service: Frontend

// Add Swagger UI
app.UseSwagger();
app.UseSwaggerUI();

app.UseGlobalExceptionHandler();

app.MapGet("/", () => Results.Ok(new { message = "TtsStudio is running!" }));

app.MapTtsEndpoints();

app.MapUsageEndpoints();

app.Run();