import PricingSection from "../../components/pricing/PricingSection";
import Hero from "../../components/hero/pricing";
import React from "react";

const Pricing = () => {
  return (
    <div className='bg-bg-base'>
      <Hero />
      <div className='py-section'>
        <PricingSection serviceKey='website-design' />

        <div className='mt-12 sm:mt-16 px-4'>
          <hr className='border-t border-border-subtle max-w-[1400px] m-auto' />
        </div>
        <PricingSection serviceKey='digital-marketing' showBooking={false} />

        <div className='mt-12 sm:mt-16 px-4'>
          <hr className='border-t border-border-subtle max-w-[1400px] m-auto' />
        </div>
        <PricingSection serviceKey='seo' showBooking={false} />
      </div>
    </div>
  );
};

export default Pricing;
