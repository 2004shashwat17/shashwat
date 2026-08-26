import { type ReactNode } from 'react';

type SectionProps = {
  id: string;
  heading?: string;
  subheading?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, heading, subheading, eyebrow, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`section-pad ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        {(eyebrow || heading || subheading) && (
          <div className="mb-12 md:mb-16">
            {eyebrow && (
              <div className="reveal flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-accent" />
                <span className="text-xs font-mono uppercase tracking-widest text-muted">
                  {eyebrow}
                </span>
              </div>
            )}
            {heading && (
              <h2 className="reveal text-3xl md:text-5xl font-bold tracking-tight text-balance">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="reveal mt-4 text-lg text-muted max-w-2xl text-balance">
                {subheading}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
