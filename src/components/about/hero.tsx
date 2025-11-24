"use client";

import React from 'react';
import { DraftingCompass, Gem, PackageCheck, GanttChartSquare, Users, ShieldCheck } from 'lucide-react';

const features = [
    {
        title: "Purpose-Driven Design",
        description: "We create modular kitchens that fit your lifestyle, cooking habits, and space perfectly.",
        icon: <DraftingCompass className="size-6 text-primary" />
    },
    {
        title: "High-Quality Materials",
        description: "From marine-grade plywood to premium finishes, every component is selected for long-lasting performance.",
        icon: <Gem className="size-6 text-primary" />
    },
    {
        title: "Transparent Pricing",
        description: "No hidden charges. Just honest, clear pricing based on your kitchen’s layout and materials.",
        icon: <PackageCheck className="size-6 text-primary" />
    },
    {
        title: "End-to-End Execution",
        description: "Design, manufacturing, delivery, and installation are all handled by our expert team.",
        icon: <GanttChartSquare className="size-6 text-primary" />
    },
    {
        title: "Customer-Centric Service",
        description: "We focus on collaboration, clarity, and support at every stage of the project.",
        icon: <Users className="size-6 text-primary" />
    },
    {
        title: "Durability & Trust",
        description: "We build kitchens that last, backed by a commitment to quality and customer satisfaction.",
        icon: <ShieldCheck className="size-6 text-primary" />
    },
]

export function Hero() {
    return (
        <section className="py-16 md:py-24 bg-background">
             <div className="size-[520px] -top-80 left-1/2 -translate-x-1/2 rounded-full absolute blur-[300px] -z-10 bg-primary/5"></div>
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-semibold text-center mx-auto md:text-4xl">About Vrikshakriti</h2>
                <p className="text-sm text-muted-foreground text-center mt-2 max-w-lg mx-auto">
                    Crafting kitchens that feel like home, with a focus on quality, transparency, and thoughtful design.
                </p>
                <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 pt-16">
                    {features.map(feature => (
                        <div key={feature.title}>
                            <div className="size-10 p-2 bg-primary/10 border border-primary/20 rounded">
                                {feature.icon}
                            </div>
                            <div className="mt-5 space-y-2">
                                <h3 className="text-base font-medium text-foreground">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
