'use client';

import { useQueryErrorResetBoundary } from '@tanstack/react-query';

import { Button } from '@/styles/button.style';
import { Flex } from '@/styles/flex.style';
import { Text } from '@/styles/text.style';
import * as Style from './error.style';

const QuizPageError = ({ reset: renderReset }: { reset: () => void }) => {
  const { reset: resetQuery } = useQueryErrorResetBoundary();

  const handleClick = () => {
    resetQuery();
    renderReset();
  };

  return (
    <Flex
      column
      alignItems="center"
      justifyContent="center"
      css={{ width: '100%', height: '100%', gap: '$gap5' }}
    >
      <Flex column alignItems="center" css={{ gap: '$gap3' }}>
        <Style.Title>
          문제를 불러오는 도중
          <br />
          <span>오류</span>가 발생했습니다 :(
        </Style.Title>

        <Text type="Subtitle" css={{ color: '$gray' }}>
          나중에 다시 시도해주세요!
        </Text>
      </Flex>

      <Button type="primary" onClick={handleClick}>
        <Text>재시도</Text>
      </Button>
    </Flex>
  );
};

export default QuizPageError;
