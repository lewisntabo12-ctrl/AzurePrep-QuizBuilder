import { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  LayoutGrid,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Trophy,
  Target,
  TrendingUp,
  ExternalLink,
} from 'lucide-react';
import type { QuizResult as QuizResultType } from '@/types';
import type { Page } from '@/components/Header';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

interface ResultsProps {
  result: QuizResultType;
  onTryAgain: () => void;
  onChooseCategory: () => void;
  onNavigate: (page: Page) => void;
}

export function Results({ result, onTryAgain, onChooseCategory, onNavigate }: ResultsProps) {
  const [expandedReviews, setExpandedReviews] = useState<Set<number>>(new Set());

  const { correctCount, totalQuestions, percentage, questions, submittedAnswers } = result;

  const incorrectAnswers = submittedAnswers
    .map((answer, index) => ({ answer, question: questions[index], index }))
    .filter((item) => !item.answer.isCorrect);

  const performanceLabel =
    percentage >= 80
      ? 'Excellent'
      : percentage >= 60
        ? 'Good Progress'
        : percentage >= 40
          ? 'Keep Practising'
          : 'Needs Work';

  const performanceColor =
    percentage >= 80
      ? 'text-feedback-success'
      : percentage >= 60
        ? 'text-brand-teal'
        : percentage >= 40
          ? 'text-amber-600'
          : 'text-feedback-error';

  const performanceBg =
    percentage >= 80
      ? 'bg-feedback-success-bg border-feedback-success-border'
      : percentage >= 60
        ? 'bg-brand-teal/5 border-brand-teal/20'
        : percentage >= 40
          ? 'bg-amber-50 border-amber-200'
          : 'bg-feedback-error-bg border-feedback-error-border';

  const toggleReview = (index: number) => {
    setExpandedReviews((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  // Circular progress
  const circumference = 2 * Math.PI * 70;
  const dashOffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-brand-navy mb-2">Quiz Results</h1>
        <p className="text-ink-secondary">Review your performance and learn from each question</p>
      </div>

      {/* Score Summary */}
      <Card className={`p-6 sm:p-8 mb-6 border-2 ${performanceBg} animate-scale-in`}>
        <div className="flex flex-col sm:flex-row items-center gap-8">
          {/* Circular Score */}
          <div className="relative flex-shrink-0">
            <svg width="160" height="160" viewBox="0 0 160 160" className="-rotate-90">
              <circle
                cx="80"
                cy="80"
                r="70"
                fill="none"
                stroke="currentColor"
                strokeWidth="12"
                className="text-surface-border"
              />
              <circle
                cx="80"
                cy="80"
                r="70"
                fill="none"
                stroke="currentColor"
                strokeWidth="12"
                strokeLinecap="round"
                className={performanceColor}
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                style={{ transition: 'stroke-dashoffset 0.8s ease-smooth' }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={`text-4xl font-extrabold font-display ${performanceColor}`}>
                {percentage}%
              </span>
              <span className="text-xs font-semibold text-ink-muted uppercase tracking-wider mt-1">
                Score
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="flex-1 w-full">
            <div className="flex items-center gap-2 mb-4">
              <Trophy size={24} className={performanceColor} />
              <h2 className={`text-xl font-bold ${performanceColor}`}>{performanceLabel}</h2>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-surface-card border border-surface-border text-center">
                <CheckCircle2 className="text-feedback-success mx-auto mb-1" size={20} />
                <p className="text-2xl font-extrabold text-brand-navy">{correctCount}</p>
                <p className="text-xs text-ink-muted">Correct</p>
              </div>
              <div className="p-3 rounded-xl bg-surface-card border border-surface-border text-center">
                <XCircle className="text-feedback-error mx-auto mb-1" size={20} />
                <p className="text-2xl font-extrabold text-brand-navy">
                  {totalQuestions - correctCount}
                </p>
                <p className="text-xs text-ink-muted">Incorrect</p>
              </div>
              <div className="p-3 rounded-xl bg-surface-card border border-surface-border text-center">
                <Target className="text-brand-blue mx-auto mb-1" size={20} />
                <p className="text-2xl font-extrabold text-brand-navy">{totalQuestions}</p>
                <p className="text-xs text-ink-muted">Total</p>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-ink-muted mt-6 text-center leading-relaxed">
          This is a practice score and does not guarantee success in the official AZ-900
          certification examination.
        </p>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <Button variant="primary" size="lg" onClick={onTryAgain} fullWidth>
          <RotateCcw size={20} />
          Try Again
        </Button>
        <Button variant="outline" size="lg" onClick={onChooseCategory} fullWidth>
          <LayoutGrid size={20} />
          Choose Another Category
        </Button>
        <Button variant="ghost" size="lg" onClick={() => onNavigate('resources')} fullWidth>
          <BookOpen size={20} />
          Learning Resources
        </Button>
      </div>

      {/* Answer Review */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
          <TrendingUp size={22} className="text-brand-teal" />
          Answer Review
        </h2>

        {incorrectAnswers.length > 0 && (
          <p className="text-sm text-ink-secondary mb-4">
            {incorrectAnswers.length} question{incorrectAnswers.length !== 1 ? 's' : ''} answered
            incorrectly. Review the explanations below to strengthen your understanding.
          </p>
        )}

        {incorrectAnswers.length === 0 && (
          <Card className="p-6 mb-4 border-feedback-success-border bg-feedback-success-bg">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-feedback-success flex-shrink-0" size={28} />
              <p className="text-sm font-semibold text-feedback-success">
                Perfect score! You answered every question correctly. Try a higher difficulty or
                another category to keep challenging yourself.
              </p>
            </div>
          </Card>
        )}

        <div className="space-y-3">
          {questions.map((question, index) => {
            const answer = submittedAnswers[index];
            const isCorrect = answer?.isCorrect ?? false;
            const isExpanded = expandedReviews.has(index);
            const correctOption = question.options.find(
              (o) => o.id === question.correctOptionId,
            );
            const selectedOption = question.options.find(
              (o) => o.id === answer?.selectedOptionId,
            );

            return (
              <Card
                key={question.id}
                className={`overflow-hidden border-l-4 ${
                  isCorrect
                    ? 'border-l-feedback-success'
                    : 'border-l-feedback-error'
                }`}
              >
                <button
                  onClick={() => toggleReview(index)}
                  className="w-full text-left p-5 flex items-start gap-3 focus-ring"
                  aria-expanded={isExpanded}
                >
                  <div className="flex-shrink-0 mt-0.5">
                    {isCorrect ? (
                      <CheckCircle2 className="text-feedback-success" size={22} />
                    ) : (
                      <XCircle className="text-feedback-error" size={22} />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-ink-muted mb-1">
                      Question {index + 1} &middot; {question.topic}
                    </p>
                    <p className="text-sm font-semibold text-ink-primary leading-relaxed mb-1">
                      {question.questionText}
                    </p>
                    {!isCorrect && (
                      <p className="text-xs text-feedback-error">
                        Your answer: {selectedOption?.text ?? 'No answer selected'}
                      </p>
                    )}
                  </div>
                  <div className="flex-shrink-0 mt-1">
                    {isExpanded ? (
                      <ChevronUp className="text-ink-muted" size={18} />
                    ) : (
                      <ChevronDown className="text-ink-muted" size={18} />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 pl-14 animate-fade-in">
                    <div className="space-y-2 mb-3">
                      {question.options.map((option) => {
                        const isCorrectOpt = option.id === question.correctOptionId;
                        const isSelectedOpt = option.id === answer?.selectedOptionId;

                        return (
                          <div
                            key={option.id}
                            className={`flex items-center gap-2 p-2.5 rounded-lg text-sm ${
                              isCorrectOpt
                                ? 'bg-feedback-success-bg text-feedback-success font-semibold'
                                : isSelectedOpt && !isCorrectOpt
                                  ? 'bg-feedback-error-bg text-feedback-error font-semibold'
                                  : 'text-ink-secondary'
                            }`}
                          >
                            {isCorrectOpt && <CheckCircle2 size={16} />}
                            {isSelectedOpt && !isCorrectOpt && <XCircle size={16} />}
                            <span>{option.text}</span>
                            {isCorrectOpt && (
                              <span className="ml-auto text-xs font-bold uppercase">Correct</span>
                            )}
                            {isSelectedOpt && !isCorrectOpt && (
                              <span className="ml-auto text-xs font-bold uppercase">Your answer</span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-surface-page border border-surface-border">
                      <Lightbulb className="text-amber-500 flex-shrink-0 mt-0.5" size={16} />
                      <p className="text-sm text-ink-primary leading-relaxed">
                        {question.explanation}
                      </p>
                    </div>
                    <p className="text-xs text-ink-muted mt-2">
                      {question.sourceReference}
                    </p>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>

      {/* Resource Link */}
      <Card className="p-5 bg-brand-navy text-white text-center">
        <p className="text-sm text-slate-300 mb-3">
          Want to study the official materials for this domain?
        </p>
        <a
          href="https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-teal-light hover:underline"
        >
          View AZ-900 Study Guide
          <ExternalLink size={16} />
        </a>
      </Card>
    </div>
  );
}
