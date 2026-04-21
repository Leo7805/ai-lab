var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

// Register services used to generate API metadata and Swagger UI.
builder.Services.AddEndpointsApiExplorer(); // Discovers Minimal API endpoints for OpenAPI.
builder.Services.AddSwaggerGen();           // Generates the Swagger JSON and Swagger UI. (Swashbuckle)

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.Run();