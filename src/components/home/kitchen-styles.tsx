
import { cn } from "@/lib/utils";
import { RefreshCw, Rows, Columns, ParkingSquare, BoxSelect } from "lucide-react";
import Link from "next/link";

export function KitchenStyles() {
    const features = [
        {
          title: "L-Shaped Kitchen",
          description:
            "Space-efficient, modern, and perfect for small to mid-sized homes.",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-l-shape"><path d="M5 5v14h14"/></svg>,
          href: "/l-shaped-kitchen",
        },
        {
          title: "U-Shaped Kitchen",
          description:
            "Maximum storage, best for families who love cooking together.",
          icon: <ParkingSquare className="size-8" />,
        },
        {
          title: "Straight Kitchen",
          description:
            "Clean, minimal layout ideal for compact spaces.",
          icon: <Rows className="size-8" />,
        },
        {
          title: "Parallel / Galley Kitchen",
          description:
            "High-performance layout used by professional chefs.",
          icon: <Columns className="size-8" />,
        },
        {
          title: "Island Kitchen",
          description:
            "A premium statement for open layouts and large homes.",
          icon: <BoxSelect className="size-8" />,
        },
        {
          title: "Semi-Modular / Renovation",
          description:
            "Upgrade your existing kitchen with minimal disruption.",
          icon: <RefreshCw className="size-8" />,
        },
      ];
  return (
    <div className="bg-background relative z-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-semibold text-center md:text-4xl">Modular Kitchen Styles We Specialize In</h2>
              <p className="text-muted-foreground mt-4">Whether you have a compact apartment or a spacious villa, we have a kitchen layout that fits your space and needs.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 pt-10 max-w-7xl mx-auto">
                {features.map((feature, index) => (
                    <Feature key={feature.title} {...feature} index={index} />
                ))}
            </div>
        </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  href
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  href?: string;
}) => {
  const content = (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800 h-full",
        (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
        index < 3 && "lg:border-b dark:border-neutral-800"
      )}
    >
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      <div className="mb-4 relative z-10 px-10 text-primary">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-green-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );

  if (href) {
    return <Link href={href} className="flex flex-col h-full">{content}</Link>;
  }

  return content;
};
