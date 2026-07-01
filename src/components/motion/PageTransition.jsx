"use client";

// PageTransition previously used framer-motion's AnimatePresence mode="wait",
// which holds the incoming page until the exiting page's exit animation
// completes. In this environment framer-motion's JS-driven exit animations
// stall permanently, so every navigation left the next page blank
// indefinitely. Replaced with a lightweight CSS-transition approach: pages
// fade in via a CSS animation and exit immediately (no waiting), so
// navigation is never gated on a frozen JS animation.

import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <div key={pathname} className='page-transition-root'>
      <style>{`
        @keyframes page-fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .page-transition-root {
          animation: page-fade-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>
      {children}
    </div>
  );
};

export default PageTransition;
