import { QuizConfig } from '@/components/QuizConfig';

import { LinkButton } from '@/styles/button.style';
import { Text } from '@/styles/text.style';

import * as Style from './page.style';

const MainPage = () => {
  return (
    <Style.Container column alignItems="center" justifyContent="center">
      <Style.Title>
        <span>문항 수</span>와 <span>난이도</span>를<br />
        선택해주세요!
      </Style.Title>

      <Style.Box column>
        <QuizConfig />

        <LinkButton type="primary" href="/wrong-note">
          <Text>오답 노트 보기</Text>
        </LinkButton>
      </Style.Box>
    </Style.Container>
  );
};

export default MainPage;
