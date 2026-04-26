import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  align?: "left" | "center";
}

export const SectionHeading = ({ eyebrow, title, description, className, align = "left" }: Props) => (
  <div className={cn(align === "center" && "text-center", className)}>
    {eyebrow && (
      <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        {eyebrow}
      </span>
    )}
    <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl">
      {title}
    </h2>
    {description && (
      <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">{description}</p>
    )}
  </div>
);

interface PageHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
}

export const PageHeader = ({ eyebrow, title, description }: PageHeaderProps) => (
  <section className="bg-gradient-cream pb-12 pt-12 sm:pb-16 sm:pt-20">
    <div className="container-wide">
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {eyebrow}
        </span>
      )}
      <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl md:text-6xl">
        {title}
      </h1>
      {description && (
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  </section>
);
