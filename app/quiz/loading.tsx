import { Flex } from '@/styles/flex.style';
import * as Style from './loading.style';

const QuizPageLoading = () => {
  return (
    <Style.Container column justifyContent="between">
      <Style.Progress />

      <Flex
        alignItems="center"
        justifyContent="center"
        css={{ width: '100%', height: 50, gap: '$gap3' }}
      >
        <Style.SkeletonBox style={{ width: 140, height: 25 }} />
      </Flex>

      <Flex column css={{ gap: '$gap5' }}>
        <Flex column css={{ gap: '$gap3' }}>
          <Style.SkeletonBox style={{ width: 250, height: 25 }} />

          <Flex column css={{ gap: '$gap1' }}>
            <Style.SkeletonBox style={{ width: 400, height: 35 }} />
            <Style.SkeletonBox style={{ width: 300, height: 35 }} />
          </Flex>
        </Flex>

        <Style.AnswerList css={{ gap: '$gap2' }}>
          <Style.SkeletonBox
            style={{ width: '100%', height: 45, borderRadius: 100 }}
          />
          <Style.SkeletonBox
            style={{ width: '100%', height: 45, borderRadius: 100 }}
          />
          <Style.SkeletonBox
            style={{ width: '100%', height: 45, borderRadius: 100 }}
          />
          <Style.SkeletonBox
            style={{ width: '100%', height: 45, borderRadius: 100 }}
          />
        </Style.AnswerList>
      </Flex>

      <Flex>
        <Style.SkeletonBox
          style={{ width: '100%', height: 45, borderRadius: 100 }}
        />
      </Flex>
    </Style.Container>
  );
};

export default QuizPageLoading;
