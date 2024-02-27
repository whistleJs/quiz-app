import { styled } from '@/stitches.config';
import { Flex } from '@/styles/flex.style';

export const Container = styled(Flex, {
  width: '100%',
  height: '100%',
  paddingBottom: '$padding5',
});

export const Progress = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: 5,
  backgroundColor: '$gray-light',
});

export const AnswerList = styled('div', {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
});

export const SkeletonBox = styled('div', {
  borderRadius: 6,
  backgroundColor: '$gray-light',
});
