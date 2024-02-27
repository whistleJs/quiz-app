import { Noto_Sans } from 'next/font/google';
import { globalCss } from '@/stitches.config';

const fontStyle = Noto_Sans({ subsets: ['latin'] });

export const globalStyle = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    listStyle: 'none',
    textDecoration: 'none',
    outline: 'none',
    ...fontStyle.style,
  },
  html: {
    display: 'flex',
    justifyContent: 'center',
    minWidth: '100vw',
    minHeight: '100vh',
  },
  body: {
    position: 'relative',
    width: '$container',
    height: '100vh',
    padding: '0 $padding4',
    boxShadow: '0 4px 10px 0 rgba(0, 0, 0, 0.15)',
  },
});
