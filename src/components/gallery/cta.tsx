
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Cta() {
  return (
    <section className="py-16 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="relative isolate overflow-hidden bg-primary/5 dark:bg-primary/10 px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl">
            Ready to build a kitchen like the ones you see here?
          </h2>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild>
              <Link href="/book-a-free-consultation">
                Book a Free Design Consultation <ArrowRight className="size-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
