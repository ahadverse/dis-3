import { getBlogBySlug } from "../../../lib/actions/blogActions";
import Link from "next/link";
import Button from "../../../components/ui/Button";
import { ArrowLeft } from "lucide-react";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const result = await getBlogBySlug(slug);

  if (!result.success || !result.blog) {
    return {
      title: "Blog Not Found",
    };
  }

  const blog = result.blog;
  return {
    title: blog.title,
    description: blog.metaDesc || blog.description,
    keywords: blog.metaKey,
    openGraph: {
      title: blog.title,
      description: blog.metaDesc || blog.description,
      images: blog.thumbnail ? [blog.thumbnail] : [],
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const result = await getBlogBySlug(slug);

  if (!result.success || !result.blog) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-bg-base px-4'>
        <div className='text-center'>
          <h1 className='mb-4 font-display text-4xl font-bold text-text-primary'>
            Blog Not Found
          </h1>
          <p className='mb-8 text-text-secondary'>
            The blog post you&apos;re looking for doesn&apos;t exist or has been
            removed.
          </p>
          <Button href='/blogs'>Back to Blogs</Button>
        </div>
      </div>
    );
  }

  const blog = result.blog;

  return (
    <div className='min-h-screen bg-bg-base px-4 py-12 sm:px-6 lg:px-8'>
      <article className='mx-auto max-w-4xl'>
        <div className='mb-6'>
          <Link
            href='/blogs'
            className='inline-flex items-center gap-1.5 text-sm font-medium text-accent-blue-400 transition-colors hover:text-accent-blue-400/80'
          >
            <ArrowLeft size={16} />
            Back to Blogs
          </Link>
        </div>

        {blog.thumbnail && (
          <div className='mb-8 h-96 w-full overflow-hidden rounded-xl border border-border'>
            <img
              src={blog.thumbnail}
              alt={blog.title}
              className='h-full w-full object-cover'
            />
          </div>
        )}

        <header className='mb-8'>
          <h1 className='mb-4 font-display text-4xl font-bold text-text-primary sm:text-5xl'>
            {blog.title}
          </h1>

          <div className='flex flex-wrap gap-4 text-sm text-text-muted'>
            <span>
              Published:{" "}
              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            {blog.metaKey && (
              <span className='text-text-muted'>Tags: {blog.metaKey}</span>
            )}
          </div>
        </header>

        <div className='rounded-xl border border-border bg-bg-surface2 p-8 shadow-card sm:p-12'>
          <section className='mb-12'>
            <h2 className='mb-4 font-display text-2xl font-bold text-text-primary'>
              Overview
            </h2>
            <div
              className='prose dark:prose-invert max-w-none prose-headings:font-display prose-a:text-accent-blue-400 prose-strong:text-text-primary'
              dangerouslySetInnerHTML={{ __html: blog.description }}
            />
          </section>

          {blog.content && (
            <section>
              <h2 className='mb-4 font-display text-2xl font-bold text-text-primary'>
                Details
              </h2>
              <div
                className='prose dark:prose-invert max-w-none prose-headings:font-display prose-a:text-accent-blue-400 prose-strong:text-text-primary'
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </section>
          )}

          <div className='mt-12 border-t border-border pt-8'>
            <Button href='/blogs'>← Back to All Blogs</Button>
          </div>
        </div>
      </article>
    </div>
  );
}
