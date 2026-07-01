"use client";
import { useSearchParams } from "next/navigation";

const SelectedPlanBanner = () => {
  const params = useSearchParams();
  const plan = params.get("plan");
  const service = params.get("service");
  const price = params.get("price");

  if (!plan) return null;

  return (
    <div className="mb-8 rounded-xl border border-accent-blue-500/40 bg-accent-blue-500/10 px-5 py-4 text-center">
      <p className="text-sm text-text-muted">You selected</p>
      <p className="mt-1 text-lg font-bold text-text-primary">
        {service} — {plan} Plan
        {price && price !== "Let's Talk" && (
          <span className="ml-2 text-accent-blue-400">{price}</span>
        )}
      </p>
      <p className="mt-1 text-sm text-text-secondary">
        Tell us a bit about your project below and we'll get back to you within one business day.
      </p>
    </div>
  );
};

export default SelectedPlanBanner;
