'use client';
import { useEffect, useRef } from "react";

export default function ParallaxBg() {
  const back = useRef(null);
  const front = useRef(null);

  useEffect(() => {
    const target = { x: 0, y: 0 };
    const cur = { x: 0, y: 0 };
    let raf;

    const move = (e) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const tick = () => {
      cur.x += (target.x - cur.x) * 0.06;
      cur.y += (target.y - cur.y) * 0.06;
      if (back.current)
        back.current.style.transform = `translate(${-cur.x * 20}px, ${-cur.y * 20}px) scale(1.1)`;
      if (front.current)
        front.current.style.transform = `translate(${cur.x * 45}px, ${cur.y * 45}px) scale(1.15)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", move);
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div ref={back} className="absolute inset-0">
        <img src="/fond.png" alt="" className="h-full w-full object-cover opacity-30 blur-sm" />
      </div>
      <div ref={front} className="absolute inset-0">
        <div className="drift h-full w-full">
          <img src="/fond.png" alt="" className="h-full w-full object-cover opacity-80" />
        </div>
      </div>
    </div>
  );
}
