"use client";

import Image from 'next/image';

const galleryImages = [
    {
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763960884/Gemini_Generated_Image_wkk0fiwkk0fiwkk0_n3klqn.png",
        alt: "Modern L-shaped kitchen with wooden cabinets and white countertops."
    },
    {
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763960730/Gemini_Generated_Image_e1ffkbe1ffkbe1ff_pvjsyw.png",
        alt: "Sleek L-shaped kitchen with dark cabinets and integrated appliances."
    },
    {
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763960698/Gemini_Generated_Image_yzvwm2yzvwm2yzvw_rk2yfl.png",
        alt: "Bright L-shaped kitchen with large windows and a breakfast bar."
    },
    {
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763960696/Gemini_Generated_Image_21rs4n21rs4n21rs_argad1.png",
        alt: "L-shaped kitchen with two-tone cabinets and modern lighting."
    },
    {
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763960691/Gemini_Generated_Image_2hlhzx2hlhzx2hlh_hvzaup.png",
        alt: "Compact L-shaped kitchen with smart storage solutions."
    },
];

export function Gallery() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-semibold text-center md:text-4xl">L-Shaped Kitchen Inspirations</h2>
                    <p className="text-muted-foreground mt-4">Discover a variety of styles and configurations for your L-shaped kitchen.</p>
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