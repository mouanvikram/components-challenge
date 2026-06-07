"use client";

import { cn } from "@/lib/utils";

type MarkdownIconProps = {
  className?: string;
};

const paragraphLines = [
  "w-8",
  "w-11",
  "w-9",
  "w-10",
];

export function MarkdownIcon({ className }: MarkdownIconProps) {
  return (
    <div
      className={cn(
        "relative flex h-24 w-24 items-center justify-center",
        className
      )}
      aria-label="Markdown file"
      role="img"
    >
      <div className="relative h-24 w-18.5 rounded-[5px] border border-[#dcdfe3] bg-white shadow-[0_14px_20px_rgba(17,24,39,0.12),0_2px_5px_rgba(17,24,39,0.08)]">
        <div className="absolute -right-px -top-px h-4 w-4 overflow-hidden rounded-tr-[5px]">
          <div className="h-5.75 w-5.75 origin-top-left rotate-45 border-b border-[#dcdfe3] bg-[#f7f8fa]" />
        </div>

        <div className="absolute left-3.5 top-4 flex w-12 flex-col">
          <div className="mb-3 flex items-center gap-1.25">
            <div className="flex gap-0.5">
              <span className="h-1 w-2 rounded-full bg-[#c7ced7]" />
            </div>
            <span className="h-1 w-7 rounded-full bg-[#c9cdd2]" />
          </div>

          <div className="mb-3 flex flex-col gap-1">
            <span className="h-0.5 w-10 rounded-full bg-[#e4e7eb]" />
            <span className="h-0.5 w-12 rounded-full bg-[#e4e7eb]" />
            <span className="h-0.5 w-11 rounded-full bg-[#e4e7eb]" />
          </div>

          <div className="mb-1 flex items-center gap-1">
            <div className="flex gap-0.5">
              <span className="h-1 w-1 rounded-full bg-[#c7ced7]" />
              <span className="h-1 w-1 rounded-full bg-[#c7ced7]" />
            </div>
            <span className="h-1 w-8 rounded-full bg-[#c9cdd2]" />
          </div>

          <div className="flex flex-col gap-1">
            {paragraphLines.map((width, index) => (
              <span
                key={index}
                className={cn("h-0.5 rounded-full bg-[#e4e7eb]", width)}
              />
            ))}
          </div>
        </div>

        <div className="absolute -right-3.25 bottom-3 rounded-[5px] bg-[#4b5d73] px-2.25 py-1.25 text-[10px] font-semibold leading-none text-white shadow-[0_9px_14px_rgba(45,59,78,0.25)]">
          MD
        </div>
      </div>
    </div>
  );
}
