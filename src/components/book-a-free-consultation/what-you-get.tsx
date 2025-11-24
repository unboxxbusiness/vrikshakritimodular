"use client";

import { Check } from "lucide-react";

const features = [
    { text: "Personalized layout suggestions" },
    { text: "Material & finish recommendations" },
    { text: "Budget estimate based on your space" },
    { text: "3D design preview guidance" },
    { text: "Accessory & storage planning" },
    { text: "Complete project timeline explanation" },
];

export function WhatYouGet() {
    return (
        <section className="py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold md:text-4xl">What’s Included in the Free Consultation?</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-background rounded-lg border p-6 flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <Check className="size-6 text-primary" />
                            </div>
                            <p className="font-medium text-foreground">{feature.text}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Everything happens directly on WhatsApp, so you get quick replies and easy follow-ups.
                    </p>
                </div>
            </div>
        </section>
    );
}
