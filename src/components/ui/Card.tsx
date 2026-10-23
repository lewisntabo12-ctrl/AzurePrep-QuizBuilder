import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  role?: string;
  tabIndex?: number;
  onKeyDown?: (e: React.KeyboardEvent) => void;
}

export function Card({
  children,
  className = '',
  hover = false,
  onClick,
  role,
  tabIndex,
  onKeyDown,
}: CardProps) {
  return (
    <div
      className={`bg-surface-card rounded-2xl border border-surface-border shadow-card ${hover ? 'transition-all duration-300 ease-smooth hover:shadow-card-hover hover:border-brand-blue/30 cursor-pointer' : ''} ${className}`}
      onClick={onClick}
      role={role}
      tabIndex={tabIndex}
      onKeyDown={onKeyDown}
    >
      {children}
    </div>
  );
}
