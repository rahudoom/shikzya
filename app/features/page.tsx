import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ModulesSection from "@/components/sections/ModulesSection";
import WhyShikZya from "@/components/sections/WhyShikZya";
import PoweredByAI from "@/components/sections/PoweredByAI";
import LearnHubSection from "@/components/sections/LearnHubSection";
import Roles from "@/components/sections/Roles";
import GettingStarted from "@/components/sections/GettingStarted";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore all 80+ ShikZya modules — attendance, fees, exams, marksheets, ConnectSchool, LearnHub, built-in AI and 11 role-based portals, built around the Bikram Sambat calendar.",
};

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="What's Inside"
        title="Everything your institution runs on,"
        highlight="in one connected platform"
        intro="More than 80 integrated modules across academics, finance, communication, documents, operations and AI — with a dedicated portal for every role."
      />
      <ModulesSection />
      <WhyShikZya />
      <PoweredByAI />
      <LearnHubSection />
      <Roles />
      <GettingStarted />
    </>
  );
}
