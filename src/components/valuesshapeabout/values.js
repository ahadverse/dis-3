import React from "react";
import Calender_Modal from "../calendermodal/calendermodal";
import Reveal from "../motion/Reveal";
import StaggerGrid, { StaggerItem } from "../motion/StaggerGrid";

const Values = () => {
  return (
    <div className='my-4 px-4 sm:px-6'>
      <div className='max-w-[1200px] w-full mx-auto'>
        <Reveal direction='up'>
          <h1 className='font-display text-2xl md:text-4xl text-text-primary text-center font-bold'>
            What Values Shape Our Path Forward?
          </h1>
        </Reveal>
        <Reveal direction='up' delay={0.1}>
          <h2 className='text-center text-sm md:text-lg font-semibold mt-4 max-w-3xl mx-auto text-text-secondary'>
            We push the limits of creativity to be the best web developers,
            setting up norms that aim to impact everything we do positively.
          </h2>
        </Reveal>

        <StaggerGrid className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4'>
          <StaggerItem className='w-full max-w-sm mx-auto rounded-3xl shadow-card overflow-hidden'>
            <img src='/value/1.jpg' className='w-full h-64 object-cover' />
          </StaggerItem>

          <StaggerItem className='w-full max-w-sm mx-auto rounded-3xl p-6 bg-bg-surface1 border border-border shadow-card'>
            <img
              src='/value1.png'
              className='rounded-3xl mx-auto w-24 h-24 object-contain'
            />
            <h1 className='text-xl font-bold my-4 text-text-primary'>
              Integrity
            </h1>
            <p className='text-base text-text-secondary'>
              It's about being transparent, honest, and fair, whether we're
              interacting with clients, partners, or our team. We quote real
              timelines instead of optimistic ones, we tell clients when a
              feature they've asked for won't actually help their business, and
              we flag problems before they become invoices. Trust is the entire
              foundation of a subscription relationship — clients keep paying us
              monthly because we keep earning it, not because they're locked
              into a contract.
            </p>
          </StaggerItem>

          <StaggerItem className='w-full max-w-sm mx-auto rounded-3xl shadow-card overflow-hidden'>
            <img src='/value/2.jpg' className='w-full h-64 object-cover' />
          </StaggerItem>

          <StaggerItem className='w-full max-w-sm mx-auto rounded-3xl p-6 bg-bg-surface1 border border-border shadow-card'>
            <img
              src='/value2.png'
              className='rounded-3xl mx-auto w-24 h-24 object-contain'
            />
            <h1 className='text-xl font-bold my-4 text-text-primary'>
              Innovation
            </h1>
            <p className='text-base text-text-secondary'>
              Our passion for innovation drives us to constantly challenge the
              status quo and push technological boundaries. That means
              evaluating every new framework, animation technique, or SEO tactic
              on one question: does it make our clients' websites faster, more
              usable, or easier to find — not whether it's trendy. We'd rather
              ship a fast, accessible site built on proven technology than a
              flashy one that breaks on half the devices visiting it.
            </p>
          </StaggerItem>

          <StaggerItem className='w-full max-w-sm mx-auto rounded-3xl shadow-card overflow-hidden'>
            <img src='/value/3.png' className='w-full h-64 object-cover' />
          </StaggerItem>

          <StaggerItem className='w-full max-w-sm mx-auto rounded-3xl p-6 bg-bg-surface1 border border-border shadow-card'>
            <img
              src='/value3.png'
              className='rounded-3xl mx-auto w-24 h-24 object-contain'
            />
            <h1 className='text-xl font-bold my-4 text-text-primary'>Impact</h1>
            <p className='text-base text-text-secondary'>
              From boosting our clients' online presence to driving business
              growth, our focus is on achieving tangible results that make a
              real difference. A website is a means to an end, not a trophy — we
              measure success in enquiries generated, pages that actually load
              fast on mobile, and search rankings that move in the right
              direction, and we report on those numbers instead of hiding behind
              vanity metrics.
            </p>
          </StaggerItem>
        </StaggerGrid>
      </div>
    </div>
  );
};

export default Values;
