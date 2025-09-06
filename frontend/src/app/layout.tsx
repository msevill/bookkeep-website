import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollProgressBar from '../components/ScrollProgressBar';
import BackToTopButton from '../components/BackToTopButton';
import SkipToContent from '../components/SkipToContent';
import FadeTransition from '../components/FadeTransition';
// ...existing code...

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'SBS',
  description: 'Your trusted partner in bookkeeping and accounting services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en">
      <body className="scroll-smooth">
        <SkipToContent />
        <ScrollProgressBar />
        <Header />
        <FadeTransition>
          <main id="main-content">{children}</main>
        </FadeTransition>
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}
