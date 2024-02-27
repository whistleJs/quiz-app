import { styled } from '@/stitches.config';

export const Text = styled('span', {
  fontSize: 16,
  lineHeight: 1.6,

  variants: {
    color: {
      primary: {
        color: '$primary',
      },
    },
    type: {
      Title: {
        fontSize: 36,
        fontWeight: 'bold',
      },
      Subtitle: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      Caption: {
        fontSize: 18,
        fontWeight: 500,
      },
    },
  },
});
