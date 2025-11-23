"use client"

import React, { useRef } from "react"
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion"
import { cn } from "@/lib/utils"
import Image, { type ImageProps } from "next/image"

interface ContainerScrollProps {
  titleComponent: React.ReactNode
  children: React.ReactNode
  className?: string
}

export const ContainerScroll = ({
  titleComponent,
  children,
  className,
}: ContainerScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
  })
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1]
  }

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0])
  const a = useTransform(scrollYProgress, [0, 1], [isMobile ? 0 : -500, 0])
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions())
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div
      className={cn("relative flex h-[80rem] items-center justify-center p-20", className)}
      ref={containerRef}
    >
      <div
        className="relative w-full py-40"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale} y={a}>
          {children}
        </Card>
      </div>
    </div>
  )
}

export const Header = ({ translate, titleComponent }: { translate: MotionValue<number>, titleComponent: React.ReactNode }) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div mx-auto max-w-5xl text-center"
    >
      {titleComponent}
    </motion.div>
  )
}

export const Card = ({
  rotate,
  scale,
  children,
  y,
}: {
  rotate: MotionValue<number>
  scale: MotionValue<number>
  translate: MotionValue<number>
  y: MotionValue<number>
  children: React.ReactNode
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="mx-auto -mt-12 h-[30rem] w-full max-w-5xl rounded-[30px] border-4 border-[#6C6C6C] bg-[#222222] p-6 shadow-2xl md:h-[40rem]"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl">
        {children}
      </div>
    </motion.div>
  )
}

type AnimatedImageProps = Omit<ImageProps, 'alt'> & { alt?: string, containerClassName?: string };

export const AnimatedImage = ({ containerClassName, className, ...props }: AnimatedImageProps) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <div className={cn("overflow-hidden ", containerClassName)}>
      <motion.div style={{ y }}>
        <Image {...props} alt={props.alt || ''} className={cn("h-auto w-full object-cover", className)} />
      </motion.div>
    </div>
  )
};
