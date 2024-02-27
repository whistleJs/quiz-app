import { css, styled } from '@/stitches.config';
import Link from 'next/link';

const buttonStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: 45,
  border: 'solid 1px $primary',
  borderRadius: 100,
  backgroundColor: '$white',
  color: '$primary',
  transition: '0.15s',
  cursor: 'pointer',

  '&:not(:disabled):hover': {
    backgroundColor: '$primary',
    color: '$white',
  },

  '&:disabled': {
    border: 'solid 1px $gray-light',
    backgroundColor: '$gray-light',
    color: '$gray-dark',
    cursor: 'not-allowed',
  },

  variants: {
    type: {
      primary: {
        backgroundColor: '$primary',
        color: '$white',

        '&:not(:disabled):hover': {
          border: 'solid 1px $primary-dark',
          backgroundColor: '$primary-dark',
        },
      },
    },
  },
});

export const Button = styled('button', buttonStyle);
export const LinkButton = styled(Link, buttonStyle);
