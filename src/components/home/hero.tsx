"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import Image from 'next/image';
import { Check } from 'lucide-react';
import { BGPattern } from '../ui/bg-pattern';

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export function Hero() {
    const usps = [
        "10–15 Year Warranty",
        "Premium Hardware (Blum / Hettich)",
        "Factory-Finished Perfection",
        "Fast Installation"
    ];
    return (
        <div className="overflow-hidden">
             <BGPattern variant="grid" size={32} mask="fade-y" className="opacity-10 dark:opacity-5" />
            <section>
                <div className="relative pt-24 md:pt-36">
                    <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                            <AnimatedGroup variants={transitionVariants}>
                                <h1
                                    className="mt-8 max-w-4xl mx-auto text-balance text-4xl md:text-6xl lg:mt-16 xl:text-7xl">
                                    Transform Your Home with a Smart, Stylish Modular Kitchen
                                </h1>
                                <p
                                    className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                                    Crafted for Indian homes. Designed for everyday convenience. Built to last.
                                </p>
                            </AnimatedGroup>

                            <AnimatedGroup
                                variants={{
                                    container: {
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.05,
                                                delayChildren: 0.75,
                                            },
                                        },
                                    },
                                    ...transitionVariants,
                                }}
                                className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                <div
                                    key={1}
                                    className="bg-foreground/10 rounded-[14px] border p-0.5">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="rounded-xl px-5 text-base">
                                        <Link href="#link">
                                            <span className="text-nowrap">Book a Free Design Consultation</span>
                                        </Link>
                                    </Button>
                                </div>
                                <Button
                                    key={2}
                                    asChild
                                    size="lg"
                                    variant="ghost"
                                    className="h-10.5 rounded-xl px-5">
                                    <Link href="#link">
                                        <span className="text-nowrap">Download Kitchen Brochure</span>
                                    </Link>
                                </Button>
                            </AnimatedGroup>
                            
                            <AnimatedGroup
                                variants={{
                                    container: {
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.05,
                                                delayChildren: 1.25,
                                            },
                                        },
                                    },
                                    ...transitionVariants,
                                }}>
                                <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2">
                                    {usps.map((usp) => (
                                        <span key={usp} className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                                            <Check className="size-4 text-primary" />
                                            {usp}
                                        </span>
                                    ))}
                                </div>
                            </AnimatedGroup>
                        </div>
                    </div>

                    <AnimatedGroup
                        variants={{
                            container: {
                                visible: {
                                    transition: {
                                        staggerChildren: 0.05,
                                        delayChildren: 0.75,
                                    },
                                },
                            },
                            ...transitionVariants,
                        }}>
                        <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                            <div
                                aria-hidden
                                className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                            />
                            <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                <Image
                                    className="bg-background aspect-video relative rounded-2xl"
                                    src="https://res.cloudinary.com/dhrigocvd/image/upload/v1763958686/Gemini_Generated_Image_wkk0fiwkk0fiwkk0_zgz3un.png"
                                    alt="Modern modular kitchen"
                                    width={2940}
                                    height={1654}
                                />
                            </div>
                        </div>
                    </AnimatedGroup>
                </div>
            </section>
        </div>
    )
}
