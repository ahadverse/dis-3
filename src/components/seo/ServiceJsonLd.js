import JsonLd from "./JsonLd";
import { SITE_URL, SITE_NAME } from "@/lib/seo/constants";

export default function ServiceJsonLd({ name, description, url }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${url}`,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return <JsonLd data={data} />;
}
