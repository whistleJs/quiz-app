import { styled } from '@/stitches.config';

export const Flex = styled('div', {
  display: 'flex',

  variants: {
    column: {
      true: {
        flexDirection: 'column',
      },
    },
    alignItems: {
      start: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'flex-end',
      },
    },
    justifyContent: {
      start: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      between: {
        justifyContent: 'space-between',
      },
      around: {
        justifyContent: 'space-around',
      },
      end: {
        justifyContent: 'flex-end',
      },
    },
  },
});
