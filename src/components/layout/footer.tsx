import { Mountain } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center md:items-start">
                 <Link href="/" className="flex items-center gap-2 font-bold text-lg">
                    <Mountain className="h-6 w-6 text-primary" />
                    <span>Vrikshakriti</span>
                </Link>
                <p className="text-foreground/60 mt-2 text-sm text-center md:text-left">
                    Innovative Architectural Solutions.
                </p>
            </div>
            <div className="flex flex-col items-center gap-2 text-sm text-foreground/80">
                <h4 className="font-semibold mb-2">Quick Links</h4>
                 <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
                 <Link href="#about" className="hover:text-primary transition-colors">About</Link>
                 <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2 text-sm text-foreground/80">
                <h4 className="font-semibold mb-2">Contact</h4>
                <a href="mailto:contact@vrikshakriti.com" className="hover:text-primary transition-colors">contact@vrikshakriti.com</a>
                <p>123 Design Lane, Arch City, USA</p>
            </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Vrikshakriti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
