import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";
import StaggerGrid, { StaggerItem } from "../motion/StaggerGrid";
import Card from "../ui/Card";

const SERVICES = [
  {
    image: "/web1.png",
    title: "Custom Website Design & Development",
    description:
      "Creates your online presence from scratch, according to your business goals.",
  },
  {
    image: "/web2.png",
    title: "Responsive & Mobile-Optimized Design",
    description:
      "Sets up your website's accessibility across all devices, pumping more visitors.",
  },
  {
    image: "/web3.png",
    title: "CMS Integration (WordPress, Shopify, etc.)",
    description:
      "No time for endless lines of code, we create sites with CMS mastery.",
  },
  {
    image: "/web4.png",
    title: "SEO-Optimized Website Structure",
    description:
      "SEO Optimized structures automatically set the site up for quick indexing & ranking,",
  },
];

const Calibrated = () => {
  return (
    <Section background="base">
      <Reveal direction="up">
        <h1 className="text-center font-display text-display-sm font-bold text-text-primary sm:text-display-md lg:text-display-lg">
          Calibrated Web Dev Services for Businesses
        </h1>
      </Reveal>
      <Reveal direction="up" delay={0.1}>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-text-secondary md:text-lg">
          A professional Web Design & Development process needs all
          supporting limbs. With our list of core services, we create
          successful web development projects for businesses.
        </p>
      </Reveal>
      <StaggerGrid className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        {SERVICES.map((service) => (
          <StaggerItem key={service.title}>
            <Card className="h-full p-6 md:p-8">
              <img src={service.image} className="h-16 w-16 object-contain" alt={service.title} />
              <h1 className="my-3 font-display text-lg font-bold text-text-primary md:text-xl">
                {service.title}
              </h1>
              <p className="text-sm text-text-secondary md:text-base">
                {service.description}
              </p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGrid>
      <Reveal direction="up" className="mx-auto mt-6 w-full md:w-1/2">
        <Card className="p-6 md:p-8">
          <img src="/web5.png" className="h-16 w-16 object-contain" alt="Website Maintenance and Support" />
          <h1 className="my-3 font-display text-lg font-bold text-text-primary md:text-xl">
            Website Maintenance and Support
          </h1>
          <p className="text-sm text-text-secondary md:text-base">
            Keeps your website updated, letting you add pages and products in
            a jiffy.
          </p>
        </Card>
      </Reveal>
    </Section>
  );
};

export default Calibrated;
