import { type ReactNode } from 'react';

type BadgeProps = {
  children: ReactNode;
  variant?: 'default' | 'accent' | 'outline';
};

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const styles = {
    default: 'bg-subtle text-muted border-base',
    accent: 'bg-accent/10 text-accent border-accent/20',
    outline: 'bg-transparent text-muted border-base',
  };
  return (
    <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border ${styles[variant]}`}>
      {children}
    </span>
  );
}
