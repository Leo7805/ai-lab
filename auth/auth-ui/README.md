# auth-ui

A frontend-only authentication UI demo built with Next.js, Tailwind CSS, and shadcn/ui.

This module focuses on login/register pages and basic navigation flow. It does not include real backend authentication.

---

## Purpose

- Build a reusable authentication UI template
- Practise login/register page structure
- Demonstrate a simple mock auth flow
- Prepare for future backend integration

---

## Tech Stack

- Next.js
- React + TypeScript
- Tailwind CSS
- shadcn/ui
  - component library: Radis
  - preset: Nova
  - npx shadcn@latest add button input card label
- lucide-react

---

## Features

- Login page
- Register page
- Dashboard page
- Mock login state
- Basic redirect flow

---

## Auth Flow

```text
User enters email/password
→ Frontend stores mock login state
→ User is redirected to dashboard
```

---

## Project Structure

```text
src/
├── app/
│   ├── login/
│   ├── register/
│   ├── dashboard/
│   └── layout.tsx
├── components/
├── lib/
│   └── auth.ts
└── styles/
```

---

## Run

```bash
npm install
npm run dev
```

---

## Notes

- This is not real authentication
- No backend API is used
- No JWT or session validation is included
- This module is mainly for UI and flow practice
