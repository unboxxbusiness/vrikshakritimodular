import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative w-full bg-secondary py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="space-y-4">
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-secondary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Crafting Tomorrow's Spaces
            </h1>
            <p className="text-lg text-secondary-foreground/80 md:text-xl">
              Vrikshakriti specializes in creating sustainable and aesthetically pleasing architectural designs that redefine modern living and workspaces.
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
              <Link href="#features">Explore Our Work</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary/50 text-secondary-foreground hover:bg-primary/10 hover:text-secondary-foreground">
              <Link href="#contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
