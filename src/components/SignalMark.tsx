/** A small trace glyph: baseline, one disturbance, back to baseline. */
export function SignalMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" width="28" height="28" aria-hidden className={className}>
      <rect width="28" height="28" rx="6" fill="var(--ink)" />
      <path
        d="M4 16.5h6l2-6 3.2 11 2.4-7.5 1.4 2.5H24"
        fill="none"
        stroke="var(--cobalt-on-night)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
