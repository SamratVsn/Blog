/** Blue tracked section kicker used across the reference design. */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] font-bold tracking-[0.28em] text-[#1e90ff] uppercase">
      {children}
    </p>
  );
}
