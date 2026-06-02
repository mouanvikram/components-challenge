'use client'
import { motion } from "motion/react";

export function ShinyText() {
  return (
    <motion.h1
      className="
        inline-block
        bg-[linear-gradient(110deg,#777,25%,#e4e4e4,75%,#777)]
        bg-size-[200%_100%]
        bg-clip-text
        text-transparent
        text-5xl
        font-bold
      "
      animate={{
        backgroundPosition: ["200% 0", "-200% 0"],
      }}
      transition={{
        repeat: Infinity,
        duration: 8,
        ease:"linear",
      }}
    >
      Shiny Text
    </motion.h1>
  );
}