import React from "react";
import { CheckCircle2 } from "lucide-react";
import StaggerGrid, { StaggerItem } from "../../motion/StaggerGrid";

const ITEMS = [
  "Target Audience Research & Analysis",
  "Landing Page Optimization",
  "Lead Magnet Creation & Strategy",
  "Multi-Channel Campaign Management",
  "Email Marketing Automation",
  "PPC Lead Generation Campaigns",
  "Social Media Lead Generation",
  "Content Marketing for Leads",
  "Lead Scoring & Qualification",
  "CRM Integration & Management",
  "Conversion Rate Optimization (CRO)",
  "Lead Nurturing Campaigns",
  "A/B Testing & Analytics",
  "Marketing Automation Setup",
  "Webinar & Event Lead Generation",
  "Performance Tracking & Reporting",
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
