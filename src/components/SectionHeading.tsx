import type { ReactNode } from "react";

/**
 * Shared section opening: heading on the left, a short framing paragraph
 * set against its baseline on the right.
 */
export function SectionHeading({
  id,
  title,
  intro,
  children,
  tone = "paper",
}: {
  id: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  tone?: "paper" | "night";
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
      <h2 id={id} className="type-section max-w-[20ch] lg:col-span-7">
        {title}
      </h2>
      {(intro || children) && (
        <div className={`max-w-[32rem] lg:col-span-5 ${tone === "night" ? "text-night-soft" : "text-ink-soft"}`}>
          {intro && <p>{intro}</p>}
          {children}
        </div>
      )}
    </div>
  );
}
