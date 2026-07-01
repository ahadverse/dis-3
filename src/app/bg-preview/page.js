"use client";
import { useEffect, useRef } from "react";

const TILE = 14;
const grayTile = encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="${TILE}" height="${TILE}" viewBox="0 0 ${TILE} ${TILE}">
  <path d="M0 ${TILE/2} C ${TILE/4} ${TILE/4} ${TILE*3/4} ${TILE*3/4} ${TILE} ${TILE/2}"
        fill="none" stroke="#A8B0C3" stroke-opacity="0.12" stroke-width="0.5" stroke-linecap="round"/>
  <path d="M${TILE/2} 0 C ${TILE*3/4} ${TILE/4} ${TILE/4} ${TILE*3/4} ${TILE/2} ${TILE}"
        fill="none" stroke="#A8B0C3" stroke-opacity="0.12" stroke-width="0.5" stroke-linecap="round"/>
</svg>`);

export default function BgPreview() {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const points = useRef([]);
  const mouse = useRef({ x: -999, y: -999 });

  const onMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let raf;
    const draw = () => {
      points.current.push({ ...mouse.current, age: 0 });
      if (points.current.length > 80) points.current.shift();
      points.current.forEach((p) => p.age++);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 1; i < points.current.length - 2; i++) {
        const p0 = points.current[i - 1];
        const p1 = points.current[i];
        const p2 = points.current[i + 1];
        const age = p1.age / 80;
        const alpha = Math.max(0, 1 - age);

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
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-bg-base"
      onMouseMove={onMouseMove}
    >
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
          pointer-events: none;
        }
      `}</style>

      <div className="vinegrid-bg" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full pointer-events-none" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-text-primary">Vine Cursor Trail</h2>
        <p className="mt-4 max-w-lg text-text-secondary">Move your cursor to draw red vines.</p>
      </div>
    </section>
  );
}
