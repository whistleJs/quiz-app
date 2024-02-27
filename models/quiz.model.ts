export type QuizDifficultyType = 'easy' | 'medium' | 'hard';

export interface IQuiz {
  type: 'multiple';
  difficulty: QuizDifficultyType;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface QuizResponse {
  response_code: number;
  results: IQuiz[];
}
