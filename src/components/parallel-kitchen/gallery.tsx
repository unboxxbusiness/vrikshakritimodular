"use client";

import Image from 'next/image';

const galleryImages = [
    {
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763966705/Gemini_Generated_Image_mi48j4mi48j4mi48_pjs6vj.png",
        alt: "Modern parallel kitchen with dark cabinets and efficient workflow."
    },
    {
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763966699/Gemini_Generated_Image_4ma67f4ma67f4ma6_iumj83.png",
        alt: "Bright galley kitchen with white cabinets and natural light."
    },
    {
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763966694/Gemini_Generated_Image_b4xbenb4xbenb4xb_ab4yev.png",
        alt: "Parallel kitchen with integrated appliances and ample counter space."
    },
    {
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763966691/Gemini_Generated_Image_tj4lg7tj4lg7tj4l_stvjv2.png",
        alt: "A sleek parallel kitchen with handleless cabinets and a minimalist aesthetic."
    },
    {
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763966688/Gemini_Generated_Image_iuzm0yiuzm0yiuzm_dkhopt.png",
        alt: "A compact and functional parallel kitchen in a modern apartment."
    },
];

export function Gallery() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-semibold text-center md:text-4xl">Parallel Kitchen Inspirations</h2>
                    <p className="text-muted-foreground mt-4">Discover a variety of styles and configurations for your parallel kitchen.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
