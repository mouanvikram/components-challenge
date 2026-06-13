"use client";

import {
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronRight,
  Circle,
  Layers3,
  UserRound,
  UserRoundPlus,
  X,
} from "lucide-react";
import { useState } from "react";

export type FilterStatus = "To-do" | "In Progress" | "Completed";

export type FilterPopoverProps = {
  initialStatus?: FilterStatus;
  onApply?: (status: FilterStatus) => void;
  onClose?: () => void;
  className?: string;
};

const filters = [
  { label: "Select date", icon: CalendarDays },
  { label: "Product", icon: Layers3, count: 2 },
  { label: "Status", icon: Circle, count: 1 },
  { label: "Type", icon: BriefcaseBusiness, count: 5 },
  { label: "Advisor", icon: UserRound },
  { label: "Assigner", icon: UserRoundPlus },
] as const;

const statuses: Array<{
  label: FilterStatus;
  count: number;
  color: string;
}> = [
  { label: "To-do", count: 9, color: "text-neutral-400" },
  { label: "In Progress", count: 10, color: "text-amber-500" },
  { label: "Completed", count: 8, color: "text-emerald-600" },
];

export function FilterPopover({
  initialStatus = "To-do",
  onApply,
  onClose,
  className,
}: FilterPopoverProps) {
  

  return (
    <section
      aria-label="Filters"
      className={[
        "flex w-fit max-w-full flex-col items-start gap-2 sm:flex-row sm:items-center",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="w-67.5 overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-4">
          <h2 className="text-base font-medium text-neutral-800">Filter</h2>
          <button
            type="button"
            aria-label="Close filters"
            onClick={onClose}
            className="cursor-pointer rounded-md p-1 text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-700 focus-visible:outline-2 focus-visible:outline-neutral-500"
          >
            <X aria-hidden="true" size={17} />
          </button>
        </div>

        <div className="p-2">
          {filters.map(({ label, icon: Icon, ...filter }) => {

            return (
              <button
                key={label}
                type="button"
                className={[
                  "flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition focus-visible:outline-2 focus-visible:outline-neutral-500","text-neutral-700"
                    
                ].join(" ")}
              >
                <Icon
                  aria-hidden="true"
                  size={17}
                  className="shrink-0 text-neutral-400"
                  strokeWidth={2}
                />
                <span className="flex-1">{label}</span>
                {"count" in filter && (
                  <span className="rounded-md border border-neutral-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-neutral-400">
                    {filter.count}
                  </span>
                )}
                <ChevronRight
                  aria-hidden="true"
                  size={15}
                  className="text-neutral-400"
                />
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-3 border-t border-neutral-200 p-3">
          <button
            type="button"
            className="cursor-pointer rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-neutral-500 active:scale-[0.98]"
          >
            Reset
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-xl bg-neutral-950 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 active:scale-[0.98]"
          >
            Apply
          </button>
        </div>
      </div>

      {/* {activeFilter === "Status" && (
        <div className="w-[245px] rounded-2xl border border-neutral-200 bg-white p-2 shadow-[0_18px_45px_-28px_rgba(0,0,0,0.45)]">
          {statuses.map((status) => {
            const isSelected = status.label === selectedStatus;

            return (
              <button
                key={status.label}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedStatus(status.label)}
                className="flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-neutral-600 transition hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-neutral-500"
              >
                <Circle
                  aria-hidden="true"
                  size={16}
                  className={status.color}
                  fill={
                    status.label === "Completed" ? "currentColor" : "none"
                  }
                  strokeWidth={2}
                />
                <span className="flex-1">{status.label}</span>
                {isSelected && (
                  <Check
                    aria-hidden="true"
                    size={17}
                    className="text-blue-600"
                    strokeWidth={2.2}
                  />
                )}
                <span className="rounded-md border border-neutral-200 bg-neutral-50 px-1.5 py-0.5 text-[10px] font-medium text-neutral-400">
                  {status.count}
                </span>
              </button>
            );
          })}
        </div>
      )} */}
    </section>
  );
}

export default FilterPopover;
