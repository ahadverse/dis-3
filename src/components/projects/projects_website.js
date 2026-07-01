"use client";

import React from "react";
import Reveal from "../motion/Reveal";
import StaggerGrid, { StaggerItem } from "../motion/StaggerGrid";
import Card from "../ui/Card";

const PROJECTS = [
  {
    image: "/project.jpg",
    title: "City Online Limited",
    category: "Web Development , UX & UI Design",
  },
  {
    image: "/project2.jpg",
    title: "Jack Creative Studio",
    category: "Web Development",
  },
  {
    image: "/project3.jpg",
    title: "Think Foodie",
    category: "Web Development",
  },
  {
    image: "/project4.jpg",
    title: "Imperial Jute",
    category: "Business Website Development",
  },
  {
    image: "/project5.jpg",
    title: "Clean & Green Carpet Cleaning",
    category: "Web Development , UX & UI Design",
  },
  {
    image: "/project6.jpg",
    title: "Photo Fix Zone",
    category: "Business Website Development",
  },
];

const Projects = () => {
  return (
    <div className="px-4 py-20">
      <Reveal direction="up">
        <p className="text-center font-display text-display-sm font-bold capitalize text-text-primary sm:text-display-md lg:text-display-lg">
          Websites Built and Empowered by WebKooker
        </p>
      </Reveal>
      <Reveal direction="up" delay={0.1}>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm font-semibold text-text-secondary md:text-base">
          We use a holistic approach that's reliant on the unique needs of
          our clients and their businesses, building websites from scratch,
          with their tone, voice, feel, and power in check. Here are a few of
          our major successes.
        </p>
      </Reveal>
      <StaggerGrid className="mx-auto mt-8 grid w-full max-w-5xl grid-cols-1 gap-6 md:mt-12 md:grid-cols-2 md:gap-10">
        {PROJECTS.map((project, index) => (
          <StaggerItem className="w-full" key={`${project.title}-${index}`}>
            <Card className="overflow-hidden p-0">
              <div className="overflow-hidden">
                <img
                  className="aspect-[550/380] h-auto w-full object-cover object-center transition-transform duration-500 ease-out hover:scale-105"
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className="p-5">
                <h1 className="text-center font-display text-xl font-bold text-text-primary sm:text-2xl">
                  {project.title}
                </h1>
                <p className="mt-1 text-center text-sm font-bold text-accent-blue-400 sm:text-md">
                  {project.category}
                </p>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </div>
  );
};

export default Projects;
