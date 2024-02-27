import _ from 'lodash';
import { useEffect, useMemo, useState } from 'react';

import { IQuiz } from '@/models/quiz.model';

import { Flex } from '@/styles/flex.style';
import * as Style from './QuizItem.style';

interface Props {
  quiz: IQuiz;
  isShow: boolean;
  onSelect: (isCorrect: boolean, quiz?: IQuiz) => void;
}

const QuizItem = ({ quiz, isShow, onSelect }: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>();

  const answerList = useMemo(() => {
    return _.shuffle([quiz.correct_answer, ...quiz.incorrect_answers]);
  }, [quiz]);

  const handleClickAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    onSelect(answer === quiz.correct_answer, quiz);
  };

  useEffect(() => {
    setSelectedAnswer(undefined);
  }, [isShow]);

  return (
    <Style.Container column data-show={isShow ? 'on' : 'off'}>
      <Flex column css={{ gap: '$gap3' }}>
        <Style.Category
          dangerouslySetInnerHTML={{ __html: `[${quiz.category}]` }}
        />

        <Style.Title dangerouslySetInnerHTML={{ __html: quiz.question }} />
      </Flex>

      <Style.AnswerList>
        {answerList.map((answer) => (
          <Style.AnswerButton
            key={answer}
            type={
              selectedAnswer && answer === quiz.correct_answer
                ? 'correct'
                : selectedAnswer === answer &&
                  selectedAnswer !== quiz.correct_answer
                ? 'wrong'
                : undefined
            }
            disabled={selectedAnswer !== undefined}
            onClick={() => handleClickAnswer(answer)}
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        ))}
      </Style.AnswerList>
    </Style.Container>
  );
};

export default QuizItem;
