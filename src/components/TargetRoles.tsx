import { targetRoles } from "@/content/profile";
import { CvLink } from "./CvLink";

/** Up-front answer to a recruiter's first question: which roles is this person for? */
export function TargetRoles() {
  return (
    <section id="roles" aria-labelledby="roles-heading" className="pb-16 pt-12 md:pb-20 md:pt-14">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 id="roles-heading" className="type-title">
              {targetRoles.heading}
            </h2>
            <p className="mt-2 max-w-[36rem] text-ink-soft">{targetRoles.intro}</p>
          </div>
          <CvLink />
        </div>

        <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {targetRoles.roles.map((role) => (
            <li key={role.title} className="border-t border-ink pt-5">
              <h3 className="font-serif text-[1.35rem] leading-tight tracking-[-0.01em] [font-variation-settings:'opsz'_36]">
                {role.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">{role.fit}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
