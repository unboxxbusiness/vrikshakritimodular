"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BGPattern } from '../ui/bg-pattern';

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: (i: number) => ({
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5,
        delay: i * 0.1,
      },
    }),
  },
};

export function Hero() {
  const aboutHeroImage = PlaceHolderImages.find((img) => img.id === 'about-hero-1');

  return (
    <section className="relative overflow-hidden pt-24 md:pt-36">
      <BGPattern variant="grid" size={32} mask="fade-y" className="opacity-10 dark:opacity-5" />
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.h1
              custom={0}
              variants={transitionVariants.item}
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
            >
              About Vrikshakriti
            </motion.h1>
            <motion.p
              custom={1}
              variants={transitionVariants.item}
              className="mt-6 text-lg leading-8 text-muted-foreground"
            >
              We are a team of passionate designers and craftsmen dedicated to transforming living spaces with innovative and sustainable modular solutions. Our philosophy is rooted in the harmony of nature and modern architecture.
            </motion.p>
          </motion.div>
        </div>
        {aboutHeroImage && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative mt-12 md:mt-20"
            >
                <div
                    aria-hidden
                    className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                />
                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                    <Image
                        src={aboutHeroImage.imageUrl}
                        alt={aboutHeroImage.description}
                        data-ai-hint={aboutHeroImage.imageHint}
                        width={1200}
                        height={600}
                        className="aspect-[2/1] w-full rounded-lg object-cover"
                    />
                </div>
            </motion.div>
        )}
      </div>
    </section>
  );
}
