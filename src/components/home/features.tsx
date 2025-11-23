import Image from 'next/image';

export function Partners() {
  const partners = [
    { name: 'Nvidia', logo: 'https://html.tailus.io/blocks/customers/nvidia.svg', height: 20 },
    { name: 'Column', logo: 'https://html.tailus.io/blocks/customers/column.svg', height: 16 },
    { name: 'GitHub', logo: 'https://html.tailus.io/blocks/customers/github.svg', height: 16 },
    { name: 'Nike', logo: 'https://html.tailus.io/blocks/customers/nike.svg', height: 20 },
    { name: 'Laravel', logo: 'https://html.tailus.io/blocks/customers/laravel.svg', height: 16 },
    { name: 'Lilly', logo: 'https://html.tailus.io/blocks/customers/lilly.svg', height: 28 },
    { name: 'Lemon Squeezy', logo: 'https://html.tailus.io/blocks/customers/lemonsqueezy.svg', height: 20 },
    { name: 'OpenAI', logo: 'https://html.tailus.io/blocks/customers/openai.svg', height: 24 },
    { name: 'Tailwind CSS', logo: 'https://html.tailus.io/blocks/customers/tailwindcss.svg', height: 16 },
    { name: 'Vercel', logo: 'https://html.tailus.io/blocks/customers/vercel.svg', height: 20 },
    { name: 'Zapier', logo: 'https://html.tailus.io/blocks/customers/zapier.svg', height: 20 },
  ];
  return (
    <section className="bg-background relative z-10 py-16">
        <div className="m-auto max-w-5xl px-6">
            <h2 className="text-center text-lg font-medium">Your favorite companies are our partners.</h2>
            <div className="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
                {partners.map(partner => (
                    <Image
                        key={partner.name}
                        className="h-5 w-fit dark:invert"
                        src={partner.logo}
                        alt={`${partner.name} Logo`}
                        height={partner.height}
                        width={100}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}
