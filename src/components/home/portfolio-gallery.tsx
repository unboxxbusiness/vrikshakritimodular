"use client"

import React from "react"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"

const portfolioImages = [
  {
    "id": "portfolio-1",
    "title": "Modern Minimalism",
    "description": "A sleek, handle-less kitchen with a monochrome palette.",
    "imageUrl": "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxraXRjaGVufGVufDB8fHx8MTc2MzkxMDAyMHww&ixlib=rb-4.1.0&q=80&w=1080",
    "imageHint": "modern kitchen",
  },
  {
    "id": "portfolio-2",
    "title": "Classic Charm",
    "description": "Warm wood tones and classic cabinetry.",
    "imageUrl": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxraXRjaGVufGVufDB8fHx8MTc2MzkxMDAyMHww&ixlib=rb-4.1.0&q=80&w=1080",
    "imageHint": "classic kitchen",
  },
  {
    "id": "portfolio-3",
    "title": "Industrial Loft",
    "description": "Exposed brick and stainless steel for an urban feel.",
    "imageUrl": "https://images.unsplash.com/photo-1565329369932-53534444c113?ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxraXRjaGVufGVufDB8fHx8MTc2MzkxMDAyMHww&ixlib=rb-4.1.0&q=80&w=1080",
    "imageHint": "industrial kitchen",
  },
  {
    "id": "portfolio-4",
    "title": "Scandinavian Light",
    "description": "Bright, airy, and functional with natural materials.",
    "imageUrl": "https://images.unsplash.com/photo-1617806118233-52b48a3b5993?ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxraXRjaGVufGVufDB8fHx8MTc2MzkxMDAyMHww&ixlib=rb-4.1.0&q=80&w=1080",
    "imageHint": "scandinavian kitchen",
  },
  {
    "id": "portfolio-5",
    "title": "Compact & Clever",
    "description": "Smart storage solutions for a small-space kitchen.",
    "imageUrl": "https://images.unsplash.com/photo-1596205263926-a1c13f64323e?ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxraXRjaGVufGVufDB8fHx8MTc2MzkxMDAyMHww&ixlib=rb-4.1.0&q=80&w=1080",
    "imageHint": "compact kitchen",
  },
  {
    "id": "portfolio-6",
    "title": "Luxury Finishes",
    "description": "Marble countertops and high-end appliances.",
    "imageUrl": "https://images.unsplash.com/photo-1604580863891-b4a1c5d8f5d6?ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxraXRjaGVufGVufDB8fHx8MTc2MzkxMDAyMHww&ixlib=rb-4.1.0&q=80&w=1080",
    "imageHint": "luxury kitchen",
  }
];


export function PortfolioGallery() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-4xl font-semibold text-black dark:text-white">
              Kitchens We’ve Designed & Delivered
            </h2>
            <p className="mt-4 text-lg text-black dark:text-white">
              Browse a collection of real modular kitchens and 3D concepts crafted by our design team.
            </p>
            <div className="mt-8">
              <Button asChild>
                <Link href="#">
                  View Full Gallery
                </Link>
              </Button>
            </div>
          </>
        }
      >
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-3">
          {portfolioImages.map((item, idx) => (
            <div key={item.id} className="overflow-hidden rounded-lg">
              <Image
                src={item.imageUrl}
                alt={item.title}
                height="2000"
                width="2000"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </ContainerScroll>
    </div>
  )
}
