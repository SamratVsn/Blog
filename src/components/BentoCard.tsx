import Link from "next/link";

/**
 * Generic brutalist card wrapper: hard 1px border, lifts with a hard offset
 * shadow on hover (ink on light cards, clinical-blue on dark cards).
 */
export function BentoCard({
  href,
  dark = false,
  className = "",
  children,
  label,
}: {
  href?: string;
  dark?: boolean;
  className?: string;
  children: React.ReactNode;
  label?: string;
}) {
  const cls = `brutal group block ${dark ? "brutal-dark bg-ink text-white" : ""} ${className}`;
  if (href) {
    return (
      <Link href={href} aria-label={label} className={cls}>
        {children}
      </Link>
    );
  }
  return <div className={cls}>{children}</div>;
}
