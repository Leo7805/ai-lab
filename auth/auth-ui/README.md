# auth-ui

Frontend-only authentication UI demo built with Next.js, Tailwind CSS, and shadcn/ui.

This module focuses on login/register UX and a mock auth navigation flow. It does not include backend authentication.

## Goals

- Build reusable auth UI pages
- Practice form validation and page flow
- Simulate login state and protected navigation
- Keep the code ready for future API integration

## Tech Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- shadcn/ui CLI (installed as devDependency)
- lucide-react (icons)

## Features

- Login page with:
  - custom email format validation
  - password show/hide toggle
  - Enter-to-submit form behavior
- Register page with:
  - name/email/password/confirm-password validation
  - password and confirm-password show/hide toggles
- Dashboard page protected by a mock auth check
- Mock auth state stored in `localStorage`

## Auth Flow (Mock)

```text
Login/Register submit
-> validate inputs on client
-> set localStorage key: isLoggedIn=true
-> redirect to /dashboard

Logout
-> remove localStorage key
-> redirect to /login
```

## Project Structure

```text
app/
├── dashboard/
│   └── page.tsx
├── login/
│   └── page.tsx
├── register/
│   └── page.tsx
├── globals.css
├── layout.tsx
└── page.tsx

components/
└── ui/
    ├── button.tsx
    ├── card.tsx
    ├── input.tsx
    └── label.tsx

hooks/
└── useAuth.ts

lib/
└── utils.ts
```

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` - start local dev server
- `npm run build` - create production build
- `npm run start` - run production server from built output
- `npm run lint` - run ESLint

## Pre-deploy Check (Recommended)

```bash
npm ci
npm run build
npm run start
```

This sequence closely matches CI/Vercel behavior and catches SSR/prerender issues early.

## Notes and Limits

- This is not real authentication.
- No backend/API, JWT, refresh token, or secure session handling.
- `localStorage` auth state is for demo only.
- Guard browser-only APIs (`localStorage`, `window`) for SSR safety.

## Adding shadcn Components

`shadcn` is kept in `devDependencies` as a CLI tool. Example:

```bash
npx shadcn@latest add button input card label
```
