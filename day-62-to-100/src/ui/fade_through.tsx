"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Play, Pause } from "lucide-react";

export function FadeThrough() {
  const [play, setPlay] = useState(false);

  return (
    <button
      className="w-30 h-12 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer"
      onClick={() => setPlay(!play)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={play ? "pause" : "play"}
          initial={{ opacity: 0,filter: "blur(2px)" }}
          animate={{ opacity: 1,filter: "blur(0px)" }}
          exit={{ opacity: 0,filter: "blur(2px)" }}
          transition={{ duration: 0.15}}
          className="flex items-center gap-2 text-gray-800 font-medium"
        >
          {play ? <Pause size={18} /> : <Play size={18} />}
          {play ? "Pause" : "Play"}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}