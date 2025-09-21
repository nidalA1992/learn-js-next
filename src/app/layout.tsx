import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import '@/shared/styles/globals.scss';

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Rackets Market',
  description: 'Learn js education project',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={geistMono.variable}>{children}</body>
    </html>
  );
}
