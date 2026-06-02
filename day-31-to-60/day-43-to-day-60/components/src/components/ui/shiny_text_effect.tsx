'use client'
import { motion } from "motion/react";

export function ShinyText() {
  return (
    <motion.h1
      className="
        inline-block
        bg-[linear-gradient(110deg,#777,35%,#e4e4e4,65%,#777)]
        bg-size-[250%_140%]
        bg-clip-text
        text-transparent
        text-5xl
        font-bold
      "
      animate={{
        backgroundPosition: ["240% 0", "-240% 0"],
      }}
      transition={{
        repeat: Infinity,
        duration: 8,
        ease:"easeOut",
      }}
    >
      Shiny Text
    </motion.h1>
  );
}