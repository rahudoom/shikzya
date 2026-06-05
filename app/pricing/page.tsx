import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Plans from "@/components/sections/Plans";

export const metadata: Metadata = {
  title: "Plans & Pricing",
  description:
    "Four ShikZya plan tiers — Essential, Professional, Premium and Enterprise AI — that grow with your institution. During the introductory period, every institution gets all features unlocked.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Plans"
        title="Four plans that"
        highlight="grow with you"
        intro="Choose the right depth of features for your institution. During our introductory period, every institution enjoys the complete platform — all four tiers unlocked."
      />
      <Plans />
    </>
  );
}
