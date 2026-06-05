import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Container, Button } from "@/components/ui";
import { DotGridLight, Glow } from "@/components/Backdrop";
import { steps, contact } from "@/lib/data";

export default function GettingStarted() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-brand-light py-20 lg:py-28">
      <DotGridLight className="opacity-30" />
      <Glow className="-right-24 top-0 h-[360px] w-[360px] animate-blob-a bg-white/10" />
      <Glow className="-bottom-24 -left-20 h-[360px] w-[360px] animate-blob-b bg-accent/25" />

      <Container className="relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/80 backdrop-blur-sm">
              Getting Started
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Up and running in three simple steps
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="font-display text-3xl font-extrabold text-white/40">
                    {i + 1}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white">
                    <s.icon size={18} />
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 rounded-2xl bg-white/95 p-8 text-center shadow-2xl lg:p-10">
            <h3 className="text-2xl font-extrabold text-ink sm:text-3xl">
              Ready to modernise your institution?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-ink-mute">
              Let us arrange a free, no-obligation demonstration tailored to your
              school or college. See exactly how ShikZya fits the way you already
              work.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button href="/demo" variant="primary">
                Request a Free Demo <ArrowRight size={16} />
              </Button>
              <Button href={`mailto:${contact.email}`} variant="secondary">
                {contact.email}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
