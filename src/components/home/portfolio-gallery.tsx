"use client"

import * as React from "react"
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const portfolioImages = [
    {
        id: "l-shaped-kitchen",
        imageUrl: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763960884/Gemini_Generated_Image_wkk0fiwkk0fiwkk0_n3klqn.png",
        description: "Modern L-shaped kitchen with wooden cabinets and white countertops.",
        imageHint: "l-shaped kitchen"
    },
    {
        id: "u-shaped-kitchen",
        imageUrl: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763965091/Gemini_Generated_Image_o66q1ko66q1ko66q_l0p5fv.png",
        description: "Spacious U-shaped kitchen with ample counter space and modern fixtures.",
        imageHint: "u-shaped kitchen"
    },
    {
        id: "straight-kitchen",
        imageUrl: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763966182/Gemini_Generated_Image_q5rwz5q5rwz5q5rw_zsltkm.png",
        description: "Sleek straight kitchen with minimalist white cabinets.",
        imageHint: "straight kitchen"
    },
    {
        id: "parallel-kitchen",
        imageUrl: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763966705/Gemini_Generated_Image_mi48j4mi48j4mi48_pjs6vj.png",
        description: "Modern parallel kitchen with dark cabinets and efficient workflow.",
        imageHint: "parallel kitchen"
    },
    {
        id: "island-kitchen",
        imageUrl: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763967233/Gemini_Generated_Image_vhw6qjvhw6qjvhw6_buh9fc.png",
        description: "Luxurious island kitchen with marble countertops and modern lighting.",
        imageHint: "island kitchen"
    },
    {
        id: "semi-modular-kitchen",
        imageUrl: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763967742/Gemini_Generated_Image_ue1z4iue1z4iue1z_mlstg1.png",
        description: "A stunning semi-modular kitchen renovation.",
        imageHint: "kitchen renovation"
    }
];

export function PortfolioGallery() {
    return (
        <section className="w-full flex flex-col items-center justify-start py-16 md:py-24 bg-background">
            <div className="max-w-3xl text-center px-4">
                <h2 className="text-3xl font-semibold sm:text-4xl">Kitchens We’ve Designed & Delivered</h2>
                <p className="text-muted-foreground mt-2">
                    Browse a collection of real modular kitchens and 3D concepts crafted by our design team.
                </p>
            </div>
            
            {/* Desktop View */}
            <div className="hidden md:flex items-center gap-2 h-[400px] w-full max-w-5xl mt-10 px-4">
                {portfolioImages.map((item) => (
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

            {/* Mobile View */}
            <div className="grid grid-cols-2 md:hidden gap-4 mt-10 px-4 w-full">
                {portfolioImages.map((item) => (
                    <div key={item.id} className="relative aspect-square rounded-lg overflow-hidden">
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