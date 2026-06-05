import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PoweredByAI from "@/components/sections/PoweredByAI";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Built-in AI",
  description:
    "ShikZya's AI is woven into everyday academic life — a conversational right hand for the principal, a personal assistant in every parent and student portal, and AI-powered reports that turn your institution's data into clear direction.",
};

export default function AiPage() {
  return (
    <>
      <PageHero
        eyebrow="Powered by AI"
        title="Intelligence built into everyday"
        highlight="academic life"
        intro="Most school software simply stores your information. ShikZya goes further — a genuine, human-like AI runs across the platform: a personal right hand for the principal, and a smart assistant in every parent and student portal that truly understands each child."
      />
      <PoweredByAI showHeading={false} />
      <CtaBand
        title="Put ShikZya's AI to work for your institution"
        subtitle="See the principal's assistant, the parent & student AI, and AI-powered reports live on your own sample data."
        secondaryHref="/why-shikzya"
        secondaryLabel="Why ShikZya"
      />
    </>
  );
}
