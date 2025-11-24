"use client";

import { Clock, Share2, MessageSquare, Mail, ShieldCheck, LifeBuoy } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const benefits = [
    { text: "Instant replies", icon: <Clock className="size-5" /> },
    { text: "Easy sharing of photos/videos", icon: <Share2 className="size-5" /> },
    { text: "Faster design recommendations", icon: <MessageSquare className="size-5" /> },
    { text: "No waiting for emails", icon: <Mail className="size-5" /> },
    { text: "Seamless follow-up and support", icon: <LifeBuoy className="size-5" /> },
    { text: "Your personal data stays private and secure", icon: <ShieldCheck className="size-5" /> },
];

export function WhyWhatsapp() {
    return (
        <section className="py-16 md:py-32 bg-muted/50">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="text-4xl font-semibold lg:text-5xl">Why Book Through WhatsApp?</h2>
                            <p className="mt-6 text-muted-foreground">
                                We use WhatsApp to make the design process faster, easier, and more personal for you.
                            </p>
                        </div>
                        <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                            {benefits.map((benefit, index) => (
                                <li key={index}>
                                    {benefit.icon}
                                    {benefit.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative rounded-3xl p-3 lg:col-span-3">
                        <div className="relative aspect-[4/3] rounded-2xl">
                           <Image 
                                src="https://res.cloudinary.com/dhrigocvd/image/upload/v1763975015/Gemini_Generated_Image_p04g6rp04g6rp04g_ftipbw.png" 
                                alt="A phone showing a WhatsApp conversation about kitchen design."
                                data-ai-hint="WhatsApp chat"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="rounded-[15px] object-cover" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
