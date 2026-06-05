import { Check, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Container, SectionHeading, Button, ArrowLink } from "@/components/ui";
import { plans } from "@/lib/data";

export default function Plans({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`${compact ? "bg-surface" : "bg-white"} py-20 lg:py-28`}>
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Plans"
              title="Four plans that"
              highlight="grow with you"
              intro="ShikZya is organised into four clear tiers, so your institution can choose the right depth of features. During our introductory period, every institution enjoys the complete platform."
            />
            {compact && <ArrowLink href="/pricing">Compare all plans</ArrowLink>}
          </div>
        </Reveal>

        {/* Introductory offer banner */}
        <Reveal delay={80}>
          <div className="mt-10 flex items-start gap-3 rounded-2xl border border-accent/30 bg-accent/[0.06] p-5">
            <Sparkles size={20} className="mt-0.5 shrink-0 text-accent" />
            <p className="text-sm text-ink-soft">
              <span className="font-bold text-ink">Introductory offer:</span> for
              a limited time, every institution receives access to{" "}
              <span className="font-semibold text-accent-dark">
                all features across all four tiers
              </span>{" "}
              — so you can experience the complete ShikZya platform from your very
              first day.
            </p>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 70}>
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card">
                <div className={`h-1.5 ${p.accent}`} />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-extrabold text-ink">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink-mute">
                    {p.tagline}
                  </p>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {p.inherits && (
                      <li className="text-sm font-semibold text-brand">
                        {p.inherits}
                      </li>
                    )}
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-ink-soft">
                        <Check size={16} className="mt-0.5 shrink-0 text-brand" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {!compact && (
          <Reveal delay={120}>
            <div className="mt-12 rounded-2xl bg-gradient-to-br from-brand-dark to-brand p-8 text-center lg:p-10">
              <h3 className="text-2xl font-extrabold text-white">
                Not sure which plan fits your institution?
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-white/75">
                Tell us about your school or college and we&apos;ll recommend the
                right setup — with a free, no-obligation demonstration on your own
                sample data.
              </p>
              <div className="mt-6 flex justify-center">
                <Button href="/demo" variant="white">
                  Request a Free Demo
                </Button>
              </div>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
