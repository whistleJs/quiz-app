'use client';

import axios from 'axios';
import {
  ReadonlyURLSearchParams,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { useState } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';

import { IQuiz, QuizDifficultyType, QuizResponse } from '@/models/quiz.model';

import { Button } from '@/styles/button.style';
import { Flex } from '@/styles/flex.style';
import { Text } from '@/styles/text.style';
import * as Style from './QuizView.style';

import { getDifficultyText } from '@/utils/quiz';
import { QuizItem } from '../QuizItem';

const fetcher = async (searchParam: ReadonlyURLSearchParams) => {
  const response = await axios.get<QuizResponse>(
    `https://opentdb.com/api.php?${searchParam}&type=multiple`,
  );

  return response.data.results;
};

const QuizView = () => {
  const router = useRouter();
  const searchParam = useSearchParams();
  const { data: quizList } = useSuspenseQuery({
    retry: 0,
    queryKey: ['/quiz'],
    queryFn: () => fetcher(searchParam),
  });

  const [startTime] = useState(Date.now());
  const [current, setCurrent] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [isShowButton, setIsShowButton] = useState(false);

  const amount = searchParam.get('amount') as string;
  const difficulty = searchParam.get('difficulty') as QuizDifficultyType;

  const handleCreateWrongNote = (quiz: IQuiz) => {
    if (!localStorage.getItem('wrong-note')) {
      localStorage.setItem('wrong-note', '[]');
    }

    const wrongNote: IQuiz[] = JSON.parse(
      localStorage.getItem('wrong-note') as string,
    );
    const find = wrongNote.find((item) => item.question === quiz.question);

    if (!find) {
      wrongNote.push(quiz);
    }

    localStorage.setItem('wrong-note', JSON.stringify(wrongNote));
  };

  const handleSelectQuizItem = (isCorrect: boolean, quiz?: IQuiz) => {
    if (isCorrect) {
      setCorrectCount(correctCount + 1);
    } else {
      if (quiz) {
        handleCreateWrongNote(quiz);
      }

      setWrongCount(wrongCount + 1);
    }

    setIsShowButton(true);
  };

  const handleClickNextButton = () => {
    if (current === quizList.length - 1) {
      const param = new URLSearchParams();
      param.set('difficulty', difficulty);
      param.set('correct', correctCount.toString());
      param.set('wrong', wrongCount.toString());
      param.set('time', (Date.now() - startTime).toString());

      router.push(`/result?${param}`);
      return;
    }

    setCurrent(current + 1);
    setIsShowButton(false);
  };

  return (
    <Style.Container column justifyContent="between">
      <Style.Progress
        css={{ width: `${(100 / quizList.length) * (current + 1)}%` }}
      />

      <Flex
        alignItems="center"
        justifyContent="center"
        css={{ width: '100%', height: 50, gap: '$gap3' }}
      >
        <Style.AmountText>
          <span>{current + 1}</span> / {amount}
        </Style.AmountText>

        <Style.DifficultyText>
          [난이도: <strong>{getDifficultyText(difficulty)}</strong>]
        </Style.DifficultyText>
      </Flex>

      <Flex style={{ position: 'relative' }}>
        {quizList.map((quiz, index) => (
          <QuizItem
            key={quiz.question}
            quiz={quiz}
            isShow={current === index}
            onSelect={handleSelectQuizItem}
          />
        ))}
      </Flex>

      <Flex style={{ height: 45 }}>
        {isShowButton && (
          <Button type="primary" onClick={handleClickNextButton}>
            <Text>
              {current === quizList.length - 1 ? '결과 보기' : '다음 문항'}
            </Text>
          </Button>
        )}
      </Flex>
    </Style.Container>
  );
};

export default QuizView;
