"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

type StatCounterProps = {
  /** Target number to count up to. Use 0 for non-numeric labels (e.g. "BS+AD"). */
  value: number;
  prefix?: string;
  suffix?: string;
  /** Static text shown instead of a counted number (e.g. "100%", "BS+AD"). */
  display?: string;
  label: string;
};

/**
 * Counts up to `value` once it scrolls into view. If `display` is provided it
 * is shown verbatim (for non-numeric stats) and no counting happens.
 */
export default function StatCounter({
  value,
  prefix = "",
  suffix = "",
  display,
  label,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(display ? 0 : 0);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || display) return;
      const reduce =
        document.documentElement.classList.contains("no-anim") ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        setCount(value);
        return;
      }

      gsap.registerPlugin(ScrollTrigger);
      const obj = { n: 0 };
      gsap.to(obj, {
        n: value,
        duration: 1.6,
        ease: "power2.out",
        onUpdate: () => setCount(Math.round(obj.n)),
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
      });
    },
    { scope: ref, dependencies: [value, display] }
  );

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl font-extrabold text-brand sm:text-5xl">
        {display ?? `${prefix}${count}${suffix}`}
      </div>
      <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-ink-mute sm:text-sm">
        {label}
      </div>
    </div>
  );
}
