"use client";

import { useEffect, useRef, useState } from "react";

type View = "before" | "after";

/**
 * 10×10 grid, one square per percentage point of delivery rate.
 * Fills column by column from the bottom left so the recovered share
 * reads as one contiguous block.
 */
export function DeliveryWaffle({ before, after }: { before: number; after: number }) {
  // Server render shows the complete picture (before + recovered share).
  const [view, setView] = useState<View>("after");
  const ref = useRef<HTMLDivElement>(null);
  const played = useRef(false);

  // The first time the grid scrolls into view, replay the change once.
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer: number | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || played.current) return;
        played.current = true;
        setView("before");
        timer = window.setTimeout(() => setView("after"), 1100);
        observer.disconnect();
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  const value = view === "before" ? before : after;

  const cells = Array.from({ length: 100 }, (_, i) => {
    const col = i % 10;
    const row = Math.floor(i / 10);
    const n = col * 10 + (9 - row); // column-major from bottom left
    return { n, on: n < value, gain: n >= before && n < after };
  });

  return (
    <div ref={ref}>
      <div role="group" aria-label="Compare delivery rate" className="inline-flex rounded-full border border-rule-strong p-1">
        {(["before", "after"] as const).map((v) => (
          <button
            key={v}
            type="button"
            aria-pressed={view === v}
            onClick={() => {
              played.current = true;
              setView(v);
            }}
            className={`rounded-full px-4 py-1.5 text-[0.88rem] transition-colors ${
              view === v ? "bg-ink text-paper" : "text-ink-soft hover:text-ink"
            }`}
          >
            {v === "before" ? `Before: ${before}%` : `After: ${after}%`}
          </button>
        ))}
      </div>

      <div className="mt-6 flex items-end gap-6">
        <div
          aria-hidden
          className="grid aspect-square w-full max-w-[19rem] grid-cols-10 gap-[3px] sm:max-w-[21rem]"
        >
          {cells.map((c, i) => (
            <span
              key={i}
              className="waffle-cell aspect-square rounded-[1.5px]"
              data-on={c.on}
              data-gain={view === "after" && c.gain}
              style={{ "--n": c.n } as React.CSSProperties}
            />
          ))}
        </div>
        <p className="type-figure pb-1 text-[3.25rem] tabular-nums sm:text-[4rem]" aria-hidden>
          {value}
          <span className="text-[0.5em]">%</span>
        </p>
      </div>

      <p className="sr-only" aria-live="polite">
        {view === "before"
          ? `Before: ${before} of every 100 notifications delivered.`
          : `After: ${after} of every 100 notifications delivered, ${after - before} more than before.`}
      </p>

      <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.85rem] text-ink-soft">
        <li className="flex items-center gap-2">
          <span aria-hidden className="size-3 rounded-[1.5px] bg-ink" />
          Delivered before the fix
        </li>
        <li className="flex items-center gap-2">
          <span aria-hidden className="size-3 rounded-[1.5px] bg-cobalt" />
          Recovered after the fix
        </li>
        <li className="flex items-center gap-2">
          <span aria-hidden className="size-3 rounded-[1.5px] bg-paper-deep ring-1 ring-inset ring-rule" />
          Not delivered
        </li>
      </ul>
    </div>
  );
}
