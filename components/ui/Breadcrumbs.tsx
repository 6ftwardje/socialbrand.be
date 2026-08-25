import { ChevronRight } from "lucide-react";
import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Broodkruimelnavigatie">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-[var(--foreground-muted)]">
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex min-w-0 items-center gap-1.5">
              {index > 0 ? (
                <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-45" aria-hidden />
              ) : null}
              {item.href && !isCurrent ? (
                <Link
                  href={item.href}
                  className="rounded-sm transition-colors hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/35"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="truncate text-[var(--foreground)]" aria-current={isCurrent ? "page" : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
