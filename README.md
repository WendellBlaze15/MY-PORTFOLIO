# Wendell Derama Ramos — Portfolio

Professional personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui, Lucide, and Motion.

## Stack

- Next.js 16 + Turbopack
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Motion
- Lucide React
- Vercel Analytics

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — development server (Turbopack)
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript check

## Content

Portfolio content lives in `src/data/`. Confirmed facts are shipped as-is. Unverified items are marked `[PLACEHOLDER]`.

To enable the resume download:

1. Add `public/resume/wendell-ramos-resume.pdf`
2. Set `resumeAvailable: true` in `src/data/site.ts`

## Environment

Copy `.env.example` to `.env.local` and set:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

## Deployment

Push to `main` on GitHub. Vercel deploys automatically when connected to the repository.
