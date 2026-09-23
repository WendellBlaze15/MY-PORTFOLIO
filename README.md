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

Portfolio content lives in `src/data/`. Only confirmed facts are listed; optional details are hidden until they are filled in:

- `email`, `location` in `src/data/site.ts` — shown in Contact/Footer when non-empty
- LinkedIn — add an entry to `socialLinks` in `src/data/site.ts`
- Project live URLs — add `links.live` in `src/data/projects.ts`
- Certifications — add entries in `src/data/certifications.ts` (section appears automatically)

The site supports light and dark themes (toggle in the header; defaults to the OS preference) over an animated sky background (`src/components/background/sky-background.tsx`) that respects `prefers-reduced-motion`.

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
