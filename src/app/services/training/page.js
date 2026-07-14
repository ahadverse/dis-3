import Hero from "../../../components/hero/training";
import TrainingCard from "../../../components/trainings/card";
import PricingSection from "../../../components/pricing/PricingSection";
import Section from "../../../components/ui/Section";
import React from "react";

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
