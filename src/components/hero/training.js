import React from "react";
import Calender_Modal from "../calendermodal/calendermodal";
import Reveal from "../motion/Reveal";
import ParallaxBlob from "../motion/ParallaxBlob";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <ParallaxBlob />
      <div className="relative">
        <div className="mx-auto flex w-11/12 max-w-[1280px] justify-center px-4 py-section">
          <Reveal direction="up" className="w-full sm:w-8/12">
            <h1 className="text-center font-display text-4xl font-bold leading-tight text-text-primary sm:text-6xl sm:leading-tight">
              Our{" "}
              <span className="text-accent-blue-500">
                Trainings
              </span>
            </h1>
            <p className="mt-6 text-center text-lg leading-relaxed text-text-secondary sm:text-xl">
              Our Special courses are live ( Team Viewer, Skype, Facebook
              Live, Over Phone Call ) online courses developed by DIS Private
              Limited and Highly Trained instructors, who are often engaged
              in discussion through the duration of the course. In Our
              Special courses offer a Statement of Accomplishment issued by
              the instructor upon successful completion. To participate in
              one of these Special Courses learning opportunities, visit the
              course name and information given below
            </p>
            <div className="mt-6 flex justify-center">
              <Calender_Modal />
            </div>
          </Reveal>
        </div>

        <div className="w-full px-4 pb-16 sm:pb-20 md:pb-28">
          <div className="mx-auto flex max-w-[1000px] flex-col justify-center gap-6 sm:flex-row sm:justify-between sm:gap-4">
            <Reveal delay={0} className="min-h-[200px] flex-1 rounded-xl border border-border-subtle bg-bg-surface1 p-6 sm:min-h-[250px] sm:p-10">
              <img
                className="m-auto w-20 sm:w-28"
                src="/sb1.png"
                alt="Satisfied students"
              />
              <h2 className="mt-4 text-center font-display text-3xl font-bold text-text-primary sm:mt-5 sm:text-4xl">
                5000+
              </h2>
              <p className="mt-3 text-center text-lg text-text-secondary sm:mt-5 sm:text-xl">
                Satisfied Students
              </p>
            </Reveal>
            <Reveal delay={0.1} className="min-h-[200px] flex-1 rounded-xl border border-border-subtle bg-bg-surface1 p-6 sm:min-h-[250px] sm:p-10">
              <img
                className="m-auto w-20 sm:w-28"
                src="/sb2.png"
                alt="Student rating"
              />
              <h2 className="mt-4 text-center font-display text-3xl font-bold text-text-primary sm:mt-5 sm:text-4xl">
                5.0
              </h2>
              <p className="mt-3 text-center text-lg text-text-secondary sm:mt-5 sm:text-xl">
                Average Students rating
              </p>
            </Reveal>
            <Reveal delay={0.2} className="min-h-[200px] flex-1 rounded-xl border border-border-subtle bg-bg-surface1 p-6 sm:min-h-[250px] sm:p-10">
              <img
                className="m-auto w-20 sm:w-28"
                src="/sb3.png"
                alt="Trained students"
              />
              <h2 className="mt-4 text-center font-display text-3xl font-bold text-text-primary sm:mt-5 sm:text-4xl">
                6000+
              </h2>
              <p className="mt-3 text-center text-lg text-text-secondary sm:mt-5 sm:text-xl">
                Trained Students
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
