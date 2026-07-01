import { getPricing } from "../../lib/data/pricing";
import Calender_Modal from "../calendermodal/calendermodal";
import PricingCard from "./PricingCard";
import Reveal from "../motion/Reveal";
import StaggerGrid, { StaggerItem } from "../motion/StaggerGrid";

const PricingSection = ({ serviceKey, showBooking = true }) => {
  const service = getPricing(serviceKey);
  if (!service) return null;

  return (
    <div className="mt-12 sm:mt-16 px-4">
      <Reveal>
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold capitalize text-center mb-4 font-display text-text-primary">
          {service.heading}
        </p>
      </Reveal>
      {service.maintenanceAddOn && (
        <Reveal delay={0.1}>
          <p className="text-center text-text-muted text-sm mb-6">{service.maintenanceAddOn}</p>
        </Reveal>
      )}

      {showBooking && (
        <div className="flex justify-center mb-6 mt-6">
          <div className="w-full max-w-[calc(100%-2rem)] sm:max-w-[415px]">
            <Calender_Modal />
          </div>
        </div>
      )}

      <StaggerGrid className="flex flex-wrap justify-center items-stretch gap-4 sm:gap-6 max-w-[1400px] m-auto pt-4">
        {service.tiers.map((tier) => (
          <StaggerItem key={tier.id} className="flex w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-[400px]">
            <PricingCard tier={tier} serviceName={service.heading} />
          </StaggerItem>
        ))}
      </StaggerGrid>
    </div>
  );
};

export default PricingSection;
