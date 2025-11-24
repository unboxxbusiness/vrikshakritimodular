"use client";

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type BreadcrumbItem = {
  name: string;
  href: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav className={cn("py-4 bg-background", className)}>
        <div className="container mx-auto px-6">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            {items.map((item, index) => (
                <li key={item.name} className="flex items-center space-x-2">
                {index > 0 && <ChevronRight className="size-4" />}
                <Link
                    href={item.href}
                    className={cn(
                    'hover:text-foreground',
                    index === items.length - 1 ? 'text-foreground font-medium' : ''
                    )}
                    aria-current={index === items.length - 1 ? 'page' : undefined}
                >
                    {item.name}
                </Link>
                </li>
            ))}
            </ol>
        </div>
    </nav>
  );
}