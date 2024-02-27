'use client';

import _ from 'lodash';
import { useEffect, useState } from 'react';

import { QuizItem } from '@/components/QuizItem';

import { IQuiz } from '@/models/quiz.model';

import { Flex } from '@/styles/flex.style';
import { Button, LinkButton } from '@/styles/button.style';
import { Text } from '@/styles/text.style';

const WrongNotePage = () => {
  const [current, setCurrent] = useState(0);
  const [quizList, setQuizList] = useState<IQuiz[]>([]);

  useEffect(() => {
    const wrongNote = localStorage.getItem('wrong-note');

    if (wrongNote) {
      const quizList = JSON.parse(wrongNote) as IQuiz[];
      setQuizList(_.shuffle(quizList));
    }
  }, []);

  return (
    <Flex
      column
      justifyContent="between"
      css={{ width: '100%', height: '100%', paddingBottom: '$padding5' }}
    >
      <div />

      <Flex style={{ position: 'relative' }}>
        {quizList.map((quiz, index) => (
          <QuizItem
            key={quiz.question}
            quiz={quiz}
            isShow={current === index}
            onSelect={() => {}}
          />
        ))}
      </Flex>

      <Flex column css={{ gap: '$gap1' }}>
        <LinkButton href="/">메인으로</LinkButton>

        <Button
          type="primary"
          onClick={() => setCurrent((current + 1) % quizList.length)}
        >
          <Text>다른 문항</Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default WrongNotePage;
