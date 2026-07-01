import React from "react";
import { CheckCircle2 } from "lucide-react";
import StaggerGrid, { StaggerItem } from "../../motion/StaggerGrid";

const ITEMS = [
  "Websites Analysis And Audit",
  "Google Web Analytics",
  "Find Out Business Keywords",
  "Authorizes Social Media Accounts",
  "Research Keywords Competitors",
  "Follow Google Algorithm",
  "Manually On-Page Optimization",
  "Link Building Campaign",
  "Content Checking And Optimization",
  "Video Submission",
  "Google Webmaster Tool Setup",
  "Link Audit & Penguin Recovery",
  "Bing Webmaster Tool Setup",
  "Local SEO Services",
  "Yandex Webmaster Tool Setup",
  "Monitoring And Reporting",
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
