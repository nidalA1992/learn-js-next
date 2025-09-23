import type { Metadata } from 'next';
import { Montserrat_Alternates } from 'next/font/google';

import { MainLayout } from '@/shared/ui/layouts/MainLayout';
import { Nav } from '@/shared/ui/components/Nav';
import { Header } from '@/shared/ui/components/Header';
import { Logo } from '@/shared/ui/components/Logo';
import { Footer } from '@/shared/ui/components/Footer';

import '@/shared/styles/globals.scss';

const geistMono = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Rackets Market',
  description: 'Learn js education project',
};

const logo = <Logo />;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={geistMono.className}>
        <MainLayout header={<Header nav={<Nav />} logo={logo} />} footer={<Footer logo={logo} />}>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
