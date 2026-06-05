import Reveal from "@/components/Reveal";
import { Container, SectionHeading } from "@/components/ui";
import { solutionPillars } from "@/lib/data";

export default function Solution() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="The Solution"
            title="Meet ShikZya — your whole institution in"
            highlight="one place"
            intro="From the moment a student is admitted to the day they download their marksheet — attendance, fees, exams, results, communication, library, transport and more — everything lives in one connected, cloud-based system that speaks Bikram Sambat natively."
          />
        </Reveal>

        {/* Adaptability band */}
        <Reveal delay={80}>
          <div className="mt-12 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-dark to-brand p-8 lg:p-10">
            <h3 className="max-w-2xl text-2xl font-extrabold text-white">
              One platform for schools and colleges alike — from early grades to
              Master&apos;s programs
            </h3>
            <p className="mt-3 max-w-2xl text-white/75">
              Whether you run a K-12 school or a college offering BBA, MBA, BSc
              and MSc, ShikZya adapts to your structure, your fee patterns and
              your grading. You don&apos;t change how you work — the platform
              fits around you, and grows with you.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {[
                "Admission to Alumni",
                "Attendance to Marksheets",
                "Fees to Receipts",
                "Parents to Principal",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Pillars */}
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {solutionPillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-line bg-white p-6 text-center shadow-card">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <p.icon size={22} />
                </div>
                <h4 className="mt-4 text-lg font-bold text-ink">{p.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-mute">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
