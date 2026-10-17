"use client";

import { useEffect, useRef } from "react";
import type { CaseStep } from "@/content/profile";

/**
 * The investigation trace. As the reader scrolls, each step is marked
 * "reached" and the rail above it turns cobalt. With JS off every step
 * renders in its reached state (see .js rules in globals.css).
 */
export function CaseTrace({ steps, caseId }: { steps: CaseStep[]; caseId: string }) {
  const list = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const items = Array.from(list.current?.querySelectorAll<HTMLLIElement>("li") ?? []);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const reached = entry.isIntersecting || entry.boundingClientRect.top < 0;
          (entry.target as HTMLElement).dataset.reached = String(reached);
        }
      },
      { rootMargin: "0px 0px -38% 0px" },
    );
    items.forEach((li) => observer.observe(li));
    return () => observer.disconnect();
  }, []);

  return (
    <ol ref={list} className="mt-12" aria-label="Investigation, step by step">
      {steps.map((step, i) => (
        <li key={`${caseId}-${i}`} className="trace-step relative pb-9 pl-10 last:pb-0">
          <span
            aria-hidden
            data-basis={step.basis}
            className={`trace-marker absolute left-0 top-[0.3rem] size-[15px] rounded-full border-[1.5px] border-cobalt ${
              step.basis === "record" ? "bg-cobalt" : "bg-paper"
            }`}
          />
          <div className="flex flex-wrap items-baseline gap-x-3">
            <h4 className="text-[1rem] font-medium">{step.stage}</h4>
            <span className="text-[0.76rem] text-ink-muted">
              {step.basis === "record" ? "On record" : "Explanation"}
            </span>
          </div>
          <p className="mt-1.5 max-w-[40rem] text-[1.02rem] leading-[1.65]">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
