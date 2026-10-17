"use client";

import Image from "next/image";
import { useState } from "react";
import { logos } from "@/content/profile";
import { withBasePath } from "@/lib/paths";

/**
 * Four identical sets in one track, animated by -50%. Two sets are always
 * wider than the viewport, so the loop never shows a gap or a jump.
 * Only the first set is exposed to assistive technology.
 */
const COPIES = 4;

export function LogoMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <section aria-labelledby="environments-heading" className="border-b border-rule pt-10 md:pt-14">
      <div className="shell grid gap-5 md:grid-cols-12 md:items-end md:gap-10">
        <h2 id="environments-heading" className="type-title max-w-[22ch] md:col-span-7">
          Enterprise environments. Real production problems. Measurable outcomes.
        </h2>
        <div className="flex items-end justify-between gap-6 md:col-span-5">
          <p className="max-w-[28rem] text-[0.9rem] leading-relaxed text-ink-soft">
            Employers, client accounts and enterprise customers I’ve worked for or supported. Logos are their
            owners’ trademarks and don’t imply endorsement.
          </p>
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-pressed={paused}
            className="hidden shrink-0 items-center gap-2 rounded-full border border-rule-strong px-3.5 py-1.5 text-[0.82rem] text-ink-soft transition-colors hover:border-ink hover:text-ink motion-safe:inline-flex"
          >
            <span aria-hidden className="flex h-2.5 w-2.5 items-center justify-center">
              {paused ? (
                <svg viewBox="0 0 10 10" className="size-2.5 fill-current">
                  <path d="M1 0.5 9 5 1 9.5z" />
                </svg>
              ) : (
                <svg viewBox="0 0 10 10" className="size-2.5 fill-current">
                  <rect x="1" y="0.5" width="3" height="9" />
                  <rect x="6" y="0.5" width="3" height="9" />
                </svg>
              )}
            </span>
            {paused ? "Play logos" : "Pause logos"}
          </button>
        </div>
      </div>

      <div className="marquee mt-8 overflow-hidden pb-10 md:mt-10 md:pb-14" data-paused={paused}>
        <div className="marquee-track" style={{ "--marquee-duration": "64s" } as React.CSSProperties}>
          {Array.from({ length: COPIES }, (_, copy) => (
            <ul
              key={copy}
              className={`flex shrink-0 ${copy > 0 ? "marquee-copy" : ""}`}
              aria-label={copy === 0 ? "Organizations" : undefined}
              aria-hidden={copy > 0 ? true : undefined}
            >
              {logos.map((logo) => (
                <li key={logo.name} className="marquee-item flex h-16 shrink-0 items-center px-8 md:px-12">
                  <Image
                    src={withBasePath(logo.src)}
                    alt={copy === 0 ? logo.name : ""}
                    width={Math.round(logo.height * logo.ratio)}
                    height={logo.height}
                    className="marquee-logo block w-auto"
                    style={{ height: logo.height }}
                    loading="lazy"
                    draggable={false}
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
