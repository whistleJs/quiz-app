import { createStitches } from '@stitches/react';

export const { css, getCssText, globalCss, styled } = createStitches({
  theme: {
    colors: {
      black: '#1F1F1F',
      white: '#FFFFFF',

      'red-light': '#fc8383',
      red: '#e53e3e',

      'primary-light': '#69d392',
      primary: '#00C896',
      'primary-dark': '#17a27e',

      'gray-light': '#ededed',
      gray: '#bdbdbd',
      'gray-dark': '#676767',
    },
    space: {
      gap1: '8px',
      gap2: '10px',
      gap3: '16px',
      gap4: '24px',
      gap5: '32px',

      padding1: '4px',
      padding2: '8px',
      padding3: '12px',
      padding4: '32px',
      padding5: '40px',
    },
    sizes: {
      container: '480px',
    },
  },
});
