import { roles } from "@/content/profile";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="border-t border-rule py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          id="experience-heading"
          title="Experience"
          intro="Five-plus years across software engineering, enterprise support and technical account management, always close to production."
        >
          <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.85rem]">
            <div className="flex items-center gap-2">
              <dt>
                <span className="rounded-full bg-ink px-2.5 py-0.5 text-[0.76rem] text-paper">Employer</span>
              </dt>
              <dd className="text-ink">The company I worked for</dd>
            </div>
            <div className="flex items-center gap-2">
              <dt>
                <span className="rounded-full border border-ink px-2.5 py-0.5 text-[0.76rem]">Client account</span>
              </dt>
              <dd className="text-ink">A customer I supported there</dd>
            </div>
          </dl>
        </SectionHeading>

        <ol className="mt-16 md:mt-20">
          {roles.map((role, i) => (
            <li key={role.employer} className="grid gap-6 border-t border-ink py-12 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-3">
                <p className="text-[0.98rem] tabular-nums">
                  <time dateTime={role.dateTime[0]}>{role.start}</time>
                  <span aria-hidden> – </span>
                  <span className="sr-only"> to </span>
                  {role.dateTime[1] ? <time dateTime={role.dateTime[1]}>{role.end}</time> : <span>{role.end}</span>}
                </p>
                <p className="mt-1 text-[0.9rem] text-ink-soft">{role.location}</p>
                {i === 0 && (
                  <p className="mt-4 inline-flex items-center gap-2 text-[0.82rem] text-cobalt">
                    <span aria-hidden className="size-1.5 rounded-full bg-cobalt" />
                    Current role
                  </p>
                )}
              </div>

              <div className="md:col-span-9">
                <h3 className="type-title">{role.title}</h3>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-[0.82rem]">
                  <span className="rounded-full bg-ink px-3 py-1 text-paper">
                    <span className="sr-only">Employer: </span>
                    {role.employer}
                  </span>
                  {role.clients?.map((client) => (
                    <span key={client} className="rounded-full border border-ink px-3 py-1">
                      <span className="sr-only">Client account: </span>
                      {client}
                    </span>
                  ))}
                </div>
                <ul className="mt-7 max-w-[46rem] space-y-3">
                  {role.points.map((point) => (
                    <li key={point} className="relative pl-5 text-[1rem] leading-[1.6]">
                      <span aria-hidden className="absolute left-0 top-[0.7em] h-px w-2.5 bg-ink-muted" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
