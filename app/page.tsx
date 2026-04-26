import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Approach from '@/components/Approach';
import ClientsSection from '@/components/ClientsSection';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Approach />
      <ClientsSection />
      <Contact />
    </div>
  );
}