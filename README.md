# Navneet Shende — portfolio

Personal site for Navneet Shende, Technical Account Manager and Customer Success Engineer (Dubai, UAE).
A single static page built with Next.js 16 (App Router), TypeScript and Tailwind CSS v4. No backend, no
tracking, no secrets.

## Run it

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

| Command             | What it does                                     |
| ------------------- | ------------------------------------------------ |
| `npm run build`     | Production build (the page prerenders as static) |
| `npm run start`     | Serve the production build                       |
| `npm run typecheck` | `next typegen` then `tsc --noEmit`               |
| `npm run lint`      | ESLint (Next.js core-web-vitals + TypeScript)    |
| `npm run check`     | Typecheck, lint and build in one go              |

> Dev note: in this setup, edits to `src/app/globals.css` were not always hot-reloaded by `next dev`.
> If a CSS change doesn't show up, restart the dev server. Component and content edits reload normally.

## Where things live

```
src/content/profile.ts     All copy, facts, metrics, case studies, principles. Edit words here.
src/components/            One component per section (Hero, LogoMarquee, About, Impact, CaseStudies, …)
src/app/layout.tsx         Fonts, metadata, Open Graph defaults
src/app/page.tsx           Section order and JSON-LD (Person)
src/app/globals.css        Design tokens ("Signal & Trust"), type scale, marquee and trace styles
src/app/opengraph-image.tsx  Generates the 1200×630 social card from the hero photo
src/app/icon.svg           Favicon
public/images/             Photographs
public/logos/              Organization logos (local copies)
```

## Photographs

- **Hero:** `public/images/navneet-hero.jpg` (the supplied studio portrait, 1254×1254). Replace the file
  to change it; the crop is set with `object-[50%_28%]` in `src/components/Hero.tsx`.
- **About (optional second photo):** only one photograph was supplied, so the About section currently
  shows a designed profile card instead. To use a photo:
  1. Add `public/images/navneet-about.jpg` (portrait orientation, at least 900px wide, ideally a
     different shot from the hero).
  2. In `src/content/profile.ts`, set `aboutPhoto: "/images/navneet-about.jpg"`.

Next.js serves resized, modern-format versions automatically; you don't need to pre-optimize.

## Logos

All logos are stored locally and shown in monochrome, with original colours on hover.

| Organization | File | Source |
| --- | --- | --- |
| e& | `eand.svg` | Wikimedia Commons, `File:Eand_Logo_EN.svg` |
| Smiles | `smiles.svg` | smiles.ae (site header logo) |
| AppICE | `appice.png` | appice.ai (site header wordmark) |
| GIB | `gib.svg` | Wikipedia, `File:Gulf_International_Bank_Logo.svg` |
| NFL | `nfl.svg` | Wikipedia, `File:National_Football_League_logo.svg` |
| Acquia | `acquia.svg` | Wikimedia Commons, `File:Acquia_logo.svg` |
| Bayer | `bayer.svg` | Wikimedia Commons, `File:Logo_Bayer.svg` |
| Johnson & Johnson | `johnson-and-johnson.svg` | Wikimedia Commons, `File:JNJ_Logo_New.svg` (2023 wordmark) |
| Accenture | `accenture.svg` | Wikimedia Commons, `File:Accenture_logo.svg` |

These are trademarks of their owners. The site labels them as "employers, client accounts and enterprise
customers I've worked for or supported" and doesn't claim endorsement.

## Deploy (Vercel)

The site has not been deployed yet.

1. Put the project in a Git repository and push it to GitHub, GitLab or Bitbucket.
2. In Vercel, choose **Add New → Project**, import the repository and keep the detected Next.js settings.
3. Optional but recommended once you have a domain: add the environment variable
   `NEXT_PUBLIC_SITE_URL=https://your-domain.com`. This sets absolute Open Graph URLs and the canonical
   link. Without it, Vercel's production URL is used automatically.
4. Deploy.

Any host that runs `next build` / `next start` (Netlify, Render, a Node server) also works.

## Content rules

The content follows `Navneet_Shende_CSE.pdf`. Case-study steps are tagged in `profile.ts` as
`basis: "record"` (stated in the CV) or `basis: "method"` (explanation of approach or context), and the
page shows which is which. Keep that distinction if you add material.
