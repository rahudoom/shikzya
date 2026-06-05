import Reveal from "@/components/Reveal";
import { Container } from "@/components/ui";
import { DotGridLight, Glow } from "@/components/Backdrop";

export default function PageHero({
  eyebrow,
  title,
  highlight,
  intro,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-brand-light py-16 lg:py-20">
      <DotGridLight className="opacity-30" />
      <Glow className="-right-20 -top-16 h-[320px] w-[320px] bg-white/10" />
      <Glow className="-bottom-24 -left-16 h-[300px] w-[300px] bg-accent/25" />

      <Container className="relative">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/80 backdrop-blur-sm">
            {eyebrow}
          </span>
          <h1 className="mt-5 max-w-3xl text-[clamp(2rem,4.5vw,3rem)] font-extrabold leading-[1.08] tracking-tight text-white">
            {title}
            {highlight && <span className="text-accent-light"> {highlight}</span>}
          </h1>
          {intro && (
            <p className="mt-4 max-w-2xl text-lg text-white/80">{intro}</p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
