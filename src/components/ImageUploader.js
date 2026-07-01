"use client";

import { useState, useRef } from "react";
import { Upload, X, Copy, Check, Loader2 } from "lucide-react";

export default function ImageUploader({
  onUpload,
  label = "Upload Image",
  type,
}) {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [previewSrc, setPreviewSrc] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const inputRef = useRef(null);

  async function handleFileSelect(e) {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    // Show local preview immediately
    const localUrl = URL.createObjectURL(file);
    setPreviewSrc(localUrl);
    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("images", file);

      const response = await fetch("/api/files", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Upload failed");

      const urls = await response.json();
      const uploadedUrl = urls[0];

      URL.revokeObjectURL(localUrl);
      setImageUrl(uploadedUrl);
      setPreviewSrc(uploadedUrl);

      if (onUpload) onUpload(uploadedUrl);
    } catch (err) {
      URL.revokeObjectURL(localUrl);
      setError(err.message || "Failed to upload image");
      setPreviewSrc("");
    } finally {
      setLoading(false);
    }
  }

  function copyToClipboard() {
    if (imageUrl) {
      navigator.clipboard.writeText(imageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  async function handleDeleteImage() {
    if (!imageUrl) return;
    setDeleting(true);
    setError("");
    try {
      const response = await fetch("/api/files", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: imageUrl }),
      });
      if (!response.ok) throw new Error("Failed to delete image");
      clearImage();
    } catch (err) {
      setError(err.message || "Failed to delete image from server");
    } finally {
      setDeleting(false);
    }
  }

  function clearImage() {
    setImageUrl("");
    setPreviewSrc("");
    setError("");
    setCopied(false);
    if (inputRef.current) inputRef.current.value = "";
    if (onUpload) onUpload("");
  }

  return (
    <div className="space-y-3">
      {!previewSrc ? (
        <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-border rounded-xl cursor-pointer bg-bg-surface2 hover:border-accent-blue-500/60 hover:bg-bg-surface3 transition-colors duration-200 group">
          <div className="flex flex-col items-center gap-2 text-text-muted group-hover:text-text-secondary transition-colors">
            <Upload size={28} />
            <span className="text-sm font-medium">{label}</span>
            <span className="text-xs">PNG, JPG, WEBP up to 10MB</span>
          </div>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            disabled={loading}
            className="hidden"
          />
        </label>
      ) : (
        <div className="relative w-full rounded-xl overflow-hidden border border-border bg-bg-surface2">
          <img
            src={previewSrc}
            alt="Preview"
            className="w-full h-52 object-cover"
          />
          {loading && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-2 text-white text-sm">
              <Loader2 size={18} className="animate-spin" /> Uploading...
            </div>
          )}
          {!loading && (
            <button
              type="button"
              onClick={handleDeleteImage}
              disabled={deleting}
              className="absolute top-2 right-2 rounded-full bg-black/60 p-1.5 text-white hover:bg-error/80 transition-colors duration-150 disabled:opacity-50"
              title="Remove image"
            >
              {deleting ? <Loader2 size={14} className="animate-spin" /> : <X size={14} />}
            </button>
          )}
        </div>
      )}

      {error && <p className="text-error text-sm">{error}</p>}

      {imageUrl && type !== "thumbnail" && (
        <div className="flex gap-2">
          <input
            type="text"
            value={imageUrl}
            readOnly
            className="flex-1 rounded-md border border-border bg-bg-surface3 px-3 py-2 text-text-secondary text-sm outline-none"
          />
          <button
            type="button"
            onClick={copyToClipboard}
            className="flex items-center gap-1.5 px-3 py-2 rounded-md bg-accent-blue-500/15 text-accent-blue-400 border border-accent-blue-500/30 hover:bg-accent-blue-500/25 transition-colors text-sm font-medium"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      )}
    </div>
  );
}
