"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function ClosingStatement() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="relative isolate overflow-hidden bg-primary/5 dark:bg-primary/10 px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The Heart of Your Home, Reimagined
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            At Vrikshakriti, we don’t just build kitchens—we create spaces where families cook, connect, and create memories. With every project, our goal is simple: to deliver a kitchen that feels truly yours.
          </p>
           <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild>
                <Link href="#">
                    Start Your Kitchen Journey <ArrowRight className="size-4 ml-2" />
                </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
