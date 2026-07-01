import React from "react";
import Reveal from "../motion/Reveal";
import StaggerGrid, { StaggerItem } from "../motion/StaggerGrid";

const Efficiency_about = () => {
  return (
    <div className='max-w-[1200px] w-full mx-auto px-4 sm:px-6'>
      <Reveal direction='up'>
        <h2 className='font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-text-primary'>
          Our Expertise on Delivering You Efficiency
        </h2>
      </Reveal>

      <Reveal direction='up' delay={0.1}>
        <p className='mx-auto mt-4 max-w-3xl text-center text-base text-text-secondary'>
          Efficiency isn't just about working fast — it's about making decisions
          that save our clients time and money for years after launch. These are
          the four principles every project gets evaluated against, from the
          first wireframe to the maintenance plan that keeps it running.
        </p>
      </Reveal>

      <StaggerGrid className='mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
        <StaggerItem className='text-center'>
          <img
            src='/value/4.png'
            className='mx-auto h-24 md:h-36 object-contain'
          />
          <h2 className='text-lg md:text-xl font-bold mt-4 text-text-primary'>
            Future-Ready Scalability
          </h2>
          <p className='mt-2 text-sm text-text-secondary'>
            We build on component-based architecture so adding a new page,
            product line, or feature later doesn't mean rebuilding the site —
            it means extending it.
          </p>
        </StaggerItem>
        <StaggerItem className='text-center'>
          <img
            src='/value/5.png'
            className='mx-auto h-24 md:h-36 object-contain'
          />
          <h2 className='text-lg md:text-xl font-bold mt-4 text-text-primary'>
            Unbreakable Security Frameworks
          </h2>
          <p className='mt-2 text-sm text-text-secondary'>
            Regular updates, hardened admin access, and proactive monitoring
            mean fewer late-night calls about a hacked or broken site.
          </p>
        </StaggerItem>
        <StaggerItem className='text-center'>
          <img
            src='/value/6.png'
            className='mx-auto h-24 md:h-36 object-contain'
          />
          <h2 className='text-lg md:text-xl font-bold mt-4 text-text-primary'>
            Sustainable Development Practices
          </h2>
          <p className='mt-2 text-sm text-text-secondary'>
            Clean, documented code and lightweight assets keep your site fast to
            load and cheap to maintain, instead of accumulating technical debt.
          </p>
        </StaggerItem>
        <StaggerItem className='text-center'>
          <img
            src='/value/7.png'
            className='mx-auto h-24 md:h-36 object-contain'
          />
          <h2 className='text-lg md:text-xl font-bold mt-4 text-text-primary'>
            Data Driven Decisions
          </h2>
          <p className='mt-2 text-sm text-text-secondary'>
            We track real performance and search metrics after launch, so
            changes to your site are based on how visitors actually behave.
          </p>
        </StaggerItem>
      </StaggerGrid>
    </div>
  );
};

export default Efficiency_about;
