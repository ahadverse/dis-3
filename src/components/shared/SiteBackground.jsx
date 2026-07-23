"use client";
import { CIRCUIT_TILE as TILE, circuitTileOverlay as circuitTile } from "@/lib/circuitPattern";
// import { useEffect, useRef } from "react";

// ── Previous effect (vine-grid drift + red mouse-trail canvas) ──────────
// Commented out per request — kept in place in case we want to bring it
// back later. See git history for the original working version.
//
// const TILE = 18;
// const grayTile = encodeURIComponent(`
// <svg xmlns="http://www.w3.org/2000/svg" width="${TILE}" height="${TILE}" viewBox="0 0 ${TILE} ${TILE}">
//   <path d="M0 ${TILE/2} C ${TILE/4} ${TILE/4} ${TILE*3/4} ${TILE*3/4} ${TILE} ${TILE/2}"
//         fill="none" stroke="#A8B0C3" stroke-opacity="0.13" stroke-width="0.7" stroke-linecap="round"/>
//   <path d="M${TILE/2} 0 C ${TILE*3/4} ${TILE/4} ${TILE/4} ${TILE*3/4} ${TILE/2} ${TILE}"
//         fill="none" stroke="#A8B0C3" stroke-opacity="0.13" stroke-width="0.7" stroke-linecap="round"/>
// </svg>`);
//
// export default function SiteBackground() {
//   const canvasRef = useRef(null);
//   const mouse = useRef({ x: -999, y: -999 });
//
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     const points = [];
//
//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     resize();
//     window.addEventListener("resize", resize);
//
//     const onMove = (e) => { mouse.current = { x: e.clientX, y: e.clientY }; };
//     window.addEventListener("mousemove", onMove);
//
//     let raf;
//     const draw = () => {
//       points.push({ ...mouse.current, age: 0 });
//       if (points.length > 80) points.shift();
//       points.forEach((p) => p.age++);
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       for (let i = 1; i < points.length - 2; i++) {
//         const p0 = points[i - 1], p1 = points[i], p2 = points[i + 1];
//         const alpha = Math.max(0, 1 - p1.age / 80);
//         ctx.strokeStyle = `rgba(239,68,68,${alpha * 0.9})`;
//         ctx.lineWidth = Math.max(0.5, 3.5 * alpha);
//         ctx.lineCap = "round";
//         ctx.lineJoin = "round";
//         ctx.beginPath();
//         ctx.moveTo((p0.x + p1.x) / 2, (p0.y + p1.y) / 2);
//         ctx.quadraticCurveTo(p1.x, p1.y, (p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
//         ctx.stroke();
//       }
//       raf = requestAnimationFrame(draw);
//     };
//     raf = requestAnimationFrame(draw);
//
//     return () => {
//       cancelAnimationFrame(raf);
//       window.removeEventListener("resize", resize);
//       window.removeEventListener("mousemove", onMove);
//     };
//   }, []);
//
//   return (
//     <>
//       <div className="pointer-events-none fixed inset-0 z-[10] overflow-hidden">
//         <style>{`
//           @keyframes vinegrid-drift {
//             0%   { background-position: 0px 0px; }
//             100% { background-position: ${TILE}px ${TILE}px; }
//           }
//           .vinegrid-bg {
//             position: absolute;
//             inset: -${TILE}px;
//             background-image: url("data:image/svg+xml,${grayTile}");
//             background-size: ${TILE}px ${TILE}px;
//             animation: vinegrid-drift 14s linear infinite;
//           }
//         `}</style>
//         <div className="vinegrid-bg" />
//       </div>
//
//       <canvas
//         ref={canvasRef}
//         className="pointer-events-none fixed inset-0 z-[9999] h-full w-full"
//       />
//     </>
//   );
// }

// ── Current effect: abstract technology background (pure CSS/SVG) ───────
// A circuit-board-style tile (diagonal traces + glowing node dots) plus one
// soft ambient glow blob, drawn entirely with an inline SVG data-URI + CSS
// gradients — no photo asset.
//
// Placement: on top (z-[1]), pointer-events-none.
// "Behind content" (-z-10) was tried and confirmed (via devtools) to be
// completely invisible on every real page: nearly every page.js wraps its
// whole tree in its own <div className="bg-bg-base"> (opaque), which is a
// normal in-flow block and therefore paints above ANY negative z-index
// layer regardless of gaps — there is no page where -z-10 shows through.
//
// To keep it from visibly crossing cards/buttons (the actual complaint),
// Card and Button now explicitly set `relative z-10` (see ui/Card.jsx,
// ui/Button.jsx) — any element with its own explicit z-index paints above
// plain static content regardless of DOM order, so those two components
// intentionally out-rank this layer's z-[1] and sit cleanly above it,
// while plain page background/text (no explicit z-index) still shows the
// pattern through normally.

export default function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden>
      <style>{`
        @keyframes circuit-drift {
          0%   { background-position: 0px 0px; }
          100% { background-position: ${TILE}px ${TILE}px; }
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50%      { opacity: 0.5; transform: scale(1.1); }
        }
        .circuit-bg {
          position: absolute;
          inset: -${TILE}px;
          background-image: url("data:image/svg+xml,${circuitTile}");
          background-size: ${TILE}px ${TILE}px;
          animation: circuit-drift 50s linear infinite;
        }
        .light .circuit-bg {
          opacity: 0.4;
        }
        .circuit-glow {
          position: absolute;
          top: -10%;
          left: -5%;
          height: 40rem;
          width: 40rem;
          border-radius: 9999px;
          background: radial-gradient(closest-side, rgba(90,200,250,0.09), transparent 70%);
          filter: blur(90px);
          animation: glow-pulse 12s ease-in-out infinite;
        }
      `}</style>

      <div className="circuit-glow" />
      <div className="circuit-bg" />
    </div>
  );
}
