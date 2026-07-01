"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

/**
 * Count-up stat number. `value` is the final numeric target; `prefix`/`suffix`
 * wrap the rendered text (e.g. suffix="+", prefix="$").
 */
const AnimatedCounter = ({
  value,
  duration = 1.6,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => latest.toFixed(decimals));

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, { duration, ease: [0.16, 1, 0.3, 1] });
      return () => controls.stop();
    }
  }, [isInView, value, duration, motionValue]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
