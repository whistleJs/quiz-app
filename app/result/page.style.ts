import { styled } from '@/stitches.config';
import { Flex } from '@/styles/flex.style';
import { Text } from '@/styles/text.style';

export const Container = styled(Flex, {
  width: '100%',
  height: '100%',
  gap: '$gap5',
});

export const Difficulty = styled(Text, {
  color: '$gray-dark',
  defaultVariants: {
    type: 'Caption',
  },
});

export const Title = styled(Text, {
  '& > span': {
    color: '$primary',
  },
  defaultVariants: {
    type: 'Title',
  },
});

export const Count = styled(Text, {
  variants: {
    status: {
      correct: {
        '& > span': {
          color: '$primary',
        },
      },
      wrong: {
        '& > span': {
          color: '$red-light',
        },
      },
    },
  },
});
