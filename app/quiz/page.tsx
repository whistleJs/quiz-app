import { redirect } from 'next/navigation';

import { QuizView } from '@/components/QuizView';

const QuizPage = ({
  searchParams,
}: Readonly<{ searchParams: { [key: string]: string } }>) => {
  if (
    !searchParams.amount ||
    !searchParams.difficulty ||
    !['easy', 'medium', 'hard'].includes(searchParams.difficulty)
  ) {
    redirect('/');
  }

  return <QuizView />;
};

export default QuizPage;
