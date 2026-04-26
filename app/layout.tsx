import type { Metadata, Viewport } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['400'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ariel Kami — Creative Branding & Visual Storytelling',
  description: 'Premium portfolio showcasing logotypes, branding, and visual identity design. 15+ years of creative excellence in visual communication.',
  keywords: ['branding', 'logo design', 'visual identity', 'graphic design', 'portfolio'],
  authors: [{ name: 'Ariel Kami' }],
  openGraph: {
    title: 'Ariel Kami — Creative Branding & Visual Storytelling',
    description: 'Premium portfolio showcasing logotypes, branding, and visual identity design.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${dmSans.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-white text-dark overflow-x-hidden">
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
