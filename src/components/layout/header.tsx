"use client";

import React from 'react'
import Link from 'next/link'
import { Menu, ChevronDown, ParkingSquare, Rows, Columns, BoxSelect, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Logo } from './logo'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const menuItems = [
    { name: 'Materials', href: '/materials-and-finishes' },
    { name: 'About', href: '/about' },
    { name: 'FAQ', href: '/faq' },
]

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
    const [hasMounted, setHasMounted] = React.useState(false);

    React.useEffect(() => {
        setHasMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    if (!hasMounted) {
        return (
            <header>
            <nav className="fixed z-20 w-full px-2">
                <div className={'mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12'}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <div className="lg:hidden">
                                <Button variant="outline" size="icon">
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        );
    }

    return (
        <header>
            <nav className="fixed z-20 w-full px-2">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled ? 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5' : '')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <div className="lg:hidden">
                                <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                                    <SheetTrigger asChild>
                                        <Button variant="outline" size="icon">
                                            <Menu className="h-6 w-6" />
                                            <span className="sr-only">Open menu</span>
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent side="right">
                                        <SheetTitle className="sr-only">Menu</SheetTitle>
                                        <nav className="grid gap-6 text-lg font-medium mt-10">
                                            <Link href="/" onClick={handleLinkClick} className="flex items-center gap-2 font-bold text-lg mb-4">
                                                <Logo />
                                                <span>Vrikshakriti</span>
                                            </Link>
                                            <Link href="/#kitchen-styles" onClick={handleLinkClick} className="text-muted-foreground hover:text-foreground">
                                                Kitchen Styles
                                            </Link>
                                            {menuItems.map((item, index) => (
                                                <Link
                                                    key={index}
                                                    href={item.href}
                                                    onClick={handleLinkClick}
                                                    className="text-muted-foreground hover:text-foreground"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                            <div className="flex w-full flex-col space-y-3 pt-6">
                                                <Button asChild>
                                                    <Link href="#" onClick={handleLinkClick}>
                                                        <span>Book a Free Design Consultation</span>
                                                    </Link>
                                                </Button>
                                            </div>
                                        </nav>
                                    </SheetContent>
                                </Sheet>
                            </div>
                        </div>

                         <div className="absolute inset-0 m-auto hidden size-fit lg:block">
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
                        </div>


                        <div className="hidden lg:flex lg:w-auto lg:gap-3">
                            <Button
                                asChild
                                size="sm"
                                >
                                <Link href="#">
                                    <span>Book a Free Design Consultation</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
