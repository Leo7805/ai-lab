# 00-HelloMinimalApi

A clean, zero-dependency **.NET 10 Minimal API** template.  
This project demonstrates the smallest possible ASP.NET Core API using the Minimal API programming model — no controllers, no Swagger/OpenAPI, and no additional NuGet packages.

This template is designed as the foundation for lightweight backend services.

---

## ✨ Features

- **Pure Minimal API** — no MVC, no controllers.
- **Zero external dependencies** — no Swagger/OpenAPI packages.
- **Single-file backend** (`Program.cs`).
- **Fast startup** and minimal memory footprint.
- **Ideal as a base template** for small services or micro-modules.

---

## 🔧 Modified Files

A minimal cleanup was applied to convert the default Web API template into a **pure .NET 10 Minimal API**.


### 1. 🗑️ Deleted

```
Controllers/
WeatherForecast.cs
```

---

### 2. 🛠️ Updated `.csproj`

Removed the default OpenAPI package:

```xml
<ItemGroup>
    <PackageReference Include="Microsoft.AspNetCore.OpenApi" Version="10.0.4" />
</ItemGroup>
```


### 3. 🛠️ Updated `Program.cs`

Removed template boilerplate:

- AddEndpointsApiExplorer()
- AddSwaggerGen() / AddOpenApi()
- UseSwagger() / UseSwaggerUI()
- MapControllers()
- `/weatherforecast` endpoint

Final version:

```cs
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello from .NET 10 Minimal API");

app.Run();
```

### 4. 🛠️Updated `HelloMinimalApi.http`

Final version:

```http request
@HelloMinimalApi_HostAddress = http://localhost:5126

GET {{HelloMinimalApi_HostAddress}}/
Accept: application/json

###
```