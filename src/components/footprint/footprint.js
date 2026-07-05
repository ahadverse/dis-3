import React from "react";
import Calender_Modal from "../calendermodal/calendermodal";
import Reveal from "../motion/Reveal";
import StaggerGrid, { StaggerItem } from "../motion/StaggerGrid";

const Footprint = () => {
  return (
    <div className='px-4 sm:px-6'>
      <Reveal direction='up'>
        <h2 className='font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-text-primary'>
          Our Geographic Footprint
        </h2>
      </Reveal>
      <Reveal direction='up' delay={0.1}>
        <p className='text-base sm:text-lg mt-4 text-center max-w-3xl mx-auto text-text-secondary'>
          Whether you're nearby or halfway around the world, find out our
          locations strategically placed to tap into local talent and engage
          with the community. Operating across multiple regions means a client
          in Sydney and a client in San Diego both get business-hours support
          without either one waiting until the next morning, and it gives us
          access to specialists wherever they happen to be based rather than
          limiting our hiring to a single city.
        </p>
      </Reveal>

      <div className='mt-8'>
        <Calender_Modal />
      </div>

      <StaggerGrid className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] w-full mx-auto mt-4'>
        <StaggerItem className='rounded-xl border border-border bg-bg-surface1 shadow-card p-4 md:p-6'>
          <h1 className='text-xl md:text-2xl font-semibold text-text-primary'>
            TX, United States
          </h1>
          <p className='text-sm md:text-base mt-2 text-text-secondary'>
            6000 S Lake Forest Dr, McKinney, TX 75070
          </p>
          <p className='mt-2 text-sm text-text-secondary'>
            Our North American hub, supporting clients across U.S. and Canadian
            time zones.
          </p>
          <img
            src='/map1.png'
            className='mt-6 w-full h-auto object-cover rounded-lg'
          />
        </StaggerItem>

        <StaggerItem className='rounded-xl border border-border bg-bg-surface1 shadow-card p-4 md:p-6'>
          <h1 className='text-xl md:text-2xl font-semibold text-text-primary'>
            NSW, Australia
          </h1>
          <p className='text-sm md:text-base mt-2 text-text-secondary'>
            59 Marshall St, Cobar, NSW 2835
          </p>
          <p className='text-sm md:text-base mt-2 text-text-secondary'>
            +61 483 955 567
          </p>
          <img
            src='/map2.png'
            className='mt-6 w-full h-auto object-cover rounded-lg'
          />
        </StaggerItem>

        <StaggerItem className='rounded-xl border border-border bg-bg-surface1 shadow-card p-4 md:p-6'>
          <h1 className='text-xl md:text-2xl font-semibold text-text-primary'>
            London, UK
          </h1>
          <p className='text-sm md:text-base mt-2 text-text-secondary'>
            289 Corfield Street, London, E2 0DU
          </p>
          <p className='mt-2 text-sm text-text-secondary'>
            Our European point of contact, covering UK and EU client onboarding
            and account management.
          </p>
          <img
            src='/map3.png'
            className='mt-6 w-full h-auto object-cover rounded-lg'
          />
        </StaggerItem>
      </StaggerGrid>
    </div>
  );
};

export default Footprint;
