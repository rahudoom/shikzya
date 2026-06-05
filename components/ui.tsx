import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

/* ── Container ───────────────────────────────────────────────────────────── */

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-container px-5 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

/* ── Eyebrow + section heading ───────────────────────────────────────────── */

export function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand ${className}`}
    >
      <span className="h-px w-6 bg-brand" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  intro,
  center = false,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  intro?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      {eyebrow && (
        <Eyebrow className={`${center ? "justify-center" : ""}`}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className={`mt-4 text-3xl font-extrabold leading-tight sm:text-4xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
        {highlight && <span className="text-brand"> {highlight}</span>}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-white/70" : "text-ink-mute"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

/* ── Chip ────────────────────────────────────────────────────────────────── */

export function Chip({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${
        light
          ? "border-white/15 bg-white/10 text-white backdrop-blur-sm"
          : "border-line bg-white text-ink-soft"
      }`}
    >
      {children}
    </span>
  );
}

/* ── Buttons ─────────────────────────────────────────────────────────────── */

type BtnProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "white";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: BtnProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold transition-all";
  const styles: Record<string, string> = {
    primary:
      "bg-brand text-white shadow-soft hover:bg-brand-dark hover:shadow-glow",
    secondary:
      "border border-line bg-white text-ink hover:border-brand/40 hover:text-brand",
    ghost: "text-brand hover:text-brand-dark",
    white:
      "bg-white text-brand shadow-soft hover:bg-surface",
  };
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}

/* ── Feature card (icon + title + text) ──────────────────────────────────── */

export function FeatureCard({
  icon: Icon,
  title,
  text,
  accent = false,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
  accent?: boolean;
}) {
  return (
    <div className="group h-full rounded-2xl border border-line bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-soft">
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-xl ${
          accent
            ? "bg-accent/10 text-accent"
            : "bg-brand/10 text-brand"
        }`}
      >
        <Icon size={20} />
      </div>
      <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-mute">{text}</p>
    </div>
  );
}

/* ── Link with arrow ─────────────────────────────────────────────────────── */

export function ArrowLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 text-sm font-bold text-brand transition-colors hover:text-brand-dark"
    >
      {children}
      <ArrowRight
        size={16}
        className="transition-transform group-hover:translate-x-1"
      />
    </Link>
  );
}
