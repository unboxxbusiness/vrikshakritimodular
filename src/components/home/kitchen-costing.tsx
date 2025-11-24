
import { AreaChart, BadgePercent, Combine, AlertCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '../ui/button';
import Link from 'next/link';
import { BGPattern } from '../ui/bg-pattern';

export function KitchenCosting() {
    const costImage = PlaceHolderImages.find(img => img.id === 'kitchen-costing-1');
    const features = [
        {
            text: 'Modular kitchens start from ₹X,XXX per running feet',
            icon: <AreaChart className="size-5" />
        },
        {
            text: 'Transparent, all-inclusive pricing',
            icon: <BadgePercent className="size-5" />
        },
        {
            text: 'Flexible material & finish combinations',
            icon: <Combine className="size-5" />
        },
        {
            text: 'No surprise add-ons',
            icon: <AlertCircle className="size-5" />
        },
    ]
    return (
        <section className="relative py-16 md:py-32 bg-secondary/30 overflow-hidden">
            <BGPattern variant="grid" size={32} mask="fade-y" className="opacity-10" />
            <div className="mx-auto max-w-6xl px-6 relative">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="lg:text-5xl">How Much Will Your Modular Kitchen Cost?</h2>
                            <p className="mt-6 text-muted-foreground">Your kitchen budget depends on layout, material, finish, and accessories. To help you plan:</p>
                        </div>
                        <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                            {features.map((feature) => (
                                <li key={feature.text}>
                                    {feature.icon}
                                    {feature.text}
                                </li>
                            ))}
                        </ul>
                         <div className="mt-8">
                            <Button asChild>
                                <Link href="#">
                                    See Pricing Guide <ArrowRight className="size-4 ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative rounded-3xl p-3 lg:col-span-3">
                        <div className="relative aspect-[4/3] rounded-2xl">
                           {costImage && (
                                <Image 
                                    src={costImage.imageUrl} 
                                    alt={costImage.description || "A modern kitchen with design plans, illustrating kitchen cost calculation."}
                                    data-ai-hint={costImage.imageHint}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="rounded-[15px] object-cover" 
                                />
                           )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
