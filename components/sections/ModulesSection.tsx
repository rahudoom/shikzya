import Reveal from "@/components/Reveal";
import { Container, SectionHeading, ArrowLink } from "@/components/ui";
import { moduleGroups } from "@/lib/data";

/**
 * The 80+ modules, grouped by everyday area. Used both as a landing-page
 * overview and as the full feature listing on /features.
 */
export default function ModulesSection({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <section className={`${compact ? "bg-white" : "bg-surface"} py-20 lg:py-28`}>
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="What's Inside"
              title="Everything your institution runs on,"
              highlight="in one place"
              intro="More than 80 modules, organised into everyday areas so any member of staff finds exactly what they need — without training overhead."
            />
            {compact && (
              <ArrowLink href="/features">View all features</ArrowLink>
            )}
          </div>
        </Reveal>

        <div className="mt-12 space-y-10">
          {moduleGroups.map((group, gi) => (
            <Reveal key={group.name} delay={gi * 60}>
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-brand">
                    {group.name}
                  </h3>
                  <span className="h-px flex-1 bg-line" />
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((m) => (
                    <div
                      key={m.name}
                      className="flex items-start gap-3.5 rounded-xl border border-line bg-white p-4 transition-colors hover:border-brand/30"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                        <m.icon size={18} />
                      </div>
                      <div>
                        <div className="font-semibold text-ink">{m.name}</div>
                        <div className="mt-0.5 text-xs leading-relaxed text-ink-mute">
                          {m.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
