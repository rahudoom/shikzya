import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Container, SectionHeading } from "@/components/ui";
import { roles, portals } from "@/lib/data";

export default function Roles() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="For Whom"
            title="A perfect fit for"
            highlight="every role"
            intro="Each person logs in and sees a portal designed just for them — focused, uncluttered and immediately familiar."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 80}>
              <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-card">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <r.icon size={20} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-ink">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-mute">
                  {r.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* 11 portals strip */}
        <Reveal delay={120}>
          <div className="mt-8 rounded-2xl border border-line bg-surface p-6">
            <p className="text-sm font-bold text-ink">
              11 dedicated portals — one for every role
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {portals.map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-ink-soft"
                >
                  <CheckCircle2 size={12} className="text-brand" /> {p}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
