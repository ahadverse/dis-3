import { cn } from "../../lib/utils";

const VARIANT_CLASSES = {
  blue: "bg-accent-blue-500/15 text-accent-blue-400 border-accent-blue-500/30",
  amber: "bg-accent-blue-500/15 text-accent-blue-400 border-accent-blue-500/30",
  success: "bg-success/15 text-success border-success/30",
  error: "bg-error/15 text-error border-error/30",
  neutral: "bg-bg-surface3 text-text-secondary border-border",
};

/**
 * Small pill label. Used for "Most Popular" pricing badges, blog tags, and
 * dashboard status indicators (e.g. "replied").
 */
const Badge = ({ children, variant = "blue", className = "" }) => (
  <span
    className={cn(
      "inline-flex items-center rounded-pill border px-3 py-1 text-xs font-semibold uppercase tracking-wide",
      VARIANT_CLASSES[variant] || VARIANT_CLASSES.blue,
      className
    )}
  >
    {children}
  </span>
);

export default Badge;
