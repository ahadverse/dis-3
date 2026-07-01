import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";
import StaggerGrid, { StaggerItem } from "../motion/StaggerGrid";

const STEPS = [
  {
    image: "/web6.png",
    title: "Consultation & Planning",
    description:
      "The brainstorming session with clients that helps our WebDevs pinpoint the roles and goals the websites fulfills for their business.",
  },
  {
    image: "/web7.png",
    title: "Design & Prototype",
    description:
      "Creating wireframes and designs of the entire website, and checking with clients to determine the right design, method, and function.",
  },
  {
    image: "/web8.png",
    title: "Development",
    description:
      "Putting the pieces together, and creating the website design, and filling in with texts and images that brings the whole project together.",
  },
  {
    image: "/web9.png",
    title: "Testing & Launch",
    description:
      "A little online test drive that we do right before the final launch which allows us to measure the overall functionality the website fulfills.",
  },
  {
    image: "/web10.png",
    title: "Post-Launch Support",
    description:
      "Updating Content & Metrics to ensure the website is updated with all the spices it needs to make an impact online for your business.",
  },
];

const Workflow = () => {
  return (
    <Section background="surface1">
      <Reveal direction="up">
        <h1 className="text-center font-display text-display-sm font-bold text-text-primary sm:text-display-md lg:text-display-lg">
          Digital IT Solutions WorkFlow
        </h1>
      </Reveal>
      <Reveal direction="up" delay={0.1}>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-text-secondary md:text-lg">
          Trying to make the process as simple as ordering a takeout,
          we&apos;ve put together the game plan that&apos;ll get the ball
          rolling, and design a website in no time.
        </p>
      </Reveal>
      <StaggerGrid className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 md:mt-10 md:gap-6 lg:grid-cols-3">
        {STEPS.map((step) => (
          <StaggerItem key={step.title} className="p-4 text-center md:p-6">
            <img
              src={step.image}
              className="mx-auto h-auto w-32 object-contain md:w-40"
              alt={step.title}
            />
            <h1 className="my-3 font-display text-lg font-semibold text-text-primary md:text-xl">
              {step.title}
            </h1>
            <p className="text-sm text-text-secondary md:text-base">
              {step.description}
            </p>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </Section>
  );
};

export default Workflow;
