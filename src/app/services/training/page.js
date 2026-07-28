import Hero from "../../../components/hero/training";
import TrainingCard from "../../../components/trainings/card";
import PricingSection from "../../../components/pricing/PricingSection";
import Section from "../../../components/ui/Section";
import React from "react";

export const metadata = {
  title: "Training",
  description:
    "Hands-on training programs from DIS Private Limited that upskill your team.",
  robots: { index: false, follow: true },
};

const Training = () => {
  return (
    <div className="bg-bg-base">
      <Hero />
      <TrainingCard />
      <Section background="surface1">
        <PricingSection serviceKey="training" />
      </Section>
    </div>
  );
};

export default Training;
