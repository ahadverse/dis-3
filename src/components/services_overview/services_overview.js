import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import Reveal from "../motion/Reveal";
import StaggerGrid, { StaggerItem } from "../motion/StaggerGrid";
import Card from "../ui/Card";
import { SERVICES } from "../../lib/data/services";

// SERVICES[0] (Website Design & Development) is the flagship offering —
// the hero and solution cards both funnel to it, so it gets the large card.
const FLAGSHIP_INCLUDES = [
  "Custom design & development",
  "Responsive on every device",
  "SEO-optimized structure",
  "Ongoing maintenance & support",
];

const FlagshipCard = ({ service }) => {
  const Icon = service.icon;
  return (
    <Link href={service.href} className="block h-full">
      <Card className="group relative flex h-full flex-col overflow-hidden p-8 sm:p-10">
        {/* soft glow + ghosted icon backdrop */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent-blue-500/10 blur-3xl opacity-70 transition-opacity duration-500 group-hover:opacity-100"
        />
        <Icon
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-10 -right-8 h-48 w-48 text-accent-blue-500/[0.07] transition-transform duration-500 group-hover:scale-105"
        />

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue-400">
          Flagship Service
        </p>
        <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-text-primary">
          {service.title}
        </h3>
        <p className="mt-3 max-w-md text-sm sm:text-base text-text-secondary">
          Subscription-based design, development, and maintenance — a complete
          web presence for one predictable monthly cost.
        </p>

        <ul className="mt-6 space-y-3">
          {FLAGSHIP_INCLUDES.map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-text-secondary">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent-blue-500/15 border border-accent-blue-500/40">
                <Check className="h-3 w-3 text-accent-blue-400" />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <span className="mt-auto flex items-center gap-2 pt-8 text-sm font-semibold text-accent-blue-400">
          Explore the service
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </Card>
    </Link>
  );
};

const ServiceCard = ({ service }) => {
  const Icon = service.icon;
  return (
    <Link href={service.href} className="block h-full">
      <Card className="group relative flex h-full flex-col p-6">
        <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-blue-400" />
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-blue-500/10 border border-accent-blue-500/30">
          <Icon className="h-5 w-5 text-accent-blue-400" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-text-primary">
          {service.title}
        </h3>
        <p className="mt-1.5 text-sm text-text-secondary">{service.tagline}</p>
      </Card>
    </Link>
  );
};

const Services_Overview = () => {
  const [flagship, ...others] = SERVICES;

  return (
    <div className="w-11/12 max-w-[1280px] m-auto px-4 py-16">
      <Reveal direction="up">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-blue-400 text-center">
          What We Do
        </p>
      </Reveal>
      <Reveal direction="up" delay={0.05}>
        <p className="font-display text-text-primary text-display-md sm:text-display-lg mt-3 font-bold capitalize text-center">
          Our Services
        </p>
      </Reveal>
      <Reveal direction="up" delay={0.1}>
        <p className="text-text-secondary font-semibold text-center w-full sm:w-6/12 m-auto mt-3 text-sm sm:text-base">
          Everything your business needs to launch, rank, and grow — under one
          affordable subscription.
        </p>
      </Reveal>

      <StaggerGrid className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <StaggerItem className="h-full sm:col-span-2 lg:row-span-2">
          <FlagshipCard service={flagship} />
        </StaggerItem>
        {others.map((service) => (
          <StaggerItem key={service.title} className="h-full">
            <ServiceCard service={service} />
          </StaggerItem>
        ))}
      </StaggerGrid>
    </div>
  );
};

export default Services_Overview;
