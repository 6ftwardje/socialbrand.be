"use client";

interface ProgressBarProps {
  percentage: number;
}

export default function ProgressBar({ percentage }: ProgressBarProps) {
  const value = Math.min(100, Math.max(0, Math.round(percentage)));
  return (
    <div className="flex w-full max-w-xl items-center justify-between gap-3" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} aria-label={`Voortgang: ${value} procent`}>
      <div className="h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-[var(--surface-muted)]">
        <div
          className="h-full rounded-full bg-[var(--accent)] transition-[width] duration-200 ease-out"
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="shrink-0 text-sm tabular-nums text-[var(--foreground-muted)]">
        {value}%
      </span>
    </div>
  );
}
