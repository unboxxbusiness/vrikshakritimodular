import { Cta } from '@/components/gallery/cta';
import { GalleryGrid } from '@/components/gallery/gallery-grid';
import { Hero } from '@/components/gallery/hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Modular Kitchen Gallery',
    description: 'Explore our gallery of stunning modular kitchens. Get inspired by our designs, from L-shaped and U-shaped layouts to modern and classic styles.',
};

export default function GalleryPage() {
  return (
    <>
      <Hero />
      <GalleryGrid />
      <Cta />
    </>
  );
}
