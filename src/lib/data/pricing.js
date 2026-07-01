// Pricing tiers shown across the marketing site. Numbers reflect competitive
// Bangladesh agency rates for international (USD) clients — ~40-60% below US/UK rates.
export const pricingData = {
  "website-design": {
    heading: "Website Design & Development",
    model: "one-time",
    maintenanceAddOn: "Optional ongoing maintenance from $39/mo",
    tiers: [
      {
        id: "starter",
        name: "Starter",
        subtitle: "Suitable for local & small businesses",
        price: "$499",
        billing: "one-time",
        maintenance: "+ $39/mo maintenance (optional)",
        features: [
          "Up to 8 pages",
          "Custom responsive design",
          "Built with MERN stack (MongoDB, Express, React, Node.js)",
          "SSL certificate & basic security hardening",
          "Mobile-friendly layout",
          "Google Search Console & Analytics setup",
          "2 weeks delivery time",
        ],
      },
      {
        id: "growth",
        name: "Growth",
        subtitle: "Suitable for growing businesses",
        price: "$1,199",
        billing: "one-time",
        maintenance: "+ $59/mo maintenance (optional)",
        highlighted: true,
        features: [
          "Up to 20 pages",
          "Custom UX/UI design",
          "Built with MERN stack",
          "On-page SEO foundation",
          "Blog/content section setup",
          "Speed optimization",
          "3-4 weeks delivery time",
        ],
      },
      {
        id: "pro",
        name: "Pro (E-commerce)",
        subtitle: "Suitable for online stores",
        price: "$2,499",
        billing: "one-time",
        maintenance: "+ $89/mo maintenance (optional)",
        features: [
          "Built with MERN stack (custom e-commerce)",
          "Up to 100 products",
          "Payment gateway integration",
          "Custom product & category design",
          "Order/inventory workflow setup",
          "Speed & checkout optimization",
          "4-6 weeks delivery time",
        ],
      },
      {
        id: "custom",
        name: "Custom",
        subtitle: "Tailored for your exact requirements",
        price: "Let's Talk",
        billing: "",
        features: [
          "Fully custom scope & architecture",
          "Any tech stack or integration",
          "Dedicated project manager",
          "Priority support & SLA",
          "Flexible delivery timeline",
          "Ongoing retainer options available",
        ],
      },
    ],
  },
  "digital-marketing": {
    heading: "Digital Marketing",
    model: "retainer",
    tiers: [
      {
        id: "starter",
        name: "Starter",
        subtitle: "Suitable for local & small businesses",
        price: "$199",
        billing: "/mo",
        features: [
          "1-2 social platforms managed",
          "Content calendar & 12 posts/month",
          "Community engagement",
          "Monthly performance report",
        ],
      },
      {
        id: "growth",
        name: "Growth",
        subtitle: "Suitable for growing businesses",
        price: "$449",
        billing: "/mo",
        highlighted: true,
        features: [
          "3-4 social platforms managed",
          "Content calendar & 20+ posts/month",
          "Paid ad campaign management",
          "Community engagement & response",
          "Bi-weekly performance reporting",
        ],
      },
      {
        id: "pro",
        name: "Pro",
        subtitle: "Suitable for established brands",
        price: "$899",
        billing: "/mo",
        features: [
          "Full-service multi-platform management",
          "Paid ad strategy & optimization",
          "Influencer/partnership outreach",
          "Advanced analytics & CRO alignment",
          "Weekly performance reporting",
        ],
      },
      {
        id: "custom",
        name: "Custom",
        subtitle: "Tailored for your exact requirements",
        price: "Let's Talk",
        billing: "",
        features: [
          "Fully custom campaign strategy",
          "Any platform or channel",
          "Dedicated marketing manager",
          "Custom reporting & KPIs",
          "Flexible monthly scope",
        ],
      },
    ],
  },
  seo: {
    heading: "Search Engine Optimization",
    model: "retainer",
    tiers: [
      {
        id: "starter",
        name: "Starter",
        subtitle: "Suitable for local businesses",
        price: "$149",
        billing: "/mo",
        features: [
          "Local SEO & Google Business Profile optimization",
          "Keyword research & tracking",
          "On-page optimization (up to 10 pages)",
          "Quarterly technical audit",
        ],
      },
      {
        id: "growth",
        name: "Growth",
        subtitle: "Suitable for growing businesses",
        price: "$349",
        billing: "/mo",
        highlighted: true,
        features: [
          "On-page & technical SEO",
          "Content optimization & briefs",
          "Monthly link-building outreach",
          "Monthly performance reporting",
        ],
      },
      {
        id: "pro",
        name: "Pro",
        subtitle: "Suitable for competitive markets",
        price: "$699",
        billing: "/mo",
        features: [
          "Full technical audits & implementation guidance",
          "Content strategy & production",
          "Authority link building & digital PR",
          "Dedicated SEO manager",
          "Weekly performance reporting",
        ],
      },
      {
        id: "custom",
        name: "Custom",
        subtitle: "Tailored for your exact requirements",
        price: "Let's Talk",
        billing: "",
        features: [
          "Custom keyword & niche strategy",
          "Any market or language",
          "Dedicated SEO specialist",
          "Custom audit & reporting cadence",
          "Flexible monthly scope",
        ],
      },
    ],
  },
};

// Services without their own distinct pricing tiers reuse the closest match.
export const serviceKeyAliases = {
  smm: "digital-marketing",
  "lead-generation": "digital-marketing",
};

export function getPricing(serviceKey) {
  const key = serviceKeyAliases[serviceKey] || serviceKey;
  return pricingData[key];
}
