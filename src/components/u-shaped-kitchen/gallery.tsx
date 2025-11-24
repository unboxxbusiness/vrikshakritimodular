"use client";

import Image from 'next/image';

const galleryImages = [
    {
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763965091/Gemini_Generated_Image_o66q1ko66q1ko66q_l0p5fv.png",
        alt: "Spacious U-shaped kitchen with ample counter space and modern fixtures."
    },
    {
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763965090/Gemini_Generated_Image_b5wlvxb5wlvxb5wl_apdp85.png",
        alt: "Elegant U-shaped kitchen featuring dark cabinets and high-end finishes."
    },
    {
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763965087/Gemini_Generated_Image_r0kjm8r0kjm8r0kj_e3qoak.png",
        alt: "Bright U-shaped kitchen design with white cabinetry and natural light."
    },
    {
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763965080/Gemini_Generated_Image_218wp2218wp2218w_wgatam.png",
        alt: "U-shaped kitchen with a breakfast bar extension for casual dining."
    },
    {
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763965077/Gemini_Generated_Image_bv4jzzbv4jzzbv4j_onmyrd.png",
        alt: "Compact yet efficient U-shaped kitchen layout with smart storage."
    },
];

export function Gallery() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-semibold text-center md:text-4xl">U-Shaped Kitchen Inspirations</h2>
                    <p className="text-muted-foreground mt-4">Discover a variety of styles and configurations for your U-shaped kitchen.</p>
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
