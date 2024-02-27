import { styled } from '@/stitches.config';
import { Flex } from '@/styles/flex.style';
import { Text } from '@/styles/text.style';

export const Container = styled(Flex, {
  width: '100%',
  height: '100%',
  gap: '$gap5',
});

export const Box = styled(Flex, {
  width: '100%',
  gap: '$gap1',

  '& > *': {
    width: '100%',
  },
});

export const Title = styled(Text, {
  textAlign: 'center',

  '& > span': {
    color: '$primary',
  },

  defaultVariants: {
    type: 'Title',
  },
});
