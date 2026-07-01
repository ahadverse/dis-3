import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section11 = () => {
  return (
    <Section background="base">
      <div className="flex w-full flex-col-reverse items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            Make A Decision Regarding Whether Social Advertising Is Right For You
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            Organic Social media Marketing and social media advertising are
            different strategies. But one is related to the other, if you
            have enough time to spend in your business and if you want your
            business to slowly organically create a strong community then
            organic social media marketing is for you. Secondly, if you want
            your business to reach a targeted audience in a very short
            period of time, then social media advertising is for you. We
            have experienced social media marketing consultants and ads
            experts who will help you in decision-making. They will research
            deeply which strategy is best for your business, organic social
            media marketing or paid marketing.
          </p>
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <img className="w-full" src="/smm11.webp" alt="Make A Decision Regarding Whether Social Advertising Is Right For You" />
        </Reveal>
      </div>
    </Section>
  );
};

export default Section11;
