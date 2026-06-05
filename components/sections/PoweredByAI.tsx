import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Container } from "@/components/ui";
import { DotGridLight, Glow } from "@/components/Backdrop";
import { aiFeatures } from "@/lib/data";

export default function PoweredByAI({
  teaser = false,
  showHeading = true,
}: {
  teaser?: boolean;
  showHeading?: boolean;
}) {
  return (
    <section
      id="ai"
      className="relative scroll-mt-20 overflow-hidden bg-ink py-20 lg:py-28"
    >
      <DotGridLight className="opacity-30" />
      <Glow className="-right-20 top-10 h-[360px] w-[360px] bg-brand/40" />
      <Glow className="-left-24 bottom-0 h-[320px] w-[320px] bg-accent/20" />

      <Container className="relative">
        {showHeading && (
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/80 backdrop-blur-sm">
              <Sparkles size={14} className="text-accent-light" /> Powered by AI
            </span>
            <h2 className="mt-5 max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Intelligence built into everyday{" "}
              <span className="text-accent-light">academic life</span>
            </h2>
            <p className="mt-4 max-w-2xl text-white/70">
              Most school software simply stores your information. ShikZya goes
              further — a genuine, human-like AI runs across the platform: a
              personal right hand for the principal, and a smart assistant in
              every parent and student portal that truly understands each child.
            </p>
          </Reveal>
        )}

        <div className={`${showHeading ? "mt-12" : ""} grid gap-5 lg:grid-cols-3`}>
          {aiFeatures.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors hover:border-white/20">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-light text-white">
                  <a.icon size={20} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {a.text}
                </p>
                <span className="mt-4 inline-block text-[11px] font-bold uppercase tracking-wide text-accent-light">
                  {a.tag}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {teaser && (
          <Reveal delay={120}>
            <div className="mt-8 flex justify-center">
              <Link
                href="/ai"
                className="group inline-flex items-center gap-1.5 text-sm font-bold text-accent-light transition-colors hover:text-white"
              >
                Explore ShikZya&apos;s AI in depth
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
