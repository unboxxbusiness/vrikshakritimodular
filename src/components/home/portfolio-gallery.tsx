"use client"

import * as React from "react"
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PortfolioGallery() {
    const portfolioImages = PlaceHolderImages.filter(img => img.id.startsWith('portfolio-')).slice(0, 6);

    return (
        <section className="w-full flex flex-col items-center justify-start py-16 md:py-24 bg-background">
            <div className="max-w-3xl text-center px-4">
                <h2 className="text-3xl font-semibold sm:text-4xl">Kitchens We’ve Designed & Delivered</h2>
                <p className="text-muted-foreground mt-2">
                    Browse a collection of real modular kitchens and 3D concepts crafted by our design team.
                </p>
            </div>
            <div className="flex items-center gap-2 h-[400px] w-full max-w-5xl mt-10 px-4">
                {portfolioImages.map((item, idx) => (
                    <div
                        key={item.id}
                        className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full"
                    >
                        <Image
                            className="h-full w-full object-cover object-center"
                            src={item.imageUrl}
                            alt={item.description}
                            data-ai-hint={item.imageHint}
                            fill
                        />
                    </div>
                ))}
            </div>
            <div className="mt-12 text-center">
                <Button asChild variant="ghost">
                    <Link href="/gallery">
                        View Full Gallery <ArrowRight className="size-4 ml-2" />
                    </Link>
                </Button>
            </div>
        </section>
    );
}
