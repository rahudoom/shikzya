import { ArrowRight, CalendarDays, Sparkles, LayoutGrid } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Container, Button } from "@/components/ui";
import { DotGridLight, Glow } from "@/components/Backdrop";
import HeroPanel from "@/components/HeroPanel";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-brand-light">
      <DotGridLight className="opacity-40" />
      <Glow className="-right-24 -top-24 h-[420px] w-[420px] animate-blob-a bg-white/15" />
      <Glow className="-bottom-32 -left-20 h-[420px] w-[420px] animate-blob-b bg-accent/30" />

      <Container className="relative grid items-center gap-14 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        {/* Left — copy */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
                Education Management System · Made for Nepal
              </span>
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-[clamp(2.4rem,5.5vw,3.8rem)] font-extrabold leading-[1.05] tracking-tight text-white">
              Smart Education
              <br />
              Management for{" "}
              <span className="text-accent-light">Modern Institutions</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              One connected platform to run your entire school or college — from
              admission to marksheet, fees to communication — designed around
              the Nepali Bikram Sambat calendar.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/demo" variant="white">
                Request a Free Demo <ArrowRight size={16} />
              </Button>
              <Button
                href="/features"
                variant="secondary"
                className="border-white/25 bg-white/10 text-white backdrop-blur-sm hover:border-white/40 hover:bg-white/15 hover:text-white"
              >
                Explore Features
              </Button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-white/75">
              <span className="inline-flex items-center gap-2">
                <CalendarDays size={16} className="text-accent-light" /> Native
                BS Calendar
              </span>
              <span className="inline-flex items-center gap-2">
                <Sparkles size={16} className="text-accent-light" /> Built-in AI
              </span>
              <span className="inline-flex items-center gap-2">
                <LayoutGrid size={16} className="text-accent-light" /> 11 Portals
              </span>
            </div>
          </Reveal>
        </div>

        {/* Right — portal mockup */}
        <Reveal delay={200} className="hidden lg:block">
          <HeroPanel />
        </Reveal>
      </Container>
    </section>
  );
}
