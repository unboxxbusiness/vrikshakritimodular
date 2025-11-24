"use client";

import { TimelineContent } from "@/components/ui/timeline-animation";
import React, { useRef } from "react";

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
        <div className="relative isolate overflow-hidden bg-primary/5 dark:bg-primary/10 px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16">
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
              className="max-w-2xl mx-auto mt-6 text-lg text-muted-foreground"
            >
              At Vrikshakriti, we don’t just build kitchens—we create spaces where families cook, connect, and create memories. With every project, our goal is simple: to deliver a kitchen that feels truly yours.
            </TimelineContent>
        </div>
      </div>
    </section>
  );
}
