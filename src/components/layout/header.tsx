"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Logo } from "./logo"

const menuItems = [
    {
        name: "Materials",
        href: "/materials-and-finishes",
    },
    {
        name: "Gallery",
        href: "/gallery",
    },
]

const kitchenStyles: { title: string; href: string; description: string }[] = [
    {
      title: "L-Shaped Kitchen",
      href: "/l-shaped-kitchen",
      description: "Space-efficient, modern, and perfect for small to mid-sized homes.",
    },
    {
      title: "U-Shaped Kitchen",
      href: "/u-shaped-kitchen",
      description: "Maximum storage, best for families who love cooking together.",
    },
    {
      title: "Straight Kitchen",
      href: "/straight-kitchen",
      description: "Clean, minimal layout ideal for compact spaces.",
    },
    {
      title: "Parallel / Galley Kitchen",
      href: "/parallel-kitchen",
      description: "High-performance layout used by professional chefs.",
    },
    {
      title: "Island Kitchen",
      href: "/island-kitchen",
      description: "A premium statement for open layouts and large homes.",
    },
    {
      title: "Semi-Modular / Renovation",
      href: "/semi-modular-kitchen",
      description: "Upgrade your existing kitchen with minimal disruption.",
    },
]

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg">
                <Logo />
                <span className="hidden sm:inline-block">Vrikshakriti</span>
            </Link>
          </div>

          <div className="hidden lg:flex flex-1 items-center justify-center">
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
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {menuItems.map((item) => (
                    <NavigationMenuItem key={item.name}>
                        <NavigationMenuLink asChild>
                            <Link href={item.href} className={navigationMenuTriggerStyle()}>
                                {item.name}
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Button asChild>
                <Link href="#">Book a Free Design Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center lg:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open main menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader className="sr-only">
                    <SheetTitle>Main Menu</SheetTitle>
                </SheetHeader>
                <div className="flex h-full flex-col py-6">
                    <div className="mb-8">
                        <Link href="/" className="flex items-center gap-2 font-bold text-lg" onClick={() => setMobileMenuOpen(false)}>
                            <Logo />
                            <span>Vrikshakriti</span>
                        </Link>
                    </div>
                  <nav className="flex flex-col gap-y-4">
                    <h3 className="font-semibold">Kitchen Styles</h3>
                    {kitchenStyles.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="-m-3 block rounded-md p-3 text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                     <hr className="my-4"/>
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-m-3 block rounded-md p-3 text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto">
                    <Button asChild className="w-full">
                        <Link href="#">Book a Free Design Consultation</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
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
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
