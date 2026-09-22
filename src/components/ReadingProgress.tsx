"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = document.getElementById("article-body");
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const total = rect.height - window.innerHeight * 0.6;
        const read = Math.min(Math.max(-rect.top + window.innerHeight * 0.2, 0), Math.max(total, 1));
        setProgress(total <= 0 ? 1 : read / total);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-50 h-[3px] bg-transparent"
    >
      <div
        className="h-full bg-[#3b82f6] transition-[width] duration-100"
        style={{ width: `${Math.round(progress * 100)}%` }}
      />
    </div>
  );
}
