"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Scroll-reveal wrapper — drop-in replacement for the old
 * `<div data-aos="fade-up">` pattern used sitewide.
 *
 * Drives the transition with plain CSS (not Framer Motion's `animate` prop):
 * Framer Motion's JS-driven animations triggered by a post-mount prop change
 * (rather than on initial mount) stall on their first frame and never
 * progress in this environment. `useInView` itself (IntersectionObserver,
 * not Framer's animation engine) is unaffected, so it's kept for visibility
 * detection; only the actual opacity/transform transition moved to CSS.
 */
const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

const HIDDEN_TRANSFORM = {
  up: "translateY(28px)",
  down: "translateY(-28px)",
  left: "translateX(32px)",
  right: "translateX(-32px)",
  fade: "translateY(0)",
  scale: "scale(0.94)",
};

const Reveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  className = "",
  as: Component = "div",
  ...rest
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });
  const hiddenTransform = HIDDEN_TRANSFORM[direction] || HIDDEN_TRANSFORM.up;

  return (
    <Component
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translate(0, 0) scale(1)" : hiddenTransform,
        transition: `opacity ${duration}s ${EASE} ${delay}s, transform ${duration}s ${EASE} ${delay}s`,
        willChange: "opacity, transform",
      }}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Reveal;
