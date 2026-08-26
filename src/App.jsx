import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import CTA from './components/sections/CTA';
import TextLoop from './components/ui/TextLoop';
import Footer from './components/sections/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <main className="max-w-7xl mx-auto px-4 md:px-grid-margin w-full">
        <Services />
      </main>
      <Portfolio />
      <CTA />
      {/* Ticker strip between CTA and Footer */}
      <div
        className="w-full bg-secondary-fixed border-t-4 border-b-4 border-stroke-bold overflow-hidden"
        style={{ height: '56px', display: 'flex', alignItems: 'center' }}
      >
        <style>{`
          @keyframes ticker {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .ticker-track {
            display: flex;
            width: max-content;
            animation: ticker 18s linear infinite;
          }
          .ticker-track:hover { animation-play-state: paused; }
        `}</style>
        <div className="ticker-track">
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="font-label-mono uppercase text-primary whitespace-nowrap px-6"
              style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '3px' }}
            >
              HIRE US ✦ LET&apos;S BUILD SOMETHING WILD ✦
            </span>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
