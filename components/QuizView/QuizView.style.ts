import { styled } from '@/stitches.config';
import { Flex } from '@/styles/flex.style';
import { Text } from '@/styles/text.style';

export const Container = styled(Flex, {
  width: '100%',
  height: '100%',
  paddingBottom: '$padding5',
});

export const Progress = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '0%',
  height: 5,
  backgroundColor: '$primary',
  transition: '0.5s',
});

export const AmountText = styled(Text, {
  '& > span': {
    color: '$primary',
  },

  defaultVariants: {
    type: 'Caption',
  },
});

export const DifficultyText = styled(Text, {
  '& > strong': {
    color: '$primary-dark',
  },

  defaultVariants: {
    type: 'Caption',
  },
});
