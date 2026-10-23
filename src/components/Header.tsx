import type { ReactNode } from 'react';
import { Logo } from '@/components/Logo';
import { LayoutDashboard, BookOpen, Cloud } from 'lucide-react';

export type Page = 'dashboard' | 'quiz-setup' | 'quiz' | 'results' | 'resources';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  inQuiz?: boolean;
}

export function Header({ currentPage, onNavigate, inQuiz = false }: HeaderProps) {
  const navItems: { page: Page; label: string; icon: ReactNode }[] = [
    { page: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
    { page: 'quiz-setup', label: 'Practise', icon: <Cloud size={18} /> },
    { page: 'resources', label: 'Resources', icon: <BookOpen size={18} /> },
  ];

  return (
    <header className="sticky top-0 z-50 bg-surface-card/90 backdrop-blur-md border-b border-surface-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo
            onClick={() => onNavigate('dashboard')}
            size="sm"
          />

          {!inQuiz && (
            <nav className="flex items-center gap-1" aria-label="Main navigation">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => onNavigate(item.page)}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 focus-ring ${
                    currentPage === item.page
                      ? 'text-brand-navy bg-brand-blue/8'
                      : 'text-ink-secondary hover:text-brand-navy hover:bg-surface-page'
                  }`}
                  aria-current={currentPage === item.page ? 'page' : undefined}
                >
                  {item.icon}
                  <span className="hidden sm:inline">{item.label}</span>
                </button>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
