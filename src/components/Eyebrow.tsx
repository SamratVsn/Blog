/** Portfolio signature: dot + rule + mono uppercase label. */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5">
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]/60" />
      <span aria-hidden="true" className="h-px w-8 bg-[#3b82f6]/25" />
      <span className="font-mono text-[11px] font-medium tracking-[0.14em] text-slate-500 uppercase">
        {children}
      </span>
    </div>
  );
}

/** The small radar-dot brand mark used across Samrat's sites. */
export function BrandDot({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`relative h-2 w-2 shrink-0 ${className}`}>
      <span className="absolute inset-0 rounded-full border border-[#3b82f6]/25" />
      <span className="absolute inset-[2px] rounded-full bg-[#3b82f6]" />
    </span>
  );
}
