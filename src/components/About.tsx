import Image from "next/image";
import { about, person, roles } from "@/content/profile";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 md:py-32">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="order-last lg:order-none lg:col-span-5">
          <div className="lg:sticky lg:top-28">{person.aboutPhoto ? <AboutPhoto src={person.aboutPhoto} /> : <ProfileCard />}</div>
        </div>

        <div className="lg:col-span-7 lg:pl-10">
          <h2 id="about-heading" className="type-section max-w-[18ch]">
            Getting to the bottom of difficult problems is the part I enjoy.
          </h2>

          <div className="mt-10 max-w-[38rem] space-y-6 font-serif text-[1.2rem] leading-[1.7] [font-variation-settings:'opsz'_16] sm:text-[1.28rem]">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <p className="mt-10 max-w-[34rem] border-l-2 border-cobalt pl-4 text-ink-soft">{about.learning}</p>

          <dl className="mt-14 grid max-w-[40rem] gap-x-10 sm:grid-cols-2">
            {about.facts.map((fact) => (
              <div key={fact.term} className="border-t border-rule py-4">
                <dt className="text-[0.85rem] text-ink-muted">{fact.term}</dt>
                <dd className="mt-1 text-[0.98rem]">{fact.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function AboutPhoto({ src }: { src: string }) {
  return (
    <div className="relative aspect-[4/5] w-full max-w-[28rem] overflow-hidden rounded-[3px] bg-paper-deep">
      <Image
        src={src}
        alt="Navneet Shende"
        fill
        sizes="(min-width: 1024px) 34vw, 90vw"
        className="object-cover"
      />
    </div>
  );
}

/**
 * Shown until a second photograph is added (see README). Designed to stand
 * on its own rather than read as an empty slot.
 */
function ProfileCard() {
  const [current, ...previous] = roles;
  return (
    <div className="on-night relative flex aspect-[5/4] w-full max-w-[28rem] flex-col justify-between overflow-hidden rounded-[3px] bg-night p-7 text-night-text sm:p-9 lg:aspect-[4/5]">
      <svg aria-hidden viewBox="0 0 400 120" className="absolute inset-x-0 top-[38%] w-full opacity-60" preserveAspectRatio="none">
        <path
          d="M0 70 H180 l8 -22 l10 46 l9 -36 l8 18 l7 -8 l6 2 H400"
          fill="none"
          stroke="var(--night-rule)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <p
        aria-hidden
        className="relative font-serif text-[5.5rem] leading-none tracking-[-0.04em] [font-variation-settings:'opsz'_72] sm:text-[9rem]"
      >
        NS
      </p>

      <div className="relative space-y-4 text-[0.95rem]">
        <p className="font-medium text-night-text">{person.name}</p>
        <div className="space-y-1 text-night-soft">
          <p>
            {current.title}, {current.employer}
          </p>
          <p>Previously {previous.map((r) => r.employer).join(" and ")}</p>
          <p>{person.location}</p>
        </div>
      </div>
    </div>
  );
}
