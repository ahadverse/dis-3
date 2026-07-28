export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://digitalitsolution.com";

export const SITE_NAME = "DIS Private Limited";

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-KZDRLM3M95";

export const OG_IMAGE = "/logo.png";

export const DEFAULT_TITLE =
  "DIS Private Limited | SEO, Web Development & Digital Marketing";

export const DEFAULT_DESCRIPTION =
  "DIS Private Limited provides professional SEO, Web Development, Digital Marketing, Lead Generation and IT services to help businesses grow online worldwide.";

export const DEFAULT_KEYWORDS = [
  "affordable seo services",
  "web design services",
  "digital marketing services",
  "wordpress website design",
  "google ads management",
  "facebook ads management",
  "technical seo services",
  "local seo expert",
  "website maintenance",
  "lead generation services",
];

export const ORGANIZATION = {
  name: SITE_NAME,
  email: "disprivateltd@gmail.com",
  contactPoints: [
    {
      contactType: "customer service",
      telephone: "+61-483-955-567",
      email: "disprivateltd@gmail.com",
      areaServed: "AU",
    },
    {
      contactType: "customer service",
      telephone: "+1-347-656-3882",
      email: "disprivateltd@gmail.com",
      areaServed: "US",
    },
  ],
  addresses: [
    {
      streetAddress: "59 Marshall St",
      addressLocality: "Cobar",
      addressRegion: "NSW",
      postalCode: "2835",
      addressCountry: "AU",
    },
    {
      streetAddress: "8000 Baymeadows Cir E, Apt# 22",
      addressLocality: "Jacksonville",
      addressRegion: "FL",
      postalCode: "32256",
      addressCountry: "US",
    },
  ],
};
