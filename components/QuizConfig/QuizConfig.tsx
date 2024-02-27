'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { ToggleGroup, ToggleGroupItem } from '@/components/ToggleGroup';

import { Button } from '@/styles/button.style';
import { Flex } from '@/styles/flex.style';
import { Text } from '@/styles/text.style';

const QuizConfig = () => {
  const amountList: ToggleGroupItem[] = [
    { id: 5, name: '5문항' },
    { id: 10, name: '10문항' },
    { id: 20, name: '20문항' },
  ];

  const difficultyList: ToggleGroupItem[] = [
    { id: 'easy', name: '쉬움' },
    { id: 'medium', name: '보통' },
    { id: 'hard', name: '어려움' },
  ];

  const router = useRouter();
  const [amount, setAmount] = useState(10);
  const [difficulty, setDifficulty] = useState('medium');

  const handleClickSubmitButton = () => {
    const searchParam = new URLSearchParams();
    searchParam.append('amount', amount.toString());
    searchParam.append('difficulty', difficulty);

    router.push(`/quiz?${searchParam.toString()}`);
  };

  return (
    <Flex column css={{ gap: '$gap5' }}>
      <Flex justifyContent="around">
        <ToggleGroup
          selectId={amount}
          list={amountList}
          onSelect={({ id }) => setAmount(id as number)}
        />

        <ToggleGroup
          selectId={difficulty}
          list={difficultyList}
          onSelect={({ id }) => setDifficulty(id as string)}
        />
      </Flex>

      <Button onClick={handleClickSubmitButton}>
        <Text>퀴즈 풀기</Text>
      </Button>
    </Flex>
  );
};

export default QuizConfig;
