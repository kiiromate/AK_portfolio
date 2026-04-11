import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
    <html lang="fr">
      <body className="bg-white text-dark overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
