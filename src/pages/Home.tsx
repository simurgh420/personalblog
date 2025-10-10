import { Hero } from '@/components/Hero.tsx';
import { About } from '@/pages/About.tsx';
import { Works } from '@/components/Works.tsx';
import { Contact } from '@/pages/Contact.tsx';

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="works">
        <Works />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
