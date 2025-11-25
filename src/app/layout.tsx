
import type { Metadata } from 'next';
import './globals.css';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Dock } from '@/components/layout/dock';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'Vrikshakriti - Modern Modular Kitchens & Interiors',
    template: '%s | Vrikshakriti',
  },
  description: 'Design and build your dream modular kitchen with Vrikshakriti. We specialize in creating smart, stylish, and durable kitchens crafted for modern Indian homes.',
  keywords: ['modular kitchen', 'interior design', 'kitchen renovation', 'Delhi NCR', 'Vrikshakriti'],
  openGraph: {
    title: 'Vrikshakriti - Modern Modular Kitchens & Interiors',
    description: 'Crafting beautiful and functional modular kitchens for modern Indian homes.',
    url: 'https://www.vrikshakriti.shop',
    siteName: 'Vrikshakriti',
    images: [
      {
        url: 'https://res.cloudinary.com/dhrigocvd/image/upload/v1763958686/Gemini_Generated_Image_wkk0fiwkk0fiwkk0_zgz3un.png',
        width: 1200,
        height: 630,
        alt: 'A modern and stylish modular kitchen by Vrikshakriti',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vrikshakriti - Modern Modular Kitchens & Interiors',
    description: 'Design your dream modular kitchen with our expert team. Quality craftsmanship and transparent pricing.',
    images: ['https://res.cloudinary.com/dhrigocvd/image/upload/v1763958686/Gemini_Generated_Image_wkk0fiwkk0fiwkk0_zgz3un.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: 'https://res.cloudinary.com/dhrigocvd/image/upload/v1763972114/Gemini_Generated_Image_rw369trw369trw36-removebg-preview_1_utsfjk.png' },
    ],
    apple: [
      { url: 'https://res.cloudinary.com/dhrigocvd/image/upload/v1763972114/Gemini_Generated_Image_rw369trw369trw36-removebg-preview_1_utsfjk.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", fontSans.variable)}>
      <body className="font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
        <Dock />
      </body>
    </html>
  );
}
