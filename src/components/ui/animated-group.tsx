"use client"

import { motion, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"

const defaultVariants = {
    container: {
        visible: {
            transition: {
                staggerChildren: 0.07,
                delayChildren: 0.2,
            },
        },
    },
    item: {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    },
}

export function AnimatedGroup({
    children,
    variants,
    className,
}: {
    children: React.ReactNode
    variants?: {
        container?: Variants
        item?: Variants
    }
    className?: string
}) {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants?.container ?? defaultVariants.container}
            className={cn("flex flex-col items-center", className)}>
            {Array.isArray(children) ? (
                children.map((child, i) => (
                    <motion.div key={i} variants={variants?.item ?? defaultVariants.item}>
                        {child}
                    </motion.div>
                ))
            ) : (
                <motion.div variants={variants?.item ?? defaultVariants.item}>
                    {children}
                </motion.div>
            )}
        </motion.div>
    )
}
