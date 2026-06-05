import { PlayCircle } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Container, SectionHeading } from "@/components/ui";
import { learnHub } from "@/lib/data";

export default function LearnHubSection() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="LearnHub"
            title="Awareness-building"
            highlight="video learning for every student"
            intro="LearnHub gives students below Class 12 a growing library of short, age-appropriate videos and quizzes — organised by topic. Quality content is provided and curated centrally, so your staff never have to create it from scratch."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {learnHub.map((c, i) => (
            <Reveal key={c.title} delay={(i % 5) * 60}>
              <div className="group h-full rounded-2xl border border-line bg-white p-5 text-center transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-card">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <c.icon size={22} />
                </div>
                <h3 className="mt-3 text-sm font-bold text-ink">{c.title}</h3>
                <p className="text-xs text-ink-mute">{c.np}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-brand">
                  <PlayCircle size={12} /> Videos & quizzes
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
