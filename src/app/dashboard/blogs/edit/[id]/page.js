"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import {
  getBlogById,
  updateBlog,
} from "../../../../../lib/actions/blogActions";
import { getTinyMceApiKey } from "../../../../../lib/actions/settingsActions";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowLeft } from "lucide-react";
import ImageUploader from "../../../../../components/ImageUploader";
import Button from "../../../../../components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea"; // still used for metaDesc

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

export default function EditBlogPage({ params }) {
  const { id } = use(params);
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [tinymceApiKey, setTinymceApiKey] = useState(
    process.env.NEXT_PUBLIC_TINYMCE_API_KEY,
  );
  const router = useRouter();

  useEffect(() => {
    loadBlog();
  }, [id]);

  useEffect(() => {
    getTinyMceApiKey().then((result) => {
      if (result.success && result.apiKey) {
        setTinymceApiKey(result.apiKey);
      }
    });
  }, []);

  async function loadBlog() {
    const result = await getBlogById(id);

    if (result.success && result.blog) {
      setFormData(result.blog);
    } else {
      setError(result.error || "Failed to load blog");
    }
    setLoading(false);
  }

  function handleThumbnailUpload(url) {
    if (formData) {
      setFormData({ ...formData, thumbnail: url });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!formData) return;

    if (!formData.thumbnail) {
      setError("Thumbnail is required");
      return;
    }

    setError("");
    setSaving(true);

    const result = await updateBlog(id, {
      title: formData.title,
      description: formData.description,
      content: formData.content,
      thumbnail: formData.thumbnail,
      metaKey: formData.metaKey,
      metaDesc: formData.metaDesc,
      status: formData.status,
    });

    if (result.success) {
      router.push("/dashboard/blogs");
      router.refresh();
    } else {
      setError(result.error || "Failed to update blog");
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="text-center py-8 text-text-secondary">
        Loading blog...
      </div>
    );
  }

  if (!formData) {
    return (
      <div className="text-center py-8">
        <p className="text-error">{error || "Blog not found"}</p>
        <Link
          href="/dashboard/blogs"
          className="text-accent-blue-400 hover:underline mt-4 inline-block"
        >
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/dashboard/blogs"
          className="flex items-center gap-1 text-text-secondary hover:text-text-primary transition-colors duration-150"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blogs
        </Link>
        <h1 className="font-display text-4xl font-bold text-text-primary">
          Edit Blog
        </h1>
      </div>

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
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Thumbnail Image *
            </label>
            {formData.thumbnail && (
              <div className="mb-4">
                <p className="text-sm text-text-secondary mb-2">
                  Current thumbnail:
                </p>
                <img
                  src={formData.thumbnail}
                  alt="Current thumbnail"
                  className="w-full max-w-md h-64 object-cover rounded-lg border border-border"
                />
              </div>
            )}
            <ImageUploader
              onUpload={handleThumbnailUpload}
              label="Replace Thumbnail"
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
                apiKey={tinymceApiKey}
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
                value={formData.content || ""}
                onEditorChange={(content) =>
                  setFormData({ ...formData, content })
                }
                apiKey={tinymceApiKey}
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
              value={formData.metaKey || ""}
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
              value={formData.metaDesc || ""}
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

          <div className="border-t border-border-subtle pt-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Image Upload Utility
            </h3>
            <p className="text-sm text-text-secondary mb-4">
              Upload images here to get their CloudFront URLs, then paste them
              into TinyMCE editor
            </p>
            <ImageUploader label="Upload Editor Images" />
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="submit" disabled={saving}>
              {saving ? "Saving..." : "Save Changes"}
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
    </div>
  );
}
