import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import { person } from "@/content/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

/**
 * The public URL of the site, including any sub-path (on GitHub Pages:
 * https://iamnavneet-commits.github.io/navneet-portfolio). The deploy
 * workflow sets NEXT_PUBLIC_SITE_URL; locally it falls back to localhost.
 */
const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

// Next.js adds basePath to file-based metadata images itself, so the base is the origin only.
const metadataBase = new URL(new URL(siteUrl).origin);
const pageUrl = `${siteUrl}/`;

const title = `${person.name}, Technical Account Manager and Customer Success Engineer`;
const description =
  "Technical Account Manager in Dubai. Production troubleshooting, root-cause analysis, API and SDK integrations, and incident ownership for enterprise customers.";

export const metadata: Metadata = {
  metadataBase,
  title,
  description,
  applicationName: person.name,
  authors: [{ name: person.name, url: person.linkedin }],
  keywords: [
    "Technical Account Management",
    "Customer Success Engineering",
    "Enterprise Technical Support",
    "API Integrations",
    "Incident Management",
    "Root-Cause Analysis",
    "Production Troubleshooting",
    "Observability",
    "Application Security",
    "Dubai",
  ],
  openGraph: {
    type: "profile",
    title,
    description,
    siteName: person.name,
    url: pageUrl,
    locale: "en_US",
    firstName: "Navneet",
    lastName: "Shende",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  ...(process.env.NEXT_PUBLIC_SITE_URL ? { alternates: { canonical: pageUrl } } : {}),
};

export const viewport: Viewport = {
  themeColor: "#f5f4f0",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Enables JS-only enhancements (scroll trace, filters) without hiding content when JS is off. */}
        <script dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add('js')` }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
