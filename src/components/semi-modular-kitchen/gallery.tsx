"use client";

import Image from 'next/image';

const galleryImages = [
    {
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763967742/Gemini_Generated_Image_ue1z4iue1z4iue1z_mlstg1.png",
        alt: "A stunning semi-modular kitchen renovation."
    },
    {
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763967741/Gemini_Generated_Image_auoe14auoe14auoe_ahukwa.png",
        alt: "Before and after view of a kitchen makeover."
    },
    {
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763967736/Gemini_Generated_Image_f5aketf5aketf5ak_s1u6m0.png",
        alt: "Upgraded kitchen with new shutters and modern hardware."
    },
    {
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763967724/Gemini_Generated_Image_uihxk7uihxk7uihx_ne2eue.png",
        alt: "A stylish and functional semi-modular kitchen."
    }
];

export function Gallery() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-semibold text-center md:text-4xl">Semi-Modular Kitchen Inspirations</h2>
                    <p className="text-muted-foreground mt-4">See how we can transform your existing kitchen into a modern, functional space.</p>
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
