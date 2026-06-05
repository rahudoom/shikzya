import {
  CalendarCheck,
  Wallet,
  Star,
  Bell,
  TrendingUp,
  Sparkles,
} from "lucide-react";

/**
 * Abstract dashboard preview used in the hero. Purely decorative — replace with
 * a real product screenshot once available. Floats gently via `animate-float-y`.
 */
export default function HeroPanel() {
  return (
    <div className="relative animate-float-y">
      {/* Glow behind the card */}
      <div className="absolute -inset-6 rounded-[2rem] bg-white/10 blur-2xl" />

      <div className="relative rounded-2xl border border-white/20 bg-white p-5 shadow-2xl">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-line pb-4">
          <div>
            <div className="font-display text-sm font-extrabold text-ink">
              Principal Dashboard
            </div>
            <div className="text-[11px] text-ink-mute">
              आज · २०८३ जेठ २२ गते
            </div>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/10 text-brand">
            <Bell size={15} />
          </div>
        </div>

        {/* Stat tiles */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { icon: CalendarCheck, label: "Attendance", value: "94%", tint: "text-brand bg-brand/10" },
            { icon: Wallet, label: "Fees", value: "₹8.2L", tint: "text-emerald-600 bg-emerald-50" },
            { icon: Star, label: "Avg GPA", value: "3.6", tint: "text-accent bg-accent/10" },
          ].map((t) => (
            <div key={t.label} className="rounded-xl border border-line bg-surface p-3">
              <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${t.tint}`}>
                <t.icon size={14} />
              </div>
              <div className="mt-2 text-base font-extrabold text-ink">{t.value}</div>
              <div className="text-[10px] uppercase tracking-wide text-ink-mute">
                {t.label}
              </div>
            </div>
          ))}
        </div>

        {/* Chart-ish block */}
        <div className="mt-3 rounded-xl border border-line bg-surface p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-ink-soft">
              Fee Collection
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600">
              <TrendingUp size={12} /> +12%
            </span>
          </div>
          <div className="mt-3 flex items-end gap-1.5">
            {[40, 62, 48, 78, 56, 88, 70].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-brand/30 to-brand"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>
        </div>

        {/* AI assistant pill */}
        <div className="mt-3 flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-brand to-brand-light p-3 text-white">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/20">
            <Sparkles size={14} />
          </div>
          <span className="text-xs font-medium">
            “Draft a holiday notice for parents” — done in seconds.
          </span>
        </div>
      </div>
    </div>
  );
}
