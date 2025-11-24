
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Cta() {
  return (
    <section className="py-16 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="relative isolate overflow-hidden bg-primary/5 dark:bg-primary/10 px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl">
            Unsure Which Material or Finish to Choose?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg">
            Our design experts will guide you to the best combinations based on your style, budget, and daily usage.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild>
                <Link href="/book-a-free-consultation">
                    Book a Free Material Consultation <ArrowRight className="size-4 ml-2" />
                </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
