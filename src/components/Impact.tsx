import { impact } from "@/content/profile";
import { DeliveryWaffle } from "./DeliveryWaffle";
import { SectionHeading } from "./SectionHeading";

export function Impact() {
  const { delivery, incidents, analytics, security, reporting } = impact;

  return (
    <section id="impact" aria-labelledby="impact-heading" className="border-t border-rule py-24 md:py-32">
      <div className="shell">
        <SectionHeading id="impact-heading" title={impact.heading} intro={impact.intro} />

        {/* Feature: delivery recovery */}
        <article className="mt-16 grid gap-12 border-t border-ink pt-10 md:mt-20 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <p className="type-figure flex flex-wrap items-baseline gap-x-4 text-[clamp(4rem,3rem+6vw,8.5rem)]">
              <span className="text-ink-muted">{delivery.before}%</span>
              <svg aria-hidden viewBox="0 0 60 20" className="h-[0.28em] w-[0.8em] self-center">
                <path d="M0 10h56M48 3l8 7-8 7" fill="none" stroke="var(--cobalt)" strokeWidth="1.6" />
              </svg>
              <span className="text-cobalt">{delivery.after}%</span>
              <span className="sr-only"> push-notification delivery, {delivery.scope}</span>
            </p>
            <h3 className="type-title mt-8">{delivery.title}</h3>
            <p className="mt-1 text-ink-soft">{delivery.scope}</p>
            <p className="mt-5 max-w-[34rem]">{delivery.body}</p>
            <a className="link mt-6 inline-block" href={`#${delivery.caseId}`}>
              Read the push delivery case study
            </a>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <DeliveryWaffle before={delivery.before} after={delivery.after} />
            <p className="mt-5 max-w-[24rem] text-[0.82rem] leading-relaxed text-ink-muted">
              Each square is one percentage point of the delivery rate across the ~30 campaigns investigated. The
              rates are the documented figures; the grid is a visual aid, not message-level data.
            </p>
          </div>
        </article>

        {/* Three supporting results, each with its own form of evidence */}
        <div className="mt-20 grid border-t border-ink md:mt-24 lg:grid-cols-3">
          <article className="border-b border-rule py-10 lg:border-b-0 lg:border-r lg:pr-10">
            <Figure value={incidents.value} />
            <h3 className="mt-4 text-[1.05rem] font-medium">{incidents.unit}</h3>
            <p className="text-cobalt">{incidents.average}</p>
            <p className="mt-5 text-[0.98rem] text-ink-soft">{incidents.body}</p>
            <ol aria-label="Incident workflow" className="mt-7 flex flex-wrap items-center gap-y-2 text-[0.78rem]">
              {incidents.steps.map((s, i) => (
                <li key={s} className="flex items-center">
                  <span className="rounded-full border border-rule-strong px-2.5 py-1 font-mono">{s}</span>
                  {i < incidents.steps.length - 1 && <span aria-hidden className="h-px w-3 bg-rule-strong" />}
                </li>
              ))}
            </ol>
            <a className="link mt-7 inline-block text-[0.95rem]" href={`#${incidents.caseId}`}>
              How I work a P1/P2
            </a>
          </article>

          <article className="border-b border-rule py-10 lg:border-b-0 lg:border-r lg:px-10">
            <Figure value={analytics.value} />
            <h3 className="mt-4 text-[1.05rem] font-medium">{analytics.unit}</h3>
            <p className="text-cobalt">{analytics.scope}</p>
            <p className="mt-5 text-[0.98rem] text-ink-soft">{analytics.body}</p>
            <OverstatementBars />
            <a className="link mt-7 inline-block text-[0.95rem]" href={`#${analytics.caseId}`}>
              Trace the duplicate-row defect
            </a>
          </article>

          <article className="py-10 lg:pl-10">
            <Figure value={security.value} />
            <h3 className="mt-4 text-[1.05rem] font-medium">{security.unit}</h3>
            <p className="text-cobalt">{security.scope}</p>
            <p className="mt-5 text-[0.98rem] text-ink-soft">{security.body}</p>
            <ol aria-label="Disclosure path" className="mt-7 grid grid-cols-4 gap-1.5">
              {security.track.map((s) => (
                <li key={s} className="border-t-2 border-ink pt-2 text-[0.74rem] leading-tight text-ink-soft">
                  {s}
                </li>
              ))}
            </ol>
            <a className="link mt-7 inline-block text-[0.95rem]" href={`#${security.caseId}`}>
              Read the disclosure case study
            </a>
          </article>
        </div>

        {/* Reporting: a sentence, not a stat tile */}
        <div className="mt-6 grid gap-6 border-t border-rule pt-10 lg:grid-cols-12">
          <p className="type-title lg:col-span-8">
            Every month, <span className="text-cobalt">{reporting.value}</span> campaigns reported on to e& and Smiles
            stakeholders.
          </p>
          <p className="max-w-[28rem] text-[0.98rem] text-ink-soft lg:col-span-4">{reporting.body}</p>
        </div>
      </div>
    </section>
  );
}

function Figure({ value }: { value: string }) {
  return <p className="type-figure text-[clamp(3.5rem,2.8rem+2.6vw,5rem)]">{value}</p>;
}

/** Reported vs actual, drawn to the documented ~5% ratio. */
function OverstatementBars() {
  return (
    <figure className="mt-7">
      <div className="space-y-2.5 text-[0.78rem]">
        <div>
          <div className="flex justify-between text-ink-soft">
            <span>Reported, before the fix</span>
            <span className="font-mono">105</span>
          </div>
          <div className="mt-1 flex h-2.5">
            <span className="h-full bg-ink" style={{ width: `${(100 / 105) * 100}%` }} />
            <span
              className="h-full bg-cobalt"
              style={{ width: `${(5 / 105) * 100}%` }}
              title="Duplicate rows"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-ink-soft">
            <span>Actual</span>
            <span className="font-mono">100</span>
          </div>
          <div className="mt-1 h-2.5 bg-ink" style={{ width: `${(100 / 105) * 100}%` }} />
        </div>
      </div>
      <figcaption className="mt-3 text-[0.78rem] text-ink-muted">
        Indexed to 100 to show the ratio. Cobalt marks the share added by duplicate rows.
      </figcaption>
    </figure>
  );
}
