"use client";
import {
  useScroll,
  motion,
  useInView,
  type TargetAndTransition,
  type VariantLabels,
  type HTMLMotionProps,
} from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface TimelineContentProps<T extends React.ElementType>
  extends HTMLMotionProps<T> {
  as: T;
  timelineRef: React.RefObject<HTMLElement>;
  animationNum: number;
  children: React.ReactNode;
  customVariants: {
    visible: (i: number) => TargetAndTransition;
    hidden: VariantLabels;
  };
}

export function TimelineContent<T extends React.ElementType = "div">({
  as,
  animationNum,
  timelineRef,
  children,
  customVariants,
  className,
  ...rest
}: TimelineContentProps<T>) {
  const isInView = useInView(timelineRef, { once: true, amount: 0.4 });
  const MotionComponent = motion(as);

  return (
    <MotionComponent
      animate={isInView ? "visible" : "hidden"}
      variants={customVariants}
      custom={animationNum}
      className={cn(className)}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}
