'use client';
import { useEffect, useRef } from "react";

export default function DotGrid() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const gap = 26;
    const radius = 140;
    const mouse = { x: -9999, y: -9999 };
    let raf;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    const move = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const leave = () => { mouse.x = -9999; mouse.y = -9999; };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let x = gap / 2; x < canvas.width; x += gap) {
        for (let y = gap / 2; y < canvas.height; y += gap) {
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.hypot(dx, dy);
          const t = Math.max(0, 1 - dist / radius);
          const push = t * 14;
          const px = dist ? x + (dx / dist) * push : x;
          const py = dist ? y + (dy / dist) * push : y;
          ctx.beginPath();
          ctx.arc(px, py, 1.5 + t * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = t > 0
            ? `rgba(249,115,22,${0.4 + t * 0.6})`
            : "rgba(99,102,241,0.4)";
          ctx.fill();
        }
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  return <canvas ref={ref} className="pointer-events-none absolute inset-0" />;
}
