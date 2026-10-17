import { person } from "@/content/profile";
import { withBasePath } from "@/lib/paths";

/** Download link for the one-page CV, as a button or as an inline link. */
export function CvLink({
  variant = "button",
  tone = "paper",
  className = "",
}: {
  variant?: "button" | "link";
  tone?: "paper" | "night";
  className?: string;
}) {
  const icon = (
    <svg aria-hidden viewBox="0 0 16 16" className="size-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M8 2v8M4.5 6.5 8 10l3.5-3.5M3 13h10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  const styles =
    variant === "link"
      ? "link inline-flex items-center gap-1.5"
      : tone === "night"
        ? "btn border border-night-rule text-night-text hover:border-night-soft"
        : "btn btn-secondary";

  return (
    <a href={withBasePath(person.cv)} download="Navneet_Shende_CV.pdf" className={`${styles} ${className}`}>
      {icon}
      Download CV
      <span className="sr-only"> (PDF, one page)</span>
    </a>
  );
}
