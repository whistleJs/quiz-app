import { QuizDifficultyType } from '@/models/quiz.model';

export const getDifficultyText = (difficulty: QuizDifficultyType) => {
  switch (difficulty) {
    case 'easy':
      return '쉬움';
    case 'medium':
      return '보통';
    case 'hard':
      return '어려움';
  }
};
