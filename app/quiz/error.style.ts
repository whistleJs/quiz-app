import { styled } from '@/stitches.config';
import { Text } from '@/styles/text.style';

export const Title = styled(Text, {
  textAlign: 'center',

  '& > span': {
    color: '$red',
  },

  defaultVariants: {
    type: 'Title',
  },
});
