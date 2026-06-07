"use client";

import { cn } from "@/lib/utils";

type PDFIconProps = {
  className?: string;
};

export function PDFIcon({ className }: PDFIconProps) {
  return (
    <div
      className={cn(
        "relative flex h-24 w-24 items-center justify-center",
        className
      )}
      aria-label="PDF file"
      role="img"
    >
      <div className="relative h-24 w-18.5 rounded-[5px] border border-[#dcdfe3] bg-white shadow-[0_14px_20px_rgba(17,24,39,0.12),0_2px_5px_rgba(17,24,39,0.08)]">

        <div className="absolute left-3.75 top-3.75 flex w-11 flex-col gap-1.75">
          <div className="h-[3px] w-full rounded-full bg-[#eceef1]" />
          <div className="h-[3px] w-[34px] rounded-full bg-[#eceef1]" />
          <div className="h-[3px] w-[40px] rounded-full bg-[#eceef1]" />
          <div className="h-[3px] w-[29px] rounded-full bg-[#eceef1]" />
          <div className="h-[3px] w-[37px] rounded-full bg-[#eceef1]" />
          <div className="h-[3px] w-[25px] rounded-full bg-[#eceef1]" />
        </div>

        <div className="absolute bottom-[13px] left-[15px] h-[2px] w-[18px] rounded-full bg-[#101820]" />

        <div className="absolute -right-[12px] bottom-[10px] rounded-[5px] bg-[#ff2f65] px-[9px] py-[5px] text-[10px] font-semibold leading-none text-white shadow-[0_8px_14px_rgba(255,47,101,0.32)]">
          PDF
        </div>
      </div>
    </div>
  );
}
