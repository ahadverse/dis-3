"use client";
import { motion } from "framer-motion";

export default function MotionTest() {
  return (
    <div className="flex flex-col gap-12 bg-bg-base p-12 text-text-primary">
      <div>
        <p id="label-div">1. Plain HTML div, rotate forever</p>
        <motion.div
          id="test-div"
          className="h-20 w-20 bg-accent-blue-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div>
        <p id="label-svg-simple">2. Plain SVG motion.circle, rotate forever (no keyframe array)</p>
        <svg width="200" height="200" viewBox="0 0 200 200">
          <motion.circle
            id="test-circle"
            cx="100"
            cy="50"
            r="20"
            fill="#2F8FFF"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{ originX: "100px", originY: "100px" }}
          />
        </svg>
      </div>

      <div>
        <p id="label-svg-g-keyframes">3. SVG motion.g, keyframe array rotate, fraction origin (my Leaf pattern)</p>
        <svg width="200" height="200" viewBox="0 0 200 200">
          <g transform="translate(100 100)">
            <motion.g
              id="test-g"
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: [-20, 20, -20] }}
              transition={{
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
                rotate: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
              style={{ originX: 0.5, originY: 1 }}
            >
              <rect x="-10" y="-40" width="20" height="40" fill="#F5A623" />
            </motion.g>
          </g>
        </svg>
      </div>
    </div>
  );
}
