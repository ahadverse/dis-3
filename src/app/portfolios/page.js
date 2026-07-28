import Hero from "../../components/hero/porfolios";
import Projects from "../../components/projects/porfolios";
import PortfolioProcess from "../../components/portfolio-process/portfolio-process";
import React from "react";

export const metadata = {
  title: "Portfolio",
  description:
    "Explore DIS Private Limited's portfolio of website design, SEO, and digital marketing projects delivered for businesses worldwide.",
  keywords: ["dis private limited portfolio", "web design portfolio", "seo case studies"],
  alternates: { canonical: "/portfolios" },
};

const Porfolios = () => {
  return (
    <div className='bg-bg-base'>
      <Hero />
      <div className='py-section'>
        <Projects />
      </div>
      <PortfolioProcess />
    </div>
  );
};

export default Porfolios;
