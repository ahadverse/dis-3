"use client";

import { useState, useEffect } from "react";
import { getTinyMceApiKey, updateTinyMceApiKey } from "@/lib/actions/settingsActions";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function SettingsPage() {
  const [apiKey, setApiKey] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    loadSettings();
  }, []);

  async function loadSettings() {
    setLoading(true);
    const result = await getTinyMceApiKey();
    if (result.success) {
      setApiKey(result.apiKey);
    } else {
      setError(result.error || "Failed to load settings");
    }
    setLoading(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError("");
    setSuccess("");

    const result = await updateTinyMceApiKey(apiKey);

    if (result.success) {
      setApiKey(result.apiKey);
      setSuccess("TinyMCE API token updated successfully");
    } else {
      setError(result.error || "Failed to update token");
    }
    setSaving(false);
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-4xl font-bold text-text-primary">
          Settings
        </h1>
      </div>

      <Card hover={false} className="p-6 max-w-2xl">
        <h2 className="font-display text-xl font-bold text-text-primary mb-1">
          TinyMCE API Token
        </h2>
        <p className="text-sm text-text-secondary mb-6">
          Used by the blog editor (Create/Edit Blog pages). Get a free key at{" "}
          <a
            href="https://www.tiny.cloud/auth/signup/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-blue-400 hover:underline"
          >
            tiny.cloud
          </a>
          . Overrides the NEXT_PUBLIC_TINYMCE_API_KEY env var once set here.
        </p>

        {error && (
          <div className="mb-4 p-4 bg-error/10 border border-error/30 text-error rounded-md text-sm">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 p-4 bg-success/10 border border-success/30 text-success rounded-md text-sm">
            {success}
          </div>
        )}

        {loading ? (
          <p className="text-text-muted text-sm">Loading...</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                API Token
              </label>
              <Input
                type="text"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Enter TinyMCE API token"
                disabled={saving}
              />
            </div>

            <Button type="submit" disabled={saving} variant="primary">
              {saving ? "Saving..." : "Save Token"}
            </Button>
          </form>
        )}
      </Card>
    </div>
  );
}
