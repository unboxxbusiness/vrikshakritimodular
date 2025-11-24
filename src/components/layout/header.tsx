
"use client";

import React from 'react';
import Link from 'next/link';
import { Menu, ParkingSquare, Rows, Columns, BoxSelect, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Logo } from './logo';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const menuItems = [
    { name: 'Materials', href: '/materials-and-finishes' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
];

const kitchenStyles = [
  {
    title: 'L-Shaped Kitchen',
    href: '/l-shaped-kitchen',
    description: 'Space-efficient, modern, and perfect for small to mid-sized homes.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-l-shape"><path d="M5 5v14h14"/></svg>
  },
  {
    title: 'U-Shaped Kitchen',
    href: '/u-shaped-kitchen',
    description: 'Maximum storage, best for families who love cooking together.',
    icon: <ParkingSquare className="size-6" />
  },
  {
    title: 'Straight Kitchen',
    href: '/straight-kitchen',
    description: 'Clean, minimal layout ideal for compact spaces.',
    icon: <Rows className="size-6" />
  },
  {
    title: 'Parallel Kitchen',
    href: '/parallel-kitchen',
    description: 'High-performance layout used by professional chefs.',
    icon: <Columns className="size-6" />
  },
  {
    title: 'Island Kitchen',
    href: '/island-kitchen',
    description: 'A premium statement for open layouts and large homes.',
    icon: <BoxSelect className="size-6" />
  },
  {
    title: 'Semi-Modular Kitchen',
    href: '/semi-modular-kitchen',
    description: 'Upgrade your existing kitchen with minimal disruption.',
    icon: <RefreshCw className="size-6" />
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {icon && <div className="text-primary">{icon}</div>}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"


export const Header = () => {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); 
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            isScrolled ? "bg-background/80 backdrop-blur-sm border-b" : "bg-transparent border-b border-transparent"
        )}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                           <Logo />
                        </Link>
                    </div>

                    <nav className="hidden md:flex md:items-center md:space-x-4">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Kitchen Styles</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                            {kitchenStyles.map((component) => (
                                                <ListItem
                                                    key={component.title}
                                                    title={component.title}
                                                    href={component.href}
                                                    icon={component.icon}
                                                >
                                                    {component.description}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                {menuItems.map((item) => (
                                    <NavigationMenuItem key={item.name}>
                                        <Link href={item.href} legacyBehavior passHref>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                {item.name}
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        <Button asChild size="sm">
                            <Link href="#">Book a Free Design Consultation</Link>
                        </Button>
                    </div>

                    <div className="md:hidden">
                        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-full max-w-sm">
                                <nav className="grid gap-y-8 mt-12">
                                     <Link href="/" onClick={handleLinkClick} className="flex items-center gap-2 font-bold text-lg">
                                        <Logo />
                                    </Link>
                                    {menuItems.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={handleLinkClick}
                                            className="font-medium text-muted-foreground hover:text-foreground"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                    <div className="mt-4">
                                        <Button asChild className="w-full">
                                            <Link href="#" onClick={handleLinkClick}>Book a Free Design Consultation</Link>
                                        </Button>
                                    </div>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}

    