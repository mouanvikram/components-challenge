"use client";

import { useEffect, useRef } from "react";

type Wave = {
  radius: number;
};

export function RadialScales() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = 500;
    canvas.width = size * window.devicePixelRatio;
    canvas.height = size * window.devicePixelRatio;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;

    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const center = size / 2;
    const maxRadius = center;

    const waves: Wave[] = [];
    const spawnInterval = 320;

    let lastSpawn = 0;
    let animationId: number;
    let lastTime = performance.now();
    function animate(time: number) {
      const dt = (time - lastTime) / 1000;
      lastTime = time;
      ctx?.clearRect(0, 0, size, size);

      if (time - lastSpawn > spawnInterval) {
        waves.push({ radius: 0 });
        lastSpawn = time;
      }

      for (let i = waves.length - 1; i >= 0; i--) {
        const wave = waves[i];

        wave.radius += 30*dt;

        const progress = wave.radius / maxRadius;

        if (progress >= 1) {
          waves.splice(i, 1);
          continue;
        }

        const opacity = Math.pow(1 - progress, 1.5);

        ctx?.beginPath();
        ctx?.arc(center, center, wave.radius, 0, Math.PI * 2);
        ctx!.strokeStyle = `rgba(200,200,200,${opacity})`;
        ctx!.lineWidth = 1;
        ctx?.stroke();
      }

      animationId = requestAnimationFrame(animate);
    }

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="relative size-125 overflow-hidden rounded-full">
      <canvas ref={canvasRef} className="absolute inset-0 size-full" />
    </div>
  );
}
