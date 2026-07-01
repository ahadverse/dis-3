import React from "react";
import Logos from "../logos/logos";
import Cards from "../work_cards/cards";
import Calender_Modal from "../calendermodal/calendermodal";
import Reveal from "../motion/Reveal";
import ParallaxBlob from "../motion/ParallaxBlob";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <ParallaxBlob />
      <div className="relative">
        <div className="mx-auto flex w-11/12 max-w-[1280px] flex-col-reverse items-center justify-between gap-8 px-4 py-section lg:flex-row lg:gap-4">
          <Reveal direction="right" className="w-full lg:w-7/12">
            <h1 className="font-display text-3xl font-bold leading-tight text-text-primary sm:text-4xl sm:leading-tight md:text-5xl lg:text-6xl">
              DIS Focused
            </h1>
            <h1 className="mt-2 font-display text-3xl font-bold leading-tight text-text-primary sm:mt-3 sm:text-4xl sm:leading-tight md:text-5xl lg:text-6xl">
              <span className="text-accent-blue-500">
                Digital Marketing Service
              </span>
            </h1>
            <h1 className="mt-2 font-display text-3xl font-bold leading-tight text-text-primary sm:mt-3 sm:text-4xl sm:leading-tight md:text-5xl lg:text-6xl">
              Agency for Any Business
            </h1>
            <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg md:text-xl">
              The greatest way to earn maximum DIS with data driven digital
              marketing. The business is yours, but our responsibility to
              expand
            </p>
            <div className="mt-6 w-full max-w-[415px]">
              <Calender_Modal />
            </div>
          </Reveal>
          <Reveal direction="left" className="flex w-full justify-center lg:w-5/12">
            <img
              src="/digital_hero.png"
              className="h-auto w-full max-w-md lg:max-w-full"
              alt="Digital Marketing Hero"
            />
          </Reveal>
        </div>

        {/* stat strip */}
        <div className="w-full px-4 pb-8 sm:pb-12">
          <div className="mx-auto flex max-w-[1000px] flex-col justify-center gap-6 sm:flex-row sm:justify-between sm:gap-4">
            <Reveal delay={0} className="min-h-[200px] flex-1 rounded-xl border border-border-subtle bg-bg-surface1 p-6 sm:h-[250px] sm:p-10">
              <img
                className="m-auto w-20 sm:w-28"
                src="/sb1.png"
                alt="Satisfied clients"
              />
              <h2 className="mt-4 text-center font-display text-3xl font-bold text-text-primary sm:mt-5 sm:text-4xl">
                270+
              </h2>
              <p className="mt-3 text-center text-lg text-text-secondary sm:mt-5 sm:text-xl">
                Satisfied clients
              </p>
            </Reveal>
            <Reveal delay={0.1} className="min-h-[200px] flex-1 rounded-xl border border-border-subtle bg-bg-surface1 p-6 sm:h-[250px] sm:p-10">
              <img
                className="m-auto w-20 sm:w-28"
                src="/sb2.png"
                alt="Client rating"
              />
              <h2 className="mt-4 text-center font-display text-3xl font-bold text-text-primary sm:mt-5 sm:text-4xl">
                5.0
              </h2>
              <p className="mt-3 text-center text-lg text-text-secondary sm:mt-5 sm:text-xl">
                Average client rating on Clutch
              </p>
            </Reveal>
            <Reveal delay={0.2} className="min-h-[200px] flex-1 rounded-xl border border-border-subtle bg-bg-surface1 p-6 sm:h-[250px] sm:p-10">
              <img
                className="m-auto w-20 sm:w-28"
                src="/sb3.png"
                alt="Websites developed"
              />
              <h2 className="mt-4 text-center font-display text-3xl font-bold text-text-primary sm:mt-5 sm:text-4xl">
                400+
              </h2>
              <p className="mt-3 text-center text-lg text-text-secondary sm:mt-5 sm:text-xl">
                Websites Developed
              </p>
            </Reveal>
          </div>
        </div>

        <div className="px-4 pb-16 sm:pb-20 md:pb-28">
          <Reveal>
            <h1 className="text-center font-display text-2xl font-semibold text-text-primary sm:text-3xl md:text-4xl">
              Full-Stack Digital Marketing Planning And Management
            </h1>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Hero;
