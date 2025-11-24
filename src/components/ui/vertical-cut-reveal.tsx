"use client";
import {
  motion,
  useInView,
  type HTMLMotionProps,
  Variants,
} from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

type StaggerDirection = "first" | "last";
type SplitType = "words" | "chars";

interface VerticalCutRevealProps<T extends React.ElementType>
  extends HTMLMotionProps<T> {
  as?: T;
  splitBy?: SplitType;
  staggerDuration?: number;
  staggerFrom?: StaggerDirection;
  children: string;
}

export function VerticalCutReveal<T extends React.ElementType = "h1">({
  as,
  children,
  splitBy = "words",
  staggerDuration = 0.4,
  staggerFrom = "first",
  className,
  ...rest
}: VerticalCutRevealProps<T>) {
  const MotionComponent = motion(as || "h1");
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const elements = splitBy === "words" ? children.split(" ") : children.split("");

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDuration,
        delayChildren: 0,
        staggerDirection: staggerFrom === "first" ? 1 : -1,
      },
    },
  };

  const textVariants: Variants = {
    hidden: {
      y: "100%",
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <MotionComponent
      ref={ref}
      aria-label={children}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn("font-bold", className)}
      {...rest}
    >
      {elements.map((element, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden"
          style={{ lineHeight: "110%" }}
        >
          <motion.span
            className="inline-block"
            style={{ paddingBottom: "0.1em" }}
            variants={textVariants}
          >
            {element === " " ? "\u00A0" : element}
          </motion.span>
        </span>
      ))}
    </MotionComponent>
  );
}