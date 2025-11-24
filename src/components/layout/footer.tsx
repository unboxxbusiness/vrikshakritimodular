"use client"
import * as React from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ArrowRight, Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter, MessageCircle } from "lucide-react"
import { Logo } from "./logo"
import Link from "next/link"

export function Footer() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    const theme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (theme === "dark" || (!theme && prefersDark)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);


  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
             <Link href="/" className="flex items-center gap-2 font-bold text-lg mb-4">
                <Logo />
                <span className="sr-only">Vrikshakriti</span>
            </Link>
            <h3 className="text-xl font-semibold">Ready to build your dream kitchen?</h3>
            <p className="mb-6 mt-2 text-muted-foreground">
              Book a free design consultation with our experts today.
            </p>
            <Button asChild>
                <Link href="/book-a-free-consultation">
                    Book Free Consultation <ArrowRight className="size-4 ml-2" />
                </Link>
            </Button>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <Link href="/" className="block transition-colors hover:text-primary">
                Home
              </Link>
              <Link href="/about" className="block transition-colors hover:text-primary">
                About Us
              </Link>
              <Link href="/materials-and-finishes" className="block transition-colors hover:text-primary">
                Materials
              </Link>
              <Link href="/faq" className="block transition-colors hover:text-primary">
                FAQ
              </Link>
              <a href="#" className="block transition-colors hover:text-primary">
                Contact
              </a>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Book on WhatsApp</h3>
            <p className="text-sm text-muted-foreground mb-4">Click below to start a conversation and book your design slot.</p>
             <Button asChild>
                <a href="https://wa.me/918851481785" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-4 mr-2" />
                    Book on WhatsApp
                </a>
            </Button>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
              <Moon className="h-4 w-4" />
              <label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </label>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vrikshakriti. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <Link href="/privacy-policy" className="transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="transition-colors hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="transition-colors hover:text-primary">
              Cookie Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
