# 📘 MinimalSwagger
A clean .NET 10 Minimal API template with **Swashbuckle.AspNetCore** enabled for Swagger/OpenAPI documentation.

This module demonstrates how to add **industry‑standard Swagger UI** to a Minimal API project with minimal configuration.

---

## 🚀 Features

- Pure .NET 10 Minimal API
- Swagger/OpenAPI support via **Swashbuckle.AspNetCore**
- Auto‑generated `swagger.json`
- Interactive Swagger UI for testing endpoints
- Clean and production‑ready structure

---

## 📦 Installed NuGet Package

You only need **one** package:

```
Swashbuckle.AspNetCore
```

This meta‑package automatically includes:

- SwaggerGen
- Swagger
- SwaggerUI

No need to install sub‑packages manually.

---

## 🛠️ Program.cs (Minimal Setup)

```csharp
var builder = WebApplication.CreateBuilder(args);

// Register Swagger generator
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Enable Swagger JSON and UI only in development
if (app.Environment.IsDevelopment())
{ 
    app.UseSwagger();        // Generates and serves the OpenAPI (swagger.json) document
    app.UseSwaggerUI();      // Serves the interactive Swagger UI for API testing
}

app.MapGet("/", () => "Hello from MinimalSwagger");

app.Run();
```

---

## 📂 Project Structure

```
MinimalSwagger/
  MinimalSwagger.csproj
  Program.cs
  README.md
```

---

## 🔧 Modified Files

This project starts from a pure .NET 10 Minimal API and adds **Swashbuckle.AspNetCore** to enable Swagger/OpenAPI support.

### 🛠️ 1. Updated `.csproj`

Removed the default OpenAPI package:

<ItemGroup>
    <PackageReference Include="Microsoft.AspNetCore.OpenApi" Version="10.0.4" />
</ItemGroup>

Added the Swashbuckle.AspNetCore package:

```xml
<ItemGroup>
    <PackageReference Include="Swashbuckle.AspNetCore" Version="10.1.7" />
</ItemGroup>
```

---

### 🛠️ 2. Updated `Program.cs`

Enabled Swagger/OpenAPI support on top of the minimal API:

- Added `AddSwaggerGen()` to register the Swagger generator
- Added `UseSwagger()` to serve the OpenAPI (swagger.json) document
- Added `UseSwaggerUI()` to serve the interactive Swagger UI
- Wrapped Swagger middleware inside `IsDevelopment()` for safety

Final version:

```csharp
var builder = WebApplication.CreateBuilder(args);

// Register Swagger generator
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Enable Swagger JSON and UI only in development
if (app.Environment.IsDevelopment())
{ 
    app.UseSwagger();        // Generates and serves the OpenAPI (swagger.json) document
    app.UseSwaggerUI();      // Serves the interactive Swagger UI for API testing
}

app.MapGet("/", () => "Hello from MinimalSwagger");

app.Run();
```

---

## ▶️ Run the API

```
dotnet run
```

Then open:

- Swagger UI → http://localhost:5000/swagger
- OpenAPI JSON → http://localhost:5000/swagger/v1/swagger.json

(Port may vary depending on your environment.)

---

## 📝 Notes

- This module is intentionally minimal — only the essential Swagger setup is included.
