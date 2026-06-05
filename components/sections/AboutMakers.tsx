import { ArrowUpRight, Code2, Megaphone } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Container } from "@/components/ui";
import { company } from "@/lib/data";

export default function AboutMakers() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-card">
            <div className="grid gap-10 p-8 lg:grid-cols-[1.3fr_1fr] lg:p-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-ink-mute">
                  About the Makers
                </span>
                <h2 className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">
                  A project by{" "}
                  <span className="text-[#A4161A]">Rahu Doom</span> Pvt. Ltd.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-mute">
                  ShikZya is built, maintained and supported by Rahu Doom — a
                  Kathmandu-based IT company specialising in software, mobile and
                  web development and end-to-end digital solutions. When you
                  choose ShikZya, you also get a dedicated technology partner
                  standing behind it.
                </p>
                <a
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-flex items-center gap-1.5 rounded-xl border border-line bg-white px-5 py-3 text-sm font-bold text-ink transition-colors hover:border-brand/40 hover:text-brand"
                >
                  Visit rahudoom.com
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl border border-line bg-surface p-5">
                  <Code2 size={20} className="text-brand" />
                  <h3 className="mt-3 text-sm font-bold text-ink">
                    Software & Development
                  </h3>
                  <p className="mt-1 text-xs text-ink-mute">
                    Custom software, Android & iOS apps, websites, ERP/CRM, cloud
                    & business automation.
                  </p>
                </div>
                <div className="rounded-2xl border border-line bg-surface p-5">
                  <Megaphone size={20} className="text-accent" />
                  <h3 className="mt-3 text-sm font-bold text-ink">
                    Digital Marketing
                  </h3>
                  <p className="mt-1 text-xs text-ink-mute">
                    Social media management, branding, creative design, SEO and
                    performance marketing for institutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
