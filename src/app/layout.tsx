
import type { Metadata } from 'next';
import './globals.css';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';

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
  icons: 'https://res.cloudinary.com/dhrigocvd/image/upload/v1763972114/Gemini_Generated_Image_rw369trw369trw36-removebg-preview_1_utsfjk.png',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
