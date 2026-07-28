import { SITE_URL } from "@/lib/seo/constants";
import { getAllBlogs } from "@/lib/actions/blogActions";

const STATIC_ROUTES = [
  { url: "/", changeFrequency: "weekly", priority: 1.0 },
  { url: "/about", changeFrequency: "monthly", priority: 0.6 },
  { url: "/contact", changeFrequency: "yearly", priority: 0.5 },
  { url: "/pricing", changeFrequency: "monthly", priority: 0.7 },
  { url: "/portfolios", changeFrequency: "monthly", priority: 0.6 },
  { url: "/blogs", changeFrequency: "weekly", priority: 0.7 },
  { url: "/services/search-engine-optimization", changeFrequency: "monthly", priority: 0.9 },
  { url: "/services/website-design-and-development", changeFrequency: "monthly", priority: 0.9 },
  { url: "/services/digital-marketing", changeFrequency: "monthly", priority: 0.9 },
  { url: "/services/lead-generation", changeFrequency: "monthly", priority: 0.9 },
  { url: "/services/social-media-marketing", changeFrequency: "monthly", priority: 0.9 },
  { url: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { url: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

export default async function sitemap() {
  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const { success, blogs } = await getAllBlogs(true);
  const blogEntries = success
    ? blogs.map((blog) => ({
        url: `${SITE_URL}/blogs/${blog.slug}`,
        lastModified: blog.updatedAt || blog.createdAt || new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      }))
    : [];

  return [...staticEntries, ...blogEntries];
}
