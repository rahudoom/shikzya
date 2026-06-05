import Reveal from "@/components/Reveal";
import { Container, SectionHeading, FeatureCard } from "@/components/ui";
import { benefits } from "@/lib/data";

export default function Benefits() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Key Benefits"
            title="What your institution"
            highlight="gains from day one"
            intro="ShikZya is not about adding more software to your day. It is about reclaiming time, removing mistakes, and bringing families closer to their children's education."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 80}>
              <FeatureCard icon={b.icon} title={b.title} text={b.text} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
