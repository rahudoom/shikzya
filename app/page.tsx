import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import Challenge from "@/components/sections/Challenge";
import Solution from "@/components/sections/Solution";
import Benefits from "@/components/sections/Benefits";
import ModulesSection from "@/components/sections/ModulesSection";
import WhyShikZya from "@/components/sections/WhyShikZya";
import PoweredByAI from "@/components/sections/PoweredByAI";
import LearnHubSection from "@/components/sections/LearnHubSection";
import Roles from "@/components/sections/Roles";
import Plans from "@/components/sections/Plans";
import Security from "@/components/sections/Security";
import Roadmap from "@/components/sections/Roadmap";
import GettingStarted from "@/components/sections/GettingStarted";
import AboutMakers from "@/components/sections/AboutMakers";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Challenge />
      <Solution />
      <Benefits />
      <ModulesSection compact />
      <WhyShikZya teaser />
      <PoweredByAI teaser />
      <LearnHubSection />
      <Roles />
      <Plans compact />
      <Security />
      <Roadmap />
      <GettingStarted />
      <AboutMakers />
    </>
  );
}
