"use client";
import React, { useState } from "react";
import { Mail } from "lucide-react";
import Button from "../ui/Button";
import Reveal from "../motion/Reveal";
import { subscribeEmail } from "../../lib/actions/subscriberActions";

const Subcribe = ({ blog }) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    setLoading(true);
    setStatus(null);

    const result = await subscribeEmail(email);

    if (result.success) {
      setStatus({ type: "success", message: "Subscribed! Thanks for joining." });
      e.target.reset();
    } else {
      setStatus({ type: "error", message: result.error || "Something went wrong. Please try again." });
    }
    setLoading(false);
  };

  return (
    <div className={blog ? "my-1 py-0 text-text-primary" : "relative my-section overflow-hidden bg-bg-surface1 py-12"}>
      {!blog && (
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-accent-blue-500/15 blur-[100px]" />
      )}
      <Reveal className="flex w-full flex-col items-center justify-center px-4">
        <form onSubmit={handleSubmit} className="flex w-full max-w-[600px] flex-col items-center justify-center gap-3 sm:flex-row sm:gap-3">
          <div className="relative w-full sm:w-7/12">
            <Mail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
            <input
              name="email"
              type="email"
              required
              disabled={loading}
              className="w-full rounded-pill border border-border bg-bg-surface2 py-3 pl-11 pr-4 text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors focus:border-accent-blue-500 disabled:opacity-60 sm:py-4 sm:text-base"
              placeholder="Share your email"
            />
          </div>
          <Button type="submit" pill size="lg" disabled={loading} className="w-full sm:w-auto">
            {loading ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
        {status && (
          <p className={`mt-3 text-sm ${status.type === "success" ? "text-success" : "text-error"}`}>
            {status.message}
          </p>
        )}
      </Reveal>
    </div>
  );
};

export default Subcribe;
