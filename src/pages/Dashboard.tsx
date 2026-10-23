import { useEffect, useState } from 'react';
import {
  Cloud,
  Server,
  ShieldCheck,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  MessageSquareMore,
  GraduationCap,
  ExternalLink,
} from 'lucide-react';
import type { Category } from '@/types';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { LoadingSpinner, ErrorState } from '@/components/ui/Feedback';
import { quizDataService } from '@/services/quizDataService';
import type { Page } from '@/components/Header';

interface DashboardProps {
  onNavigate: (page: Page) => void;
  onSelectCategory: (categoryId: string) => void;
}

const iconMap: Record<string, typeof Cloud> = {
  Cloud,
  Server,
  ShieldCheck,
};

export function Dashboard({ onNavigate, onSelectCategory }: DashboardProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const cats = await quizDataService.getCategories();
        if (mounted) {
          setCategories(cats);
          setLoading(false);
        }
      } catch {
        if (mounted) {
          setError('Unable to load categories. Please try again.');
          setLoading(false);
        }
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    onSelectCategory(categoryId);
    onNavigate('quiz-setup');
  };

  const howItWorks = [
    {
      icon: <GraduationCap size={24} />,
      title: 'Choose a topic',
      description: 'Select from three core AZ-900 domains and pick your difficulty level.',
    },
    {
      icon: <CheckCircle2 size={24} />,
      title: 'Answer questions',
      description: 'Work through multiple-choice questions at your own pace with clear answer states.',
    },
    {
      icon: <MessageSquareMore size={24} />,
      title: 'Get instant feedback',
      description: 'See whether you were right, read a detailed explanation, and learn from every question.',
    },
  ];

  const officialLinks = [
    {
      title: 'AZ-900 Certification Page',
      url: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/',
    },
    {
      title: 'AZ-900 Study Guide',
      url: 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900',
    },
    {
      title: 'Microsoft Learn — Azure Fundamentals',
      url: 'https://learn.microsoft.com/en-us/training/paths/azure-fundamentals-describe-cloud-concepts/',
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-navy via-brand-navy to-brand-navy-light text-white">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle at 25% 30%, white 1px, transparent 1px), radial-gradient(circle at 75% 70%, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-brand-teal-light font-semibold text-sm tracking-wider uppercase mb-4 animate-fade-in-down">
              Learn. Practise. Understand.
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display leading-tight mb-6 animate-fade-in-up">
              Your AZ-900
              <br />
              <span className="text-brand-teal-light">Practice Companion</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl animate-fade-in-up">
              Prepare for the Microsoft Azure Fundamentals certification with original practice
              questions, instant feedback, and clear explanations across all three exam domains.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up">
              <Button
                size="lg"
                variant="primary"
                onClick={() => onNavigate('quiz-setup')}
                className="bg-brand-blue hover:bg-brand-blue-light"
              >
                Start Practising
                <ArrowRight size={20} />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                onClick={() => onNavigate('resources')}
                className="text-slate-200 hover:text-white hover:bg-white/10 border border-white/20"
              >
                <BookOpen size={20} />
                Browse Resources
              </Button>
            </div>
          </div>
        </div>
        {/* Wave separator */}
        <svg className="block w-full text-surface-page" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path fill="currentColor" d="M0,32L48,32C96,32,192,32,288,37.3C384,43,480,53,576,50.7C672,48,768,32,864,26.7C960,21,1056,27,1152,32C1248,37,1344,43,1392,45.3L1440,48L1440,60L0,60Z" />
        </svg>
      </section>

      {/* ─── Categories ─── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 pb-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-2">Learning Categories</h2>
          <p className="text-ink-secondary">Three domains covering the full AZ-900 skills outline</p>
        </div>

        {loading ? (
          <LoadingSpinner label="Loading categories..." />
        ) : error ? (
          <ErrorState message={error} onRetry={() => window.location.reload()} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat, idx) => {
              const Icon = iconMap[cat.icon] ?? Cloud;
              return (
                <Card
                  key={cat.id}
                  hover
                  onClick={() => handleCategoryClick(cat.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleCategoryClick(cat.id);
                    }
                  }}
                  className={`p-6 animate-fade-in-up`}
                >
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 transition-colors"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue/10 to-brand-teal/10 text-brand-blue">
                      <Icon size={28} strokeWidth={1.8} />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy mb-2">{cat.name}</h3>
                  <p className="text-sm text-ink-secondary leading-relaxed mb-4">
                    {cat.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-surface-border">
                    <span className="text-xs font-medium text-ink-muted">{cat.skillsOutline.split('—')[0].trim()}</span>
                    <span className="flex items-center gap-1 text-sm font-semibold text-brand-blue group-hover:gap-2 transition-all">
                      Practise
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </section>

      {/* ─── How It Works ─── */}
      <section className="bg-surface-card border-y border-surface-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-2">How It Works</h2>
            <p className="text-ink-secondary">Three simple steps from question to understanding</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center animate-fade-in-up"
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-navy text-white mb-4 shadow-md">
                  {step.icon}
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand-teal text-white text-sm font-bold flex items-center justify-center border-2 border-surface-card">
                    {idx + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">{step.title}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Practice, Feedback, Learning ─── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-4">
              Practise with purpose, learn with feedback
            </h2>
            <p className="text-ink-secondary leading-relaxed mb-6">
              Every question comes with a clear explanation so you understand not just what the right
              answer is, but why it's right. Review your results, identify gaps, and focus your study
              time where it matters most.
            </p>
            <ul className="space-y-3">
              {[
                'Original questions aligned to the public AZ-900 skills outline',
                'Immediate feedback with detailed explanations',
                'Review incorrect answers and learn from mistakes',
                'Track your score percentage across each category',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-teal flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-ink-primary text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <Button
              variant="secondary"
              size="lg"
              className="mt-8"
              onClick={() => onNavigate('quiz-setup')}
            >
              Start a Practice Quiz
              <ArrowRight size={20} />
            </Button>
          </div>
          <div className="relative">
            <Card className="p-6 shadow-elevated">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-brand-teal uppercase tracking-wider">
                  Sample Question
                </span>
                <span className="text-xs font-medium text-ink-muted">Cloud Concepts</span>
              </div>
              <p className="text-sm font-semibold text-ink-primary mb-4 leading-relaxed">
                Which characteristic of cloud computing allows you to scale resources up or down
                automatically based on demand?
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 rounded-xl border-2 border-feedback-success bg-feedback-success-bg">
                  <div className="w-5 h-5 rounded-full border-2 border-feedback-success bg-feedback-success flex items-center justify-center">
                    <CheckCircle2 className="text-white" size={12} />
                  </div>
                  <span className="text-sm font-semibold text-feedback-success">Elasticity</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl border border-surface-border">
                  <div className="w-5 h-5 rounded-full border-2 border-surface-border" />
                  <span className="text-sm text-ink-secondary">Agility</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl border border-surface-border">
                  <div className="w-5 h-5 rounded-full border-2 border-surface-border" />
                  <span className="text-sm text-ink-secondary">Reliability</span>
                </div>
              </div>
              <div className="mt-4 p-3 rounded-xl bg-surface-page border border-surface-border">
                <p className="text-xs text-ink-secondary leading-relaxed">
                  <span className="font-semibold text-ink-primary">Explanation:</span> Elasticity is
                  the ability of a cloud service to automatically add or remove resources in response
                  to changing demand.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ─── Official Resources ─── */}
      <section className="bg-surface-card border-t border-surface-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-2">
              Official Microsoft Learn Resources
            </h2>
            <p className="text-sm text-ink-secondary">
              These links open the official Microsoft Learn site in a new tab.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
            {officialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-surface-border bg-surface-card hover:border-brand-blue/30 hover:shadow-card-hover text-sm font-semibold text-brand-navy hover:text-brand-blue transition-all duration-200 focus-ring"
              >
                {link.title}
                <ExternalLink size={16} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
