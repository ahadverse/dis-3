"use client";

import { useInView } from "framer-motion";
import { createContext, useContext, useRef } from "react";

/**
 * Wrap a grid/list of items with staggered entrance.
 * Each direct child should be wrapped in <StaggerItem> (exported alongside this).
 *
 * Driven by plain CSS transitions, not Framer Motion's `animate`/variants
 * propagation — see the comment in Reveal.jsx for why.
 */
const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
const StaggerContext = createContext(null);

const StaggerGrid = ({
  children,
  className = "",
  stagger = 0.12,
  delayChildren = 0,
  once = true,
  amount = 0.15,
  as: Component = "div",
  ...rest
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });
  const counterRef = useRef(0);
  counterRef.current = 0;

  return (
    <Component ref={ref} className={className} {...rest}>
      <StaggerContext.Provider value={{ isInView, stagger, delayChildren, counterRef }}>
        {children}
      </StaggerContext.Provider>
    </Component>
  );
};

export const StaggerItem = ({ children, className = "", ...rest }) => {
  const ctx = useContext(StaggerContext);
  const indexRef = useRef(null);
  if (indexRef.current === null && ctx) {
    indexRef.current = ctx.counterRef.current++;
  }
  const index = indexRef.current ?? 0;
  const isInView = ctx?.isInView ?? true;
  const delay = (ctx?.delayChildren ?? 0) + index * (ctx?.stagger ?? 0.12);

  return (
    <div
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ${EASE} ${delay}s, transform 0.6s ${EASE} ${delay}s`,
        willChange: "opacity, transform",
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default StaggerGrid;
