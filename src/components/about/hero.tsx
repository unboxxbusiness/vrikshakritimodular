"use client";

import React from 'react';

export function Hero() {
  return (
    <section className="py-16 md:py-32 bg-background">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 max-w-3xl space-y-6">
          <h1 className="text-4xl font-semibold lg:text-5xl">Crafting Kitchens That Feel Like Home</h1>
          <p className="text-muted-foreground">
            At Vrikshakriti, we believe your kitchen is more than a workspace—it's the heart of your home. Our mission is to design and build modular kitchens that bring beauty, convenience, and durability together. With a focus on thoughtful design and precision manufacturing, we help homeowners create kitchens that truly reflect their lifestyle and personality.
          </p>
        </div>
        <div className="grid gap-12 sm:grid-cols-2 md:gap-16 lg:gap-24">
          <div>
            <p className="text-muted-foreground">We are committed to quality and customer satisfaction, from the initial design to the final installation.</p>
            <div className="mb-12 mt-12 grid grid-cols-2 gap-2 md:mb-0">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-5xl font-bold text-transparent">+500</div>
                <p className="text-muted-foreground">Happy Kitchens Delivered</p>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-5xl font-bold text-transparent">10+</div>
                <p className="text-muted-foreground">Years of Experience</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <blockquote className="border-l-4 border-primary pl-4">
              <p className="text-foreground">"The team at Vrikshakriti transformed our vision into a stunning reality. Their attention to detail and commitment to quality is unmatched. Our kitchen is now our favorite part of the house!"</p>
              <div className="mt-6 space-y-3">
                <cite className="block font-medium text-foreground">Priya & Rohan S.</cite>
                <span className="text-sm text-muted-foreground">Bangalore, India</span>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
