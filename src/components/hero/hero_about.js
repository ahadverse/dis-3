import React from "react";
import Logos from "../logos/logos";
import Cards from "../work_cards/cards";
import Calender_Modal from "../calendermodal/calendermodal";
import Reveal from "../motion/Reveal";
import ParallaxBlob from "../motion/ParallaxBlob";

const Hero = () => {
  return (
    <div className='relative overflow-hidden pt-12'>
      <ParallaxBlob />
      <div className='flex items-center justify-center'>
        <div className='sm:w-8/12 w-11/12 m-auto'>
          <Reveal direction='up'>
            <h1 className='font-display sm:text-display-lg text-display-md text-text-primary font-bold text-center'>
              The Root to Our{" "}
              <span className='text-accent-blue-500'>
                Unique Identity
              </span>
            </h1>
          </Reveal>
          <Reveal direction='up' delay={0.1}>
            <p className='sm:my-8 my-10 text-center text-xl text-accent-blue-400'>
              Don&apos;t Just Make a Website, Make a Fortune
            </p>
          </Reveal>
          <Reveal direction='up' delay={0.15}>
            <p className='my-5 text-center text-xl text-text-secondary'>
              As a sister venture of Digitalytix LLC, our team of web
              development experts specializes in conjuring up cutting-edge
              websites and ensuring they run like a dream.
            </p>
          </Reveal>
          <Reveal direction='up' delay={0.2}>
            <div className='mx-auto mt-2 max-w-3xl space-y-4 text-base text-text-secondary'>
              <p>
                DIS Private LTD started from a simple frustration we kept
                hearing from business owners: agencies that disappear after the
                final invoice, leaving a website to slowly rot — out-of-date
                plugins, broken contact forms, search rankings that quietly
                slide while nobody's watching. We built a different model
                around a single principle: the work doesn't stop at launch.
              </p>
              <p>
                Every subscription we run bundles design, development, hosting
                coordination, and active maintenance into one predictable
                monthly cost, so clients aren't choosing between an expensive
                agency retainer and a freelancer who might not answer next
                month. It also means our incentives line up with theirs — a
                site that keeps performing well is what keeps a client
                subscribed, so there's no reason to cut corners on launch day
                and hope nobody notices.
              </p>
            </div>
          </Reveal>
          <br />
          <Calender_Modal />
          <Logos />
        </div>
      </div>
      <div className='mt-14'>
        <img className='m-auto shadow-card rounded-xl' src='/about1.png' />
      </div>
    </div>
  );
};

export default Hero;
