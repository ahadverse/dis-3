"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

const VARIANT_CLASSES = {
  primary:
    "bg-gradient-primary text-white border border-transparent hover:shadow-glowAmber",
  secondary:
    "bg-bg-surface3 text-text-primary border border-border hover:border-accent-blue-500/60",
  outline:
    "bg-transparent text-text-primary border border-border hover:border-accent-blue-500 hover:text-accent-blue-400",
  ghost: "bg-transparent text-text-secondary hover:text-text-primary hover:bg-white/5 border border-transparent",
};

const SIZE_CLASSES = {
  sm: "text-sm px-4 py-1.5",
  md: "text-base sm:text-lg px-5 sm:px-8 py-2",
  lg: "text-lg sm:text-xl px-5 sm:px-12 py-2.5",
};

/**
 * Shared CTA button. `pill` renders the recurring rounded-r-[50px] +
 * arrow-grows-on-hover pattern used across the marketing pages.
 */
const Button = ({
  children,
  href,
  type = "button",
  variant = "primary",
  size = "md",
  pill = false,
  disabled = false,
  className = "",
  onClick,
  ...rest
}) => {
  const classes = cn(
    "group inline-flex items-center justify-center gap-3 font-semibold transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-50",
    VARIANT_CLASSES[variant] || VARIANT_CLASSES.primary,
    SIZE_CLASSES[size] || SIZE_CLASSES.md,
    pill ? "rounded-pill" : "rounded-lg",
    className
  );

  const content = (
    <>
      {children}
      {pill && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
      )}
    </>
  );

  const motionProps = disabled
    ? {}
    : { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 } };

  if (href && !disabled) {
    return (
      <motion.div className="inline-block" {...motionProps}>
        <Link href={href} className={classes} {...rest}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
      {...motionProps}
      {...rest}
    >
      {content}
    </motion.button>
  );
};

export default Button;
