'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import {
  Cloud,
  CheckCircle2,
  XCircle,
  Brain,
  Lightbulb,
  RotateCcw,
  ChevronRight,
  Sparkles,
  Loader2,
  Trophy,
  BookOpen,
  Zap,
  Target,
} from 'lucide-react';
import { quizQuestions, type Question } from '@/lib/quiz-questions';

type QuizState = 'start' | 'question' | 'feedback' | 'results';

interface Evaluation {
  isCorrect: boolean;
  feedback: string;
  studyTip: string;
  provider?: string;
}

export default function Home() {
  const [quizState, setQuizState] = useState<QuizState>('start');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [evaluation, setEvaluation] = useState<Evaluation | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const totalQuestions = quizQuestions.length;
  const currentQuestion: Question = quizQuestions[currentIndex];

  const startQuiz = useCallback(() => {
    setQuizState('question');
    setCurrentIndex(0);
    setSelectedOption(null);
    setAnswers([]);
    setEvaluation(null);
    setError(null);
  }, []);

  const submitAnswer = useCallback(async () => {
    if (selectedOption === null) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/evaluate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: currentQuestion.question,
          selectedAnswer: currentQuestion.options[selectedOption],
          correctAnswer: currentQuestion.options[currentQuestion.correctAnswer],
          topic: currentQuestion.topic,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to evaluate answer');
      }

      const data: Evaluation = await response.json();
      setEvaluation(data);
      setAnswers((prev) => [...prev, data.isCorrect]);
      setQuizState('feedback');
    } catch {
      const isCorrect = selectedOption === currentQuestion.correctAnswer;
      setEvaluation({
        isCorrect,
        feedback: isCorrect
          ? 'Correct!'
          : 'Incorrect. Review the explanation below.',
        studyTip: currentQuestion.explanation,
      });
      setAnswers((prev) => [...prev, isCorrect]);
      setQuizState('feedback');
    } finally {
      setLoading(false);
    }
  }, [selectedOption, currentQuestion]);

  const nextQuestion = useCallback(() => {
    if (currentIndex + 1 >= totalQuestions) {
      setQuizState('results');
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setEvaluation(null);
      setError(null);
      setQuizState('question');
    }
  }, [currentIndex, totalQuestions]);

  const restartQuiz = useCallback(() => {
    setQuizState('start');
    setCurrentIndex(0);
    setSelectedOption(null);
    setAnswers([]);
    setEvaluation(null);
    setError(null);
  }, []);

  const score = answers.filter(Boolean).length;
  const scorePercent = Math.round((score / totalQuestions) * 100);

  // -- START SCREEN --
  if (quizState === 'start') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105">
              <Cloud className="w-10 h-10" />
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                AZ-900 Smart Quiz Builder
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Test your Azure Fundamentals knowledge with AI-powered answer
                evaluation and personalized study tips.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              <Card className="text-center p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-3">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm font-semibold text-foreground">
                  {totalQuestions} Questions
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Across all AZ-900 domains
                </p>
              </Card>
              <Card className="text-center p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-3">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm font-semibold text-foreground">
                  AI Evaluation
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Instant feedback on each answer
                </p>
              </Card>
              <Card className="text-center p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-3">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm font-semibold text-foreground">
                  Study Tips
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Personalized guidance per question
                </p>
              </Card>
            </div>

            <div className="pt-6">
              <Button
                size="lg"
                onClick={startQuiz}
                className="text-base px-8 py-6 h-auto rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Start Quiz
              </Button>
            </div>
          </div>
        </div>

        <Disclaimer />
      </div>
    );
  }

  // -- RESULTS SCREEN --
  if (quizState === 'results') {
    const getScoreColor = () => {
      if (scorePercent >= 80) return 'text-success';
      if (scorePercent >= 60) return 'text-warning';
      return 'text-destructive';
    };

    const getScoreMessage = () => {
      if (scorePercent >= 80) return 'Excellent! You are well-prepared for the AZ-900 exam.';
      if (scorePercent >= 60) return 'Good progress. Review the missed topics and try again.';
      return 'Keep studying. Focus on the fundamentals and retry the quiz.';
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950">
        <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
          <Card className="overflow-hidden border-0 shadow-xl">
            <div className="bg-gradient-to-r from-primary to-accent p-8 text-center text-primary-foreground">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                <Trophy className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold">Quiz Complete</h2>
              <p className="text-primary-foreground/80 mt-2">
                You answered {score} out of {totalQuestions} correctly
              </p>
            </div>

            <CardContent className="p-8 space-y-6">
              <div className="text-center space-y-2">
                <div className={`text-6xl font-bold ${getScoreColor()}`}>
                  {scorePercent}%
                </div>
                <p className="text-muted-foreground">{getScoreMessage()}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-success/10 p-4 text-center">
                  <CheckCircle2 className="w-6 h-6 text-success mx-auto mb-1" />
                  <p className="text-2xl font-bold text-foreground">{score}</p>
                  <p className="text-xs text-muted-foreground">Correct</p>
                </div>
                <div className="rounded-xl bg-destructive/10 p-4 text-center">
                  <XCircle className="w-6 h-6 text-destructive mx-auto mb-1" />
                  <p className="text-2xl font-bold text-foreground">
                    {totalQuestions - score}
                  </p>
                  <p className="text-xs text-muted-foreground">Incorrect</p>
                </div>
              </div>

              <div className="rounded-xl border p-4 bg-muted/30">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold">Performance by Topic</span>
                </div>
                <div className="space-y-2">
                  {getTopicBreakdown().map((topic) => (
                    <div key={topic.name} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{topic.name}</span>
                      <Badge
                        variant={topic.percent === 100 ? 'default' : 'secondary'}
                        className={
                          topic.percent === 100
                            ? 'bg-success text-success-foreground'
                            : topic.percent >= 50
                              ? 'bg-warning text-warning-foreground'
                              : 'bg-destructive text-destructive-foreground'
                        }
                      >
                        {topic.correct}/{topic.total}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                size="lg"
                onClick={restartQuiz}
                className="w-full rounded-xl"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Try Again
              </Button>
            </CardContent>
          </Card>
        </div>

        <Disclaimer />
      </div>
    );
  }

  // -- QUESTION + FEEDBACK SCREENS --
  const progressValue = ((currentIndex + (quizState === 'feedback' ? 1 : 0)) / totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950">
      <div className="max-w-2xl mx-auto px-6 py-8 md:py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Cloud className="w-7 h-7 text-primary" />
            <span className="font-bold text-foreground">AZ-900 Quiz</span>
          </div>
          <Badge variant="secondary" className="text-xs">
            Question {currentIndex + 1} of {totalQuestions}
          </Badge>
        </div>

        {/* Progress */}
        <div className="mb-8 space-y-2">
          <Progress value={progressValue} className="h-2" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{Math.round(progressValue)}% complete</span>
            <span>{answers.filter(Boolean).length} correct so far</span>
          </div>
        </div>

        {/* Question Card */}
        <Card className="border-0 shadow-lg mb-6">
          <CardHeader>
            <div className="flex items-center gap-2 mb-1">
              <Badge className="bg-primary/10 text-primary border-0 hover:bg-primary/15">
                {currentQuestion.topic}
              </Badge>
            </div>
            <CardTitle className="text-xl leading-relaxed">
              {currentQuestion.question}
            </CardTitle>
          </CardHeader>

          <CardContent>
            {quizState === 'question' && (
              <RadioGroup
                value={selectedOption?.toString() ?? ''}
                onValueChange={(val) => setSelectedOption(Number(val))}
                className="space-y-3"
              >
                {currentQuestion.options.map((option, idx) => (
                  <label
                    key={idx}
                    htmlFor={`option-${idx}`}
                    className={`flex items-start gap-3 rounded-xl border p-4 cursor-pointer transition-all hover:bg-accent/5 ${
                      selectedOption === idx
                        ? 'border-primary bg-primary/5 ring-1 ring-primary'
                        : 'border-border'
                    }`}
                  >
                    <RadioGroupItem
                      value={idx.toString()}
                      id={`option-${idx}`}
                      className="mt-1"
                    />
                    <span className="text-sm text-foreground leading-relaxed">
                      {option}
                    </span>
                  </label>
                ))}
              </RadioGroup>
            )}

            {quizState === 'feedback' && (
              <div className="space-y-4">
                {/* Show options with correct/incorrect highlighting */}
                <div className="space-y-3">
                  {currentQuestion.options.map((option, idx) => {
                    const isCorrect = idx === currentQuestion.correctAnswer;
                    const isSelected = idx === selectedOption;

                    return (
                      <div
                        key={idx}
                        className={`flex items-start gap-3 rounded-xl border p-4 transition-all ${
                          isCorrect
                            ? 'border-success bg-success/10'
                            : isSelected
                              ? 'border-destructive bg-destructive/10'
                              : 'border-border opacity-60'
                        }`}
                      >
                        <div className="mt-0.5">
                          {isCorrect ? (
                            <CheckCircle2 className="w-5 h-5 text-success" />
                          ) : isSelected ? (
                            <XCircle className="w-5 h-5 text-destructive" />
                          ) : (
                            <div className="w-5 h-5 rounded-full border-2 border-muted" />
                          )}
                        </div>
                        <span className="text-sm text-foreground leading-relaxed">
                          {option}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* AI Feedback */}
                {evaluation && (
                  <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 space-y-3">
                    <div className="flex items-center gap-2">
                      <Brain className="w-5 h-5 text-primary" />
                      <span className="text-sm font-semibold text-foreground">
                        AI Tutor Feedback
                      </span>
                      {evaluation.isCorrect ? (
                        <Badge className="bg-success text-success-foreground border-0">
                          Correct
                        </Badge>
                      ) : (
                        <Badge className="bg-destructive text-destructive-foreground border-0">
                          Incorrect
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-foreground leading-relaxed">
                      {evaluation.feedback}
                    </p>
                    <div className="flex items-start gap-2 pt-1">
                      <Lightbulb className="w-4 h-4 text-warning mt-0.5 shrink-0" />
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {evaluation.studyTip}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          {quizState === 'question' && (
            <Button
              size="lg"
              onClick={submitAnswer}
              disabled={selectedOption === null || loading}
              className="rounded-xl px-6"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Evaluating...
                </>
              ) : (
                <>
                  Submit Answer
                  <ChevronRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          )}

          {quizState === 'feedback' && (
            <Button size="lg" onClick={nextQuestion} className="rounded-xl px-6">
              {currentIndex + 1 >= totalQuestions ? 'View Results' : 'Next Question'}
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          )}
        </div>

        {error && (
          <p className="text-sm text-destructive text-center mt-4">{error}</p>
        )}
      </div>

      <Disclaimer />
    </div>
  );

  function getTopicBreakdown() {
    const topics = Array.from(new Set(quizQuestions.map((q) => q.topic)));
    return topics.map((topicName) => {
      const topicQuestions = quizQuestions.filter((q) => q.topic === topicName);
      const topicIndices = quizQuestions
        .map((q, i) => (q.topic === topicName ? i : -1))
        .filter((i) => i >= 0);
      const correct = topicIndices.filter(
        (i) => answers[i] === true
      ).length;
      return {
        name: topicName,
        correct,
        total: topicQuestions.length,
        percent: Math.round((correct / topicQuestions.length) * 100),
      };
    });
  }
}

function Disclaimer() {
  return (
    <footer className="border-t border-border/50 bg-muted/20">
      <div className="max-w-3xl mx-auto px-6 py-6 text-center">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold">Unofficial study tool.</span>{' '}
          Not affiliated with or endorsed by Microsoft. Content is for educational
          purposes only.
        </p>
      </div>
    </footer>
  );
}
