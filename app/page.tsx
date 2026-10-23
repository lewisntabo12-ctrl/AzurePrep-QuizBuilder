'use client'
import { quizDatabase } from '@/lib/quiz-questions';
import { useState, useCallback } from 'react';
import { Header } from '@/components/Header';
import type { Page } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Dashboard } from '@/pages/Dashboard';
import { QuizSetup } from '@/pages/QuizSetup';
import { QuizInterface } from '@/pages/QuizInterface';
import { Results } from '@/pages/Results';
import { Resources } from '@/pages/Resources';
import type { CategoryId, QuizConfiguration, QuizResult } from '@/types';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [preselectedCategory, setPreselectedCategory] = useState<CategoryId | null>(null);
  const [quizConfig, setQuizConfig] = useState<QuizConfiguration | null>(null);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  const handleNavigate = useCallback((page: Page) => {
    setCurrentPage(page);
  }, []);

  const handleSelectCategory = useCallback((categoryId: string) => {
    setPreselectedCategory(categoryId as CategoryId);
  }, []);

  const handleStartQuiz = useCallback((config: QuizConfiguration) => {
    setQuizConfig(config);
    setCurrentPage('quiz');
  }, []);

  const handleQuizComplete = useCallback((result: QuizResult) => {
    setQuizResult(result);
    setCurrentPage('results');
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
  }, [quizConfig]);

  const handleChooseCategory = useCallback(() => {
    setPreselectedCategory(null);
    setCurrentPage('quiz-setup');
  }, []);

  const handleExitQuiz = useCallback(() => {
    setCurrentPage('dashboard');
  }, []);

  const inQuizMode = currentPage === 'quiz';

  return (
    <div className="min-h-screen flex flex-col bg-surface-page">
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        inQuiz={inQuizMode}
      />

      <main className="flex-1">
        {currentPage === 'dashboard' && (
          <Dashboard
            onNavigate={handleNavigate}
            onSelectCategory={handleSelectCategory}
          />
        )}

        {currentPage === 'quiz-setup' && (
          <QuizSetup
            preselectedCategory={preselectedCategory}
            onStartQuiz={handleStartQuiz}
            onNavigateHome={() => handleNavigate('dashboard')}
          />
        )}

        {currentPage === 'quiz' && quizConfig && (
          <QuizInterface
            key={`${quizConfig.category}-${quizConfig.difficulty}-${quizConfig.questionCount}-${Date.now()}`}
            configuration={quizConfig}
            onComplete={handleQuizComplete}
            onExit={handleExitQuiz}
          />
        )}

        {currentPage === 'results' && quizResult && (
          <Results
            result={quizResult}
            onTryAgain={handleTryAgain}
            onChooseCategory={handleChooseCategory}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'resources' && <Resources onNavigate={handleNavigate} />}
      </main>

      <Footer />
    </div>
  );
}

export default App;

