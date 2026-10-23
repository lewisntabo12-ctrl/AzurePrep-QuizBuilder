import type { ReactNode } from 'react';

interface ProgressIndicatorProps {
  current: number;
  total: number;
}

export function ProgressIndicator({ current, total }: ProgressIndicatorProps) {
  const percentage = total > 0 ? (current / total) * 100 : 0;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-ink-secondary">
          Question {current} of {total}
        </span>
        <span className="text-sm font-bold text-brand-teal">
          {Math.round(percentage)}%
        </span>
      </div>
      <div
        className="h-2.5 bg-surface-border rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-label="Quiz progress"
      >
        <div
          className="h-full bg-gradient-to-r from-brand-teal to-brand-teal-light rounded-full transition-all duration-500 ease-smooth"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

interface LoadingSpinnerProps {
  label?: string;
}

export function LoadingSpinner({ label = 'Loading...' }: LoadingSpinnerProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 gap-4 animate-fade-in">
      <div className="w-10 h-10 border-3 border-surface-border border-t-brand-blue rounded-full animate-spin" />
      <p className="text-sm text-ink-secondary font-medium">{label}</p>
    </div>
  );
}

interface ErrorStateProps {
  message: string;
  onRetry?: () => void;
}

export function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 gap-4 animate-fade-in">
      <div className="w-12 h-12 rounded-full bg-feedback-error-bg flex items-center justify-center">
        <span className="text-2xl text-feedback-error font-bold">!</span>
      </div>
      <p className="text-sm text-ink-primary font-medium text-center max-w-md">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="text-sm font-semibold text-brand-blue hover:underline focus-ring rounded-lg px-4 py-2"
        >
          Try again
        </button>
      )}
    </div>
  );
}

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  message: string;
}

export function EmptyState({ icon, title, message }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 gap-3 animate-fade-in text-center">
      {icon && <div className="text-ink-muted">{icon}</div>}
      <h3 className="text-lg font-bold text-brand-navy">{title}</h3>
      <p className="text-sm text-ink-secondary max-w-md">{message}</p>
    </div>
  );
}
