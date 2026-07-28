import JsonLd from "./JsonLd";
import { SITE_URL } from "@/lib/seo/constants";

export default function BreadcrumbJsonLd({ items }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };

  return <JsonLd data={data} />;
}
