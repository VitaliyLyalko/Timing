import type { Metadata } from 'next';
import { Cormorant, Montserrat, Clicker_Script } from 'next/font/google';

import './_styles/globals.scss';
import clsx from 'clsx';
import { ReactNode } from 'react';

const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--fontFamilyCormorant',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '800'],
  variable: '--fontFamilyMontserrat',
});

const clickerScript = Clicker_Script({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--fontFamilyClickerScript',
});

export const metadata: Metadata = {
  // title: 'Invite Timing',
  description: 'InviteTiming',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='%PUBLIC_URL%/favicon.ico' sizes='any' />
        <meta property='og:image' content='%PUBLIC_URL%/1.jpg' />
        <meta property='twitter:image' content='%PUBLIC_URL%/1.jpg' />
        <meta name='twitter:image' content='%PUBLIC_URL%/1.jpg' />
        <meta name='google' content='notranslate' />
        <title>Invite Timing</title>
      </head>
      <body className={clsx(cormorant.variable, montserrat.variable, clickerScript.variable)}>
        {children}
      </body>
    </html>
  );
}
