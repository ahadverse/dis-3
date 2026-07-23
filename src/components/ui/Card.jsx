"use client";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

/**
 * Elevated surface card. Backs pricing/blog/portfolio cards and dashboard
 * stat cards. Set `hover` to lift + glow on hover.
 *
 * Plain solid surface, no pattern/texture. `relative z-10` is kept so the
 * global SiteBackground overlay (see SiteBackground.jsx, z-[1]) can never
 * cross over the card — it intentionally sits below Card/Button in z-index.
 */
const Card = ({
  children,
  className = "",
  hover = true,
  as: Component = "div",
  ...rest
}) => {
  const Wrapper = hover ? motion.div : Component;
  const motionProps = hover
    ? {
        whileHover: { y: -4 },
        transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
      }
    : {};

  return (
    <Wrapper
      className={cn(
        "relative z-10 isolate rounded-xl border border-border bg-gray-200 dark:bg-black shadow-card transition-shadow duration-300",
        hover && "hover:border-accent-blue-500/40 hover:shadow-cardHover",
        className,
      )}
      {...motionProps}
      {...rest}
    >
      {children}
    </Wrapper>
  );
};

export default Card;
