# Navneet Shende — portfolio

Personal site for Navneet Shende, Technical Account Manager and Customer Success Engineer (Dubai, UAE).
A single static page built with Next.js 16 (App Router), TypeScript and Tailwind CSS v4. No backend, no
tracking, no secrets.

**Live site:** https://iamnavneet-commits.github.io/navneet-portfolio/ (GitHub Pages, deployed automatically
from `main`).

## Run it

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

| Command                 | What it does                                                            |
| ----------------------- | ----------------------------------------------------------------------- |
| `npm run build`         | Static export into `out/`                                               |
| `npm run preview`       | Serve `out/` at http://localhost:3100                                   |
| `npm run preview:pages` | Build with the GitHub Pages sub-path and serve it at `/navneet-portfolio/` |
| `npm run typecheck`     | `next typegen` then `tsc --noEmit`                                      |
| `npm run lint`          | ESLint (Next.js core-web-vitals + TypeScript)                           |
| `npm run check`         | Typecheck, lint and build in one go                                     |

> Dev note: in this setup, edits to `src/app/globals.css` were not always hot-reloaded by `next dev`.
> If a CSS change doesn't show up, restart the dev server. Component and content edits reload normally.

## Where things live

```
src/content/profile.ts     All copy, facts, metrics, case studies, principles. Edit words here.
src/components/            One component per section (Hero, LogoMarquee, About, Impact, CaseStudies, …)
src/app/layout.tsx         Fonts, metadata, Open Graph defaults
src/app/page.tsx           Section order and JSON-LD (Person)
src/app/globals.css        Design tokens ("Signal & Trust"), type scale, marquee and trace styles
src/app/opengraph-image.jpg  1200×630 social-share card (static file, see below)
src/app/icon.svg           Favicon
public/images/             Photographs
public/Navneet_Shende_CV.pdf  The CV behind every "Download CV" button. Replace it to update.
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

Because the site is a static export, images are served as-is (no on-the-fly resizing), so keep photos
reasonably sized: about 1200–1600px on the long edge, under ~300 KB.

**Social-share card:** `src/app/opengraph-image.jpg` is a static image showing the headline and hero photo.
If you change either, replace this file with a new 1200×630 image.

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

## Deploy

### GitHub Pages (current)

Every push to `main` runs `.github/workflows/deploy-pages.yml`, which lints, builds the static export and
publishes it to https://iamnavneet-commits.github.io/navneet-portfolio/. Progress shows under the
repository's **Actions** tab. You can also run it by hand there with **Run workflow**.

The site is served under the `/navneet-portfolio` sub-path. The workflow passes it in as `PAGES_BASE_PATH`,
along with `NEXT_PUBLIC_SITE_URL` for share links. Any image that points into `/public` must go through
`withBasePath()` from `src/lib/paths.ts`, because `next/image` doesn't add the sub-path on its own.

One-time setup (already done): **Settings → Pages → Source: GitHub Actions**. On a free GitHub plan,
Pages requires the repository to be public.

### Other static hosts (Vercel, Netlify, Cloudflare Pages)

Use `npm run build` as the build command and `out` as the output directory. Set
`NEXT_PUBLIC_SITE_URL=https://your-domain.com` so share links and the canonical URL use your domain.

## Content rules

The site is written for Technical Account Manager, Solutions Engineer, Customer Success Manager and Customer
Success Engineer roles (listed in `targetRoles` in `profile.ts`). Results are framed by the skill they prove
(incident ownership, integration quality, data integrity, security, communication) rather than by the
product domain, so they read the same to any hiring team.

The content follows `Navneet_Shende_CSE.pdf`. Case-study steps are tagged in `profile.ts` as
`basis: "record"` (stated in the CV) or `basis: "method"` (explanation of approach or context), and the
page shows which is which. Keep that distinction if you add material.
