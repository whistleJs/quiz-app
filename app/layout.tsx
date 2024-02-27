import type { Metadata } from 'next';

import { QueryProvider } from '@/components/QueryProvider';
import { StyleSheet } from '@/components/StyleSheet';

import { globalStyle } from '@/styles/global.style';

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  globalStyle();

  return (
    <html lang="ko">
      <head>
        <StyleSheet />
      </head>

      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
};

export const metadata: Metadata = {
  title: 'Quiz App',
};

export default RootLayout;
