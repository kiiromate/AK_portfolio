import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Approach from '@/components/Approach';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Portfolio />
      <Services />
      <Approach />
      <About />
      <Contact />
    </div>
  );
}
