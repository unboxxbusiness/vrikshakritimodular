import { Hero } from '@/components/materials-and-finishes/hero';
import { CarcassMaterials } from '@/components/materials-and-finishes/carcass-materials';
import { ShutterMaterials } from '@/components/materials-and-finishes/shutter-materials';
import { CountertopOptions } from '@/components/materials-and-finishes/countertop-options';
import { HardwareAccessories } from '@/components/materials-and-finishes/hardware-accessories';
import { FinishOptions } from '@/components/materials-and-finishes/finish-options';
import { WhyMaterialsMatter } from '@/components/materials-and-finishes/why-materials-matter';
import { Cta } from '@/components/materials-and-finishes/cta';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Materials and Finishes for Modular Kitchens',
    description: 'Discover the high-quality materials and premium finishes we use at Vrikshakriti. Explore options for carcasses, shutters, countertops, and hardware.',
};

export default function MaterialsAndFinishesPage() {
  return (
    <>
      <Hero />
      <div id="carcass-materials">
        <CarcassMaterials />
      </div>
      <ShutterMaterials />
      <CountertopOptions />
      <HardwareAccessories />
      <FinishOptions />
      <WhyMaterialsMatter />
      <Cta />
    </>
  );
}
