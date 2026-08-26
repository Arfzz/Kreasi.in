import { useState } from 'react';

const services = [
  {
    id: '01',
    name: 'Design',
    tagline: 'Bikin Mata Melek',
    desc: 'UI/UX yang gak cuma cakep diliat, tapi juga enak dipake. Branding yang bikin brand lo stand out dari yang lain.',
    tags: ['UI/UX', 'Branding', 'Motion'],
    icon: 'palette',
    accent: '#F5D60C',   // yellow
    rotate: '-rotate-2',
    hoverRotate: 'hover:rotate-1',
    number: '001',
  },
  {
    id: '02',
    name: 'Web Dev',
    tagline: 'Code yang Gak Basi',
    desc: 'Website kenceng, SEO friendly, dan pastinya scalable. Dibangun pake teknologi kekinian. Gaspol!',
    tags: ['React', 'Next.js', 'Express.js'],
    icon: 'code',
    accent: '#6afcb7',   // mint green
    rotate: 'rotate-1',
    hoverRotate: 'hover:-rotate-2',
    number: '002',
  },
  {
    id: '03',
    name: 'Mobile App',
    tagline: 'Di Genggaman, Bro',
    desc: 'Bikin aplikasi di genggaman tangan user lo. Native atau cross-platform, kita sikat semua.',
    tags: ['iOS', 'Android', 'React Native'],
    icon: 'smartphone',
    accent: '#dbb8ff',   // lavender
    rotate: '-rotate-1',
    hoverRotate: 'hover:rotate-2',
    number: '003',
  },
];

export default function Services() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-section-padding border-b-4 border-stroke-bold mb-section-padding" id="services">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6">
        <div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
            <span className="relative inline-block">
              Layanan
              {/* Underline squiggle */}
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-secondary-fixed block" />
            </span>
            {' '}Kita
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 max-w-sm">
            Ngapain pusing? Serahin aja ke ahlinya.{' '}
            <span className="font-black text-primary">Titik.</span>
          </p>
        </div>
        {/* Big number counter decoration */}
        <div className="hidden md:flex items-center gap-2 border-4 border-stroke-bold px-6 py-3 neo-shadow bg-surface">
          <span className="font-label-mono text-xs uppercase text-on-surface-variant tracking-widest">Total Layanan</span>
          <span className="font-headline-lg text-headline-lg text-secondary-fixed font-black leading-none" style={{ textShadow: '3px 3px 0 #000' }}>
            03
          </span>
        </div>
      </div>

      {/* Service cards — stacked accordion style on mobile, side-by-side on desktop */}
      <div className="flex flex-col gap-0">
        {services.map((svc, idx) => (
          <div
            key={svc.id}
            className={`group relative border-4 border-stroke-bold cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
              hovered === idx ? 'z-20' : 'z-10'
            }`}
            style={{
              background: hovered === idx ? svc.accent : '#f9f9f9',
              marginTop: idx === 0 ? '0' : '-4px',
              transform: hovered === idx
                ? 'scale(1.02) translateY(-8px)'
                : 'scale(1)',
              boxShadow: hovered === idx
                ? '12px 12px 0 0 #000'
                : '6px 6px 0 0 #000',
            }}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flex flex-col md:flex-row items-stretch">
              {/* Big number on left */}
              <div
                className="hidden md:flex flex-col items-center justify-center px-8 py-6 border-r-4 border-stroke-bold min-w-[96px] transition-colors duration-300"
                style={{ background: hovered === idx ? 'rgba(0,0,0,0.08)' : '#e2e2e2' }}
              >
                <span
                  className="font-label-mono font-black leading-none transition-all duration-300"
                  style={{
                    fontSize: '48px',
                    color: hovered === idx ? '#1b1b1b' : '#cdc3d2',
                    letterSpacing: '-2px',
                  }}
                >
                  {svc.number}
                </span>
              </div>

              {/* Main content */}
              <div className="flex-grow p-8 md:p-10 flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center">
                {/* Icon + title */}
                <div className="flex items-center gap-4 md:flex-col md:items-start md:min-w-[160px]">
                  <div
                    className="w-14 h-14 flex-shrink-0 border-4 border-stroke-bold flex items-center justify-center transition-all duration-300"
                    style={{
                      background: hovered === idx ? '#1b1b1b' : svc.accent,
                      boxShadow: hovered === idx ? '4px 4px 0 rgba(255,255,255,0.3)' : '4px 4px 0 #000',
                    }}
                  >
                    <span
                      className="material-symbols-outlined text-2xl transition-colors duration-300"
                      style={{
                        fontVariationSettings: "'FILL' 1",
                        color: hovered === idx ? svc.accent : '#1b1b1b',
                      }}
                    >
                      {svc.icon}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="font-headline-md text-headline-md uppercase transition-colors duration-300"
                      style={{ color: hovered === idx ? '#1b1b1b' : '#330060' }}
                    >
                      {svc.name}
                    </h3>
                    <p
                      className="font-label-mono text-xs uppercase tracking-widest transition-colors duration-300"
                      style={{ color: hovered === idx ? '#1b1b1b' : '#7c7482' }}
                    >
                      {svc.tagline}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p
                  className="font-body-md text-body-md flex-grow transition-colors duration-300"
                  style={{ color: hovered === idx ? '#1b1b1b' : '#4b4451' }}
                >
                  {svc.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap md:flex-col gap-2 md:min-w-[120px]">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-label-mono text-xs uppercase px-3 py-1 border-2 border-stroke-bold transition-all duration-300"
                      style={{
                        background: hovered === idx ? '#1b1b1b' : '#f9f9f9',
                        color: hovered === idx ? svc.accent : '#330060',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow — only shows on hover */}
                <div
                  className="hidden md:flex items-center transition-all duration-500"
                  style={{
                    opacity: hovered === idx ? 1 : 0,
                    transform: hovered === idx ? 'translateX(0)' : 'translateX(-12px)',
                  }}
                >
                  <span
                    className="material-symbols-outlined text-4xl"
                    style={{ color: '#1b1b1b' }}
                  >
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative corner sticker */}
            <div
              className="absolute -top-3 -right-3 w-8 h-8 border-4 border-stroke-bold flex items-center justify-center transition-all duration-300"
              style={{
                background: hovered === idx ? '#1b1b1b' : svc.accent,
              }}
            />
          </div>
        ))}
      </div>

      {/* Bottom "all services" CTA */}
      <div className="mt-12 flex items-center justify-between border-4 border-stroke-bold p-6 neo-shadow bg-primary">
        <div>
          <p className="font-label-mono text-xs uppercase tracking-widest text-on-primary opacity-70">Mau yang lain?</p>
          <p className="font-headline-md text-headline-md text-secondary-fixed">Kita fleksibel, bro.</p>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 border-4 border-secondary-fixed px-6 py-3 font-label-mono text-label-mono uppercase text-secondary-fixed hover:bg-secondary-fixed hover:text-primary transition-all duration-200"
        >
          Ngobrol Dulu
          <span className="material-symbols-outlined text-lg">chat</span>
        </a>
      </div>
    </section>
  );
}
