import React from "react";
import Logos from "../logos/logos";
import Cards from "../work_cards/cards";
import Calender_Modal from "../calendermodal/calendermodal";
import Reveal from "../motion/Reveal";
import ParallaxBlob from "../motion/ParallaxBlob";

const Hero = () => {
  return (
    <div>
      <div className='relative overflow-hidden pt-20'>
        <ParallaxBlob />
        <div className='w-11/12 m-auto'>
          <h1 className='font-display lg:text-display-xl sm:text-display-lg text-display-md text-text-primary sm:mt-10 mt-8 font-bold text-center'>
            Subscription Based{" "}
            <span className='text-accent-blue-500'>Website</span>{" "}
            Design & Maintenance, SEO, and Digital Marketing
          </h1>

          <p className='my-4 text-center text-xl text-accent-blue-400 md:text-xl text-md'>
            Don&apos;t Just Make a Website, Make a Fortune
          </p>

          <p className='my-4 text-center md:text-xl text-md text-text-secondary'>
            Our deliverable comes with affordable monthly{" "}
            <b className='text-text-primary'>
              Website Design & Maintenance, SEO, and Digital Marketing
            </b>{" "}
            packages that provide everything you need to launch and maintain a
            professional online presence.
          </p>

          <Calender_Modal />
          <Logos />
        </div>
      </div>

      <div className='w-full lg:mt-0 md:mt-10 max-w-[1200px] m-auto px-4'>
        <Reveal direction='up'>
          <p className='font-display text-text-primary text-display-md sm:text-display-lg mt-10 font-bold capitalize text-center'>
            Our solutions that work
          </p>
        </Reveal>
        <Reveal direction='up' delay={0.1}>
          <p className='text-text-secondary font-semibold text-center w-full sm:w-6/12 m-auto mt-3 text-sm sm:text-base'>
            From website development to website maintenance, our solutions are
            designed to take your business forward while saving your pocket!
          </p>
        </Reveal>
        <Cards />
      </div>
    </div>
  );
};

export default Hero;
