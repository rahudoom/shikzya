import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import WhyShikZya from "@/components/sections/WhyShikZya";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Why ShikZya",
  description:
    "What sets ShikZya apart: a native Bikram Sambat calendar, instant urgent notifications, ConnectSchool concern resolution, one-click student import, a built-in AI assistant, StaffConnect, one platform for school & college, and 11 dedicated role portals.",
};

export default function WhyShikZyaPage() {
  return (
    <>
      <PageHero
        eyebrow="Why ShikZya"
        title="What makes ShikZya"
        highlight="genuinely different"
        intro="These are not small extras. They are the capabilities that set ShikZya apart from every generic school software in the market."
      />
      <WhyShikZya showHeading={false} />
      <CtaBand
        title="See it on your own institution's data"
        subtitle="Book a free, no-obligation demo and we'll show you exactly how these capabilities work for your school or college."
        secondaryHref="/ai"
        secondaryLabel="Explore the AI"
      />
    </>
  );
}
