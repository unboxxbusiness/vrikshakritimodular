"use client";

import { CheckCircle, Clock, Eye, MessageSquare, Phone, ShieldCheck } from "lucide-react";

const benefits = [
    { text: "Instant replies", icon: <Clock className="size-6 text-primary" /> },
    { text: "Easy sharing of photos/videos", icon: <Phone className="size-6 text-primary" /> },
    { text: "Faster design recommendations", icon: <MessageSquare className="size-6 text-primary" /> },
    { text: "No waiting for emails", icon: <Eye className="size-6 text-primary" /> },
    { text: "Seamless follow-up and support", icon: <CheckCircle className="size-6 text-primary" /> },
    { text: "Your personal data stays private and secure", icon: <ShieldCheck className="size-6 text-primary" /> },
];

export function WhyWhatsapp() {
    return (
        <section className="pb-16 md:pb-24 bg-muted/50">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold md:text-4xl">Why Book Through WhatsApp?</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-background rounded-lg border p-6 flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                {benefit.icon}
                            </div>
                            <p className="font-medium text-foreground">{benefit.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
