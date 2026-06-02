"use client";

import { motion, Variants } from "motion/react";
const containers = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
    filter: "blur(5px)",
  },
  show: {
    opacity: [0,1,1],
    y: [-30,0,0],
    filter: ["blur(5px)","blur(5px)","blur(0px)"],
    transition: {
      duration: 3,
      times:[0,0.3,1],
      ease: [0.25, 1, 0.35, 1],
    },
  },
};

const text = "Build Beautiful Interfaces";
export function BlurLandingText() {
  return (
    <motion.h1
      variants={containers}
      initial="hidden"
      animate="show"
      className="text-3xl font-bold"
    >
      {text.split(" ").map((word, i) => (
        <motion.span key={i} variants={item} className="inline-block mr-3">
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}
