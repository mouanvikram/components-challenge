"use client";

import { cn } from "@/lib/utils";
import {
  Archive,
  ChevronRight,
  Copy,
  Droplets,
  EyeOff,
  FolderPlus,
  Heart,
  Link2,
  Pencil,
  Settings,
  Sparkles,
  Trash2,
  WandSparkles,
  type LucideIcon,
} from "lucide-react";

type SpaceAction = {
  label: string;
  icon: LucideIcon;
  submenu?: boolean;
  active?: boolean;
  description?: string;
  danger?: boolean;
};

const groups: SpaceAction[][] = [
  [
    { label: "Rename", icon: Pencil },
    { label: "Copy Link", icon: Link2 },
  ],
  [
    { label: "Create New", icon: FolderPlus, submenu: true, active: true },
    { label: "Color & Icon", icon: Droplets, submenu: true },
    { label: "Space Settings", icon: Settings, submenu: true },
    { label: "Templates", icon: WandSparkles, submenu: true },
  ],
  [
    { label: "Add to Favorites", icon: Heart },
    {
      label: "Hide Space",
      icon: EyeOff,
      description: "You'll retain access to this Space, but it won't show in your sidebar",
    },
    { label: "Duplicate", icon: Copy },
    { label: "Archive", icon: Archive },
    { label: "Delete", icon: Trash2, danger: true },
  ],
];

export function SpaceActionsMenu() {
  return (
    <div className="w-70 overflow-hidden rounded-xl border border-neutral-200 bg-white py-2 shadow-sm">
      {groups.map((group, groupIndex) => (
        <div
          key={groupIndex}
          className={cn(
            "px-2",
            groupIndex > 0 ? "border-t border-neutral-200 py-1.5" : "pb-1.5"
          )}
        >
          {group.map(({ label, icon: Icon, ...item }) => (
            <button
              key={label}
              type="button"
              className={cn(
                "group flex w-full cursor-pointer items-start gap-3 px-4 py-2 text-left text-[14px] transition-colors rounded-lg",
                item.active
                  ? " bg-gray-100"
                  : "hover:bg-neutral-50",
                item.danger ? "text-rose-600" : "text-neutral-800",
                item.danger && item.active ? "bg-rose-100" : "")}
            >
              <Icon
                aria-hidden="true"
                size={16}
                strokeWidth={1.7}
                className={[
                  "mt-0.5 shrink-0",
                  item.danger ? "text-rose-500" : "text-[#8d93aa]",
                ].join(" ")}
              />
              <span className="min-w-0 flex-1">
                <span className="block">{label}</span>
                {"description" in item && item.description && (
                  <span className="mt-1 block text-[11px] leading-4 text-neutral-400">
                    {item.description}
                  </span>
                )}
              </span>
              {"submenu" in item && item.submenu && (
                <ChevronRight
                  aria-hidden="true"
                  size={15}
                  className="mt-0.5 text-[#8d93aa]"
                />
              )}
            </button>
          ))}
        </div>
      ))}
      <div className="border-t border-neutral-200 px-2 pt-2">
        <button
          type="button"
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#29272c] px-4 py-3 text-xs font-medium text-white transition hover:bg-black"
        >
          <Sparkles aria-hidden="true" size={14} />
          Manage Permissions
        </button>
      </div>
    </div>
  );
}

export default SpaceActionsMenu;
