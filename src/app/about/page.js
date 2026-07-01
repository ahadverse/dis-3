import About_section from "../../components/comprehensiveness_about/comprehensiveness_about";
import Efficiency_about from "../../components/efficiency_about/efficiency_about";
import Expertise from "../../components/expertise/expertise";
import Footprint from "../../components/footprint/footprint";
import Our_Distinctive_Edge from "../../components/happy_client_about/happy_client_about";
import Hero from "../../components/hero/hero_about";
import Mission from "../../components/mission/mission";
import Values from "../../components/valuesshapeabout/values";
import React from "react";

export const metadata = {
  title: "About DIS Private LTD",
  description: "",
};

const About = () => {
  return (
    <div className='bg-bg-base'>
      <div>
        <main className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <section className='py-4'>
            <Hero />
          </section>

          <hr className='my-8 border-border-subtle' />

          <section className='py-4'>
            <About_section />
          </section>

          <section className='py-4'>
            <Our_Distinctive_Edge />
          </section>

          <section className='py-4'>
            <Expertise />
          </section>

          <section className='py-4'>
            <Mission />
          </section>

          <section className='py-4'>
            <Values />
          </section>

          <section className='py-4'>
            <Efficiency_about />
          </section>

          <hr className='my-8 border-border-subtle' />

          <section className='py-4'>
            <Footprint />
          </section>
        </main>
      </div>
    </div>
  );
};

export default About;
