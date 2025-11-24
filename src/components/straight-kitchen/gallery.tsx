"use client";

import Image from 'next/image';

const galleryImages = [
    {
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763966182/Gemini_Generated_Image_q5rwz5q5rwz5q5rw_zsltkm.png",
        alt: "Sleek straight kitchen with minimalist white cabinets."
    },
    {
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763966179/Gemini_Generated_Image_jriqjgjriqjgjriq_mdeh53.png",
        alt: "Modern straight kitchen with integrated appliances and a clean look."
    },
    {
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763966177/Gemini_Generated_Image_tuw3a8tuw3a8tuw3_tdoaxi.png",
        alt: "Compact straight kitchen with smart storage solutions."
    },
    {
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763966177/Gemini_Generated_Image_2fszkm2fszkm2fsz_tgnhrl.png",
        alt: "Straight kitchen in a small apartment with efficient use of space."
    },
];

export function Gallery() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-semibold text-center md:text-4xl">Straight Kitchen Inspirations</h2>
                    <p className="text-muted-foreground mt-4">Discover a variety of styles and configurations for your straight kitchen.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galleryImages.map((image, index) => (
                        <div key={index} className="relative aspect-square overflow-hidden rounded-lg group">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
