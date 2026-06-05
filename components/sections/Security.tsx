import { Lock } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Container, SectionHeading } from "@/components/ui";
import { security } from "@/lib/data";

export default function Security() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Trust & Security"
            title="Your institution's data,"
            highlight="safe and private"
            intro="Student records, family details, finances and results are sensitive. ShikZya is engineered to protect all of it, so you can adopt the platform with complete confidence."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {security.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 80}>
              <div className="flex h-full gap-4 rounded-2xl border border-line bg-white p-6 shadow-card">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <s.icon size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-mute">
                    {s.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-6 flex items-start gap-4 rounded-2xl border border-brand/20 bg-brand/[0.04] p-6">
            <Lock size={22} className="mt-0.5 shrink-0 text-brand" />
            <p className="text-sm leading-relaxed text-ink-soft">
              <span className="font-bold text-ink">
                Yours, and yours alone — no one else can see it.
              </span>{" "}
              Everything your institution stores in ShikZya stays completely
              private to you. Your data is never sold, never shared, and never
              visible to anyone outside your institution — not even the ShikZya
              team. It always remains fully under your control.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
