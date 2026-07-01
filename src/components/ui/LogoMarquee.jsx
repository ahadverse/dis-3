"use client";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

/**
 * Infinite horizontal marquee, Framer-driven replacement for the old
 * CSS-keyframe `slide-left-right`/`slide-right-left` infinite-scroll pattern.
 * `items` is duplicated once internally to create a seamless loop.
 */
const LogoMarquee = ({ items = [], direction = "left", speed = 40, className = "", itemClassName = "" }) => {
  const loopItems = [...items, ...items];

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg-base to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg-base to-transparent" />
      <motion.div
        className="flex w-max items-center gap-12"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {loopItems.map((item, i) => (
          <div key={i} className={cn("flex shrink-0 items-center justify-center", itemClassName)}>
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoMarquee;
