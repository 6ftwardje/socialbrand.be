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
  "mt-1 w-full rounded-md border border-zinc-700 bg-zinc-900/50 px-3 py-2.5 text-white placeholder:text-zinc-500",
  "focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 disabled:opacity-60"
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
      <label htmlFor={id} className="block text-sm text-zinc-400">
        {label}
        {required && <span className="text-zinc-500" aria-hidden> *</span>}
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
        <p id={`${id}-error`} className="mt-1 text-sm text-zinc-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
