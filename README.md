# ShikZya — Product Website

Official marketing website for **ShikZya**, a cloud-based Education Management System for Nepali schools and colleges, by [Rahu Doom Pvt. Ltd.](https://rahudoom.com)

## Tech stack

- **Next.js 14** (App Router) · **TypeScript** · **Tailwind CSS 3**
- **GSAP** + **ScrollTrigger** + **Lenis** — smooth scroll & scroll-reveal animation (gated behind `prefers-reduced-motion`)
- **lucide-react** icons
- **Resend** — demo-request email delivery

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in RESEND_API_KEY
npm run dev                  # http://localhost:3000
```

## Routes

| Route       | Purpose                                            |
| ----------- | -------------------------------------------------- |
| `/`         | Landing page (hero → challenge → solution → features → why → AI → LearnHub → roles → plans → security → roadmap → CTA → about) |
| `/features` | Full 80+ module listing, why, AI, LearnHub, roles  |
| `/pricing`  | Four plan tiers + introductory-offer banner        |
| `/demo`     | Demo-request form + WhatsApp/phone quick contact   |

## Content

All copy and structured data live in [`lib/data.ts`](lib/data.ts) — modules, benefits,
differentiators, AI features, LearnHub categories, roles, plans, roadmap, security,
steps, and the `site` / `contact` / `company` constants. Edit content there.

## Before launch — required assets & values

These are placeholders that must be supplied by the client:

1. **Logo** — drop a transparent ShikZya logo at `public/` and switch
   [`components/Logo.tsx`](components/Logo.tsx) from the text wordmark to a `next/image`.
2. **Contact numbers** — set the real `phone` and `whatsapp` values in
   [`lib/data.ts`](lib/data.ts) (`contact` block). `whatsapp` is digits-only for `wa.me`.
3. **OG image** — add `public/og-image.png` (1200×630) for social sharing.
4. **Domain** — `site.url` is set to `https://shikzya.com`; update if different.
5. **Resend** — set `RESEND_API_KEY` (and optionally `RESEND_TO`, `RESEND_FROM`) in the
   deploy environment. The demo form emails `connect@shikzya.com` by default.

## Environment variables

See [`.env.example`](.env.example).

## Deploy

Vercel-ready. Set the environment variables above in the project settings.
