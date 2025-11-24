"use client";

import { TimelineContent } from "@/components/ui/timeline-animation";
import { ArrowRight } from "lucide-react";
import React, { useRef } from "react";
import Link from 'next/link';

export function ClosingStatement() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.5,
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: 40,
      opacity: 0,
    },
  };
  const textVariants = {
    visible: (i: number) => ({
      filter: "blur(0px)",
      opacity: 1,
      transition: {
        delay: i * 0.3 + 0.5,
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  };

  return (
    <section className="py-16 md:py-32 px-4 bg-background">
      <div className="max-w-4xl mx-auto" ref={sectionRef}>
        <div className="flex flex-col items-center gap-8 text-center">
            <TimelineContent
              as="h2"
              animationNum={0}
              timelineRef={sectionRef}
              customVariants={revealVariants}
              className="text-3xl sm:text-4xl md:text-5xl !leading-tight font-bold text-foreground"
            >
              The Heart of Your Home,{" "}
              <TimelineContent
                as="span"
                animationNum={1}
                timelineRef={sectionRef}
                customVariants={textVariants}
                className="text-primary"
              >
                Reimagined
              </TimelineContent>
            </TimelineContent>

            <TimelineContent
              as="p"
              animationNum={1}
              timelineRef={sectionRef}
              customVariants={revealVariants}
              className="max-w-2xl text-lg text-muted-foreground"
            >
              At Vrikshakriti, we don’t just build kitchens—we create spaces where families cook, connect, and create memories. With every project, our goal is simple: to deliver a kitchen that feels truly yours.
            </TimelineContent>
            
            <TimelineContent
              as="div"
              animationNum={2}
              timelineRef={sectionRef}
              customVariants={revealVariants}
              className="mt-6"
            >
                <Link href="#" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8">
                    Start Your Kitchen Journey <ArrowRight className="size-4 ml-2" />
                </Link>
            </TimelineContent>
        </div>
      </div>
    </section>
  );
}
