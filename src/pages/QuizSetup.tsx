import { useEffect, useState } from 'react';
import { Cloud, Server, ShieldCheck, ChevronRight, Check, Info } from 'lucide-react';
import type { Category, CategoryId, Difficulty, QuizConfiguration } from '@/types';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { LoadingSpinner, ErrorState } from '@/components/ui/Feedback';
import { quizDataService } from '@/services/quizDataService';

interface QuizSetupProps {
  preselectedCategory?: CategoryId | null;
  onStartQuiz: (config: QuizConfiguration) => void;
  onNavigateHome: () => void;
}

const iconMap: Record<string, typeof Cloud> = {
  Cloud,
  Server,
  ShieldCheck,
};

const difficulties: { id: Difficulty; label: string; description: string }[] = [
  { id: 'beginner', label: 'Beginner', description: 'Foundational concepts and definitions' },
  { id: 'intermediate', label: 'Intermediate', description: 'Applied scenarios and comparisons' },
  { id: 'advanced', label: 'Advanced', description: 'Complex architecture and trade-off questions' },
];

const questionCountOptions = [3, 5, 8, 10];

export function QuizSetup({ preselectedCategory, onStartQuiz, onNavigateHome }: QuizSetupProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedCategory, setSelectedCategory] = useState<CategoryId | null>(
    preselectedCategory ?? null,
  );
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>('beginner');
  const [selectedCount, setSelectedCount] = useState<number>(5);
  const [availableCount, setAvailableCount] = useState<number>(0);

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

  useEffect(() => {
    if (selectedCategory) {
      setAvailableCount(
        quizDataService.getQuestionCount(selectedCategory, selectedDifficulty),
      );
    }
  }, [selectedCategory, selectedDifficulty]);

  const effectiveCount = Math.min(selectedCount, availableCount);
  const canStart = selectedCategory !== null && availableCount > 0;

  const handleStart = () => {
    if (!selectedCategory) return;
    onStartQuiz({
      category: selectedCategory,
      difficulty: selectedDifficulty,
      questionCount: effectiveCount,
    });
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <LoadingSpinner label="Loading quiz setup..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ErrorState message={error} onRetry={() => window.location.reload()} />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 animate-fade-in">
      {/* Breadcrumb */}
      <button
        onClick={onNavigateHome}
        className="flex items-center gap-1 text-sm font-medium text-ink-secondary hover:text-brand-blue transition-colors mb-6 focus-ring rounded-lg"
      >
        <ChevronRight size={16} className="rotate-180" />
        Back to Dashboard
      </button>

      <h1 className="text-3xl font-bold text-brand-navy mb-2">Quiz Setup</h1>
      <p className="text-ink-secondary mb-8">
        Configure your practice session and start building your AZ-900 knowledge.
      </p>

      {/* Category Selection */}
      <div className="mb-8">
        <h2 className="text-sm font-bold text-ink-primary uppercase tracking-wider mb-4">
          1. Choose a Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] ?? Cloud;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-left p-5 rounded-2xl border-2 transition-all duration-200 focus-ring ${
                  isSelected
                    ? 'border-brand-blue bg-brand-blue/5 shadow-card-hover'
                    : 'border-surface-border bg-surface-card hover:border-brand-blue/30 hover:shadow-card'
                }`}
                aria-pressed={isSelected}
              >
                <div className={`flex items-center justify-between mb-3`}>
                  <div
                    className={`flex items-center justify-center w-11 h-11 rounded-xl transition-colors ${
                      isSelected
                        ? 'bg-brand-blue text-white'
                        : 'bg-brand-blue/10 text-brand-blue'
                    }`}
                  >
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  {isSelected && (
                    <div className="w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center animate-scale-in">
                      <Check className="text-white" size={14} strokeWidth={3} />
                    </div>
                  )}
                </div>
                <h3 className="text-sm font-bold text-brand-navy mb-1">{cat.shortName}</h3>
                <p className="text-xs text-ink-secondary leading-relaxed line-clamp-2">
                  {cat.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Difficulty Selection */}
      <div className="mb-8">
        <h2 className="text-sm font-bold text-ink-primary uppercase tracking-wider mb-4">
          2. Select Difficulty
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {difficulties.map((diff) => {
            const isSelected = selectedDifficulty === diff.id;
            return (
              <button
                key={diff.id}
                onClick={() => setSelectedDifficulty(diff.id)}
                className={`text-left p-4 rounded-2xl border-2 transition-all duration-200 focus-ring ${
                  isSelected
                    ? 'border-brand-teal bg-brand-teal/5 shadow-card-hover'
                    : 'border-surface-border bg-surface-card hover:border-brand-teal/30 hover:shadow-card'
                }`}
                aria-pressed={isSelected}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-brand-navy">{diff.label}</span>
                  {isSelected && (
                    <div className="w-5 h-5 rounded-full bg-brand-teal flex items-center justify-center animate-scale-in">
                      <Check className="text-white" size={12} strokeWidth={3} />
                    </div>
                  )}
                </div>
                <p className="text-xs text-ink-secondary leading-relaxed">{diff.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Question Count Selection */}
      <div className="mb-8">
        <h2 className="text-sm font-bold text-ink-primary uppercase tracking-wider mb-4">
          3. Number of Questions
        </h2>
        <div className="flex flex-wrap gap-3">
          {questionCountOptions.map((count) => {
            const isSelected = selectedCount === count;
            const exceeds = count > availableCount && selectedCategory;
            return (
              <button
                key={count}
                onClick={() => setSelectedCount(count)}
                className={`px-6 py-3 rounded-xl border-2 font-bold text-sm transition-all duration-200 focus-ring ${
                  isSelected
                    ? 'border-brand-navy bg-brand-navy text-white shadow-md'
                    : 'border-surface-border bg-surface-card text-ink-primary hover:border-brand-navy/30'
                } ${exceeds && !isSelected ? 'opacity-60' : ''}`}
                aria-pressed={isSelected}
              >
                {count}
              </button>
            );
          })}
        </div>
      </div>

      {/* Summary & Available Questions Notice */}
      {selectedCategory && (
        <Card className="p-5 mb-6 animate-fade-in-up bg-surface-page border-surface-border">
          <div className="flex items-start gap-3">
            <Info className="text-brand-blue flex-shrink-0 mt-0.5" size={20} />
            <div className="flex-1">
              <p className="text-sm font-semibold text-ink-primary mb-1">
                {availableCount} question{availableCount !== 1 ? 's' : ''} available for this category and difficulty
              </p>
              {availableCount < selectedCount && (
                <p className="text-xs text-ink-secondary">
                  You selected {selectedCount} but only {availableCount} are available. The quiz will
                  use all {availableCount} available questions.
                </p>
              )}
              {availableCount === 0 && (
                <p className="text-xs text-feedback-error">
                  No questions are available for this combination. Try a different difficulty level.
                </p>
              )}
            </div>
          </div>
        </Card>
      )}

      {/* Configuration Summary */}
      {selectedCategory && availableCount > 0 && (
        <Card className="p-6 mb-6 animate-fade-in-up">
          <h3 className="text-sm font-bold text-ink-primary uppercase tracking-wider mb-4">
            Your Quiz Configuration
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-surface-page">
              <p className="text-xs text-ink-muted mb-1">Category</p>
              <p className="text-sm font-bold text-brand-navy">
                {categories.find((c) => c.id === selectedCategory)?.shortName}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface-page">
              <p className="text-xs text-ink-muted mb-1">Difficulty</p>
              <p className="text-sm font-bold text-brand-navy capitalize">{selectedDifficulty}</p>
            </div>
            <div className="p-4 rounded-xl bg-surface-page">
              <p className="text-xs text-ink-muted mb-1">Questions</p>
              <p className="text-sm font-bold text-brand-navy">
                {effectiveCount}
                {availableCount < selectedCount && (
                  <span className="text-xs font-normal text-ink-muted ml-1">
                    (of {selectedCount} requested)
                  </span>
                )}
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* Start Button */}
      <div className="flex flex-col sm:flex-row items-center gap-4 justify-end">
        <Button variant="ghost" size="md" onClick={onNavigateHome}>
          Cancel
        </Button>
        <Button
          variant="primary"
          size="lg"
          onClick={handleStart}
          disabled={!canStart}
        >
          Start Quiz
          <ChevronRight size={20} />
        </Button>
      </div>
    </div>
  );
}
