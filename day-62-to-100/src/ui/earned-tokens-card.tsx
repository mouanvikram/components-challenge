"use client";

import { WalletCards } from "lucide-react";

export type ProjectBudgetCardProps = {
  availableBudget?: string;
  project?: string;
  allocated?: string;
  spent?: string;
  reviewDate?: string;
  onManage?: () => void;
  className?: string;
};

const details = [
  { key: "allocated", label: "Total allocated" },
  { key: "spent", label: "Spent this month" },
  { key: "reviewDate", label: "Next review" },
] as const;

export function ProjectBudgetCard({
  availableBudget = "$24,680",
  project = "Q3 Campaign",
  allocated = "$40,000",
  spent = "$15,320",
  reviewDate = "28 Sep 2026",
  onManage,
  className,
}: ProjectBudgetCardProps) {
  const values = { allocated, spent, reviewDate };

  return (
    <section
      aria-label="Project budget summary"
      className={[
        "w-full max-w-4xl overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="grid min-h-44 sm:grid-cols-[2fr_1fr]">
        <div className="flex flex-col justify-center px-6 py-8 sm:px-9">
          <p className="text-xs font-medium text-neutral-500">
            Available project budget
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <p className="text-4xl font-medium tracking-tight text-neutral-950 sm:text-[2.75rem]">
              {availableBudget}
            </p>
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white pl-1 pr-2 py-1 text-xs font-medium text-neutral-800 ">
              <span className="grid size-6 place-items-center rounded-full bg-neutral-900 text-white">
                <WalletCards aria-hidden="true" size={13} strokeWidth={2.4} />
              </span>
              {project}
            </span>
          </div>
        </div>

        <div className="flex items-center border-t border-neutral-200 px-6 py-7 sm:border-l sm:border-t-0 sm:px-8">
          <button
            type="button"
            onClick={onManage}
            className="w-full cursor-pointer rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-[0_6px_8px_-8px_rgba(0,0,0,0.8)] transition hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 active:scale-[0.98]"
          >
            Manage budget
          </button>
        </div>
      </div>

      <dl className="grid border-t border-neutral-200 bg-neutral-50/80 sm:grid-cols-3">
        {details.map((detail) => (
          <div
            key={detail.key}
            className="px-6 py-5 sm:px-9 not-last:border-b not-last:border-neutral-200 sm:not-last:border-b-0"
          >
            <dt className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400">
              {detail.label}
            </dt>
            <dd className="mt-1 text-xs font-semibold text-neutral-800">
              {values[detail.key]}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default ProjectBudgetCard;
