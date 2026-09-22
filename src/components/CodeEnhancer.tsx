"use client";

import { useEffect } from "react";

/** Adds copy-to-clipboard buttons to shiki code blocks rendered on the server. */
export function CodeEnhancer() {
  useEffect(() => {
    const figures = Array.from(
      document.querySelectorAll<HTMLElement>("[data-rehype-pretty-code-figure]")
    );
    const cleanups: Array<() => void> = [];

    for (const figure of figures) {
      const pre = figure.querySelector("pre");
      if (!pre || pre.querySelector(".copy-code-btn")) continue;

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "copy-code-btn";
      btn.textContent = "Copy";
      btn.setAttribute("aria-label", "Copy code to clipboard");

      const onClick = async () => {
        const code = pre.querySelector("code")?.innerText ?? "";
        try {
          await navigator.clipboard.writeText(code);
        } catch {
          const ta = document.createElement("textarea");
          ta.value = code;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          document.body.removeChild(ta);
        }
        btn.textContent = "Copied ✓";
        window.setTimeout(() => {
          btn.textContent = "Copy";
        }, 2000);
      };

      btn.addEventListener("click", onClick);
      pre.appendChild(btn);
      cleanups.push(() => btn.removeEventListener("click", onClick));
    }

    return () => {
      for (const fn of cleanups) fn();
    };
  }, []);

  return null;
}
