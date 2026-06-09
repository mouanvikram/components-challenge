"use client";

import { Search, Check } from "lucide-react";
import { cn } from "@/lib/utils";

type CardsStack1Props = {
  className?: string;
};

const invoiceFields = [
  { label: "Client", width: "w-[78px]" },
  { label: "Project", width: "w-[122px]" },
  { label: "Status", width: "w-[96px]" },
];

const stackCards = [
  "left-[50px] top-[48px] h-[274px] w-[306px] rounded-[19px]",
  "left-[38px] top-[56px] h-[278px] w-[334px] rounded-[20px]",
];

export default function CardsStack2({ className }: CardsStack1Props) {
  return (
    <div
      className={cn("relative h-100 w-105", className)}
      style={{
        maskImage:
          "linear-gradient(to bottom, black 0%, black 76%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 0%, black 76%, transparent 100%)",
      }}
    >
      {stackCards.map((card, index) => (
        <div
          key={card}
          className={cn(
            "absolute border border-[#dedede] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.03)]",
            card,
          )}
          style={{ zIndex: index + 1 }}
        />
      ))}

      <section className="absolute left-7.25 top-16 z-10 h-90 w-90.5 overflow-hidden rounded-[22px] border border-[#dddddd] bg-white px-9.5 pt-9 shadow-[0_18px_35px_rgba(15,23,42,0.05)]">
        <div className="mb-4 h-6.25 w-6.26">
          <div className="relative h-full w-full font-medium text-[#111111]">
            Workflow
          </div>
        </div>

        <div className="relative z-10">
          <div className="w-full flex items-center justify-between gap-4 bg-white py-2 ">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-md ">
                <div className="bg-gray-100 flex h-10 w-10 items-center justify-center rounded-md">
                  <Search size={20} className="text-gray-600" />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  Query Analysis
                </h3>
                <p className="text-xs text-gray-500">
                  Extract intent and entities
                </p>
              </div>
            </div>

            <div className="ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50">
              <Check size={14} className="text-emerald-500" strokeWidth={3} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
