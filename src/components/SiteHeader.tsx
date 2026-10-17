"use client";

import { useEffect, useRef, useState } from "react";
import { nav, person } from "@/content/profile";
import { SignalMark } from "./SignalMark";
import { CvLink } from "./CvLink";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav item for the section currently in view.
  useEffect(() => {
    const inNav = new Set(nav.map((item) => item.href));
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id], #contact"));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const href = `#${entry.target.id}`;
          setActive(inNav.has(href) ? href : null);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-paper transition-[border-color] duration-200 border-b ${
        scrolled || open ? "border-rule" : "border-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <div className="shell flex h-16 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3 font-medium tracking-[-0.01em]" onClick={() => setOpen(false)}>
          <SignalMark />
          <span>{person.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[0.95rem]">
            {nav.slice(0, -1).map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={active === item.href ? "true" : undefined}
                  className="relative py-2 text-ink-soft transition-colors hover:text-ink aria-[current]:text-ink"
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={`absolute inset-x-0 -bottom-0.5 h-px bg-cobalt transition-transform duration-300 origin-left ${
                      active === item.href ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <span className="mr-2 hidden text-[0.92rem] xl:inline">
            <CvLink variant="link" />
          </span>
          <a href="#contact" className="btn btn-secondary hidden !min-h-10 !px-4 text-[0.92rem] sm:inline-flex">
            Let’s connect
          </a>
          <button
            ref={menuButton}
            type="button"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-rule-strong px-4 text-[0.92rem] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden className="relative block h-2.5 w-4">
              <span
                className={`absolute left-0 h-px w-4 bg-ink transition-transform duration-200 ${open ? "top-1/2 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 h-px w-4 bg-ink transition-transform duration-200 ${open ? "top-1/2 -rotate-45" : "bottom-0"}`}
              />
            </span>
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-paper lg:hidden"
      >
        <nav aria-label="Mobile" className="shell flex min-h-full flex-col justify-between pb-10 pt-6">
          <ul>
            {nav.map((item) => (
              <li key={item.href} className="border-b border-rule">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active === item.href ? "true" : undefined}
                  className="block py-4 font-serif text-[2rem] leading-tight tracking-[-0.015em] aria-[current]:text-cobalt"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-10 space-y-2 text-ink-soft">
            <CvLink variant="link" />
            <a className="link block" href={`mailto:${person.email}`}>
              {person.email}
            </a>
            <a className="link block" href={person.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
