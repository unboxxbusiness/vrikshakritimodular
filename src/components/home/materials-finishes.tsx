import { Layers, PanelTop, Wrench, LayoutGrid } from 'lucide-react';
import { cn } from '@/lib/utils';

const materials = [
    {
        title: 'Carcass Materials',
        description: 'Plywood, HDHMR, BWR Board',
        icon: <Layers className="size-8" />,
    },
    {
        title: 'Shutter Finishes',
        description: 'Acrylic, PU, Laminate, Veneer',
        icon: <PanelTop className="size-8" />,
    },
    {
        title: 'Hardware',
        description: 'Blum, Hettich, Hafele',
        icon: <Wrench className="size-8" />,
    },
    {
        title: 'Accessories',
        description: 'Organizers, corner units, tall units',
        icon: <LayoutGrid className="size-8" />,
    },
];


export function MaterialsFinishes() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-3xl font-semibold md:text-4xl">Premium Materials. Superior Finishes. Thoughtful Hardware.</h2>
                    <p className="text-muted-foreground mt-6">Choose from a curated range of durable materials and stylish finishes designed for long-term performance.</p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
                    {materials.map((material, index) => (
                        <MaterialCard
                            key={material.title}
                            {...material}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

const MaterialCard = ({ title, description, icon, index }: { title: string; description: string; icon: React.ReactNode; index: number; }) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
                (index === 0) && "lg:border-l dark:border-neutral-800",
                "border-b dark:border-neutral-800"
            )}
        >
            <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />

            <div className="mb-4 relative z-10 px-10 text-primary">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                    {title}
                </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    )
}
