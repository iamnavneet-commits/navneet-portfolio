import { contact, person } from "@/content/profile";
import { CopyEmail } from "./CopyEmail";
import { CurrentYear } from "./CurrentYear";
import { SignalMark } from "./SignalMark";

export function Contact() {
  // Baked in at build time; CurrentYear swaps in the visitor's year after hydration.
  const year = new Date().getFullYear();

  return (
    <div className="on-night bg-night text-night-text">
      <section id="contact" aria-labelledby="contact-heading">
        <div className="shell py-24 md:py-36">
          <h2 id="contact-heading" className="type-display max-w-[17ch]">
            {contact.heading}
          </h2>
          <p className="mt-8 max-w-[34rem] text-[1.15rem] leading-relaxed text-night-soft">{contact.body}</p>

          <div className="mt-16 grid gap-12 border-t border-night-rule pt-10 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-7">
              <p className="text-[0.85rem] text-night-soft">Email</p>
              <a
                href={`mailto:${person.email}`}
                className="mt-2 block font-serif text-[clamp(1.35rem,0.85rem+2.5vw,3rem)] leading-tight tracking-[-0.015em] [overflow-wrap:anywhere] underline decoration-night-rule decoration-1 underline-offset-[0.18em] transition-colors hover:text-cobalt-on-night hover:decoration-cobalt-on-night"
              >
                {person.email}
              </a>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={`mailto:${person.email}`} className="btn bg-night-text text-night hover:bg-cobalt-on-night">
                  Send me an email
                </a>
                <CopyEmail email={person.email} />
              </div>
            </div>

            <dl className="space-y-7 lg:col-span-4 lg:col-start-9">
              <div>
                <dt className="text-[0.85rem] text-night-soft">LinkedIn</dt>
                <dd className="mt-1.5">
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-night-rule underline-offset-4 [overflow-wrap:anywhere] hover:text-cobalt-on-night hover:decoration-cobalt-on-night"
                  >
                    {person.linkedinLabel}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.85rem] text-night-soft">Location</dt>
                <dd className="mt-1.5">{person.locationShort}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <footer className="border-t border-night-rule">
        <div className="shell flex flex-col gap-5 py-9 text-[0.82rem] text-night-soft md:flex-row md:items-center md:justify-between">
          <p className="flex items-center gap-3">
            <SignalMark />
            <span>
              © <CurrentYear fallback={year} /> {person.name}
            </span>
          </p>
          <p className="max-w-[34rem]">
            Company names and logos belong to their owners and appear only to identify where I’ve worked or whom
            I’ve supported.
          </p>
          <a href="#top" className="underline decoration-night-rule underline-offset-4 hover:text-night-text">
            Back to top
          </a>
        </div>
      </footer>
    </div>
  );
}
