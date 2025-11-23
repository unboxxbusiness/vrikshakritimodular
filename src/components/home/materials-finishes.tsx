import { Layers, PanelTop, Wrench, LayoutGrid, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const materials = [
    {
        title: 'Carcass Materials',
        description: 'Plywood, HDHMR, BWR Board',
        icon: <Layers className="size-10" />,
        link: '#',
    },
    {
        title: 'Shutter Finishes',
        description: 'Acrylic, PU, Laminate, Veneer',
        icon: <PanelTop className="size-10" />,
        link: '#',
    },
    {
        title: 'Hardware',
        description: 'Blum, Hettich, Hafele',
        icon: <Wrench className="size-10" />,
        link: '#',
    },
    {
        title: 'Accessories',
        description: 'Organizers, corner units, tall units',
        icon: <LayoutGrid className="size-10" />,
        link: '#',
    },
];


export function MaterialsFinishes() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-3xl font-semibold md:text-4xl">Premium Materials. Superior Finishes. Thoughtful Hardware.</h2>
                    <p className="text-muted-foreground mt-6">Choose from a curated range of durable materials and stylish finishes designed for long-term performance.</p>
                </div>

                <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {materials.map((material) => (
                        <MaterialCard
                            key={material.title}
                            title={material.title}
                            description={material.description}
                            link={material.link}
                        >
                            {material.icon}
                        </MaterialCard>
                    ))}
                </div>
            </div>
        </section>
    )
}

const MaterialCard = ({ title, description, children, link = '#' }: { title: string; description: string; children: React.ReactNode; link?: string }) => {
    return (
        <Card className="p-6">
            <div className="relative">
                <div className="*:size-10 text-primary">{children}</div>

                <div className="space-y-2 py-6">
                    <h3 className="text-base font-medium">{title}</h3>
                    <p className="text-muted-foreground line-clamp-2 text-sm">{description}</p>
                </div>

                <div className="flex gap-3 border-t border-dashed pt-6">
                    <Button
                        asChild
                        variant="secondary"
                        size="sm"
                        className="gap-1 pr-2 shadow-none">
                        <Link href={link}>
                            Learn More
                            <ChevronRight className="ml-0 !size-3.5 opacity-50" />
                        </Link>
                    </Button>
                </div>
            </div>
        </Card>
    )
}
