import Image from "next/image";
import { hero, person } from "@/content/profile";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-name" className="relative">
      <div className="shell grid gap-x-12 pb-14 pt-8 sm:pt-12 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:pb-20 lg:pt-10">
        {/* Identity and headline */}
        <div className="enter lg:col-span-7 lg:row-start-1" style={{ "--d": "0ms" } as React.CSSProperties}>
          <h1 id="hero-name" className="flex flex-col gap-1">
            <span className="text-[0.95rem] font-medium uppercase tracking-[0.16em]">{person.name}</span>
            <span className="text-[1.05rem] text-ink-soft">
              {person.role}
              <span className="sr-only">. </span>
            </span>
          </h1>
          <p className="mt-1 text-[0.9rem] text-ink-muted">{person.specialties}</p>

          <p className="type-display mt-8 max-w-[16ch] sm:mt-10 lg:max-w-none short:mt-7 short:text-[clamp(2.5rem,1.2rem+3vw,3.9rem)]">{hero.headline}</p>
        </div>

        {/* Portrait */}
        <figure className="relative mt-12 lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:mt-2">
          <div className="relative ml-auto w-[88%] sm:w-[70%] lg:w-full">
            <CornerMarks />
            <div className="enter-photo relative aspect-[4/5] overflow-hidden rounded-[3px] bg-paper-deep">
              <Image
                src={person.heroPhoto}
                alt="Navneet Shende, portrait in a white shirt against a grey studio background"
                fill
                preload
                sizes="(min-width: 1024px) 36vw, (min-width: 640px) 62vw, 88vw"
                className="object-cover object-[50%_28%]"
              />
            </div>
          </div>
          <figcaption className="sr-only">Navneet Shende</figcaption>

          <MethodPanel />
        </figure>

        {/* Supporting copy and calls to action */}
        <div
          className="enter mt-10 lg:col-span-7 lg:row-start-2 lg:mt-9 short:mt-7"
          style={{ "--d": "180ms" } as React.CSSProperties}
        >
          <p className="max-w-[40rem] text-[1.12rem] leading-[1.65] sm:text-[1.2rem] short:text-[1.1rem]">{hero.lede}</p>
          <p className="mt-5 max-w-[34rem] border-l-2 border-cobalt pl-4 text-ink-soft short:mt-4">{hero.stance}</p>

          <div className="mt-8 flex flex-wrap gap-3 short:mt-6">
            <a href="#impact" className="btn btn-primary">
              Explore my work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let’s connect
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem]">
            <li>
              <a className="link" href={person.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a className="link" href={`mailto:${person.email}`}>
                {person.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <SignalLine />
    </section>
  );
}

function MethodPanel() {
  return (
    // Sits below the portrait in normal flow. On desktop it tucks up over the photo's
    // bottom edge only (the shirt), so it can never cover the face at any width.
    <div className="enter relative z-10 mt-6 border border-rule bg-paper p-5 sm:ml-auto sm:w-[70%] lg:-mt-10 lg:ml-[-2rem] lg:mr-auto lg:w-[88%] lg:max-w-[22rem] lg:shadow-[0_1px_0_var(--rule),0_18px_40px_-24px_rgba(16,27,46,0.35)]"
      style={{ "--d": "700ms" } as React.CSSProperties}
    >
      <p className="text-[0.85rem] font-medium">How I work an incident</p>
      <ol className="relative mt-4 space-y-3 before:absolute before:bottom-2 before:left-[4.5px] before:top-2 before:w-px before:bg-rule before:content-['']">
        {hero.method.map((step, i) => (
          <li key={step.label} className="method-step relative flex gap-3.5" style={{ "--i": i } as React.CSSProperties}>
            <span aria-hidden className="method-dot relative mt-[7px] size-2.5 shrink-0 rounded-full border" />
            <span>
              <span className="method-label block text-[0.92rem] font-medium leading-snug">{step.label}</span>
              <span className="block text-[0.8rem] leading-snug text-ink-soft">{step.detail}</span>
            </span>
          </li>
        ))}
      </ol>
      <p className="type-annotation mt-4 border-t border-rule pt-3 text-ink-soft">{hero.methodFootnote}</p>
    </div>
  );
}

/** Viewfinder-style registration marks around the portrait. */
function CornerMarks() {
  const mark = "absolute size-3 border-ink/40";
  return (
    <span aria-hidden className="pointer-events-none absolute -inset-3 hidden sm:block">
      <span className={`${mark} left-0 top-0 border-l border-t`} />
      <span className={`${mark} right-0 top-0 border-r border-t`} />
      <span className={`${mark} bottom-0 left-0 border-b border-l`} />
      <span className={`${mark} bottom-0 right-0 border-b border-r`} />
    </span>
  );
}

/** The site's signal motif: a baseline with one disturbance that settles. */
function SignalLine() {
  return (
    <div aria-hidden className="shell">
      <svg viewBox="0 0 1200 48" preserveAspectRatio="none" className="block h-12 w-full">
        <path
          className="signal-draw"
          style={{ "--len": 1300 } as React.CSSProperties}
          d="M0 30 H560 l10 -16 l12 30 l11 -24 l9 14 l8 -6 l7 2 H1200"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="1.25"
          vectorEffect="non-scaling-stroke"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
