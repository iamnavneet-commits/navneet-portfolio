import { impact } from "@/content/profile";
import { SectionHeading } from "./SectionHeading";

/**
 * Capabilities first, product domain second: each row names a skill any
 * customer-facing technical team screens for, then the documented proof.
 */
export function Impact() {
  return (
    <section id="impact" aria-labelledby="impact-heading" className="border-t border-rule py-24 md:py-32">
      <div className="shell">
        <SectionHeading id="impact-heading" title={impact.heading} intro={impact.intro} />

        <ul className="mt-16 border-t border-ink md:mt-20">
          {impact.capabilities.map((c) => {
            const isNumber = /\d/.test(c.value);
            return (
              <li key={c.name} className="grid gap-x-10 gap-y-3 border-b border-rule py-9 lg:grid-cols-12 lg:py-10">
                <h3 className="type-title lg:col-span-3">{c.name}</h3>

                <div className="lg:col-span-3">
                  <p
                    className={`type-figure text-cobalt ${
                      isNumber
                        ? "text-[clamp(2.6rem,2rem+2vw,3.6rem)]"
                        : "text-[clamp(2rem,1.6rem+1.4vw,2.7rem)]"
                    }`}
                  >
                    {c.value}
                  </p>
                  <p className="mt-2 max-w-[18rem] text-[0.9rem] leading-snug text-ink-soft">{c.label}</p>
                </div>

                <div className="lg:col-span-6">
                  <p className="max-w-[38rem] text-[1rem] leading-[1.65]">{c.body}</p>
                  {c.note && <p className="mt-3 max-w-[38rem] text-[0.85rem] text-ink-muted">{c.note}</p>}
                  {c.caseId && (
                    <a className="link mt-4 inline-block text-[0.95rem]" href={`#${c.caseId}`}>
                      {c.caseLabel}
                    </a>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
