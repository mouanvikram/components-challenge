"use client";

import { cn } from "@/lib/utils";

type DocxIconProps = {
  className?: string;
};

const textRows = [
  [
    "h-[3px] w-5",
    "h-0.75 w-3",
    "h-[3px] w-6",
    "h-0.75 w-4",
  ],
  [
    "h-0.75 w-3.5",
    "h-[3px] w-7",
    "h-0.75 w-4.5",
  ],
  [
    "h-[3px] w-6.5",
    "h-0.75 w-4",
    "h-[3px] w-5",
    "h-0.75 w-3",
  ],
  [
    "h-0.75 w-4.5",
    "h-[3px] w-8",
    "h-0.75 w-3.5",
  ],
  [
    "h-[3px] w-5.5",
    "h-0.75 w-3",
    "h-[3px] w-6",
  ],
  [
    "h-0.75 w-7",
    "h-[3px] w-4",
    "h-0.75 w-5",
  ],
];

export function DocxIcon({ className }: DocxIconProps) {
  return (
    <div
      className={cn(
        "relative flex h-24 w-24 items-center justify-center",
        className
      )}
      aria-label="DOCX file"
      role="img"
    >
      <div className="relative h-24 w-18.5 rounded-[5px] border border-[#dcdfe3] bg-white shadow-[0_14px_20px_rgba(17,24,39,0.12),0_2px_5px_rgba(17,24,39,0.08)]">

        <div className="absolute left-3.5 top-3.75 flex w-12 flex-col gap-1.75">
          {textRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex items-center gap-1">
              {row.map((word, wordIndex) => (
                <span
                  key={`${rowIndex}-${wordIndex}`}
                  className={cn("rounded-full bg-[#e6eaf1]", word)}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="absolute bottom-[13px] left-[15px] flex items-end gap-1">
          <div className="h-[2px] w-[14px] rounded-full bg-[#1f2937]" />
          <div className="h-[2px] w-[7px] rounded-full bg-[#c7ced9]" />
        </div>

        <div className="absolute -right-[14px] bottom-[10px] rounded-[5px] bg-[#2563eb] px-[8px] py-[5px] text-[9px] font-semibold leading-none text-white shadow-[0_8px_14px_rgba(37,99,235,0.32)]">
          DOCX
        </div>
      </div>
    </div>
  );
}
