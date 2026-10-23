import type {
  Question,
  QuizConfiguration,
  QuizResult,
  LearningResource,
  Category,
  CategoryId,
  Difficulty,
  SubmittedAnswer,
  DataMode,
} from '@/types';
import { questions as mockQuestions } from '@/data/questions';
import { learningResources as mockResources } from '@/data/learningResources';
import { categories as mockCategories } from '@/data/categories';

/**
 * ─── AzurePrep QuizBuilder — Data Service Layer ───
 *
 * This module provides a single, stable interface that the UI uses to
 * retrieve quiz data.  Behind the interface, a "mock" implementation
 * serves hard-coded data so the frontend works standalone.
 *
 * When the backend developer provides the agreed API contract, a
 * "live" implementation will be added that calls the real endpoints.
 * The switch is controlled by `DATA_MODE` below (or an env var).
 *
 * ─── Expected API contract (to be confirmed by backend team) ───
 *
 * GET /api/categories
 *   Response: { categories: Category[] }
 *
 * GET /api/questions?category=<CategoryId>&difficulty=<Difficulty>&count=<number>
 *   Response: { questions: Question[] }
 *
 * GET /api/resources?category=<CategoryId>   (optional)
 *   Response: { resources: LearningResource[] }
 *
 * POST /api/quiz/submit
 *   Request:  { configuration, submittedAnswers }
 *   Response: { resultId: string }   (optional — results computed client-side today)
 *
 * The base URL for the live API will be read from
 * `import.meta.env.VITE_API_BASE_URL` once the backend is available.
 */

const DATA_MODE = 'mock' as DataMode;

// ── Simulated latency for mock mode so loading states are exercised ──
const MOCK_LATENCY_MS = 350;

function delay<T>(value: T, ms = MOCK_LATENCY_MS): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// ═══════════════════════════════════════════════════════════════
//  Public API — identical shape for mock and live modes
// ═══════════════════════════════════════════════════════════════

export const quizDataService = {
  /** Returns the current data mode so the UI can display it if needed. */
  getDataMode(): DataMode {
    return DATA_MODE;
  },

  /** Retrieve all quiz categories. */
  async getCategories(): Promise<Category[]> {
    if (DATA_MODE === 'live') {
      throw new Error('Live backend not yet configured. The API contract is pending.');
    }
    return delay(mockCategories);
  },

  /**
   * Retrieve questions filtered by category, difficulty, and count.
   * If fewer questions exist than requested, all available are returned.
   */
  async getQuestions(
    category: CategoryId,
    difficulty: Difficulty,
    count: number,
  ): Promise<Question[]> {
    if (DATA_MODE === 'live') {
      throw new Error('Live backend not yet configured. The API contract is pending.');
    }

    let pool = mockQuestions.filter((q) => q.category === category);

    if (difficulty !== 'beginner') {
      // For intermediate, include beginner + intermediate
      // For advanced, include all
      if (difficulty === 'intermediate') {
        pool = mockQuestions.filter(
          (q) => q.category === category && (q.difficulty === 'beginner' || q.difficulty === 'intermediate'),
        );
      } else {
        pool = mockQuestions.filter((q) => q.category === category);
      }
    }

    const shuffled = shuffle(pool);
    return delay(shuffled.slice(0, Math.min(count, shuffled.length)));
  },

  /** Retrieve learning resources, optionally filtered by category. */
  async getLearningResources(category?: CategoryId): Promise<LearningResource[]> {
    if (DATA_MODE === 'live') {
      throw new Error('Live backend not yet configured. The API contract is pending.');
    }

    const filtered = category
      ? mockResources.filter((r) => r.category === category)
      : mockResources;
    return delay(filtered);
  },

  /** Get the number of available questions for a category and difficulty. */
  getQuestionCount(category: CategoryId, difficulty: Difficulty): number {
    let pool = mockQuestions.filter((q) => q.category === category);
    if (difficulty === 'intermediate') {
      pool = pool.filter((q) => q.difficulty === 'beginner' || q.difficulty === 'intermediate');
    } else if (difficulty === 'advanced') {
      // all difficulties
    } else {
      pool = pool.filter((q) => q.difficulty === 'beginner');
    }
    return pool.length;
  },

  /**
   * Compute a quiz result locally from submitted answers.
   * This does not require backend support. When the backend provides
   * a POST /api/quiz/submit endpoint, this method can also persist
   * the result server-side.
   */
  computeQuizResult(
    configuration: QuizConfiguration,
    questions: Question[],
    submittedAnswers: SubmittedAnswer[],
  ): QuizResult {
    const correctCount = submittedAnswers.filter((a) => a.isCorrect).length;
    const totalQuestions = questions.length;
    const percentage = totalQuestions > 0
      ? Math.round((correctCount / totalQuestions) * 100)
      : 0;

    return {
      configuration,
      questions,
      submittedAnswers,
      correctCount,
      totalQuestions,
      percentage,
    };
  },

  /**
   * Submit quiz results to the backend (if supported).
   * Currently a no-op in mock mode — results are computed client-side.
   * The backend team may implement POST /api/quiz/submit to persist
   * results for history tracking when authentication is available.
   */
  async submitQuizResult(_result: QuizResult): Promise<{ resultId: string | null }> {
    if (DATA_MODE === 'live') {
      throw new Error('Live backend not yet configured. The API contract is pending.');
    }
    // Mock mode: results are computed and stored in client state only.
    return delay({ resultId: null }, 100);
  },
};
