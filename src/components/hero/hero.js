"use client";
import React from "react";
import Logos from "../logos/logos";
import Cards from "../work_cards/cards";
import Calender_Modal from "../calendermodal/calendermodal";
import Reveal from "../motion/Reveal";
import ParallaxBlob from "../motion/ParallaxBlob";
import { motion } from "framer-motion";
import ServicesBook from "./ServicesBook";

const EASE = [0.33, 1, 0.68, 1];

const Hero = () => {
  return (
    <div>
      <div className='relative overflow-hidden pt-14 min-h-[calc(100vh-75px)]'>
        <ParallaxBlob />

        <div className='w-11/12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:mt-0 mt-8'>
          {/* ── Left: text content ── */}
          <div className='flex-1 lg:text-left text-center'>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              className='font-display lg:text-display-lg sm:text-display-md text-display-md text-text-primary font-bold leading-tight'
            >
              Subscription Based{" "}
              <span className='text-accent-blue-500'>Website</span> Design &
              Maintenance, SEO, and Digital Marketing
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: EASE }}
              className='mt-4 text-xl text-accent-blue-400'
            >
              Don&apos;t Just Make a Website, Make a Fortune
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.35, ease: EASE }}
              className='mt-3 md:text-lg text-md text-text-secondary'
            >
              Our deliverable comes with affordable monthly{" "}
              <b className='text-text-primary'>
                Website Design & Maintenance, SEO, and Digital Marketing
              </b>{" "}
              packages that provide everything you need to launch and maintain a
              professional online presence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
              className='lg:flex lg:justify-start justify-center'
            >
              <Calender_Modal />
            </motion.div>
          </div>

          {/* ── Right: services book ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
            className='order-first lg:order-none lg:w-[480px] w-full h-[420px] sm:h-[480px] lg:h-[580px] flex-shrink-0'
          >
            <ServicesBook />
          </motion.div>
        </div>

        {/* Logo strip below both columns */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className='w-11/12 max-w-7xl mx-auto'
        >
          <Logos />
        </motion.div>
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
