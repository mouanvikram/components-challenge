"use client";

import { PDFIcon } from "@/components/ui/pdf_icon";
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
  "left-[50px] top-[36px] h-[274px] w-[306px] rounded-[19px]",
  "left-[38px] top-[48px] h-[278px] w-[334px] rounded-[20px]",
];

export function CardsStack1({ className }: CardsStack1Props) {
  return (
    <div
      className={cn(
        "relative h-[340px] w-[420px]",
        className
      )}
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
            card
          )}
          style={{ zIndex: index + 1 }}
        />
      ))}

      <section className="absolute left-[29px] top-[64px] z-10 h-[286px] w-[362px] overflow-hidden rounded-[22px] border border-[#dddddd] bg-white px-[38px] pt-[36px] shadow-[0_18px_35px_rgba(15,23,42,0.05)]">
        <PDFIcon className="absolute right-[23px] top-[31px] origin-top-right scale-[0.7]" />

        <div className="mb-[22px] h-[25px] w-[25px]">
          <div className="relative h-full w-full font-extrabold">
            M.
          </div>
        </div>

        <div className="relative z-10">
          <p className="mb-[6px] text-[13px] font-medium tracking-[0.01em] text-[#171717]">
            INV-204891
          </p>
          <p className="mb-[6px] text-[28px] font-semibold leading-none tracking-normal text-[#101010]">
            $18,240.90
          </p>
          <p className="text-[14px] font-semibold text-[#111111]">
            Payment due Friday
          </p>

          <div className="mt-[30px] flex flex-col gap-[14px]">
            {invoiceFields.map((field) => (
              <div key={field.label} className="flex items-center gap-[34px]">
                <span className="w-[46px] text-[15px] leading-none text-[#8e8f96]">
                  {field.label}
                </span>
                <span
                  className={cn(
                    "h-[9px] rounded-full bg-[#e9e9ea]",
                    field.width
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
