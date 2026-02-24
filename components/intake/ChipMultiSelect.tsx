"use client";

import { cn } from "@/lib/utils";
import type { ChipOption } from "@/lib/intake-types";

interface ChipMultiSelectProps {
  id: string;
  label: string;
  options: ChipOption[];
  value: string[];
  onChange: (value: string[]) => void;
  otherValue: string;
  onOtherChange: (value: string) => void;
  otherPlaceholder?: string;
  disabledOptions?: string[];
  disabled?: boolean;
  autoFocus?: boolean;
}

const chipBase =
  "rounded-full border px-3 py-1.5 text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:ring-offset-1 focus:ring-offset-[var(--background)] disabled:opacity-50 disabled:cursor-not-allowed";
const chipUnselected =
  "border-zinc-700 bg-transparent text-zinc-400 hover:border-zinc-600 hover:bg-zinc-800/40";
const chipSelected =
  "border-zinc-500 bg-zinc-800/80 text-[var(--foreground)]";

const inputClass = cn(
  "mt-2 w-full rounded-md border border-zinc-700 bg-zinc-900/50 px-3 py-2 text-sm text-white placeholder:text-zinc-500",
  "focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
);

export default function ChipMultiSelect({
  id,
  label,
  options,
  value,
  onChange,
  otherValue,
  onOtherChange,
  otherPlaceholder = "Specifieer",
  disabledOptions = [],
  disabled = false,
  autoFocus = false,
}: ChipMultiSelectProps) {
  const otherOption = options.find((o) => o.isOther);
  const showOtherInput = otherOption && value.includes(otherOption.value);

  const toggle = (optValue: string) => {
    if (disabled || disabledOptions.includes(optValue)) return;
    if (optValue === "nee") {
      onChange(["nee"]);
      return;
    }
    const rest = value.filter((v) => v !== "nee");
    if (rest.includes(optValue)) {
      onChange(rest.filter((v) => v !== optValue));
    } else {
      onChange([...rest, optValue]);
    }
  };

  const isDisabled = (optValue: string) => {
    if (disabled) return true;
    if (value.includes("nee") && optValue !== "nee") return true;
    return disabledOptions.includes(optValue);
  };

  return (
    <div className="w-full" role="group" aria-labelledby={`${id}-label`}>
      <span id={`${id}-label`} className="block text-sm text-zinc-400">
        {label}
      </span>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => toggle(opt.value)}
            disabled={isDisabled(opt.value)}
            className={cn(
              chipBase,
              value.includes(opt.value) ? chipSelected : chipUnselected
            )}
            aria-pressed={value.includes(opt.value)}
            aria-disabled={isDisabled(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>
      {showOtherInput && (
        <div className="mt-4">
          <label htmlFor={`${id}-other`} className="sr-only">
            {otherPlaceholder}
          </label>
          <input
            id={`${id}-other`}
            type="text"
            value={otherValue}
            onChange={(e) => onOtherChange(e.target.value)}
            placeholder={otherPlaceholder}
            disabled={disabled}
            className={inputClass}
            aria-required="true"
          />
        </div>
      )}
    </div>
  );
}
