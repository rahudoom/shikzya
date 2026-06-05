import StatCounter from "@/components/StatCounter";
import { Container } from "@/components/ui";
import { stats } from "@/lib/data";

export default function StatsBar() {
  return (
    <section className="border-b border-line bg-white">
      <Container className="py-12">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <StatCounter
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              display={s.display}
              label={s.label}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
