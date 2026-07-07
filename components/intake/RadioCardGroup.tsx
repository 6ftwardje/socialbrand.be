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
  "relative flex cursor-pointer items-center rounded-md border px-3 py-2.5 text-left transition-colors focus-within:ring-1 focus-within:ring-[var(--accent)] focus-within:ring-offset-1 focus-within:ring-offset-[var(--background)]";
const cardUnselected = "border-[var(--border-subtle)] bg-[var(--surface)] hover:border-[var(--foreground-muted)]";
const cardSelected = "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--foreground)]";

const inputClass = cn(
  "mt-3 w-full rounded-md border border-[var(--border-subtle)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--foreground)] placeholder:text-[var(--foreground-muted)]",
  "focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
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
      <legend id={`${id}-legend`} className="block text-sm text-[var(--foreground-muted)]">
        {label}
      </legend>
      <div className="mt-3 space-y-2">
        {options.map((opt, index) => (
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
              autoFocus={autoFocus && index === 0}
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
