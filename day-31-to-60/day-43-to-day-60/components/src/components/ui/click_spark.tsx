"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

type Spark = {
  id: number;
  x: number;
  y: number;
};

const PARTICLES = 12;

export default function ClickSpark() {
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      console.log("event triggered");
      const id = Date.now();

      setSparks((prev) => [
        ...prev,
        {
          id,
          x: e.clientX,
          y: e.clientY,
        },
      ]);

      setTimeout(() => {
        setSparks((prev) => prev.filter((s) => s.id !== id));
      }, 1000);
    };
    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-9999">
      {sparks.map((spark) => (
        <SparkBurst key={spark.id} {...spark} />
      ))}
    </div>
  );
}

function SparkBurst({ x, y }: { x: number; y: number }) {
  return (
    <>
      {Array.from({ length: PARTICLES }).map((_, i) => {
        const distance = 30;
        const angle = (i / 12) * Math.PI * 2;

        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;

        return (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full"
            style={{
              top: y,
              left: x,
              rotate: `${(angle * 180) / Math.PI}deg`,
              background:
                "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,220,100,1) 30%, rgba(255,120,0,1) 70%, rgba(255,120,0,0) 100%)",
            }}
            initial={{
              x: 0,
              y: 0,
              scale: 1,
              opacity: 1,
            }}
            animate={{
              x: dx,
              y: dy,
              opacity: 0,
              scale: 0,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          ></motion.div>
        );
      })}
    </>
  );
}
