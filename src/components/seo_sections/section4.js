import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section4 = () => {
  return (
    <Section background="base">
      <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-7/12">
          <h1 className="mb-8 text-center font-display text-3xl font-bold text-text-primary sm:mb-16 sm:text-left sm:text-5xl">
            Get Ranked And Boost Profit
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            We do research and make decisions about different marketplaces
            depending on which ones provide the most potential for profit. Our
            best SEO agency in Bangladesh runs comprehensive competitor analysis
            using Google analytics, and we consider the amount of search traffic
            in each area in addition to the degree of competition. After going
            over all of the data that is currently accessible, we will next narrow
            down the markets to which your company will have the most opportunity
            to sell its goods or services.
            <br />
            <br />
            When traffic searches on the search engine, they use a specific
            keyword, and afterward, the search engine shows them related websites
            about their investigation. When any business does SEO in a particular
            niche and keyword, their website drives organic and medium traffic to
            their website, which helps them get ranked quickly in the search
            engines. So, in that case, as much as a visitor you will drive to your
            site, your conversion rate will be higher.
          </p>
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-5/12">
          <img src="/seo3.webp" className="w-full" alt="Boost Profit" />
        </Reveal>
      </div>
    </Section>
  );
};

export default Section4;
