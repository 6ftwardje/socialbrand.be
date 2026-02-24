"use client";

import { cn } from "@/lib/utils";
import type { RadioOption } from "@/lib/intake-types";

interface RadioCardGroupProps {
  id: string;
  name: string;
  label: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  otherValue: string;
  onOtherChange: (value: string) => void;
  otherPlaceholder?: string;
  disabled?: boolean;
  autoFocus?: boolean;
}

const cardBase =
  "relative flex cursor-pointer items-center rounded-md border px-3 py-2.5 text-left transition-colors focus-within:ring-1 focus-within:ring-zinc-500 focus-within:ring-offset-1 focus-within:ring-offset-[var(--background)]";
const cardUnselected = "border-zinc-700 bg-transparent hover:border-zinc-600 hover:bg-zinc-800/30";
const cardSelected = "border-zinc-500 bg-zinc-800/60";

const inputClass = cn(
  "mt-3 w-full rounded-md border border-zinc-700 bg-zinc-900/50 px-3 py-2 text-sm text-white placeholder:text-zinc-500",
  "focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
);

export default function RadioCardGroup({
  id,
  name,
  label,
  options,
  value,
  onChange,
  otherValue,
  onOtherChange,
  otherPlaceholder = "Specifieer",
  disabled = false,
  autoFocus = false,
}: RadioCardGroupProps) {
  const otherOption = options.find((o) => o.isOther);
  const showOtherInput = otherOption && value === otherOption.value;

  return (
    <fieldset className="w-full" aria-labelledby={`${id}-legend`}>
      <legend id={`${id}-legend`} className="block text-sm text-zinc-400">
        {label}
      </legend>
      <div className="mt-3 space-y-2">
        {options.map((opt) => (
          <label
            key={opt.value}
            className={cn(
              cardBase,
              value === opt.value ? cardSelected : cardUnselected,
              disabled && "cursor-not-allowed opacity-60"
            )}
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              disabled={disabled}
              className="sr-only"
              aria-describedby={opt.isOther && showOtherInput ? `${id}-other-desc` : undefined}
            />
            <span className="flex-1">{opt.label}</span>
          </label>
        ))}
      </div>
      {showOtherInput && (
        <div className="mt-4" id={`${id}-other-desc`}>
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
    </fieldset>
  );
}
