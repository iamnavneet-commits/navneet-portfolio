import { About } from "@/components/About";
import { Building } from "@/components/Building";
import { CaseStudies } from "@/components/CaseStudies";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Impact } from "@/components/Impact";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Principles } from "@/components/Principles";
import { SiteHeader } from "@/components/SiteHeader";
import { Toolkit } from "@/components/Toolkit";
import { person } from "@/content/profile";

/** Only facts stated in the CV. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  jobTitle: person.role,
  email: `mailto:${person.email}`,
  sameAs: [person.linkedin],
  worksFor: { "@type": "Organization", name: "AppICE" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Middlesex University Dubai" },
    { "@type": "CollegeOrUniversity", name: "BMCC, Pune" },
  ],
  knowsAbout: [
    "Technical Account Management",
    "Customer Success Engineering",
    "Incident Management",
    "Root-Cause Analysis",
    "API Integrations",
    "Observability",
    "Application Security",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <SiteHeader />
      <main id="main">
        <Hero />
        <LogoMarquee />
        <About />
        <Impact />
        <CaseStudies />
        <Toolkit />
        <Experience />
        <Principles />
        <Building />
      </main>
      <Contact />
    </>
  );
}
