import React from "react";
import Calender_Modal from "../calendermodal/calendermodal";
import Reveal from "../motion/Reveal";
import ParallaxBlob from "../motion/ParallaxBlob";

const Hero = () => {
  return (
    <div className='relative overflow-hidden pt-[100px] pb-12'>
      <ParallaxBlob />
      <div className='w-11/12 max-w-[1280px] flex justify-center m-auto px-4'>
        <div className='w-full sm:w-10/12 md:w-8/12'>
          <Reveal>
            <h1 className='font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-text-primary font-bold leading-tight sm:leading-loose'>
              We Famous for our <br className='hidden sm:block' /> Affordable
              Packages
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className='mt-6 text-base sm:text-lg md:text-xl text-center leading-relaxed text-text-secondary'>
              Each web development service packages gives great value,
              ensuring you get the quality and service you deserve at a price
              that&apos;s easy on your wallet.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className='flex justify-center mt-8'>
              <div className='w-full max-w-[415px]'>
                <Calender_Modal />
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className='w-full px-4 mt-8 sm:mt-12'>
        <Reveal delay={0.25}>
          <div className='flex flex-col sm:flex-row justify-center sm:justify-between gap-6 sm:gap-4 max-w-[1000px] m-auto'>
            <div className='flex-1 min-h-[200px] sm:min-h-[250px] p-6 sm:p-10'>
              <img
                className='w-20 sm:w-28 m-auto'
                src='/sb1.png'
                alt='Satisfied clients'
              />
              <h2 className='font-display text-3xl sm:text-4xl mt-4 sm:mt-5 font-bold text-center text-text-primary'>
                270+
              </h2>
              <p className='mt-3 sm:mt-5 text-lg sm:text-xl text-center text-text-secondary'>
                Satisfied clients
              </p>
            </div>
            <div className='flex-1 min-h-[200px] sm:min-h-[250px] p-6 sm:p-10'>
              <img
                className='w-20 sm:w-28 m-auto'
                src='/sb2.png'
                alt='Client rating'
              />
              <h2 className='font-display text-3xl sm:text-4xl mt-4 sm:mt-5 font-bold text-center text-text-primary'>
                5.0
              </h2>
              <p className='mt-3 sm:mt-5 text-lg sm:text-xl text-center text-text-secondary'>
                Average client rating on Clutch
              </p>
            </div>
            <div className='flex-1 min-h-[200px] sm:min-h-[250px] p-6 sm:p-10'>
              <img
                className='w-20 sm:w-28 m-auto'
                src='/sb3.png'
                alt='Websites Developed'
              />
              <h2 className='font-display text-3xl sm:text-4xl mt-4 sm:mt-5 font-bold text-center text-text-primary'>
                400+
              </h2>
              <p className='mt-3 sm:mt-5 text-lg sm:text-xl text-center text-text-secondary'>
                Websites Developed
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Hero;
