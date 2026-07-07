"use client";

import { cn } from "@/lib/utils";

interface TextFieldProps {
  id: string;
  label: string;
  type?: "text" | "email" | "tel";
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  error?: string;
  autoFocus?: boolean;
  required?: boolean;
  autoComplete?: string;
}

const inputClass = cn(
  "mt-1 w-full rounded-md border border-[var(--border-subtle)] bg-[var(--surface)] px-3 py-2.5 text-[var(--foreground)] placeholder:text-[var(--foreground-muted)]",
  "focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)] disabled:opacity-60"
);

export default function TextField({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  disabled = false,
  error,
  autoFocus = false,
  required,
  autoComplete,
}: TextFieldProps) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-sm text-[var(--foreground-muted)]">
        {label}
        {required && <span className="text-[var(--foreground-muted)]" aria-hidden> *</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        autoFocus={autoFocus}
        required={required}
        autoComplete={autoComplete}
        className={inputClass}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-[var(--accent)]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
