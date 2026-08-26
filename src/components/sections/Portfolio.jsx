import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    title: "Project Gokil 1",
    desc: "E-commerce App Redesign",
    tag: "UI/UX",
    year: "2024",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAU4Gy5RapTyHVgEv5N1FjHocXxfBIme85DvEGKt-yHskTbzUJROifBlLqhRR6HeY-g5qHlda8RipbC9bMT8BIGzfRTsZpmLWTpkj9stNiDNBsZUfRuSoF9wnBFVwoDYnytqz7SA3pWJOXkCLNklbtlcxqjSI5WGQK4WhttBlD5gClTlMEZ5RvW6aArW86xGab3-Dwq9olk7tILbNXlMnqlEVVidtds2zltK3DX04JlALmKODHIXsYDIg",
  },
  {
    title: "App Masa Depan",
    desc: "SaaS Platform Dashboard",
    tag: "Web Dev",
    year: "2024",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpjrF8PFyWaigo8nvYzQ8ukp8LMOIW0JNOwtd7g-AXb3zzrSKry5WH-6yZumFYdG82V9k-umD2tTuKJXcdgKlQ0Dwgo71c2Lv4g2ov1qFs4Wk1d0HCeHj6VCLvR9tZ0LJvub2ZO_0SwKEm-t4Qi_nxrunev0lHK_EbKQwAOTcQKCyD2nASgehkXK4zPDQ43wMcayY1Zpk8ES49xwCNcmeLq-hNco2AFBHvz23bTfJXdEQUjbfXRAERew",
  },
  {
    title: "Super Brand",
    desc: "Corporate Identity & Web",
    tag: "Branding",
    year: "2024",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAU4Gy5RapTyHVgEv5N1FjHocXxfBIme85DvEGKt-yHskTbzUJROifBlLqhRR6HeY-g5qHlda8RipbC9bMT8BIGzfRTsZpmLWTpkj9stNiDNBsZUfRuSoF9wnBFVwoDYnytqz7SA3pWJOXkCLNklbtlcxqjSI5WGQK4WhttBlD5gClTlMEZ5RvW6aArW86xGab3-Dwq9olk7tILbNXlMnqlEVVidtds2zltK3DX04JlALmKODHIXsYDIg",
  },
  {
    title: "Startup Ngebut",
    desc: "Landing Page & SEO",
    tag: "Web Dev",
    year: "2023",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpjrF8PFyWaigo8nvYzQ8ukp8LMOIW0JNOwtd7g-AXb3zzrSKry5WH-6yZumFYdG82V9k-umD2tTuKJXcdgKlQ0Dwgo71c2Lv4g2ov1qFs4Wk1d0HCeHj6VCLvR9tZ0LJvub2ZO_0SwKEm-t4Qi_nxrunev0lHK_EbKQwAOTcQKCyD2nASgehkXK4zPDQ43wMcayY1Zpk8ES49xwCNcmeLq-hNco2AFBHvz23bTfJXdEQUjbfXRAERew",
  },
  {
    title: "Warung Digital",
    desc: "Mobile App & Branding",
    tag: "Mobile",
    year: "2023",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAU4Gy5RapTyHVgEv5N1FjHocXxfBIme85DvEGKt-yHskTbzUJROifBlLqhRR6HeY-g5qHlda8RipbC9bMT8BIGzfRTsZpmLWTpkj9stNiDNBsZUfRuSoF9wnBFVwoDYnytqz7SA3pWJOXkCLNklbtlcxqjSI5WGQK4WhttBlD5gClTlMEZ5RvW6aArW86xGab3-Dwq9olk7tILbNXlMnqlEVVidtds2zltK3DX04JlALmKODHIXsYDIg",
  },
  {
    title: "Kampus Keren",
    desc: "Website & Design System",
    tag: "UI/UX",
    year: "2023",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpjrF8PFyWaigo8nvYzQ8ukp8LMOIW0JNOwtd7g-AXb3zzrSKry5WH-6yZumFYdG82V9k-umD2tTuKJXcdgKlQ0Dwgo71c2Lv4g2ov1qFs4Wk1d0HCeHj6VCLvR9tZ0LJvub2ZO_0SwKEm-t4Qi_nxrunev0lHK_EbKQwAOTcQKCyD2nASgehkXK4zPDQ43wMcayY1Zpk8ES49xwCNcmeLq-hNco2AFBHvz23bTfJXdEQUjbfXRAERew",
  }
];

export default function Portfolio() {
  const targetRef = useRef(null);
  const trackRef = useRef(null);
  const [distance, setDistance] = useState(0);

  // Measure the track width exactly and calculate how much to slide
  useEffect(() => {
    const updateDistance = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const windowWidth = window.innerWidth;
        // Slide exactly enough so the right edge of the track hits the right edge of the screen
        setDistance(-(trackWidth - windowWidth));
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

  // Interpolate directly to the pixel distance
  const x = useTransform(scrollYProgress, [0, 1], [0, distance]);

  return (
    <section ref={targetRef} className="h-[350vh] relative border-b-4 border-stroke-bold bg-background-main" id="portfolio">
      <div className="sticky top-24 h-[calc(100vh-6rem)] flex flex-col overflow-hidden">
        {/* Title */}
        <div className="flex-none flex items-center justify-center py-8">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase text-center">
            <span className="bg-secondary-fixed px-6 py-2 border-4 border-stroke-bold neo-shadow inline-block -rotate-1">Bukti Nyata</span>
          </h2>
        </div>

        {/* Horizontal slider */}
        <div className="flex-grow flex items-center overflow-hidden pl-4 md:pl-12">
          <motion.div ref={trackRef} style={{ x }} className="flex gap-6 md:gap-[2.5vw] items-start will-change-transform w-max pr-4 md:pr-12">
            {projects.map((project, idx) => (
              <div key={idx} className="group cursor-pointer w-[70vw] sm:w-[45vw] lg:w-[30vw] flex-shrink-0">
                <div className="border-4 border-stroke-bold overflow-hidden neo-shadow mb-4 bg-surface h-[28vh] md:h-[38vh] relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={project.img}
                    alt={project.title}
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />
                  {/* Tag badge */}
                  <div className="absolute top-3 left-3 bg-secondary-fixed border-2 border-stroke-bold px-3 py-1 font-label-mono text-xs uppercase text-primary">
                    {project.tag}
                  </div>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-headline-md text-headline-md text-primary mb-1">{project.title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">{project.desc}</p>
                  </div>
                  <span className="font-label-mono text-xs text-on-surface-variant mt-1 flex-shrink-0">{project.year}</span>
                </div>
                <span className="font-label-mono text-label-mono uppercase text-primary border-b-2 border-primary group-hover:border-b-4 transition-all mt-3 inline-block">
                  Lihat Detail -&gt;
                </span>
              </div>
            ))}

            {/* View More Circle */}
            <div className="flex-shrink-0 flex items-start">
              <div className="h-[28vh] md:h-[38vh] flex items-center">
                <div className="group cursor-pointer w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border-4 border-stroke-bold neo-shadow bg-surface hover:bg-primary hover:scale-110 transition-all duration-300">
                  <span className="material-symbols-outlined text-2xl md:text-3xl text-primary group-hover:text-secondary-fixed group-hover:translate-x-0.5 transition-all">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
