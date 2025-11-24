"use client";

import Image from 'next/image';

const galleryImages = [
    {
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763967233/Gemini_Generated_Image_vhw6qjvhw6qjvhw6_buh9fc.png",
        alt: "Luxurious island kitchen with marble countertops and modern lighting."
    },
    {
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763967225/Gemini_Generated_Image_91eopq91eopq91eo_vq1zdd.png",
        alt: "Island kitchen with integrated seating and stylish pendant lights."
    },
    {
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763967224/Gemini_Generated_Image_hk6xrihk6xrihk6x_c6lhdc.png",
        alt: "Spacious island kitchen with a waterfall countertop and bar stools."
    },
    {
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763967202/Gemini_Generated_Image_fxg9n0fxg9n0fxg9_shc2ot.png",
        alt: "Minimalist island kitchen with sleek white cabinets and wooden accents."
    }
];

export function Gallery() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-semibold text-center md:text-4xl">Island Kitchen Inspirations</h2>
                    <p className="text-muted-foreground mt-4">Discover a variety of styles and configurations for your island kitchen.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {galleryImages.map((image, index) => (
                        <div key={index} className="relative aspect-video overflow-hidden rounded-lg group">
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
