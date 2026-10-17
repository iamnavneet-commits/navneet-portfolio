"use client";

import { useEffect, useState } from "react";

function legacyCopy(text: string) {
  const previousFocus = document.activeElement as HTMLElement | null;
  const field = document.createElement("textarea");
  field.value = text;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.appendChild(field);
  field.select();
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch {
    ok = false;
  }
  field.remove();
  previousFocus?.focus();
  return ok;
}

export function CopyEmail({ email }: { email: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  useEffect(() => {
    if (state === "idle") return;
    const t = window.setTimeout(() => setState("idle"), 2400);
    return () => window.clearTimeout(t);
  }, [state]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      // Clipboard API unavailable or denied (embedded browsers, http): fall back to a selection copy.
      setState(legacyCopy(email) ? "copied" : "failed");
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex min-h-10 items-center gap-2 rounded-full border border-night-rule px-4 text-[0.88rem] text-night-text transition-colors hover:border-night-soft"
    >
      <svg aria-hidden viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.3">
        {state === "copied" ? (
          <path d="M3 8.5l3 3 7-7" />
        ) : (
          <>
            <rect x="5" y="5" width="8.5" height="8.5" rx="1.5" />
            <path d="M10.5 5V3.5A1.5 1.5 0 0 0 9 2H3.5A1.5 1.5 0 0 0 2 3.5V9a1.5 1.5 0 0 0 1.5 1.5H5" />
          </>
        )}
      </svg>
      <span aria-live="polite">
        {state === "copied" ? "Email copied" : state === "failed" ? "Copy failed. Select the address instead" : "Copy email"}
      </span>
    </button>
  );
}
