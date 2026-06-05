type DecoProps = { className?: string };

/** Soft blurred brand-blue glow blob. Purely decorative. */
export function Glow({ className = "" }: DecoProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-[120px] ${className}`}
    />
  );
}

/** Faint brand-tinted dot grid, edge-faded. For light sections. */
export function DotGrid({ className = "" }: DecoProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 bg-dots mask-fade ${className}`}
    />
  );
}

/** Light dot grid for use on dark (deep-blue) sections. */
export function DotGridLight({ className = "" }: DecoProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 bg-dots-light mask-fade ${className}`}
    />
  );
}

/** Thin neutral line grid, edge-faded. */
export function LineGrid({ className = "" }: DecoProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 bg-grid mask-fade ${className}`}
    />
  );
}
