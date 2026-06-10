"use client";

import { cn } from "@/lib/utils";
import {
  AlertCircle,
  CheckCircle2,
  CircleX,
  Clock3,
  X,
} from "lucide-react";

export default function StatusCards() {
  const cards = [
    {
      icon: <CheckCircle2 size={16} />,
      iconClass: "bg-green-50 text-green-600",
      glowClass: "bg-green-300/40",

      title: "Workspace published",

      description:
        "Your changes are now live and visible to collaborators.",

      actions: (
        <>
          <button className="h-11 flex-1 rounded-xl bg-neutral-100 text-sm font-medium transition-colors hover:bg-neutral-200">
            View Workspace
          </button>

          <button className="h-11 flex-1 rounded-xl bg-black text-sm font-medium text-white transition-opacity hover:opacity-90">
            Continue
          </button>
        </>
      ),
    },

    {
      icon: <Clock3 size={16} />,
      iconClass: "bg-violet-50 text-violet-600",
      glowClass: "bg-violet-300/40",

      title: "Syncing content",

      description:
        "We're updating your assets across all connected devices.",

      actions: (
        <button className="h-11 w-full rounded-xl bg-neutral-100 text-sm font-medium transition-colors hover:bg-neutral-200">
          View Progress
        </button>
      ),
    },

    {
      icon: <CircleX size={16} />,
      iconClass: "bg-red-50 text-red-600",
      glowClass: "bg-red-300/40",

      title: "Upload interrupted",

      description:
        "The connection was lost before all files could finish uploading.",

      actions: (
        <button className="h-11 w-full rounded-xl bg-black text-sm font-medium text-white transition-opacity hover:opacity-90">
          Retry Upload
        </button>
      ),
    },

    {
      icon: <AlertCircle size={16} />,
      iconClass: "bg-orange-50 text-orange-600",
      glowClass: "bg-orange-300/40",

      title: "Storage almost full",

      description:
        "You're approaching your workspace storage limit.",

      actions: (
        <>
          <button className="h-11 flex-1 rounded-xl bg-neutral-100 text-sm font-medium transition-colors hover:bg-neutral-200">
            Manage Storage
          </button>

          <button className="h-11 flex-1 rounded-xl bg-black text-sm font-medium text-white transition-opacity hover:opacity-90">
            Upgrade
          </button>
        </>
      ),
    },
  ];

  return (
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8">
        {cards.map((card, i) => (
          <div
            key={i}
            className="relative flex justify-between h-85 min-w-90 flex-col overflow-hidden rounded-3xl border border-neutral-200/70 bg-white p-4 pt-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)]"
          >
            <button className="absolute right-3 top-3 z-20 flex size-6 items-center justify-center rounded-full bg-neutral-100 text-neutral-400 transition-colors hover:bg-neutral-200">
              <X size={14} />
            </button>

            <div className="relative z-10">
              <div className="relative mx-auto flex justify-center">
                {/* Large centered glow (5x+ icon size) */}
                <div
                  className={cn(
                    "absolute left-1/2 top-1/2 size-40 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl",
                    card.glowClass
                  )}
                />

                {/* Icon */}
                <div
                  className={cn(
                    "relative flex size-12 items-center justify-center rounded-full border border-neutral-200/60 shadow-sm",
                    card.iconClass
                  )}
                >
                  {card.icon}
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8 flex flex-1 flex-col items-center text-center">
              <h3 className="max-w-[220px] text-lg font-medium tracking-tight text-neutral-900">
                {card.title}
              </h3>

              <p className="mt-3 max-w-[220px] text-sm leading-relaxed text-neutral-500">
                {card.description}
              </p>
            </div>

            <div className="relative z-10 flex gap-2">
              {card.actions}
            </div>
          </div>
        ))}
      </div>
  );
}