import { useEffect, useRef } from 'react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { label: 'Instagram', icon: 'photo_camera', href: '#' },
  { label: 'LinkedIn', icon: 'work', href: '#' },
  { label: 'Dribbble', icon: 'sports_basketball', href: '#' },
  { label: 'GitHub', icon: 'code', href: '#' },
];

// Animated glitch effect for the big logo text
function GlitchText({ text }) {
  return (
    <span className="relative inline-block select-none">
      {/* Base text */}
      <span
        className="relative font-headline-lg uppercase block"
        style={{
          fontSize: 'clamp(64px, 14vw, 180px)',
          fontWeight: 900,
          color: '#F5D60C',
          lineHeight: 1,
          letterSpacing: '-0.04em',
          textShadow: '6px 6px 0 #000, -2px -2px 0 #6afcb7',
        }}
      >
        {text}
      </span>
      {/* Glitch layer 1 — red shift */}
      <span
        aria-hidden="true"
        className="absolute inset-0 font-headline-lg uppercase block pointer-events-none"
        style={{
          fontSize: 'clamp(64px, 14vw, 180px)',
          fontWeight: 900,
          color: 'transparent',
          lineHeight: 1,
          letterSpacing: '-0.04em',
          WebkitTextStroke: '2px #ff4444',
          animation: 'glitch-r 4s steps(2) infinite',
          clipPath: 'inset(40% 0 50% 0)',
        }}
      >
        {text}
      </span>
      {/* Glitch layer 2 — mint shift */}
      <span
        aria-hidden="true"
        className="absolute inset-0 font-headline-lg uppercase block pointer-events-none"
        style={{
          fontSize: 'clamp(64px, 14vw, 180px)',
          fontWeight: 900,
          color: 'transparent',
          lineHeight: 1,
          letterSpacing: '-0.04em',
          WebkitTextStroke: '2px #6afcb7',
          animation: 'glitch-l 3.5s steps(2) infinite',
          clipPath: 'inset(20% 0 60% 0)',
        }}
      >
        {text}
      </span>
      <style>{`
        @keyframes glitch-r {
          0%, 90%, 100% { transform: translate(0); opacity: 0; }
          91% { transform: translate(4px, -2px); opacity: 1; }
          93% { transform: translate(-3px, 2px); opacity: 1; }
          95% { transform: translate(2px, -1px); opacity: 1; }
          97% { transform: translate(0); opacity: 0; }
        }
        @keyframes glitch-l {
          0%, 85%, 100% { transform: translate(0); opacity: 0; }
          86% { transform: translate(-5px, 1px); opacity: 1; }
          88% { transform: translate(3px, -2px); opacity: 1; }
          90% { transform: translate(0); opacity: 0; }
        }
      `}</style>
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary w-full overflow-hidden" id="contact">

      {/* ── TOP BAND: big glitch wordmark ─────────────────── */}
      {/* <div className="border-b-4 border-stroke-bold px-6 pt-16 pb-4 flex flex-col items-start">
        <GlitchText text="KREASI.IN" />
      </div> */}

      {/* ── MIDDLE GRID ───────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-b-4 border-stroke-bold">
        {/* Col 1: tagline */}
        <div className="border-b-4 md:border-b-0 md:border-r-4 border-stroke-bold p-8 flex flex-col justify-between gap-8">
          <p
            className="font-body-lg"
            style={{ fontSize: '20px', lineHeight: '1.6', color: '#e2e2e2' }}
          >
            Agensi anti-mainstream yang bikin karya{' '}
            <span className="font-black text-secondary-fixed">gila</span>,
            bukan karya{' '}
            <span className="line-through opacity-50">biasa-biasa aja</span>.
          </p>
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 border-2 border-tertiary-fixed px-4 py-2 self-start">
            <span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse" />
            <span
              className="font-label-mono text-xs uppercase tracking-widest"
              style={{ color: '#6afcb7' }}
            >
              Open for projects
            </span>
          </div>
        </div>

        {/* Col 2: nav links */}
        <div className="border-b-4 md:border-b-0 md:border-r-4 border-stroke-bold p-8">
          <p className="font-label-mono text-xs uppercase tracking-widest opacity-50 mb-6">Navigation</p>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="group inline-flex items-center gap-2 font-headline-md text-on-primary transition-all duration-200 hover:text-secondary-fixed"
                  style={{ fontSize: '22px', fontWeight: 700 }}
                >
                  <span
                    className="inline-block w-6 h-[3px] bg-secondary-fixed transition-all duration-300 group-hover:w-10"
                    style={{ flexShrink: 0 }}
                  />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: socials + contact */}
        <div className="p-8 flex flex-col justify-between gap-8">
          <div>
            <p className="font-label-mono text-xs uppercase tracking-widest opacity-50 mb-6">Sosial Media</p>
            <div className="flex flex-col gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="group flex items-center gap-3 transition-all duration-200"
                >
                  <div
                    className="w-9 h-9 border-2 border-stroke-bold flex items-center justify-center transition-all duration-200 group-hover:bg-secondary-fixed group-hover:border-secondary-fixed"
                    style={{ background: 'rgba(255,255,255,0.05)' }}
                  >
                    <span
                      className="material-symbols-outlined text-base text-on-primary group-hover:text-primary transition-colors"
                      style={{ fontVariationSettings: "'FILL' 1", fontSize: '18px' }}
                    >
                      {s.icon}
                    </span>
                  </div>
                  <span
                    className="font-label-mono text-sm uppercase tracking-wider text-on-primary opacity-80 group-hover:opacity-100 group-hover:text-secondary-fixed transition-all"
                  >
                    {s.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Email CTA */}
          <a
            href="mailto:halo@kreasi.in"
            className="group border-4 border-stroke-bold px-5 py-4 flex items-center justify-between transition-all duration-200 hover:-translate-y-1"
            style={{
              background: '#F5D60C',
              boxShadow: '6px 6px 0 #000',
              color: '#1b1b1b',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '10px 10px 0 #000'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '6px 6px 0 #000'; }}
          >
            <span className="font-label-mono text-sm uppercase tracking-widest font-black">
              halo@kreasi.in
            </span>
            <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>
      </div>

      {/* ── BOTTOM BAR ────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-8 py-5">
        <p className="font-label-mono text-xs uppercase tracking-widest opacity-40">
          © 2026 Kreasi.in Agency · All wrongs reserved.
        </p>
        <div className="flex items-center gap-4">
          <span className="font-label-mono text-xs uppercase tracking-widest opacity-40">Made with</span>
          {/* Tiny tech badges */}
          {['React', 'Vite', 'Tailwind'].map((tech) => (
            <span
              key={tech}
              className="font-label-mono text-xs uppercase border border-on-primary/20 px-2 py-0.5 opacity-50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

    </footer>
  );
}
