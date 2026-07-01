"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createBlog } from "../../../../lib/actions/blogActions";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowLeft, X } from "lucide-react";
import ImageUploader from "../../../../components/ImageUploader";
import Button from "../../../../components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";

const TINYMCE_INIT = {
  menubar: true,
  skin: "oxide-dark",
  content_css: "dark",
  plugins: [
    "advlist", "autolink", "lists", "link", "image", "charmap",
    "anchor", "searchreplace", "visualblocks", "code", "fullscreen",
    "insertdatetime", "media", "table", "wordcount", "help",
  ],
  toolbar:
    "undo redo | styles | bold italic underline strikethrough | forecolor backcolor | " +
    "alignleft aligncenter alignright alignjustify | " +
    "bullist numlist outdent indent | link image media table | " +
    "code fullscreen | removeformat help",
  toolbar_sticky: true,
  link_default_target: "_blank",
  link_assume_external_targets: true,
  image_advtab: true,
};

const Editor = dynamic(
  () => import("@tinymce/tinymce-react").then((mod) => mod.Editor),
  {
    ssr: false,
    loading: () => <p className="text-text-muted">Loading editor...</p>,
  },
);

export default function CreateBlogPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    thumbnail: "",
    metaKey: "",
    metaDesc: "",
    status: "draft",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showImageModal, setShowImageModal] = useState(false);
  const router = useRouter();

  function handleThumbnailUpload(url) {
    setFormData({ ...formData, thumbnail: url });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!formData.thumbnail) {
      setError("Please upload a thumbnail image");
      return;
    }

    setLoading(true);

    const result = await createBlog(formData);

    if (result.success) {
      router.push("/dashboard/blogs");
      router.refresh();
    } else {
      setError(result.error || "Failed to create blog");
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <h1 className="font-display text-4xl font-bold text-text-primary">
          Create Blog
        </h1>
        <Link
          href="/dashboard/blogs"
          className="flex items-center gap-1 text-text-secondary hover:text-text-primary transition-colors duration-150"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blogs
        </Link>
      </div>
      <Button
        type="button"
        onClick={() => setShowImageModal(true)}
        size="sm"
        variant="secondary"
        className="mb-2 block w-fit ml-auto"
      >
        Extra Image
      </Button>
      {error && (
        <div className="mb-4 p-4 bg-error/10 border border-error/30 text-error rounded-md text-sm">
          {error}
        </div>
      )}
      <Card hover={false} as="form" onSubmit={handleSubmit} className="p-8 max-w-4xl">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Title *
            </label>
            <Input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              placeholder="Blog title"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Thumbnail Image *
            </label>
            <ImageUploader
              onUpload={handleThumbnailUpload}
              label="Upload Thumbnail"
              type="thumbnail"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Short Description *
              <span className="ml-1 text-xs text-text-muted font-normal">(shown in blog cards/previews)</span>
            </label>
            <div className="rounded-md overflow-hidden border border-border">
              <Editor
                value={formData.description}
                onEditorChange={(content) =>
                  setFormData({ ...formData, description: content })
                }
                apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
                init={{ height: 220, ...TINYMCE_INIT }}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Full Content
              <span className="ml-1 text-xs text-text-muted font-normal">(the full article body)</span>
            </label>
            <div className="rounded-md overflow-hidden border border-border">
              <Editor
                value={formData.content}
                onEditorChange={(content) =>
                  setFormData({ ...formData, content })
                }
                apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
                init={{ height: 500, ...TINYMCE_INIT }}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Meta Keywords
            </label>
            <Input
              type="text"
              value={formData.metaKey}
              onChange={(e) =>
                setFormData({ ...formData, metaKey: e.target.value })
              }
              placeholder="keywords, for, seo"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Meta Description
            </label>
            <Textarea
              value={formData.metaDesc}
              onChange={(e) =>
                setFormData({ ...formData, metaDesc: e.target.value })
              }
              placeholder="Description for search engines"
              rows={2}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Status *
            </label>
            <select
              value={formData.status}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  status: e.target.value,
                })
              }
              className="w-full rounded-md border border-border bg-bg-surface2 px-4 py-2.5 text-text-primary outline-none transition-colors duration-200 focus:border-accent-blue-500 focus:ring-2 focus:ring-accent-blue-500/20"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="submit" disabled={loading}>
              {loading ? "Creating..." : "Create Blog"}
            </Button>
            <Link
              href="/dashboard/blogs"
              className="px-6 py-2 border border-border rounded-lg text-text-secondary hover:bg-white/5 hover:text-text-primary transition-colors duration-150 inline-flex items-center"
            >
              Cancel
            </Link>
          </div>
        </div>
      </Card>
      {/* Image Upload Modal */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <Card
            hover={false}
            className="p-8 max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl font-bold text-text-primary">
                Upload Images
              </h2>
              <button
                onClick={() => setShowImageModal(false)}
                className="text-text-muted hover:text-text-primary transition-colors duration-150"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <p className="text-sm text-text-secondary mb-6">
              Upload images here to get their CloudFront URLs, then copy and
              paste them into the TinyMCE editor.
            </p>

            <ImageUploader label="Upload Editor Images" />

            <Button
              onClick={() => setShowImageModal(false)}
              className="w-full mt-6"
            >
              Close
            </Button>
          </Card>
        </div>
      )}{" "}
    </div>
  );
}
