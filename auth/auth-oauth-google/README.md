# auth-oauth-google

A Google OAuth authentication example for learning third-party login flow.

This module focuses on Google sign-in and OAuth session handling.

---

## Purpose

- Learn Google OAuth login flow
- Understand third-party authentication
- Practise OAuth callback handling
- Extend the basic auth system with external identity providers

---

## Tech Stack

- Next.js
- React + TypeScript
- Tailwind CSS
- shadcn/ui
- Auth.js / NextAuth
- Google OAuth

---

## Features

- Sign in with Google
- OAuth redirect flow
- Callback handling
- User session display
- Protected dashboard page

---

## OAuth Flow

```text
User clicks "Sign in with Google"
→ Redirect to Google login
→ Google redirects back to app callback URL
→ App creates session
→ User enters dashboard
```

---

## Environment Variables

```env
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret
```

---

## Project Structure

```text
src/
├── app/
│   ├── api/auth/
│   ├── login/
│   ├── dashboard/
│   └── layout.tsx
├── components/
└── lib/
    └── auth.ts
```

---

## Run

```bash
npm install
npm run dev
```

---

## Notes

- This module focuses on Google OAuth only
- It does not replace the JWT backend module
- Later, OAuth users can be linked with an internal user database
- Google login is more accurate than saying Gmail login
