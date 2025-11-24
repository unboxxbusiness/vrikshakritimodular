
"use client"

import * as React from "react"
import { Home, Share2, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { motion } from "framer-motion"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"
import { useIsMobile } from "@/hooks/use-mobile"

export function Dock({ className }: { className?: string }) {
  const [hovered, setHovered] = React.useState<number | null>(null)
  const { toast } = useToast()
  const isMobile = useIsMobile();

  const handleShare = async () => {
    const shareData = {
      title: document.title,
      text: `Check out this page from Vrikshakriti: ${document.title}`,
      url: window.location.href,
    }
    if (navigator.share && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData)
      } catch (error: any) {
        if (error.name !== 'AbortError') {
          console.error("Error sharing:", error)
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href)
        toast({
          title: "URL Copied!",
          description: "The page link has been copied to your clipboard.",
        })
      } catch (error) {
        console.error("Error copying to clipboard:", error)
        toast({
          variant: "destructive",
          title: "Failed to Copy",
          description: "Could not copy the link to your clipboard.",
        })
      }
    }
  }

  const items = [
    {
      icon: Home,
      label: "Home",
      as: Link,
      href: "/",
      onClick: () => {},
    },
    {
      icon: MessageCircle,
      label: "Book a Consultation",
      as: Link,
      href: "/book-a-free-consultation",
      onClick: () => {},
    },
    {
      icon: Share2,
      label: "Share",
      as: "button",
      onClick: handleShare,
    },
  ]

  if (!isMobile) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed bottom-4 left-1/2 z-50 -translate-x-1/2",
        className
      )}
    >
      <motion.div
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className={cn(
          "flex items-end gap-3 px-3 py-2 rounded-2xl",
          "border bg-background/70 backdrop-blur-xl shadow-lg"
        )}
      >
        <TooltipProvider delayDuration={100}>
          {items.map((item, i) => {
            const isHovered = hovered === i
            const Comp = item.as

            const buttonProps: any =
              Comp === "a"
                ? { href: item.href, target: item.target, rel: item.rel }
                : Comp === Link
                ? { href: item.href }
                : { onClick: item.onClick }

            return (
              <Tooltip key={item.label}>
                <TooltipTrigger asChild>
                  <motion.div
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    animate={{
                      scale: isHovered ? 1.2 : 1,
                      y: isHovered ? -8 : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 15,
                    }}
                    className="relative"
                  >
                    <Button
                      asChild
                      variant="ghost"
                      size="icon"
                      className={cn(
                        "rounded-xl relative transition-all",
                        isHovered
                          ? "bg-primary/10 text-primary"
                          : "text-foreground/70"
                      )}
                    >
                      <Comp {...buttonProps}>
                        <item.icon className="h-5 w-5" />
                        <span className="sr-only">{item.label}</span>
                      </Comp>
                    </Button>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent side="top" className="text-xs">
                  {item.label}
                </TooltipContent>
              </Tooltip>
            )
          })}
        </TooltipProvider>
      </motion.div>
    </div>
  )
}
