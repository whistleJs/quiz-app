import { redirect } from 'next/navigation';

import { QuizDifficultyType } from '@/models/quiz.model';

import { LinkButton } from '@/styles/button.style';
import { Flex } from '@/styles/flex.style';
import * as Style from './page.style';

import { getDifficultyText } from '@/utils/quiz';
import { getFormattedTime } from '@/utils/time';

const ResultPage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  if (
    !searchParams.difficulty ||
    !['easy', 'medium', 'hard'].includes(searchParams.difficulty) ||
    !searchParams.correct ||
    !searchParams.wrong ||
    !searchParams.time
  ) {
    redirect('/');
  }

  const difficulty = getDifficultyText(
    searchParams.difficulty as QuizDifficultyType,
  );
  const time = Number(searchParams.time);
  const correct = Number(searchParams.correct);
  const wrong = Number(searchParams.wrong);
  const total = correct + wrong;

  return (
    <Style.Container column justifyContent="center">
      <Flex column alignItems="center">
        <Flex css={{ gap: '$gap1' }}>
          <Style.Difficulty>
            난이도: <strong>[{difficulty}]</strong>
          </Style.Difficulty>

          <Style.Difficulty>
            걸린 시간:
            <strong>{getFormattedTime(time)}</strong>
          </Style.Difficulty>
        </Flex>

        <Style.Title>
          총 <span>{total} 문항</span> 중
        </Style.Title>

        <Flex css={{ gap: '$gap3' }}>
          <Style.Count type="Subtitle" status="correct">
            <span>[정답]</span> {correct} 문항
          </Style.Count>

          <Style.Count type="Subtitle" status="wrong">
            <span>[오답]</span> {wrong} 문항
          </Style.Count>
        </Flex>
      </Flex>

      <Flex column css={{ width: '100%', gap: '$gap3' }}>
        <LinkButton href="/">메인으로</LinkButton>

        <LinkButton href="/wrong-note" type="primary">
          오답 노트 보기
        </LinkButton>
      </Flex>
    </Style.Container>
  );
};

export default ResultPage;
