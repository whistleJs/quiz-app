import { styled } from '@/stitches.config';
import { Flex } from '@/styles/flex.style';

export const Container = styled(Flex, {
  height: 38,
  border: 'solid 1px $primary',
  borderRadius: 6,
  overflow: 'hidden',

  '& > div:first-of-type': {
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  '& > div:last-of-type': {
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },
});

export const Item = styled('button', {
  padding: '$padding1 $padding3',
  minWidth: 65,
  backgroundColor: '$white',
  border: 'none',
  fontSize: 14,
  fontWeight: 500,
  transition: '0.1s',
  cursor: 'pointer',

  '&[data-state=on]': {
    backgroundColor: '$primary-light',
    color: '$white',
  },

  '&:hover': {
    backgroundColor: '$primary',
    color: '$white',
  },
});
