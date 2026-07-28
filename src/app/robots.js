import { SITE_URL } from "@/lib/seo/constants";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard", "/ziacaptcha", "/api", "/data"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
