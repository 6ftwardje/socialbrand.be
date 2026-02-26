import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  id?: string;
  /** Full-width section with inner container; use alt for alternating background */
  fullWidth?: boolean;
  alt?: boolean;
}

export default function Section({ children, className, title, subtitle, id, fullWidth, alt }: SectionProps) {
  const inner = (
    <>
      {title && (
        <header className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg md:text-xl text-zinc-400 font-medium max-w-3xl">
              {subtitle}
            </p>
          )}
        </header>
      )}
      {children}
    </>
  );

  return (
    <section
      id={id}
      className={cn(
        "w-full py-16 md:py-24",
        fullWidth && (alt ? "bg-zinc-950/80" : "bg-[var(--background)]"),
        !fullWidth && "mx-auto max-w-7xl px-4 md:px-6",
        className
      )}
    >
      {fullWidth ? <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">{inner}</div> : inner}
    </section>
  );
}
