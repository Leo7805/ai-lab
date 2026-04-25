# auth-jwt

A full-stack authentication example using Next.js frontend and .NET backend with JWT.

This module demonstrates real authentication flow with protected API access.

---

## Purpose

- Build a reusable JWT authentication template
- Connect Next.js frontend with .NET API
- Understand login, token handling, and protected endpoints
- Prepare a foundation for future product projects

---

## Tech Stack

Frontend:

- Next.js
- React + TypeScript
- Tailwind CSS
- shadcn/ui

Backend:

- .NET Minimal API
- JWT authentication
- PostgreSQL or SQLite

---

## Features

- Register
- Login
- Logout
- JWT access token
- Protected dashboard
- Protected API endpoint
- `/me` current user endpoint
- Basic User/Admin role model

---

## Auth Flow

```text
User logs in
→ .NET API validates credentials
→ API returns JWT access token
→ Frontend sends token with protected requests
→ Backend validates token
→ Protected data is returned
```

---

## API Endpoints

```text
POST /auth/register
POST /auth/login
POST /auth/logout
GET  /auth/me
GET  /admin/users
```

---

## Project Structure

```text
frontend/
├── src/
│   ├── app/
│   ├── components/
│   └── lib/

backend/
├── Program.cs
├── Models/
├── Services/
└── Data/
```

---

## Run

Frontend:

```bash
cd frontend
npm install
npm run dev
```

Backend:

```bash
cd backend
dotnet run
```

---

## Notes

- This module includes real backend authentication
- It is for learning and reusable reference
- Security details should be reviewed before production use
- Refresh tokens and HttpOnly cookies can be added later
