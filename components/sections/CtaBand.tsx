import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Container, Button } from "@/components/ui";
import { DotGridLight, Glow } from "@/components/Backdrop";

export default function CtaBand({
  title,
  subtitle,
  secondaryHref = "/features",
  secondaryLabel = "Explore Features",
}: {
  title: string;
  subtitle: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-brand-light py-16 lg:py-20">
      <DotGridLight className="opacity-30" />
      <Glow className="-right-24 top-0 h-[320px] w-[320px] animate-blob-a bg-white/10" />
      <Glow className="-bottom-24 -left-20 h-[320px] w-[320px] animate-blob-b bg-accent/25" />

      <Container className="relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">{subtitle}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button href="/demo" variant="white">
              Request a Free Demo <ArrowRight size={16} />
            </Button>
            <Button
              href={secondaryHref}
              variant="secondary"
              className="border-white/25 bg-white/10 text-white backdrop-blur-sm hover:border-white/40 hover:bg-white/15 hover:text-white"
            >
              {secondaryLabel}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
