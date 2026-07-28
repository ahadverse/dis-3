import JsonLd from "./JsonLd";
import { SITE_URL, SITE_NAME } from "@/lib/seo/constants";

export default function BlogPostingJsonLd({ blog, url }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.metaDesc || blog.description,
    image: blog.thumbnail ? [blog.thumbnail] : undefined,
    datePublished: blog.createdAt,
    dateModified: blog.updatedAt || blog.createdAt,
    url: `${SITE_URL}${url}`,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return <JsonLd data={data} />;
}
