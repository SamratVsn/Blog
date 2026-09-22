/** Blue tracked eyebrow label used across the design system. */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-display text-xs font-bold tracking-[0.3em] text-clinical-blue uppercase">
      {children}
    </p>
  );
}
