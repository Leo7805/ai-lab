var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

// builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
// builder.Services.AddOpenApi();

// Register Swagger services
builder.Services.AddEndpointsApiExplorer(); // Built-in API explorer
builder.Services.AddSwaggerGen();           // Swashbuckle generator

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    // app.MapOpenApi();
    app.UseSwagger();   // Generates and serves the OpenAPI document (swagger.json)
    app.UseSwaggerUI(); // Serves the interactive Swagger UI for API testing (webpage)
}

// app.UseHttpsRedirection();

// app.UseAuthorization();

// app.MapControllers();

// Minimal API endpoint
app.MapGet("/", () => "Hello from Minimal API with Swagger");

app.Run();