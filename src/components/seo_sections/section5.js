import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section5 = () => {
  return (
    <Section background="base">
      <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            How SEO Can Be a Real Shot for Your Business
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            E-Commerce Sales Are Predicted to Hit $6.5 Trillion by 2023. By doing
            proper Search Engine Optimization, you can drive unique visitors. It
            can help you get ranked in the search engines, increase your
            conversion rate, and engage more customers on your site, reducing
            bounce rates. That way, your business will get popular all over the
            world and locally.
            <br />
            <br />
            All of the outcomes will make your website valuable. After doing
            proper Search Engine strategies, your website may work for you as a
            money-making machine.
          </p>
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <img src="/seo5.webp" className="w-full" alt="SEO for Business" />
        </Reveal>
      </div>
    </Section>
  );
};

export default Section5;
