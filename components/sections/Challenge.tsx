import Reveal from "@/components/Reveal";
import { Container, SectionHeading } from "@/components/ui";
import { challenges } from "@/lib/data";

export default function Challenge() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="The Challenge"
            title="Running an institution on paper costs you"
            highlight="time, accuracy and trust"
            intro="Most institutions still depend on dozens of registers, scattered spreadsheets and informal chat groups. Every hour spent on registers and receipts is an hour not spent teaching, planning and growing."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {challenges.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-card">
                <h3 className="text-lg font-bold text-ink">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-mute">
                  {c.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
