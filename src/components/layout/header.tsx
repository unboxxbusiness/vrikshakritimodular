"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Mountain } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Mountain className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">
              Vrikshakriti
            </span>
          </Link>
        </div>
        <nav className="hidden flex-1 items-center gap-4 text-sm font-medium md:flex md:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center justify-end gap-2 md:flex-1">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Toggle Navigation Menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col p-6">
                <Link
                  href="/"
                  className="mb-8 flex items-center gap-2 font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Mountain className="h-6 w-6 text-primary" />
                  <span>Vrikshakriti</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
           <Button variant="outline" className='hidden md:inline-flex'>
            Sign In
          </Button>
          <Button className='hidden md:inline-flex'>
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
}
