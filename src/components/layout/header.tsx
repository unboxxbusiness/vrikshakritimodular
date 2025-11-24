"use client";

import React from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Logo } from './logo'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const menuItems = [
    { name: 'Kitchen Styles', href: '/#kitchen-styles' },
    { name: 'Materials', href: '/materials-and-finishes' },
    { name: 'About', href: '/about' },
    { name: 'Process', href: '/#design-process' },
    { name: 'FAQ', href: '/faq' },
]

export const Header = () => {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header>
            <nav className="fixed z-20 w-full px-2">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
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
                                                <Button asChild variant="outline">
                                                    <Link href="#" onClick={handleLinkClick}>
                                                        <span>Login</span>
                                                    </Link>
                                                </Button>
                                                <Button asChild>
                                                    <Link href="#" onClick={handleLinkClick}>
                                                        <span>Sign Up</span>
                                                    </Link>
                                                </Button>
                                            </div>
                                        </nav>
                                    </SheetContent>
                                </Sheet>
                            </div>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm font-medium">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-foreground/80 hover:text-foreground block duration-150">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="hidden lg:flex lg:w-auto lg:gap-3">
                            <Button
                                asChild
                                variant="outline"
                                size="sm"
                                className={cn(isScrolled && 'lg:hidden')}>
                                <Link href="#">
                                    <span>Login</span>
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size="sm"
                                className={cn(isScrolled && 'lg:hidden')}>
                                <Link href="#">
                                    <span>Sign Up</span>
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size="sm"
                                className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}>
                                <Link href="#">
                                    <span>Get Started</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
