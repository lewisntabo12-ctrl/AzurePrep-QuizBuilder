import { useEffect, useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  ChevronRight,
  Lightbulb,
  BookOpen,
} from 'lucide-react';
import type { Question, SubmittedAnswer, QuizConfiguration, QuizResult } from '@/types';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ProgressIndicator, LoadingSpinner, ErrorState } from '@/components/ui/Feedback';
import { quizDataService } from '@/services/quizDataService';

interface QuizInterfaceProps {
  configuration: QuizConfiguration;
  onComplete: (result: QuizResult) => void;
  onExit: () => void;
}

export function QuizInterface({ configuration, onComplete, onExit }: QuizInterfaceProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submittedAnswers, setSubmittedAnswers] = useState<SubmittedAnswer[]>([]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const qs = await quizDataService.getQuestions(
          configuration.category,
          configuration.difficulty,
          configuration.questionCount,
        );
        if (mounted) {
          if (qs.length === 0) {
            setError('No questions are available for this category and difficulty. Please try a different configuration.');
            setLoading(false);
          } else {
            setQuestions(qs);
            setLoading(false);
          }
        }
      } catch {
        if (mounted) {
          setError('Unable to load questions. Please try again.');
          setLoading(false);
        }
      }
    })();
    return () => {
      mounted = false;
    };
  }, [configuration]);

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  const handleSubmit = () => {
    if (selectedOptionId === null || submitted) return;

    const isCorrect = selectedOptionId === currentQuestion.correctOptionId;
    const answer: SubmittedAnswer = {
      questionId: currentQuestion.id,
      selectedOptionId,
      isCorrect,
    };

    setSubmittedAnswers((prev) => [...prev, answer]);
    setSubmitted(true);
  };

  const handleNext = () => {
    if (!submitted) return;

    if (isLastQuestion) {
      const result = quizDataService.computeQuizResult(
        configuration,
        questions,
        [...submittedAnswers],
      );
      onComplete(result);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setSubmitted(false);
    }
  };

  const handleRetry = () => {
    setLoading(true);
    setError(null);
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setSubmitted(false);
    setSubmittedAnswers([]);
    // Re-fetch questions
    (async () => {
      try {
        const qs = await quizDataService.getQuestions(
          configuration.category,
          configuration.difficulty,
          configuration.questionCount,
        );
        if (qs.length === 0) {
          setError('No questions available for this configuration.');
        } else {
          setQuestions(qs);
        }
      } catch {
        setError('Unable to load questions. Please try again.');
      }
      setLoading(false);
    })();
  };

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <LoadingSpinner label="Preparing your quiz..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ErrorState message={error} onRetry={handleRetry} />
        <div className="text-center mt-6">
          <Button variant="ghost" onClick={onExit}>
            Back to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  const isCorrectAnswer = submitted && selectedOptionId === currentQuestion.correctOptionId;
  const selectedWrong = submitted && selectedOptionId !== currentQuestion.correctOptionId;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 animate-fade-in">
      {/* Exit / Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onExit}
            className="text-sm font-medium text-ink-secondary hover:text-brand-blue transition-colors focus-ring rounded-lg px-2 py-1"
          >
            Exit Quiz
          </button>
          <span className="text-xs font-semibold text-ink-muted uppercase tracking-wider">
            {configuration.difficulty}
          </span>
        </div>
        <ProgressIndicator current={currentIndex + 1} total={questions.length} />
      </div>

      {/* Question Card */}
      <Card className="p-6 sm:p-8 mb-4 animate-fade-in-up" key={currentQuestion.id}>
        {/* Topic badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal text-xs font-bold">
            <BookOpen size={12} />
            {currentQuestion.topic}
          </span>
        </div>

        {/* Question text */}
        <h2 className="text-lg sm:text-xl font-bold text-brand-navy leading-relaxed mb-6">
          {currentQuestion.questionText}
        </h2>

        {/* Answer options */}
        <div className="space-y-3">
          {currentQuestion.options.map((option) => {
            const isSelected = selectedOptionId === option.id;
            const isCorrect = option.id === currentQuestion.correctOptionId;

            let stateClasses = 'border-surface-border bg-surface-card hover:border-brand-blue/40 hover:bg-brand-blue/3';
            if (isSelected && !submitted) {
              stateClasses = 'border-brand-blue bg-brand-blue/8';
            }
            if (submitted && isCorrect) {
              stateClasses = 'border-feedback-success bg-feedback-success-bg';
            }
            if (submitted && isSelected && !isCorrect) {
              stateClasses = 'border-feedback-error bg-feedback-error-bg';
            }
            if (submitted && !isSelected && !isCorrect) {
              stateClasses = 'border-surface-border bg-surface-card opacity-50';
            }

            return (
              <button
                key={option.id}
                onClick={() => !submitted && setSelectedOptionId(option.id)}
                disabled={submitted}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 focus-ring flex items-center gap-3 ${stateClasses} ${!submitted ? 'cursor-pointer' : 'cursor-default'}`}
                aria-pressed={isSelected}
                aria-disabled={submitted}
              >
                {/* Radio indicator */}
                <div
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    isSelected && !submitted
                      ? 'border-brand-blue bg-brand-blue'
                      : submitted && isCorrect
                        ? 'border-feedback-success bg-feedback-success'
                        : submitted && isSelected && !isCorrect
                          ? 'border-feedback-error bg-feedback-error'
                          : 'border-surface-border'
                  }`}
                >
                  {isSelected && !submitted && (
                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                  )}
                  {submitted && isCorrect && (
                    <CheckCircle2 className="text-white" size={16} />
                  )}
                  {submitted && isSelected && !isCorrect && (
                    <XCircle className="text-white" size={16} />
                  )}
                </div>

                <span
                  className={`text-sm sm:text-base flex-1 ${
                    submitted && isCorrect
                      ? 'font-semibold text-feedback-success'
                      : submitted && isSelected && !isCorrect
                        ? 'font-semibold text-feedback-error'
                        : 'text-ink-primary'
                  }`}
                >
                  {option.text}
                </span>
              </button>
            );
          })}
        </div>
      </Card>

      {/* Feedback Panel */}
      {submitted && (
        <Card
          className={`p-5 sm:p-6 mb-4 animate-slide-down overflow-hidden ${
            isCorrectAnswer
              ? 'border-feedback-success-border'
              : 'border-feedback-error-border'
          }`}
        >
          <div className="flex items-start gap-4">
            <div
              className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center ${
                isCorrectAnswer ? 'bg-feedback-success-bg' : 'bg-feedback-error-bg'
              }`}
            >
              {isCorrectAnswer ? (
                <CheckCircle2 className="text-feedback-success" size={26} />
              ) : (
                <XCircle className="text-feedback-error" size={26} />
              )}
            </div>
            <div className="flex-1">
              <p
                className={`text-base font-bold mb-2 ${
                  isCorrectAnswer ? 'text-feedback-success' : 'text-feedback-error'
                }`}
              >
                {isCorrectAnswer ? 'Correct!' : 'Not quite right'}
              </p>
              <div className="flex items-start gap-2 mt-3 mb-2">
                <Lightbulb className="text-amber-500 flex-shrink-0 mt-0.5" size={18} />
                <p className="text-sm text-ink-primary leading-relaxed">
                  {currentQuestion.explanation}
                </p>
              </div>
              <p className="text-xs text-ink-muted mt-3 pl-7">
                {currentQuestion.sourceReference}
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* Action Buttons */}
      <div className="flex justify-end gap-3">
        {!submitted ? (
          <Button
            variant="primary"
            size="lg"
            onClick={handleSubmit}
            disabled={selectedOptionId === null}
          >
            Submit Answer
          </Button>
        ) : (
          <Button
            variant="primary"
            size="lg"
            onClick={handleNext}
            className={isCorrectAnswer ? '' : selectedWrong ? '' : ''}
          >
            {isLastQuestion ? 'View Results' : 'Next Question'}
            <ChevronRight size={20} />
          </Button>
        )}
      </div>
    </div>
  );
}
