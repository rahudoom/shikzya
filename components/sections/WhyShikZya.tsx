import Reveal from "@/components/Reveal";
import { Container, SectionHeading, ArrowLink } from "@/components/ui";
import { differentiators } from "@/lib/data";

export default function WhyShikZya({
  teaser = false,
  showHeading = true,
}: {
  teaser?: boolean;
  showHeading?: boolean;
}) {
  const items = teaser ? differentiators.slice(0, 4) : differentiators;

  return (
    <section id="why" className="scroll-mt-20 bg-white py-20 lg:py-28">
      <Container>
        {showHeading && (
          <Reveal>
            <SectionHeading
              eyebrow="Why ShikZya"
              title="What makes us"
              highlight="genuinely different"
              intro="These are not small extras. They are the capabilities that set ShikZya apart from every generic school software in the market."
            />
          </Reveal>
        )}

        <div
          className={`${showHeading ? "mt-12" : ""} grid gap-5 md:grid-cols-2`}
        >
          {items.map((d, i) => (
            <Reveal key={d.title} delay={(i % 2) * 80}>
              <div className="group flex h-full gap-5 rounded-2xl border border-line bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-soft">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <d.icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-mute">
                    {d.text}
                  </p>
                  <span className="mt-3 inline-block rounded-full bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-accent-dark">
                    {d.tag}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {teaser && (
          <Reveal delay={120}>
            <div className="mt-8 flex justify-center">
              <ArrowLink href="/why-shikzya">
                See all {differentiators.length} reasons institutions choose us
              </ArrowLink>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
