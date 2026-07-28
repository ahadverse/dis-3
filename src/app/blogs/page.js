import BlogsPageClient from "../../components/blogs/BlogsPageClient";

export const metadata = {
  title: "Blog",
  description:
    "Insights and guides on SEO, web development, digital marketing, and lead generation from the DIS Private Limited team.",
  keywords: ["seo blog", "digital marketing blog", "web development tips"],
  alternates: { canonical: "/blogs" },
};

export default function Blogs() {
  return <BlogsPageClient />;
}
