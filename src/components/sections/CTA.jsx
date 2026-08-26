import { useEffect, useRef } from 'react';
import TextLoop from '../ui/TextLoop';

// Animated pixel noise / glitch grid background
function NoiseBG() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const CELL = 22; // cell size
    const palette = ['#F5D60C', '#330060', '#6afcb7', '#FFFFFF', '#1b1b1b'];
    let frame = 0;
    let raf;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const cols = Math.ceil(canvas.width / CELL);
      const rows = Math.ceil(canvas.height / CELL);

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          // Only update ~12% of cells per frame for flicker effect
          if (Math.random() > 0.12) continue;
          // Weighted palette: yellow and purple dominate
          const roll = Math.random();
          let color;
          if (roll < 0.45) color = '#F5D60C';
          else if (roll < 0.75) color = '#330060';
          else if (roll < 0.85) color = '#6afcb7';
          else if (roll < 0.93) color = '#FFFFFF';
          else color = '#1b1b1b';

          ctx.fillStyle = color;
          ctx.fillRect(c * CELL, r * CELL, CELL - 1, CELL - 1);
        }
      }

      frame++;
      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ imageRendering: 'pixelated', opacity: 0.22 }}
    />
  );
}

export default function CTA() {
  return (
    <section
      className="w-full relative overflow-hidden flex flex-col items-center justify-center"
      style={{ background: '#330060', minHeight: '320px' }}
    >
      {/* Animated pixel noise background */}
      <NoiseBG />

      {/* Diagonal stripes overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 18px,
            rgba(245,214,12,0.07) 18px,
            rgba(245,214,12,0.07) 20px
          )`,
        }}
      />

      {/* Main CTA text */}
      <div className="relative z-10 w-full flex flex-col items-center gap-4 py-6 px-4">
        <p className="font-label-mono text-label-mono uppercase tracking-widest text-tertiary-fixed opacity-80">

        </p>

        <h2
          className="font-headline-lg text-center uppercase leading-none"
          style={{ fontSize: 'clamp(40px, 8vw, 96px)', fontWeight: 900, color: '#F5D60C', textShadow: '5px 5px 0 #000' }}
        >
          KREASIIN<br />
          <span
            className="inline-block border-4 border-stroke-bold px-4 py-1"
            style={{ background: '#F5D60C', color: '#330060', textShadow: 'none' }}
          >
            BARENG KITA
          </span>
        </h2>

        <a
          href="#contact"
          className="mt-4 inline-flex items-center gap-3 font-label-mono text-label-mono uppercase tracking-widest border-4 border-stroke-bold px-8 py-4 transition-all duration-200 group"
          style={{ background: '#F5D60C', color: '#1b1b1b', boxShadow: '6px 6px 0 #000' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-4px,-4px)'; e.currentTarget.style.boxShadow = '10px 10px 0 #000'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '6px 6px 0 #000'; }}
        >
          <span>Hubungi Kami</span>
          <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">arrow_forward</span>
        </a>
        <p className="font-label-mono text-label-mono uppercase tracking-widest text-tertiary-fixed opacity-80">

        </p>
      </div>

    </section>
  );
}
