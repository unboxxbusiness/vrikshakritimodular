"use client"

import React, { useRef, useState, useEffect } from "react"
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images"
import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"

type ImageItem = ImagePlaceholder & {
  span: string;
  title: string;
};

const portfolioImages: ImageItem[] = [
  {
    "id": "portfolio-1",
    "title": "Modern Minimalism",
    "description": "A sleek, handle-less kitchen with a monochrome palette.",
    "imageUrl": "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxraXRjaGVufGVufDB8fHx8MTc2MzkxMDAyMHww&ixlib=rb-4.1.0&q=80&w=1080",
    "imageHint": "modern kitchen",
    "span": "md:col-span-2"
  },
  {
    "id": "portfolio-2",
    "title": "Classic Charm",
    "description": "Warm wood tones and classic cabinetry.",
    "imageUrl": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxraXRjaGVufGVufDB8fHx8MTc2MzkxMDAyMHww&ixlib=rb-4.1.0&q=80&w=1080",
    "imageHint": "classic kitchen",
    "span": "md:col-span-1"
  },
  {
    "id": "portfolio-3",
    "title": "Industrial Loft",
    "description": "Exposed brick and stainless steel for an urban feel.",
    "imageUrl": "https://images.unsplash.com/photo-1565329369932-53534444c113?ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxraXRjaGVufGVufDB8fHx8MTc2MzkxMDAyMHww&ixlib=rb-4.1.0&q=80&w=1080",
    "imageHint": "industrial kitchen",
    "span": "md:col-span-1"
  },
  {
    "id": "portfolio-4",
    "title": "Scandinavian Light",
    "description": "Bright, airy, and functional with natural materials.",
    "imageUrl": "https://images.unsplash.com/photo-1617806118233-52b48a3b5993?ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxraXRjaGVufGVufDB8fHx8MTc2MzkxMDAyMHww&ixlib=rb-4.1.0&q=80&w=1080",
    "imageHint": "scandinavian kitchen",
    "span": "md:col-span-2"
  },
  {
    "id": "portfolio-5",
    "title": "Compact & Clever",
    "description": "Smart storage solutions for a small-space kitchen.",
    "imageUrl": "https://images.unsplash.com/photo-1596205263926-a1c13f64323e?ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxraXRjaGVufGVufDB8fHx8MTc2MzkxMDAyMHww&ixlib=rb-4.1.0&q=80&w=1080",
    "imageHint": "compact kitchen",
    "span": "md:col-span-1"
  },
  {
    "id": "portfolio-6",
    "title": "Luxury Finishes",
    "description": "Marble countertops and high-end appliances.",
    "imageUrl": "https://images.unsplash.com/photo-1604580863891-b4a1c5d8f5d6?ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxraXRjaGVufGVufDB8fHx8MTc2MzkxMDAyMHww&ixlib=rb-4.1.0&q=80&w=1080",
    "imageHint": "luxury kitchen",
    "span": "md:col-span-1"
  }
];


// Animation variants for the container to stagger children
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Animation variants for each gallery item
const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
}

// Modal component for displaying the selected image
const ImageModal = ({
  item,
  onClose,
}: {
  item: ImageItem
  onClose: () => void
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="relative w-full max-w-4xl p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={item.imageUrl}
          alt={item.title}
          width={1920}
          height={1080}
          className="h-auto max-h-[90vh] w-full rounded-lg object-contain"
        />
      </motion.div>
      <button
        onClick={onClose}
        className="absolute right-4 top-4 text-white/80 transition-colors hover:text-white"
        aria-label="Close image view"
      >
        <X size={24} />
      </button>
    </motion.div>
  )
}

// Main gallery component
export const PortfolioGallery = () => {
  const [selectedItem, setSelectedItem] = useState<ImageItem | null>(null)
  const [dragConstraint, setDragConstraint] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)

  // Calculate the draggable area constraint
  useEffect(() => {
    const calculateConstraints = () => {
      if (gridRef.current && containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        const gridWidth = gridRef.current.scrollWidth
        const newConstraint = Math.min(0, containerWidth - gridWidth - 32)
        setDragConstraint(newConstraint)
      }
    }

    calculateConstraints()
    window.addEventListener("resize", calculateConstraints)
    return () => window.removeEventListener("resize", calculateConstraints)
  }, [portfolioImages])

  // Framer Motion scroll animations
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2], [30, 0])

  return (
    <section
      ref={targetRef}
      className="relative w-full overflow-hidden bg-secondary/30 py-16 sm:py-24"
    >
      <motion.div
        style={{ opacity, y }}
        className="container mx-auto px-4 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Kitchens We’ve Designed & Delivered
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Browse a collection of real modular kitchens and 3D concepts crafted by our design team.
        </p>
      </motion.div>

      <div
        ref={containerRef}
        className="relative mt-12 w-full cursor-grab active:cursor-grabbing"
      >
        <motion.div
          className="w-max"
          drag="x"
          dragConstraints={{ left: dragConstraint, right: 0 }}
          dragElastic={0.05}
        >
          <motion.div
            ref={gridRef}
            className="grid auto-cols-[minmax(15rem,1fr)] grid-flow-col gap-4 px-4 md:px-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {portfolioImages.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={cn(
                  "group relative flex h-full min-h-[20rem] w-full min-w-[20rem] cursor-pointer items-end overflow-hidden rounded-xl border bg-card p-4 shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  item.span,
                )}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => setSelectedItem(item)}
                onKeyDown={(e) => e.key === "Enter" && setSelectedItem(item)}
                tabIndex={0}
                aria-label={`View ${item.title}`}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-white/80">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <div className="mt-12 text-center">
        <Button asChild>
            <Link href="#">
                View Full Gallery
            </Link>
        </Button>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <ImageModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
