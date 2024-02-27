import { styled } from '@/stitches.config';
import { Button } from '@/styles/button.style';
import { Flex } from '@/styles/flex.style';
import { Text } from '@/styles/text.style';

export const Container = styled(Flex, {
  position: 'absolute',
  left: 0,
  top: 0,
  transform: 'translateY(-50%)',
  gap: '$gap5',
  width: '100%',
  opacity: 0,
  visibility: 'hidden',
  transition: '0.2s',

  '&[data-show=on]': {
    opacity: 1,
    visibility: 'visible',
  },
});

export const Title = styled(Text, {
  defaultVariants: {
    type: 'Subtitle',
  },
});

export const Category = styled(Text, {
  color: '$gray-dark',
  defaultVariants: {
    type: 'Caption',
  },
});

export const AnswerList = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '$gap3',
});

export const AnswerButton = styled(Button, {
  padding: '0 $padding2',
  variants: {
    type: {
      wrong: {
        color: '$white !important',
        border: 'solid 1px $red-light !important',
        backgroundColor: '$red-light !important',
      },
      correct: {
        color: '$white !important',
        border: 'solid 1px $primary !important',
        backgroundColor: '$primary !important',
      },
    },
  },
});
