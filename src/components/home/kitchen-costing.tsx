import { AreaChart, BadgePercent, Combine, AlertCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '../ui/button';
import Link from 'next/link';

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
        <section className="py-16 md:py-32 bg-secondary/30">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="text-4xl font-semibold lg:text-5xl">How Much Will Your Modular Kitchen Cost?</h2>
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
                    <div className="border-border/50 relative rounded-3xl border p-3 lg:col-span-3">
                        <div className="bg-linear-to-b aspect-w-4 aspect-h-3 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                           {costImage && (
                                <Image 
                                    src={costImage.imageUrl} 
                                    alt={costImage.description}
                                    data-ai-hint={costImage.imageHint}
                                    fill
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
