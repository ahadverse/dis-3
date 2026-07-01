import React from "react";
import { CheckCircle2 } from "lucide-react";
import StaggerGrid, { StaggerItem } from "../../motion/StaggerGrid";

const ITEMS = [
  "Evaluate Social Media Strategy",
  "Analytics And Conversion Optimization",
  "Content Marketing Measurement",
  "Make Tagging And Bookmarking Easy",
  "Engaging With The Target Audience",
  "Focus Encourage The Mashup",
  "Content Gap Analytics Reports",
  "Schedule Posts In Advance",
  "Make Content Shareable And Engageable",
  "Important Social Media Optimization Tactics",
  "Leveraging Various Social Media Tools",
  "Link Audit & Penguin Recovery",
  "Engage With Influencers Traffics",
  "Work Out When To Post",
  "Reuse Content To Combat Increasing ROI",
  "How To Become An Influence",
  "Make Your Content Unique And Different",
  "Run Campaign Targeted Location",
];

const Business = () => {
  return (
    <StaggerGrid
      as="div"
      className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-3 p-4 sm:grid-cols-2 sm:gap-5 sm:p-5"
    >
      {ITEMS.map((item) => (
        <StaggerItem key={item} className="flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-accent-blue-400" />
          <h1 className="text-lg text-text-primary sm:text-2xl">{item}</h1>
        </StaggerItem>
      ))}
    </StaggerGrid>
  );
};

export default Business;
