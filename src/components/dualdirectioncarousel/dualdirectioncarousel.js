"use client";
import LogoMarquee from "../ui/LogoMarquee";
import Reveal from "../motion/Reveal";

const data = [
  "/logos/airpro-1.svg",
  "/logos/Accounting-monk.svg",
  "/logos/ACDC.svg",
  "/logos/ADvance.svg",
  "/logos/Airexel.svg",
  "/logos/All-City-Janitor.svg",
  "/logos/Aus-Energy-Consultant.svg",
  "/logos/Aus-Energy-Upgrade.svg",
  "/logos/Austar-Energy.svg",
  "/logos/Chimney-Care-Pro.svg",
  "/logos/Cleaner-Consultant.svg",
  "/logos/Cleaning-Tools.svg",
  "/logos/Clipping-Path.svg",
  "/logos/Codezzi.svg",
];

const data2 = [
  "/logos2/Contruction-Leadspro.svg",
  "/logos2/Digitallyx.svg",
  "/logos2/DRV-Dental-Centre.svg",
  "/logos2/DRV-Medical-Centre.svg",
  "/logos2/Dustfreetoday.svg",
  "/logos2/Eco-Power-Solution.svg",
  "/logos2/Ezze-bezze.svg",
  "/logos2/Fron-Lead-Capital.svg",
  "/logos2/HVacLeads-Pro.svg",
  "/logos2/Imperial.svg",
  "/logos2/Janitorial-Leads-Pro.svg",
  "/logos2/Kimi.svg",
  "/logos2/MCA-1.svg",
  "/logos2/Mercy.svg",
];

const data3 = [
  "/logos3/Online-Gaming.svg",
  "/logos3/Price-Wholesale.svg",
  "/logos3/RAnk-Stair.svg",
  "/logos3/Roofing-Leads.svg",
  "/logos3/Sabdita.svg",
  "/logos3/SkyHope.svg",
  "/logos3/SkyLearn-1.svg",
  "/logos3/Solar-Leads.svg",
  "/logos3/Synergy.svg",
  "/logos3/Teachers-Against-Hate.svg",
  "/logos3/Techmart.svg",
  "/logos3/Unpoint.svg",
  "/logos3/Veltex.svg",
  "/logos3/Verginn-Trend.svg",
  "/logos3/Vertual-Assitat.svg",
];

const Chip = ({ src }) => (
  <div className="mr-3 flex h-[80px] w-[160px] items-center rounded-3xl border border-border bg-bg-surface2 py-3 transition-colors hover:border-accent-blue-500/40">
    <img className="h-[40px] w-[160px] px-2" src={src} alt="" />
  </div>
);

const HeadlineCarousel = () => {
  return (
    <div>
      <Reveal>
        <h2 className="text-center font-display text-3xl font-bold text-text-primary sm:text-4xl">
          Serving Clients Across Industries
        </h2>
      </Reveal>

      <div className="mt-12 flex flex-col gap-4">
        <LogoMarquee items={data.map((src) => <Chip key={src} src={src} />)} direction="left" speed={55} />
        <LogoMarquee items={data2.map((src) => <Chip key={src} src={src} />)} direction="right" speed={65} />
        <LogoMarquee items={data3.map((src) => <Chip key={src} src={src} />)} direction="left" speed={70} />
      </div>
    </div>
  );
};

export default HeadlineCarousel;
