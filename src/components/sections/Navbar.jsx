import { useState, useEffect, useRef } from 'react';

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className="sticky top-0 w-full z-[100] border-b-4 border-stroke-bold transition-all duration-300"
        style={{
          background: scrolled ? '#330060' : '#FFFFFF',
          boxShadow: scrolled ? '0 8px 0 0 #000' : '0 4px 0 0 #000',
        }}
      >
        <div className="flex justify-between items-center h-20 px-6 md:px-grid-margin max-w-7xl mx-auto">

          {/* ── LOGO ── */}
          <a href="#" className="flex items-center gap-0 group">
            {/* Logo mark: stacked colored squares */}
            <div className="relative w-10 h-10 mr-3 flex-shrink-0">
              <div className="absolute inset-0 border-4 border-stroke-bold" style={{ background: '#F5D60C', transform: 'rotate(8deg)' }} />
              <div className="absolute inset-0 border-4 border-stroke-bold flex items-center justify-center" style={{ background: '#330060' }}>
                <span className="font-headline-md font-black text-xs" style={{ color: '#F5D60C' }}>K</span>
              </div>
            </div>
            <span
              className="font-headline-lg uppercase font-black tracking-tighter transition-colors duration-300"
              style={{
                fontSize: '22px',
                color: scrolled ? '#F5D60C' : '#330060',
                textShadow: scrolled ? '2px 2px 0 #000' : 'none',
              }}
            >
              Kreasi.in
            </span>
          </a>

          {/* ── DESKTOP NAV LINKS ── */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative font-label-mono text-xs uppercase tracking-widest font-bold px-4 py-2 transition-all duration-200 group"
                style={{ color: scrolled ? '#ffffff' : '#330060' }}
                onMouseEnter={() => setActiveLink(link.label)}
                onMouseLeave={() => setActiveLink(null)}
              >
                {/* Hover background slab */}
                <span
                  className="absolute inset-0 border-2 border-stroke-bold transition-all duration-200"
                  style={{
                    background: '#F5D60C',
                    opacity: activeLink === link.label ? 1 : 0,
                    transform: activeLink === link.label ? 'translate(-2px, -2px)' : 'translate(0,0)',
                    boxShadow: activeLink === link.label ? '3px 3px 0 #000' : 'none',
                  }}
                />
                <span
                  className="relative z-10 transition-colors duration-200"
                  style={{ color: activeLink === link.label ? '#330060' : (scrolled ? '#ffffff' : '#330060') }}
                >
                  {link.label}
                </span>
              </a>
            ))}
          </div>

          {/* ── CTA + MOBILE TOGGLE ── */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 font-label-mono text-xs uppercase font-black tracking-widest border-4 border-stroke-bold px-5 py-2 transition-all duration-200"
              style={{
                background: '#F5D60C',
                color: '#1b1b1b',
                boxShadow: '4px 4px 0 #000',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-2px,-2px)'; e.currentTarget.style.boxShadow = '6px 6px 0 #000'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '4px 4px 0 #000'; }}
            >
              Hire Us
              <span className="material-symbols-outlined text-base">bolt</span>
            </a>

            {/* Mobile burger */}
            <button
              className="md:hidden w-10 h-10 border-4 border-stroke-bold flex flex-col items-center justify-center gap-[5px] transition-all duration-200"
              style={{ background: mobileOpen ? '#F5D60C' : '#330060', boxShadow: '3px 3px 0 #000' }}
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle menu"
            >
              <span
                className="block w-5 h-[3px] bg-white transition-all duration-300 origin-center"
                style={mobileOpen ? { transform: 'rotate(45deg) translate(2px, 4px)', background: '#1b1b1b' } : {}}
              />
              <span
                className="block w-5 h-[3px] bg-white transition-all duration-300"
                style={mobileOpen ? { opacity: 0, background: '#1b1b1b' } : {}}
              />
              <span
                className="block w-5 h-[3px] bg-white transition-all duration-300 origin-center"
                style={mobileOpen ? { transform: 'rotate(-45deg) translate(2px, -4px)', background: '#1b1b1b' } : {}}
              />
            </button>
          </div>
        </div>

        {/* ── MOBILE MENU ── */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300 border-t-4 border-stroke-bold"
          style={{
            maxHeight: mobileOpen ? '320px' : '0',
            background: '#330060',
          }}
        >
          <div className="flex flex-col p-6 gap-4">
            {links.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center justify-between font-headline-md uppercase font-black border-b-2 pb-3 transition-all duration-200 group"
                style={{
                  fontSize: '20px',
                  color: '#ffffff',
                  borderColor: 'rgba(255,255,255,0.15)',
                }}
                onClick={() => setMobileOpen(false)}
              >
                <span className="group-hover:text-secondary-fixed transition-colors">{link.label}</span>
                <span className="font-label-mono text-xs opacity-40">{String(i + 1).padStart(2, '0')}</span>
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 border-4 border-stroke-bold px-5 py-3 font-label-mono text-sm uppercase font-black text-center"
              style={{ background: '#F5D60C', color: '#1b1b1b', boxShadow: '4px 4px 0 #000' }}
              onClick={() => setMobileOpen(false)}
            >
              Hire Us ⚡
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
