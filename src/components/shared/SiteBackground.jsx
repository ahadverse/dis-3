"use client";
import { useEffect, useRef } from "react";

const TILE = 18;
const grayTile = encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="${TILE}" height="${TILE}" viewBox="0 0 ${TILE} ${TILE}">
  <path d="M0 ${TILE/2} C ${TILE/4} ${TILE/4} ${TILE*3/4} ${TILE*3/4} ${TILE} ${TILE/2}"
        fill="none" stroke="#A8B0C3" stroke-opacity="0.13" stroke-width="0.7" stroke-linecap="round"/>
  <path d="M${TILE/2} 0 C ${TILE*3/4} ${TILE/4} ${TILE/4} ${TILE*3/4} ${TILE/2} ${TILE}"
        fill="none" stroke="#A8B0C3" stroke-opacity="0.13" stroke-width="0.7" stroke-linecap="round"/>
</svg>`);

export default function SiteBackground() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const points = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e) => { mouse.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", onMove);

    let raf;
    const draw = () => {
      points.push({ ...mouse.current, age: 0 });
      if (points.length > 80) points.shift();
      points.forEach((p) => p.age++);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 1; i < points.length - 2; i++) {
        const p0 = points[i - 1], p1 = points[i], p2 = points[i + 1];
        const alpha = Math.max(0, 1 - p1.age / 80);
        ctx.strokeStyle = `rgba(239,68,68,${alpha * 0.9})`;
        ctx.lineWidth = Math.max(0.5, 3.5 * alpha);
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.beginPath();
        ctx.moveTo((p0.x + p1.x) / 2, (p0.y + p1.y) / 2);
        ctx.quadraticCurveTo(p1.x, p1.y, (p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
        ctx.stroke();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      {/* Vine grid — fixed overlay above all content so it's always visible.
          Opacity 0.13 keeps it subtle enough that section backgrounds still
          read clearly. pointer-events:none so nothing is blocked. */}
      <div className="pointer-events-none fixed inset-0 z-[10] overflow-hidden">
        <style>{`
          @keyframes vinegrid-drift {
            0%   { background-position: 0px 0px; }
            100% { background-position: ${TILE}px ${TILE}px; }
          }
          .vinegrid-bg {
            position: absolute;
            inset: -${TILE}px;
            background-image: url("data:image/svg+xml,${grayTile}");
            background-size: ${TILE}px ${TILE}px;
            animation: vinegrid-drift 14s linear infinite;
          }
        `}</style>
        <div className="vinegrid-bg" />
      </div>

      {/* Red cursor trail — above everything */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[9999] h-full w-full"
      />
    </>
  );
}
