import React from "react";
import { CheckCircle2 } from "lucide-react";
import StaggerGrid, { StaggerItem } from "../../motion/StaggerGrid";

const ITEMS = [
  "Market Research & Competitors Analysis",
  "Making Plans & Ideas",
  "Search Engine Optimization (SEO)",
  "Social Media Marketing",
  "Targeted Email Marketing",
  "Promotional Video Marketing",
  "Sharing Pixels From Partner Sites",
  "Event and Value-based Lookalike Audience",
  "Third-Party Tag Integration",
  "Facebook Analytics",
  "Audience Insights",
  "Using LinkedIn for Better Facebook Remarketing",
  "Lowest-Cost Cap Bidding",
  "Web Analytics",
  "Facebook Conversion API Set-up",
  "GA4 Set-up & Tracking",
  "Google Tag Manager Set up",
  "Google Ads with Conversion Tracking",
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
