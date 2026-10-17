import { principles, principlesSource } from "@/content/profile";
import { SectionHeading } from "./SectionHeading";

/**
 * Compact grid: every principle name is visible at a glance, and each one
 * opens (native <details>, no JS needed) to show how I apply it.
 */
export function Principles() {
  const evidenced = principles.filter((p) => p.evidence).length;

  return (
    <section id="principles" aria-labelledby="principles-heading" className="border-t border-rule py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          id="principles-heading"
          title={
            <>
              Principles I bring to <span className="whitespace-nowrap">customer-facing</span> engineering
            </>
          }
        >
          <p>
            Amazon’s sixteen Leadership Principles, read through technical customer work. Open any of them to see
            how I apply it.
          </p>
          <p className="mt-4 text-[0.85rem] text-ink-muted">
            Used as a personal framework only. It doesn’t imply employment by, affiliation with or endorsement from
            Amazon.{" "}
            <a className="link" href={principlesSource} target="_blank" rel="noopener noreferrer">
              Read the official principles
            </a>
            .
          </p>
        </SectionHeading>

        <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-ink pt-5 text-[0.85rem] text-ink-soft">
          <span className="inline-flex items-center gap-2">
            <span aria-hidden className="size-2 rounded-full bg-cobalt" />
            Linked to work on this page ({evidenced})
          </span>
          <span className="inline-flex items-center gap-2">
            <span aria-hidden className="size-2 rounded-full border border-ink-muted" />A standard I work to (
            {principles.length - evidenced})
          </span>
        </div>

        <ul className="mt-4 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => (
            <li key={p.name} className="border-b border-rule">
              <details className="group py-4">
                <summary className="flex cursor-pointer list-none items-start gap-3 [&::-webkit-details-marker]:hidden">
                  <span
                    aria-hidden
                    className={`mt-[0.55rem] size-2 shrink-0 rounded-full ${p.evidence ? "bg-cobalt" : "border border-ink-muted"}`}
                  />
                  <span className="flex-1 font-serif text-[1.15rem] leading-snug tracking-[-0.005em] [font-variation-settings:'opsz'_24]">
                    {p.name}
                    <span className="sr-only">{p.evidence ? " (linked to work on this page)" : ""}</span>
                  </span>
                  <svg
                    aria-hidden
                    viewBox="0 0 12 12"
                    className="mt-2 size-3 shrink-0 text-ink-muted transition-transform group-open:rotate-45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  >
                    <path d="M6 1v10M1 6h10" />
                  </svg>
                </summary>
                <div className="pb-1 pl-5 pt-2.5">
                  <p className="text-[0.92rem] text-ink-soft">{p.reading}</p>
                  {p.evidence && (
                    <a className="link mt-2.5 inline-block text-[0.85rem]" href={p.evidence.href}>
                      <span className="sr-only">Evidence: </span>
                      {p.evidence.label}
                    </a>
                  )}
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
