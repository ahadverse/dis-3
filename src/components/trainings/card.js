import React from "react";
import Link from "next/link";
import course from "../../../public/courses.json";
import Section from "../ui/Section";
import Card from "../ui/Card";
import StaggerGrid, { StaggerItem } from "../motion/StaggerGrid";

const TrainingCard = () => {
  return (
    <Section background="base">
      <StaggerGrid className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        {course.map((a, index) => (
          <StaggerItem key={index}>
            <Link href={`/our-course/${a?.permalink}`}>
              <Card className="group relative aspect-[380/480] w-full overflow-hidden p-0" hover>
                <img
                  src={a.courseImage}
                  alt={a.name}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 bg-bg-surface3/90 p-4 text-center backdrop-blur-sm">
                  <img className="w-6/12" src="/logo.png" alt="DIS" />
                  <h3 className="font-display text-lg font-bold text-text-primary sm:text-xl">
                    {a.name}
                  </h3>
                </div>
              </Card>
            </Link>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </Section>
  );
};

export default TrainingCard;
