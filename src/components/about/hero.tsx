"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { DraftingCompass, Gem, PackageCheck, GanttChartSquare, HeartHandshake, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
    return (
        <section>
            <div className="bg-muted/50 dark:bg-background py-24 md:py-32">
                <div className="mx-auto flex flex-col px-6 md:grid md:max-w-5xl md:grid-cols-2 md:gap-12">
                    <div className="order-last mt-6 flex flex-col gap-12 md:order-first">
                        <div className="space-y-6">
                            <h1 className="text-balance text-3xl font-semibold md:text-4xl lg:text-5xl">Crafting Kitchens That Feel Like Home</h1>
                            <p className="text-muted-foreground">At Vrikshakriti, we believe your kitchen is more than a workspace—it's the heart of your home. Our mission is to design and build modular kitchens that bring beauty, convenience, and durability together. With a focus on thoughtful design and precision manufacturing, we help homeowners create kitchens that truly reflect their lifestyle and personality.</p>
                            <Button
                                variant="outline"
                                size="sm"
                                asChild>
                                <Link href="/#design-process">Explore Our Process</Link>
                            </Button>
                        </div>

                        <div className="mt-auto grid grid-cols-[auto_1fr] gap-3">
                            <div className="bg-background flex size-12 items-center justify-center rounded-lg border">
                                <Image src="https://picsum.photos/seed/person1/100/100" alt="Testimonial from Priya & Rohan S." width={48} height={48} className="rounded-full" />
                            </div>
                            <blockquote>
                                <p className="text-sm">"The team at Vrikshakriti transformed our vision into a stunning reality. Their attention to detail and commitment to quality is unmatched."</p>
                                <div className="mt-2 flex gap-2 text-sm">
                                    <cite className="font-semibold">Priya & Rohan S.</cite>
                                    <p className="text-muted-foreground">Bangalore, India</p>
                                </div>
                            </blockquote>
                        </div>
                    </div>

                    <div className="-mx-6 px-6 [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)] sm:mx-auto sm:max-w-md md:-mx-6 md:ml-auto md:mr-0">
                        <div className="bg-background dark:bg-muted/50 rounded-2xl border p-3 shadow-lg md:pb-12">
                            <div className="grid grid-cols-2 gap-2">
                                <Integration
                                    icon={<DraftingCompass className="size-8" />}
                                    name="Purpose-Driven Design"
                                    description="Kitchens that fit your lifestyle and cooking habits."
                                />
                                <Integration
                                    icon={<Gem className="size-8" />}
                                    name="High-Quality Materials"
                                    description="Premium components for long-lasting performance."
                                />
                                <Integration
                                    icon={<PackageCheck className="size-8" />}
                                    name="Transparent Pricing"
                                    description="Honest, clear pricing with no hidden charges."
                                />
                                <Integration
                                    icon={<GanttChartSquare className="size-8" />}
                                    name="End-to-End Execution"
                                    description="Design, manufacturing, and installation handled by us."
                                />
                                <Integration
                                    icon={<HeartHandshake className="size-8" />}
                                    name="Customer-Centric Service"
                                    description="Collaboration and support at every project stage."
                                />
                                <Integration
                                    icon={<ShieldCheck className="size-8" />}
                                    name="Durability & Trust"
                                    description="We build kitchens that last, backed by our quality commitment."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Integration = ({ icon, name, description }: { icon: React.ReactNode; name: string; description: string }) => {
    return (
        <div className="hover:bg-muted dark:hover:bg-muted/50 space-y-4 rounded-lg border p-4 transition-colors">
            <div className="flex size-fit items-center justify-center text-primary">{icon}</div>
            <div className="space-y-1">
                <h3 className="text-sm font-medium">{name}</h3>
                <p className="text-muted-foreground line-clamp-2 text-sm">{description}</p>
            </div>
        </div>
    )
}
