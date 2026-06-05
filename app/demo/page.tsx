import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import DemoForm from "@/components/DemoForm";
import QuickContact from "@/components/QuickContact";
import Reveal from "@/components/Reveal";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Request a Demo",
  description:
    "Book a free, no-obligation ShikZya demonstration tailored to your school or college. See exactly how ShikZya fits the way you already work.",
};

const points = [
  "A guided walkthrough on sample data from an institution like yours",
  "Every question answered — features, setup, onboarding and pricing",
  "One-click import of your existing students when you're ready to go live",
  "No obligation and no pressure — just a clear look at the platform",
];

export default function DemoPage() {
  return (
    <>
      <PageHero
        eyebrow="Free Demo"
        title="See ShikZya running on"
        highlight="your institution's data"
        intro="Tell us a little about your school or college and we'll arrange a free, tailored demonstration — and recommend the right setup for you."
      />

      <section className="bg-surface py-16 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr]">
            {/* Form */}
            <Reveal>
              <DemoForm />
            </Reveal>

            {/* Side: what to expect + quick contact */}
            <Reveal delay={120}>
              <div className="space-y-8">
                <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
                  <h3 className="text-lg font-bold text-ink">
                    What to expect
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2.5 text-sm text-ink-soft"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-brand"
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-ink-mute">
                    Prefer to reach us directly?
                  </h3>
                  <QuickContact />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
