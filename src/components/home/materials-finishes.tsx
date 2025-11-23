import { Layers, PanelTop, Wrench, LayoutGrid, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function MaterialsFinishes() {
    const materialsImage = PlaceHolderImages.find(p => p.id === 'materials-1');
    return (
        <section className="py-16 md:py-32 bg-background">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="text-4xl font-semibold lg:text-5xl">Premium Materials. Superior Finishes. Thoughtful Hardware.</h2>
                            <p className="mt-6 text-muted-foreground">Choose from a curated range of durable materials and stylish finishes designed for long-term performance:</p>
                        </div>
                        <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3 text-foreground/80">
                            <li>
                                <Layers className="size-5 text-primary" />
                                <strong>Carcass:</strong> Plywood, HDHMR, BWR Board
                            </li>
                            <li>
                                <PanelTop className="size-5 text-primary" />
                                <strong>Shutters:</strong> Acrylic, PU, Laminate, Veneer
                            </li>
                            <li>
                                <Wrench className="size-5 text-primary" />
                                <strong>Hardware:</strong> Blum, Hettich, Hafele
                            </li>
                            <li>
                                <LayoutGrid className="size-5 text-primary" />
                                <strong>Accessories:</strong> Organizers, corner units, tall units
                            </li>
                        </ul>
                         <Button asChild variant="link" className="mt-6 px-0">
                            <Link href="#">
                                Explore Materials & Finishes
                                <ArrowRight className="ml-2 size-4" />
                            </Link>
                        </Button>
                    </div>
                    <div className="border-border/50 relative rounded-3xl border p-3 lg:col-span-3">
                        <div className="bg-linear-to-b aspect-w-4 aspect-h-3 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                           {materialsImage && (
                             <Image 
                                src={materialsImage.imageUrl} 
                                alt={materialsImage.description} 
                                fill={true}
                                className="rounded-[15px] object-cover" 
                                data-ai-hint={materialsImage.imageHint}
                             />
                           )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
