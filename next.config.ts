import type { NextConfig } from "next";

/**
 * The site is a fully static export (`out/`), so it can be hosted on GitHub
 * Pages or any static host. On GitHub Pages it lives under
 * /navneet-portfolio, which the deploy workflow passes in as PAGES_BASE_PATH.
 * Locally and on root-domain hosts the base path is empty.
 */
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  // Static hosts can't run the image optimizer; photos and logos are pre-sized.
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // cacheComponents / partialPrefetching are partial-prerendering features and
  // can't be combined with output: "export". A one-page static site doesn't need them.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
