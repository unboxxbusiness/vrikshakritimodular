import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <div className="bg-background">
        <div
            aria-hidden
            className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
            <div className="w-[35rem] h-[80rem] -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
            <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
            <div className="h-[80rem] -translate-y-87.5 absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>

        <section className="overflow-hidden bg-white dark:bg-transparent">
            <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-24">
                <div className="relative z-10 mx-auto max-w-3xl text-center">
                    <h1 className="text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">Transform Your Home with a Smart, Stylish Modular Kitchen</h1>
                    <p className="mx-auto my-8 max-w-2xl text-xl">Crafted for Indian homes. Designed for everyday convenience. Built to last.</p>

                    <div className="flex justify-center gap-4">
                        <Button
                            asChild
                            size="lg">
                            <Link href="#">
                                <span className="btn-label">Book a Free Design Consultation</span>
                            </Link>
                        </Button>
                         <Button
                            asChild
                            size="lg"
                            variant="outline">
                            <Link href="#">
                                <span className="btn-label">Download Kitchen Brochure</span>
                            </Link>
                        </Button>
                    </div>

                    <div className="mt-8 flex justify-center gap-8 text-sm font-medium text-foreground/80">
                        <span>10–15 Year Warranty</span>
                        <span>Premium Hardware (Blum / Hettich)</span>
                        <span>Factory-Finished Perfection</span>
                        <span>Fast Installation</span>
                    </div>
                </div>
            </div>

            <div className="mx-auto -mt-16 max-w-7xl [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]">
                <div className="[perspective:1200px] [mask-image:linear-gradient(to_right,black_50%,transparent_100%)] -mr-16 pl-16 lg:-mr-56 lg:pl-56">
                    <div className="[transform:rotateX(20deg);]">
                        <div className="lg:h-[44rem] relative skew-x-[.36rad]">
                            <Image
                                className="rounded-[--radius] z-[2] relative border dark:hidden"
                                src="https://picsum.photos/seed/kitchen-light/1200/800"
                                alt="Modern Kitchen"
                                width={1200}
                                height={800}
                                data-ai-hint="modern kitchen"
                            />
                            <Image
                                className="rounded-[--radius] z-[2] relative hidden border dark:block"
                                src="https://picsum.photos/seed/kitchen-dark/1200/800"
                                alt="Modern Kitchen Dark"
                                width={1200}
                                height={800}
                                data-ai-hint="modern kitchen dark"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}