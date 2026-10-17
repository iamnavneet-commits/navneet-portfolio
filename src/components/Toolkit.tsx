"use client";

import { useState } from "react";
import { toolGroups, workflow, type WorkflowStage } from "@/content/profile";
import { SectionHeading } from "./SectionHeading";

export function Toolkit() {
  const [focus, setFocus] = useState<number | null>(null);
  const lit = new Set<WorkflowStage>(focus === null ? [] : toolGroups[focus].stages);

  return (
    <section id="toolkit" aria-labelledby="toolkit-heading" className="border-t border-rule py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          id="toolkit-heading"
          title="The toolkit, arranged by the problems it solves"
          intro="A tool only helps if you know which question it answers. This is where each part of my toolkit fits in the life of an incident, from first report to making sure it doesn’t come back."
        />

        {/* The incident workflow these tools serve */}
        <div className="mt-16 md:mt-20">
          <p className="text-[0.88rem] text-ink-soft" id="workflow-label">
            The incident workflow
          </p>
          {/* Rails: vertical on phones (::before), horizontal on wide screens (::after) */}
          <ol
            aria-labelledby="workflow-label"
            className="relative mt-5 grid gap-y-3.5 before:absolute before:bottom-2 before:left-[5px] before:top-2 before:w-px before:bg-rule-strong before:content-[''] after:absolute after:left-0 after:right-0 after:top-[5px] after:hidden after:h-px after:bg-rule-strong after:content-[''] sm:grid-cols-4 sm:gap-x-3 sm:gap-y-6 sm:before:hidden lg:grid-cols-7 lg:after:block"
          >
            {workflow.map((stage, i) => {
              const on = lit.has(stage);
              return (
                <li key={stage} className="relative flex items-baseline gap-3 sm:block">
                  <span
                    aria-hidden
                    className={`relative block size-[11px] shrink-0 translate-y-[1px] rounded-full border-[1.5px] transition-colors duration-200 sm:translate-y-0 ${
                      on ? "border-cobalt bg-cobalt" : "border-ink bg-paper"
                    }`}
                  />
                  <span className="type-annotation block text-ink-muted sm:mt-3">{String(i + 1).padStart(2, "0")}</span>
                  <span
                    className={`block text-[0.95rem] leading-snug transition-colors duration-200 sm:mt-0.5 ${
                      on ? "text-cobalt" : focus === null ? "text-ink" : "text-ink-muted"
                    }`}
                  >
                    {stage}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Tool groups. Hovering a group lights up where it fits above; the same
            information is written out in "Used in", so nothing depends on hover. */}
        <ul
          className="mt-12 grid gap-x-8 border-t border-ink md:grid-cols-2 lg:grid-cols-3"
          onMouseLeave={() => setFocus(null)}
        >
          {toolGroups.map((group, i) => (
            <li
              key={group.name}
              onMouseEnter={() => setFocus(i)}
              className={`border-b border-rule py-6 transition-colors ${focus === i ? "bg-paper-deep/50" : ""}`}
            >
              <h3 className="font-serif text-[1.25rem] leading-snug tracking-[-0.005em] [font-variation-settings:'opsz'_24]">
                {group.name}
              </h3>
              <p className="mt-1.5 text-[0.92rem] text-ink-soft">{group.solves}</p>
              <ul className="mt-3 font-mono text-[0.78rem] leading-relaxed">
                {group.tools.map((tool, t) => (
                  <li key={tool} className="inline">
                    {tool}
                    {t < group.tools.length - 1 && <span className="text-ink-muted">, </span>}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[0.8rem] text-ink-muted">Used in: {group.stages.join(", ")}</p>
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-[40rem] text-[0.85rem] text-ink-muted">
          Everything listed comes from the roles and study described on this page. My depth varies by tool, and the
          case studies above show where each one did real work.
        </p>
      </div>
    </section>
  );
}
