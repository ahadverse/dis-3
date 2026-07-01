import Hero from "../../components/hero/porfolios";
import Projects from "../../components/projects/porfolios";
import PortfolioProcess from "../../components/portfolio-process/portfolio-process";
import React from "react";

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
