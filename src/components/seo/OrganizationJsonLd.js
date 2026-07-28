import JsonLd from "./JsonLd";
import { SITE_URL, OG_IMAGE, ORGANIZATION } from "@/lib/seo/constants";

export default function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORGANIZATION.name,
    url: SITE_URL,
    logo: `${SITE_URL}${OG_IMAGE}`,
    email: ORGANIZATION.email,
    contactPoint: ORGANIZATION.contactPoints.map((c) => ({
      "@type": "ContactPoint",
      contactType: c.contactType,
      telephone: c.telephone,
      email: c.email,
      areaServed: c.areaServed,
    })),
    address: ORGANIZATION.addresses.map((a) => ({
      "@type": "PostalAddress",
      ...a,
    })),
  };

  return <JsonLd data={data} />;
}
