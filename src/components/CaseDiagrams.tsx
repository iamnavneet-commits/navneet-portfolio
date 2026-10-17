import type { ReactNode } from "react";
import type { CaseStudy } from "@/content/profile";

/**
 * Small explanatory diagrams for each case study. Built in HTML rather than
 * SVG text so they reflow on narrow screens. Each one says whether it is a
 * schematic of the technique or the documented sequence of events.
 */
export function CaseDiagram({ kind }: { kind: CaseStudy["diagram"] }) {
  switch (kind) {
    case "log-correlation":
      return <LogCorrelation />;
    case "duplicate-rows":
      return <DuplicateRows />;
    case "disclosure":
      return <Disclosure />;
    case "triage":
      return <Triage />;
  }
}

function Frame({
  status,
  caption,
  children,
}: {
  status: "Schematic" | "As documented";
  caption: string;
  children: ReactNode;
}) {
  return (
    <figure className="rounded-[3px] border border-rule bg-paper-deep/45 p-5 sm:p-7">
      <p className="mb-6 inline-flex items-center gap-2 text-[0.76rem] text-ink-soft">
        <span
          aria-hidden
          className={`size-1.5 rounded-full ${status === "Schematic" ? "border border-ink-soft" : "bg-ink-soft"}`}
        />
        {status}
      </p>
      {children}
      <figcaption className="mt-6 border-t border-rule pt-4 text-[0.8rem] leading-relaxed text-ink-muted">
        {caption}
      </figcaption>
    </figure>
  );
}

/* Three log sources lined up on one clock. Tick positions are fixed, not data. */
const lanes = [
  { name: "CDN", ticks: [6, 14, 23, 31, 44, 61, 69, 78, 90], hit: 51 },
  { name: "Nginx", ticks: [9, 17, 27, 36, 47, 58, 66, 74, 86, 95], hit: 52.5 },
  { name: "SigNoz", ticks: [4, 12, 20, 33, 40, 63, 71, 82, 93], hit: 54 },
];

function LogCorrelation() {
  return (
    <Frame
      status="Schematic"
      caption="How timestamp correlation works: the same request, seen by three systems, aligned on one clock. Drawn to explain the technique; it isn't real log data or a picture of the actual fault."
    >
      <div className="relative">
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-[4.25rem] right-0">
          <div className="absolute inset-y-[-0.75rem] left-[49%] w-[7%] rounded-[2px] bg-cobalt-wash" />
        </div>
        {lanes.map((lane) => (
          <div key={lane.name} className="relative grid h-12 grid-cols-[4.25rem_1fr] items-center">
            <span className="type-annotation text-ink-soft">{lane.name}</span>
            <div className="relative h-full border-b border-rule-strong">
              {lane.ticks.map((t) => (
                <span key={t} aria-hidden className="absolute bottom-0 h-3 w-px bg-ink-muted" style={{ left: `${t}%` }} />
              ))}
              <span
                aria-hidden
                className="absolute bottom-[-4px] size-2 -translate-x-1/2 rounded-full bg-cobalt"
                style={{ left: `${lane.hit}%` }}
              />
            </div>
          </div>
        ))}
        <div className="relative mt-5 grid grid-cols-[4.25rem_1fr] text-[0.76rem] text-ink-muted">
          <span />
          <div className="relative flex justify-between">
            <span>time</span>
            <span className="absolute left-[52.5%] -translate-x-1/2 whitespace-nowrap rounded-full bg-paper px-2 text-cobalt">
              one request, three views
            </span>
          </div>
        </div>
      </div>
    </Frame>
  );
}

function Box({ children, tone = "plain" }: { children: ReactNode; tone?: "plain" | "accent" }) {
  return (
    <div
      className={`rounded-[3px] border px-3.5 py-3 text-[0.86rem] leading-snug ${
        tone === "accent" ? "border-cobalt bg-paper text-ink" : "border-rule-strong bg-paper"
      }`}
    >
      {children}
    </div>
  );
}

function Arrow({ label }: { label?: string }) {
  return (
    <div aria-hidden className="flex items-center justify-center py-1 md:px-1 md:py-0">
      <svg viewBox="0 0 24 24" className="size-5 rotate-90 text-ink-muted md:rotate-0">
        <path d="M2 12h18M15 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
      {label && <span className="sr-only">{label}</span>}
    </div>
  );
}

function DuplicateRows() {
  return (
    <Frame
      status="Schematic"
      caption="The failure class, simplified: two workers record the same piece of work, so every total built on the table is inflated. Not the platform’s actual schema or code."
    >
      <div className="grid items-center md:grid-cols-[1fr_auto_1.1fr_auto_1.3fr]">
        <Box>One unit of work</Box>
        <Arrow />
        <div className="space-y-2">
          <Box>Worker A processes it</Box>
          <p className="text-center text-[0.74rem] text-ink-muted">at the same time as</p>
          <Box>Worker B processes it</Box>
        </div>
        <Arrow />
        <div className="rounded-[3px] border border-rule-strong bg-paper text-[0.8rem]">
          <p className="border-b border-rule px-3.5 py-2 text-ink-muted">Distributed PostgreSQL</p>
          <p className="border-b border-rule px-3.5 py-2 font-mono">result row</p>
          <p className="px-3.5 py-2 font-mono text-cobalt">result row (duplicate)</p>
        </div>
      </div>
      <p className="mt-5 text-[0.86rem]">
        Counted twice. At scale, that added up to a ~5% overstatement in reported results.
      </p>
    </Frame>
  );
}

const disclosure = [
  { step: "Found", note: "During API and SDK testing" },
  { step: "Reported", note: "Raised as a vulnerability" },
  { step: "Tracked", note: "Remediation followed through" },
  { step: "Released", note: "Fix shipped in a release" },
];

function Disclosure() {
  return (
    <Frame
      status="As documented"
      caption="The disclosure path as it happened. Endpoints, payloads, request flows and evidence are deliberately left out. No exploitation is claimed."
    >
      <ol className="grid gap-5 sm:grid-cols-4 sm:gap-3">
        {disclosure.map((d, i) => (
          <li key={d.step} className="relative flex gap-3 sm:block">
            <div className="flex items-center sm:mb-3">
              <span
                aria-hidden
                className={`size-3 shrink-0 rounded-full ${i === disclosure.length - 1 ? "bg-cobalt" : "bg-ink"}`}
              />
              <span aria-hidden className="ml-2 hidden h-px flex-1 bg-rule-strong sm:block" />
            </div>
            <div>
              <p className="text-[0.95rem] font-medium leading-tight">{d.step}</p>
              <p className="mt-1 text-[0.82rem] leading-snug text-ink-soft">{d.note}</p>
            </div>
          </li>
        ))}
      </ol>
    </Frame>
  );
}

function Triage() {
  return (
    <Frame
      status="As documented"
      caption="The sequence I follow on a P1/P2, as described in my CV: reproduce, trace, separate user error from system defects, and escalate real defects with evidence."
    >
      <div className="grid items-center md:grid-cols-[1fr_auto_1fr_auto_1.25fr]">
        <Box>P1/P2 reported</Box>
        <Arrow />
        <Box>Reproduce the issue</Box>
        <Arrow />
        <Box>
          Trace it through logs, network traffic and database queries
        </Box>
      </div>
      <div className="mt-4 rounded-[3px] border border-dashed border-ink-muted px-4 py-3 text-center text-[0.88rem]">
        Is it user error or configuration, or a system defect?
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div>
          <p className="mb-2 text-[0.76rem] text-ink-muted">User error or configuration</p>
          <Box>Resolve with the customer and record the fix in a runbook</Box>
        </div>
        <div>
          <p className="mb-2 text-[0.76rem] text-ink-muted">System defect</p>
          <Box tone="accent">Escalate to engineering with the evidence attached</Box>
        </div>
      </div>
    </Frame>
  );
}
