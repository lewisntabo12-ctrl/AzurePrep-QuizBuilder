import { Cloud } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  onClick?: () => void;
}

const sizeMap = {
  sm: { icon: 28, text: 'text-lg', sub: 'text-[10px]' },
  md: { icon: 36, text: 'text-xl', sub: 'text-xs' },
  lg: { icon: 48, text: 'text-2xl', sub: 'text-sm' },
};

export function Logo({ size = 'md', showText = true, onClick }: LogoProps) {
  const s = sizeMap[size];
  return (
    <div
      className={`flex items-center gap-3 ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } } : undefined}
    >
      <div className="relative flex items-center justify-center rounded-xl bg-gradient-to-br from-brand-navy to-brand-blue shadow-md">
        <Cloud className="text-white" size={s.icon * 0.6} strokeWidth={2.2} />
        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-brand-teal border-2 border-white" />
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-display font-extrabold text-brand-navy ${s.text}`}>
            AzurePrep
          </span>
          <span className={`font-semibold text-brand-teal tracking-wide ${s.sub} uppercase`}>
            QuizBuilder
          </span>
        </div>
      )}
    </div>
  );
}
