import { Hero } from '@/components/home/hero';
import { Features } from '@/components/home/features';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      {/* A placeholder for the about section to make the nav link work */}
      <section id="about" className="py-20 md:py-28 lg:py-32 text-center bg-secondary">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-secondary-foreground">About Vrikshakriti</h2>
            <p className="mx-auto max-w-[700px] text-secondary-foreground/80 md:text-xl mt-4">
                We are a collective of architects, designers, and innovators passionate about creating beautiful, sustainable, and functional spaces that harmonize with their environment.
            </p>
          </div>
      </section>
      {/* A placeholder for the contact section to make the nav link work */}
      <section id="contact" className="py-20 md:py-28 lg:py-32 text-center">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Contact Us</h2>
            <p className="mx-auto max-w-[700px] text-foreground/60 md:text-xl mt-4">
                Have a project in mind? We'd love to hear from you. Reach out to start the conversation.
            </p>
          </div>
      </section>
    </>
  );
}
