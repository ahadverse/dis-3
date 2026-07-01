"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Ambient gradient-blur background shape for page heroes. Renders two soft
 * blurred blobs that drift slightly on scroll. Position absolutely within a
 * `relative overflow-hidden` hero container; this component is decorative
 * (aria-hidden) and sits behind content via z-index.
 */
const ParallaxBlob = ({ className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBlue = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yAmber = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <div ref={ref} aria-hidden className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <motion.div
        style={{ y: yBlue }}
        className="absolute -top-32 left-1/4 h-[28rem] w-[28rem] rounded-full bg-accent-blue-500/30 blur-[120px]"
      />
      <motion.div
        style={{ y: yAmber }}
        className="absolute top-1/3 right-1/4 h-[24rem] w-[24rem] rounded-full bg-accent-blue-400/15 blur-[120px]"
      />
    </div>
  );
};

export default ParallaxBlob;
