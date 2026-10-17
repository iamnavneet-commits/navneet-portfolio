import { caseStudies } from "@/content/profile";
import { CaseDiagram } from "./CaseDiagrams";
import { CaseTrace } from "./CaseTrace";
import { SectionHeading } from "./SectionHeading";

export function CaseStudies() {
  return (
    <section id="case-studies" aria-labelledby="cases-heading" className="border-t border-rule bg-paper py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          id="cases-heading"
          title="Selected technical case studies"
          intro="Four investigations, written the way I’d brief an engineering lead: what was happening, what the evidence showed, and what changed."
        >
          <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.85rem]">
            <div className="flex items-center gap-2">
              <dt className="flex items-center">
                <span aria-hidden className="size-3 rounded-full bg-cobalt" />
                <span className="sr-only">Filled marker</span>
              </dt>
              <dd className="text-ink">On record: documented in my CV</dd>
            </div>
            <div className="flex items-center gap-2">
              <dt className="flex items-center">
                <span aria-hidden className="size-3 rounded-full border-[1.5px] border-cobalt" />
                <span className="sr-only">Hollow marker</span>
              </dt>
              <dd className="text-ink">Explanation: method or context I’ve added</dd>
            </div>
          </dl>
        </SectionHeading>

        <nav aria-label="Case studies" className="mt-14">
          <ul className="grid gap-px overflow-hidden rounded-[3px] border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
            {caseStudies.map((c) => (
              <li key={c.id} className="bg-paper">
                <a
                  href={`#${c.id}`}
                  className="group flex h-full flex-col justify-between gap-6 p-5 transition-colors hover:bg-paper-deep/60"
                >
                  <span className="text-[0.98rem] leading-snug">{c.title}</span>
                  <span className="type-figure text-[1.9rem] text-cobalt">{c.metric.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-16 md:mt-20">
          {caseStudies.map((c) => (
            <article
              key={c.id}
              id={c.id}
              aria-labelledby={`${c.id}-title`}
              className="grid gap-10 border-t border-ink py-14 md:py-20 lg:grid-cols-12"
            >
              <header className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <p className="text-[0.88rem] text-ink-soft">{c.setting}</p>
                  <h3 id={`${c.id}-title`} className="type-title mt-3">
                    {c.title}
                  </h3>
                  <p className="mt-4 text-ink-soft">{c.summary}</p>
                  <div className="mt-8 border-t border-rule pt-5">
                    <p className="type-figure text-[3.1rem] text-cobalt">{c.metric.value}</p>
                    <p className="mt-2 text-[0.88rem] text-ink-soft">{c.metric.label}</p>
                  </div>
                  <ul aria-label="Tools and techniques" className="mt-6 flex flex-wrap gap-1.5">
                    {c.stack.map((s) => (
                      <li key={s} className="rounded-full border border-rule-strong px-2.5 py-1 font-mono text-[0.74rem] text-ink-soft">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </header>

              <div className="lg:col-span-7 lg:col-start-6">
                <CaseDiagram kind={c.diagram} />
                <CaseTrace steps={c.steps} caseId={c.id} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
