"use client";

import React from 'react';

export function Hero() {
  return (
    <section className="py-16 md:py-32 bg-background">
      <div className="mx-auto max-w-4xl space-y-8 px-6 text-center">
        <h1 className="text-4xl font-semibold lg:text-5xl">A Collection of Kitchens Designed to Inspire</h1>
        <p className="text-muted-foreground text-lg">
          Welcome to the Vrikshakriti Gallery—where thoughtful design meets timeless craftsmanship. Every kitchen you see here is a reflection of our passion for detail, our commitment to quality, and our belief that the heart of every home deserves to be beautiful, functional, and truly personal.
        </p>
        <h2 className="text-2xl font-semibold md:text-3xl pt-8">Browse. Explore. Imagine Your Own Kitchen.</h2>
        <p className="text-muted-foreground">
          Whether you're drawn to warm wooden tones, sleek glossy finishes, smart storage solutions, or bold modern designs, our gallery offers inspiration for every taste and home type. These kitchens are a testament to the precision of our design process, the quality of our materials, and the trust our clients place in us.
        </p>
      </div>
    </section>
  );
}
