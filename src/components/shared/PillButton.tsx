import Link from "next/link";
import type { ReactNode } from "react";

type PillButtonProps = {
  children: ReactNode;
  href: string;
  ariaLabel?: string;
  variant?: "primary" | "secondary";
};

export function PillButton({
  children,
  href,
  ariaLabel,
  variant = "primary",
}: PillButtonProps) {
  const isExternal =
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");
  const className = `pill-button pill-button--${variant}`;

  if (isExternal) {
    return (
      <a
        className={className}
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
