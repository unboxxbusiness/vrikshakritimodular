import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function Features() {
  const features = PlaceHolderImages.slice(0, 6);

  return (
    <section id="features" className="w-full py-20 md:py-28 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-[700px] text-foreground/60 md:text-xl">
            Discover a selection of our finest work, showcasing innovation, craftsmanship, and a commitment to excellence.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.id} className="group flex flex-col overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="overflow-hidden">
                <Image
                  src={feature.imageUrl}
                  alt={feature.description}
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
                  data-ai-hint={feature.imageHint}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow bg-card">
                <h3 className="text-xl font-bold font-headline mb-2">Project {feature.id.split('-')[1]}</h3>
                <p className="text-foreground/70 flex-grow mb-4">
                  {feature.description}
                </p>
                <div className="mt-auto">
                    <Button variant="link" asChild className="p-0 text-primary font-semibold">
                    <Link href="#">
                        View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
