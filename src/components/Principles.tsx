"use client";

import { useState } from "react";
import { principles, principlesSource } from "@/content/profile";
import { SectionHeading } from "./SectionHeading";

type Filter = "all" | "evidenced";

export function Principles() {
  const [filter, setFilter] = useState<Filter>("all");
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
            Amazon’s sixteen Leadership Principles are a useful lens on technical customer work. These are my own
            readings of them. Where the work on this page backs one up, I’ve linked it; the rest are standards I
            hold myself to.
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

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-ink pt-6">
          <div role="group" aria-label="Filter principles" className="inline-flex rounded-full border border-rule-strong p-1">
            {(
              [
                ["all", `All ${principles.length}`],
                ["evidenced", `Linked to work here (${evidenced})`],
              ] as const
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                aria-pressed={filter === value}
                onClick={() => setFilter(value)}
                className={`rounded-full px-4 py-1.5 text-[0.88rem] transition-colors ${
                  filter === value ? "bg-ink text-paper" : "text-ink-soft hover:text-ink"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <p className="text-[0.85rem] text-ink-muted" aria-live="polite">
            Showing {filter === "all" ? principles.length : evidenced} of {principles.length}
          </p>
        </div>

        <ol className="mt-2 grid gap-x-14 md:grid-cols-2">
          {principles.map((p) => {
            const hidden = filter === "evidenced" && !p.evidence;
            return (
              <li key={p.name} hidden={hidden} className="border-b border-rule py-7">
                <h3 className="font-serif text-[1.45rem] leading-tight tracking-[-0.01em] [font-variation-settings:'opsz'_36]">
                  {p.name}
                </h3>
                <p className="mt-2.5 max-w-[34rem] text-[0.98rem] text-ink-soft">{p.reading}</p>
                <p className="mt-3 text-[0.85rem]">
                  {p.evidence ? (
                    <a className="link inline-flex items-center gap-2" href={p.evidence.href}>
                      <span aria-hidden className="size-1.5 rounded-full bg-cobalt" />
                      <span>
                        <span className="sr-only">Evidence: </span>
                        {p.evidence.label}
                      </span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-ink-muted">
                      <span aria-hidden className="size-1.5 rounded-full border border-ink-muted" />
                      A standard I work to
                    </span>
                  )}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
