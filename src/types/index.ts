export type CategoryId =
  | 'cloud-concepts'
  | 'azure-architecture-and-services'
  | 'azure-management-and-governance';

export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export interface Category {
  id: CategoryId;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  skillsOutline: string;
}

export interface AnswerOption {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  category: CategoryId;
  topic: string;
  difficulty: Difficulty;
  questionText: string;
  options: AnswerOption[];
  correctOptionId: string;
  explanation: string;
  sourceReference: string;
}

export interface QuizConfiguration {
  category: CategoryId;
  difficulty: Difficulty;
  questionCount: number;
}

export interface SubmittedAnswer {
  questionId: string;
  selectedOptionId: string | null;
  isCorrect: boolean;
}

export interface QuizResult {
  configuration: QuizConfiguration;
  questions: Question[];
  submittedAnswers: SubmittedAnswer[];
  correctCount: number;
  totalQuestions: number;
  percentage: number;
}

export interface LearningResource {
  id: string;
  category: CategoryId;
  title: string;
  description: string;
  url: string;
  type: 'documentation' | 'module' | 'guide' | 'reference';
}

export type DataMode = 'mock' | 'live';
