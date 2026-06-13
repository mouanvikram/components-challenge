"use client";

import {
  ChevronDown,
  Globe2,
  LockKeyhole,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  type KeyboardEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

export type ShareOption = {
  value: string;
  label: string;
  description: string;
  icon: LucideIcon;
  iconClassName?: string;
};

export type ShareWithDropdownProps = {
  options?: ShareOption[];
  value?: string;
  defaultValue?: string;
  defaultOpen?: boolean;
  onChange?: (option: ShareOption) => void;
  className?: string;
};

const defaultOptions: ShareOption[] = [
  {
    value: "public",
    label: "Public",
    description: "Shared with everyone across all workspaces.",
    icon: Globe2,
  },
  {
    value: "workspace",
    label: "Limited to Workspace",
    description: "Shared with everyone in your workspace team.",
    icon: Zap,
    iconClassName: "text-blue-600",
  },
  {
    value: "private",
    label: "Private",
    description: "Visible only to you.",
    icon: LockKeyhole,
  },
];

export function ShareWithDropdown({
  options = defaultOptions,
  value,
  defaultValue,
  defaultOpen = true,
  onChange,
  className,
}: ShareWithDropdownProps) {
  const dropdownId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const selectedValue = value ?? internalValue;
  const selectedOption = options.find(
    (option) => option.value === selectedValue,
  );

  useEffect(() => {
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () =>
      document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, []);

  const selectOption = (option: ShareOption) => {
    setInternalValue(option.value);
    setIsOpen(false);
    onChange?.(option);
  };

  const focusOption = (index: number) => {
    const nextIndex = (index + options.length) % options.length;
    setFocusedIndex(nextIndex);
    optionRefs.current[nextIndex]?.focus();
  };

  const handleTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const selectedIndex = options.findIndex(
        (option) => option.value === selectedValue,
      );
      const nextIndex =
        event.key === "ArrowDown"
          ? Math.max(0, selectedIndex)
          : selectedIndex >= 0
            ? selectedIndex
            : options.length - 1;

      setIsOpen(true);
      requestAnimationFrame(() => focusOption(nextIndex));
    }
  };

  const handleOptionKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      focusOption(index + 1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      focusOption(index - 1);
    } else if (event.key === "Escape") {
      event.preventDefault();
      setIsOpen(false);
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      focusOption(event.key === "Home" ? 0 : options.length - 1);
    }
  };

  return (
    <div
      ref={containerRef}
      className={["w-full max-w-77.5", className]
        .filter(Boolean)
        .join(" ")}
    >
      <label
        id={`${dropdownId}-label`}
        className="mb-2.5 block text-base font-medium text-neutral-900"
      >
        Share with
      </label>

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        onKeyDown={handleTriggerKeyDown}
        className="flex w-full cursor-pointer items-center justify-between rounded-xl border border-neutral-100 bg-white px-4 py-3 text-left text-sm text-neutral-500 shadow-sm outline-none transition hover:border-neutral-200 focus-visible:ring-2 focus-visible:ring-blue-500/40"
      >
        <span>{selectedOption?.label ?? "Select option"}</span>
        <ChevronDown
          aria-hidden="true"
          size={15}
          strokeWidth={2.5}
          className={[
            "text-blue-600 transition-transform duration-200",
            isOpen ? "rotate-180" : "",
          ].join(" ")}
        />
      </button>

      {isOpen && (
        <div
          id={`${dropdownId}-listbox`}
          role="listbox"
          aria-labelledby={`${dropdownId}-label`}
          className="mt-2 overflow-hidden rounded-2xl border border-neutral-100 bg-white p-2 shadow-md"
        >
          {options.map((option, index) => {
            const Icon = option.icon;
            const isSelected = option.value === selectedValue;
            const isHighlighted =
              isSelected || (!selectedOption && option.value === "workspace");

            return (
              <button
                key={option.value}
                ref={(node) => {
                  optionRefs.current[index] = node;
                }}
                type="button"
                role="option"
                onClick={() => selectOption(option)}
                onFocus={() => setFocusedIndex(index)}
                onKeyDown={(event) => handleOptionKeyDown(event, index)}
                className={[
                  "flex w-full cursor-pointer items-start gap-3 rounded-xl px-3 py-3 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-blue-500/40",
                  isHighlighted
                    ? "bg-blue-50/80"
                    : "hover:bg-neutral-50 focus:bg-neutral-50",
                ].join(" ")}
              >
                <Icon
                  aria-hidden="true"
                  size={16}
                  strokeWidth={2.2}
                  className={[
                    "mt-0.5 shrink-0 text-neutral-400",
                    option.iconClassName,
                  ]
                    .filter(Boolean)
                    .join(" ")}
                />
                <span>
                  <span
                    className={[
                      "block text-sm font-medium",
                      isHighlighted ? "text-blue-600" : "text-neutral-800",
                    ].join(" ")}
                  >
                    {option.label}
                  </span>
                  <span className="mt-1 block max-w-55 text-xs leading-4 text-neutral-500">
                    {option.description}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ShareWithDropdown;
