export function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`border px-4 py-2 font-mono text-[11px] tracking-[0.14em] uppercase transition-all ${
        active
          ? "border-ink bg-ink font-bold text-white"
          : "border-zinc-300 bg-white text-zinc-500 hover:border-ink hover:bg-ink hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}
