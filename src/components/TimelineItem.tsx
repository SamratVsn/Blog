export function TimelineItem({
  label,
  title,
  text,
  active = false,
}: {
  label: string;
  title: string;
  text: string;
  active?: boolean;
}) {
  return (
    <li className="group relative border-l-2 border-zinc-200 pb-10 pl-8 transition-colors last:pb-0 hover:border-clinical-blue">
      <span
        aria-hidden="true"
        className={`absolute top-1 -left-[9px] h-4 w-4 transition-colors ${
          active ? "bg-clinical-blue" : "bg-zinc-300 group-hover:bg-clinical-blue"
        }`}
      />
      <p className="font-mono text-[11px] tracking-[0.18em] text-zinc-500 uppercase">{label}</p>
      <h3
        className={`mt-2 font-display text-2xl font-black tracking-tight ${
          active ? "text-clinical-blue" : "text-ink"
        }`}
      >
        {title}
      </h3>
      <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-zinc-500">{text}</p>
    </li>
  );
}
