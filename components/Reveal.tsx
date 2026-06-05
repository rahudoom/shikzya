"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

type RevealProps = {
  children: React.ReactNode;
  /** Delay in milliseconds before the element animates in. */
  delay?: number;
  /** Tag to render as the wrapper. Defaults to a div. */
  as?: "div" | "section" | "span" | "li" | "article";
  className?: string;
};

/**
 * Fades + slides its children up as they scroll into view, using GSAP +
 * ScrollTrigger. The `.reveal` class keeps the element hidden until GSAP runs;
 * under reduced motion the global `.no-anim` rule makes it visible immediately.
 */
export default function Reveal({
  children,
  delay = 0,
  as = "div",
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const reduce =
        document.documentElement.classList.contains("no-anim") ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        el.classList.add("is-in");
        return;
      }

      gsap.registerPlugin(ScrollTrigger);
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 22 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          delay: delay / 1000,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
          onComplete: () => el.classList.add("is-in"),
        }
      );
    },
    { scope: ref, dependencies: [delay] }
  );

  const Tag = as as React.ElementType;
  return (
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
