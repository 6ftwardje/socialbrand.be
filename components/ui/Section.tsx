import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  id?: string;
}

export default function Section({ children, className, title, id }: SectionProps) {
  return (
    <section id={id} className={cn("mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16", className)}>
      {title && (
        <h2 className="mb-8 text-2xl font-semibold tracking-tight text-white md:text-3xl">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
