"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { createContact } from "../../lib/actions/contactActions";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";

const ContactForm = () => {
  const params = useSearchParams();
  const plan = params.get("plan");
  const service = params.get("service");
  const price = params.get("price");

  const packageLabel = plan
    ? `${service} — ${plan} Plan${price && price !== "Let's Talk" ? ` (${price})` : ""}`
    : "";

  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const result = await createContact({
      ...form,
      package: packageLabel || undefined,
    });

    setLoading(false);

    if (result.success) {
      setStatus({ type: "success", message: "Message sent! We'll get back to you within one business day." });
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
      setStatus({ type: "error", message: result.error || "Something went wrong. Please try again." });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      {packageLabel && (
        <div className="rounded-lg border border-accent-blue-500/40 bg-accent-blue-500/10 px-4 py-3 text-sm">
          <span className="text-text-muted">Selected package: </span>
          <span className="font-semibold text-accent-blue-400">{packageLabel}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1.5">
            Name <span className="text-error">*</span>
          </label>
          <Input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1.5">
            Email <span className="text-error">*</span>
          </label>
          <Input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-text-secondary mb-1.5">
          Phone <span className="text-text-muted text-xs">(optional)</span>
        </label>
        <Input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+1 234 567 8900"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text-secondary mb-1.5">
          Message <span className="text-error">*</span>
        </label>
        <Textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your project, goals, and timeline..."
          rows={5}
          required
        />
      </div>

      {status && (
        <div
          className={`rounded-lg border px-4 py-3 text-sm ${
            status.type === "success"
              ? "border-success/30 bg-success/10 text-success"
              : "border-error/30 bg-error/10 text-error"
          }`}
        >
          {status.message}
        </div>
      )}

      <Button type="submit" pill className="w-full" disabled={loading}>
        {loading ? (
          <>
            <svg
              className="h-4 w-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
