import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    title: "Project Gokil 1",
    desc: "E-commerce App Redesign",
    tag: "UI/UX",
    year: "2024",
    num: "001",
    accent: '#F5D60C',
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAU4Gy5RapTyHVgEv5N1FjHocXxfBIme85DvEGKt-yHskTbzUJROifBlLqhRR6HeY-g5qHlda8RipbC9bMT8BIGzfRTsZpmLWTpkj9stNiDNBsZUfRuSoF9wnBFVwoDYnytqz7SA3pWJOXkCLNklbtlcxqjSI5WGQK4WhttBlD5gClTlMEZ5RvW6aArW86xGab3-Dwq9olk7tILbNXlMnqlEVVidtds2zltK3DX04JlALmKODHIXsYDIg",
  },
  {
    title: "App Masa Depan",
    desc: "SaaS Platform Dashboard",
    tag: "Web Dev",
    year: "2024",
    num: "002",
    accent: '#6afcb7',
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpjrF8PFyWaigo8nvYzQ8ukp8LMOIW0JNOwtd7g-AXb3zzrSKry5WH-6yZumFYdG82V9k-umD2tTuKJXcdgKlQ0Dwgo71c2Lv4g2ov1qFs4Wk1d0HCeHj6VCLvR9tZ0LJvub2ZO_0SwKEm-t4Qi_nxrunev0lHK_EbKQwAOTcQKCyD2nASgehkXK4zPDQ43wMcayY1Zpk8ES49xwCNcmeLq-hNco2AFBHvz23bTfJXdEQUjbfXRAERew",
  },
  {
    title: "Super Brand",
    desc: "Corporate Identity & Web",
    tag: "Branding",
    year: "2024",
    num: "003",
    accent: '#dbb8ff',
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAU4Gy5RapTyHVgEv5N1FjHocXxfBIme85DvEGKt-yHskTbzUJROifBlLqhRR6HeY-g5qHlda8RipbC9bMT8BIGzfRTsZpmLWTpkj9stNiDNBsZUfRuSoF9wnBFVwoDYnytqz7SA3pWJOXkCLNklbtlcxqjSI5WGQK4WhttBlD5gClTlMEZ5RvW6aArW86xGab3-Dwq9olk7tILbNXlMnqlEVVidtds2zltK3DX04JlALmKODHIXsYDIg",
  },
  {
    title: "Startup Ngebut",
    desc: "Landing Page & SEO",
    tag: "Web Dev",
    year: "2023",
    num: "004",
    accent: '#F5D60C',
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpjrF8PFyWaigo8nvYzQ8ukp8LMOIW0JNOwtd7g-AXb3zzrSKry5WH-6yZumFYdG82V9k-umD2tTuKJXcdgKlQ0Dwgo71c2Lv4g2ov1qFs4Wk1d0HCeHj6VCLvR9tZ0LJvub2ZO_0SwKEm-t4Qi_nxrunev0lHK_EbKQwAOTcQKCyD2nASgehkXK4zPDQ43wMcayY1Zpk8ES49xwCNcmeLq-hNco2AFBHvz23bTfJXdEQUjbfXRAERew",
  },
  {
    title: "Warung Digital",
    desc: "Mobile App & Branding",
    tag: "Mobile",
    year: "2023",
    num: "005",
    accent: '#6afcb7',
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAU4Gy5RapTyHVgEv5N1FjHocXxfBIme85DvEGKt-yHskTbzUJROifBlLqhRR6HeY-g5qHlda8RipbC9bMT8BIGzfRTsZpmLWTpkj9stNiDNBsZUfRuSoF9wnBFVwoDYnytqz7SA3pWJOXkCLNklbtlcxqjSI5WGQK4WhttBlD5gClTlMEZ5RvW6aArW86xGab3-Dwq9olk7tILbNXlMnqlEVVidtds2zltK3DX04JlALmKODHIXsYDIg",
  },
  {
    title: "Kampus Keren",
    desc: "Website & Design System",
    tag: "UI/UX",
    year: "2023",
    num: "006",
    accent: '#dbb8ff',
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpjrF8PFyWaigo8nvYzQ8ukp8LMOIW0JNOwtd7g-AXb3zzrSKry5WH-6yZumFYdG82V9k-umD2tTuKJXcdgKlQ0Dwgo71c2Lv4g2ov1qFs4Wk1d0HCeHj6VCLvR9tZ0LJvub2ZO_0SwKEm-t4Qi_nxrunev0lHK_EbKQwAOTcQKCyD2nASgehkXK4zPDQ43wMcayY1Zpk8ES49xwCNcmeLq-hNco2AFBHvz23bTfJXdEQUjbfXRAERew",
  },
];

export default function Portfolio() {
  const targetRef = useRef(null);
  const trackRef = useRef(null);
  const [distance, setDistance] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  useEffect(() => {
    const updateDistance = () => {
      if (trackRef.current) {
        setDistance(-(trackRef.current.scrollWidth - window.innerWidth));
      }
    };
    updateDistance();
    window.addEventListener('resize', updateDistance);
    return () => window.removeEventListener('resize', updateDistance);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, distance]);

  // Scroll progress indicator width
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      ref={targetRef}
      className="h-[350vh] relative border-b-4 border-stroke-bold"
      style={{ background: '#ffffff' }}
      id="portfolio"
    >
      <div className="sticky top-24 h-[calc(100vh-6rem)] flex flex-col overflow-hidden">

        {/* ── HEADER ─────────────────────────────────── */}
        <div className="flex-none border-b-4 border-stroke-bold flex items-stretch">
          {/* Left: big rotated label */}
          <div
            className="flex items-center px-6 md:px-12 py-5 border-r-4 border-stroke-bold flex-grow"
          >
            <div className="flex items-center gap-4 flex-wrap">
              {/* Rotated stamp */}
              <div
                className="border-4 border-stroke-bold px-4 py-1 font-label-mono text-xs uppercase font-black flex-shrink-0"
                style={{
                  background: '#F5D60C',
                  color: '#330060',
                  transform: 'rotate(-2deg)',
                  boxShadow: '3px 3px 0 #000',
                  letterSpacing: '3px',
                }}
              >
                Portfolio
              </div>
              <h2
                className="font-headline-lg uppercase leading-none"
                style={{
                  fontSize: 'clamp(28px, 5vw, 60px)',
                  fontWeight: 900,
                  color: '#330060',
                  letterSpacing: '-0.03em',
                }}
              >
                Bukti Nyata
              </h2>
            </div>
          </div>

          {/* Right: project count + hint */}
          <div className="hidden md:flex flex-col items-center justify-center px-8 gap-1 flex-shrink-0 min-w-[140px]" style={{ background: '#330060' }}>
            <span
              className="font-headline-lg font-black leading-none"
              style={{ fontSize: '40px', color: '#F5D60C', textShadow: '3px 3px 0 #000' }}
            >
              {String(projects.length).padStart(2, '0')}
            </span>
            <span className="font-label-mono text-xs uppercase tracking-widest" style={{ color: '#ffffff', opacity: 0.6 }}>Projects</span>
          </div>
        </div>

        {/* Scroll progress bar */}
        <div className="flex-none h-[4px]" style={{ background: '#e2e2e2' }}>
          <motion.div
            className="h-full"
            style={{ width: progressWidth, background: '#330060' }}
          />
        </div>

        {/* ── HORIZONTAL SLIDER ───────────────────── */}
        <div className="flex-grow flex items-center overflow-hidden pl-6 md:pl-12">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-5 items-stretch will-change-transform w-max pr-6 md:pr-12"
          >
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group cursor-pointer flex-shrink-0 flex flex-col"
                style={{ width: 'clamp(260px, 28vw, 420px)' }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Image container */}
                <div
                  className="relative overflow-hidden flex-shrink-0 border-4 border-stroke-bold"
                  style={{
                    height: 'clamp(180px, 32vh, 360px)',
                    boxShadow: hoveredIdx === idx
                      ? `8px 8px 0 0 ${project.accent}`
                      : '6px 6px 0 0 #000',
                    transition: 'box-shadow 0.3s ease',
                  }}
                >
                  <img
                    className="w-full h-full object-cover transition-transform duration-700"
                    style={{ transform: hoveredIdx === idx ? 'scale(1.08)' : 'scale(1)' }}
                    src={project.img}
                    alt={project.title}
                  />

                  {/* Dark overlay that clears on hover */}
                  <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      background: '#1b1b1b',
                      opacity: hoveredIdx === idx ? 0.1 : 0.45,
                    }}
                  />

                  {/* Project number — top left */}
                  <div
                    className="absolute top-0 left-0 px-3 py-2 font-label-mono font-black border-r-4 border-b-4 border-stroke-bold"
                    style={{
                      fontSize: '11px',
                      background: hoveredIdx === idx ? project.accent : '#1b1b1b',
                      color: hoveredIdx === idx ? '#1b1b1b' : '#ffffff',
                      letterSpacing: '2px',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    {project.num}
                  </div>

                  {/* Tag — top right */}
                  <div
                    className="absolute top-0 right-0 px-3 py-2 font-label-mono border-l-4 border-b-4 border-stroke-bold uppercase"
                    style={{
                      fontSize: '11px',
                      background: project.accent,
                      color: '#1b1b1b',
                      fontWeight: 800,
                      letterSpacing: '1px',
                    }}
                  >
                    {project.tag}
                  </div>

                  {/* Hover overlay: CTA text */}
                  <div
                    className="absolute inset-0 flex items-end p-4 transition-opacity duration-300"
                    style={{ opacity: hoveredIdx === idx ? 1 : 0 }}
                  >
                    <span
                      className="font-label-mono text-xs uppercase tracking-widest border-2 px-3 py-1"
                      style={{
                        borderColor: project.accent,
                        color: project.accent,
                        background: 'rgba(27,27,27,0.8)',
                      }}
                    >
                      Lihat Detail →
                    </span>
                  </div>
                </div>

                {/* Card bottom info */}
                <div
                  className="border-4 border-t-0 border-stroke-bold p-4 flex items-start justify-between gap-2 transition-colors duration-300"
                  style={{
                    background: hoveredIdx === idx ? project.accent : '#f9f9f9',
                    minHeight: '80px',
                  }}
                >
                  <div>
                    <h3
                      className="font-headline-md uppercase transition-colors duration-300"
                      style={{
                        fontSize: 'clamp(16px, 2vw, 22px)',
                        fontWeight: 800,
                        color: hoveredIdx === idx ? '#1b1b1b' : '#330060',
                        lineHeight: 1.1,
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="font-body-md text-xs mt-1 transition-colors duration-300"
                      style={{ color: hoveredIdx === idx ? '#1b1b1b' : '#4b4451' }}
                    >
                      {project.desc}
                    </p>
                  </div>
                  <span
                    className="font-label-mono text-xs font-black flex-shrink-0 transition-colors duration-300"
                    style={{ color: hoveredIdx === idx ? '#1b1b1b' : '#7c7482' }}
                  >
                    {project.year}
                  </span>
                </div>
              </div>
            ))}

            {/* ── END CARD: View All ──────────────── */}
            <div className="flex-shrink-0 flex items-stretch" style={{ width: 'clamp(180px, 20vw, 280px)' }}>
              <a
                href="#"
                className="group w-full flex flex-col items-center justify-center border-4 border-stroke-bold gap-4 transition-all duration-300"
                style={{
                  background: '#F5D60C',
                  boxShadow: '8px 8px 0 #000',
                  minHeight: 'clamp(300px, 48vh, 480px)',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '12px 12px 0 #000'; e.currentTarget.style.transform = 'translate(-4px,-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '8px 8px 0 #000'; e.currentTarget.style.transform = ''; }}
              >
                <div
                  className="w-16 h-16 rounded-full border-4 border-stroke-bold flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: '#1b1b1b' }}
                >
                  <span className="material-symbols-outlined text-2xl" style={{ color: '#F5D60C' }}>
                    arrow_forward
                  </span>
                </div>
                <div className="text-center px-4">
                  <p className="font-label-mono text-xs uppercase tracking-widest font-black" style={{ color: '#1b1b1b' }}>
                    Lihat Semua
                  </p>
                  <p className="font-label-mono text-xs mt-1 opacity-60" style={{ color: '#1b1b1b' }}>
                    +{projects.length} projects
                  </p>
                </div>
              </a>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
