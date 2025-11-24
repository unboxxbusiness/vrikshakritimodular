import { ConsultationForm } from "@/components/book-a-free-consultation/consultation-form";
import { Hero } from "@/components/book-a-free-consultation/hero";
import { Cta } from "@/components/home/cta";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Book a Free Design Consultation',
    description: 'Get expert guidance for your modular kitchen. Connect with our design experts for free advice on layout, pricing, and materials.',
};

export default function BookConsultationPage() {
    return (
        <>
            <Hero />
            <ConsultationForm />
            <Cta />
        </>
    );
}
