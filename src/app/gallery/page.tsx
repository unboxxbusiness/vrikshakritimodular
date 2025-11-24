import { Cta } from '@/components/gallery/cta';
import { GalleryGrid } from '@/components/gallery/gallery-grid';
import { Hero } from '@/components/gallery/hero';

export default function GalleryPage() {
  return (
    <>
      <Hero />
      <GalleryGrid />
      <Cta />
    </>
  );
}
