import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  fullWidth?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-brand-blue text-white hover:bg-brand-blue-dark shadow-sm hover:shadow-md active:scale-[0.98]',
  secondary:
    'bg-brand-navy text-white hover:bg-brand-navy-light shadow-sm hover:shadow-md active:scale-[0.98]',
  outline:
    'border-2 border-brand-blue text-brand-blue bg-transparent hover:bg-brand-blue hover:text-white active:scale-[0.98]',
  ghost:
    'text-ink-secondary hover:text-brand-blue hover:bg-brand-blue/5 active:scale-[0.98]',
  danger:
    'bg-feedback-error text-white hover:bg-red-700 shadow-sm active:scale-[0.98]',
};

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-2.5 text-sm gap-2',
  lg: 'px-8 py-3.5 text-base gap-2.5',
};

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 ease-smooth focus-ring disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
