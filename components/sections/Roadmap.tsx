import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Container, SectionHeading } from "@/components/ui";
import { roadmap } from "@/lib/data";

export default function Roadmap() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What's Coming Next"
            title="A platform that keeps"
            highlight="getting better"
            intro="When you join, you're choosing a platform that keeps adding value at no extra effort on your part. Every new feature arrives as part of the platform you already use — no migrations, no disruption."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {roadmap.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 60}>
              <div className="h-full rounded-2xl border border-line bg-white p-5 shadow-card">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-ink">{r.title}</h3>
                  <ArrowUpRight size={16} className="shrink-0 text-ink-mute" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-mute">
                  {r.text}
                </p>
                <span
                  className={`mt-3 inline-block rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${
                    r.status === "Coming Soon"
                      ? "bg-accent/10 text-accent-dark"
                      : "bg-brand/10 text-brand"
                  }`}
                >
                  {r.status}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
