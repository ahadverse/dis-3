"use client";

import ScrollToTop from "react-scroll-to-top";

const ScrollButton = () => {
  return (
    <ScrollToTop
      smooth
      width='18'
      color='#ffffff'
      className='flex items-center justify-center shadow-glowBlue transition-all hover:scale-105'
      style={{
        right: 20,
        bottom: 20,
        backgroundColor: "var(--accent-blue-500)",
        border: "1px solid var(--border-default)",
        borderRadius: "50%",
      }}
    />
  );
};

export default ScrollButton;
