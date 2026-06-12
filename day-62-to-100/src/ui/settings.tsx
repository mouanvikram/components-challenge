"use client";

import {
  Lock,
  CircleDashed,
  WandSparkles,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const options = [
  {
    icon: Lock,
    title: "Internal Only",
    desc: "Only members can see this task",
  },
  {
    icon: CircleDashed,
    title: "Optional",
    desc: "Participants can skip this task",
  },

  {
    icon: WandSparkles,
    title: "Autocomplete",
    desc: "Automatically complete this task based on the object property",
  },
  {
    icon: SlidersHorizontal,
    title: "Conditional Visibility",
    desc: "Hide or show this task based on the object property",
  },
];

type SettingsItemProps = {
    index: number;
  option: (typeof options)[0];
  isActive: boolean;
  onClick: () => void;
};
function ProBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-600">
      <Sparkles className="h-3 w-3" />
      Pro Feature
    </span>
  );
}
function SettingsItem({ index, option, isActive, onClick }: SettingsItemProps) {
  return (
    <div
      className={`flex items-center py-3 px-2 rounded-lg cursor-pointer transition-colors `}
      onClick={onClick}
    >
      <div className=" rounded-lg mr-4">
        <option.icon size={20} className="text-gray-800" />
      </div>
      <div className="mr-3">
        <div className="flex gap-2">
          <h3 className="text-gray-800">{option.title}</h3>
          {index > 1 && <ProBadge />}
        </div>
        <p className="text-xs text-gray-500">{option.desc}</p>
      </div>
      <div className="ml-auto">
        <Toggle />
      </div>
    </div>
  );
}
export function Toggle() {
  const [enabled, setEnabled] = useState(true);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`relative flex h-5 w-10  items-center rounded-full p-1 transition-colors cursor-pointer ${
        enabled ? "bg-orange-500" : "bg-neutral-100 border-gray-100"
      }`}
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 35,
        }}
        className="h-3 w-3 rounded-full bg-white shadow-md"
        style={{
          marginLeft: enabled ? "auto" : 0,
        }}
      />
    </button>
  );
}

export default function Settings() {
  const [activeOption, setActiveOption] = useState(0);

  return (
    <div className=" max-w-2xl bg-white rounded-xl shadow-sm p-4">
      {options.map((option, index) => (
        <SettingsItem
          key={index}
          option={option}
          index = {index}
          isActive={activeOption === index}
          onClick={() => setActiveOption(index)}
        />
      ))}
    </div>
  );
}
