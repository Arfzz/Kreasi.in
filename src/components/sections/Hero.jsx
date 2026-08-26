import { motion } from 'framer-motion';
import DotField from '../ui/DotField';
import Magnetic from '../ui/Magnetic';
import RotatingText from '../ui/RotatingText';
import TextType from '../ui/TextType';

// Staggered entrance animation variants
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stats = [
  { value: '6+', label: 'Projects Done' },
  { value: '8+', label: 'Months Running' },
  { value: '100%', label: 'Gak Monoton' },
];

export default function Hero() {
  return (
    <section
      className="min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center text-center relative border-b-4 border-stroke-bold overflow-hidden"
      id="hero"
    >
      {/* Animated dot field background */}
      <div className="absolute inset-0 -z-10">
        <DotField
          dotRadius={2}
          dotSpacing={22}
          bulgeStrength={55}
          glowRadius={180}
          sparkle={false}
          waveAmplitude={0}
          gradientFrom="rgba(51, 0, 96, 0.25)"
          gradientTo="rgba(116, 72, 168, 0.15)"
          glowColor="transparent"
        />
      </div>

      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-16 h-16 border-b-4 border-r-4 border-stroke-bold bg-secondary-fixed" />
      <div className="absolute top-0 right-0 w-16 h-16 border-b-4 border-l-4 border-stroke-bold bg-primary" />
      <div className="absolute bottom-0 left-0 w-12 h-12 border-t-4 border-r-4 border-stroke-bold bg-primary" />
      <div className="absolute bottom-0 right-0 w-12 h-12 border-t-4 border-l-4 border-stroke-bold bg-secondary-fixed" />

      {/* Main content — staggered in */}
      <motion.div
        className="flex flex-col items-center gap-6 px-4 pt-12 pb-6"
        variants={container}
        initial="hidden"
        animate="show"
      >

        {/* Floating badge */}
        <motion.div variants={item}>
          <Magnetic>
            <motion.div
              animate={{ y: [0, -6, 4, -2, 0], x: [0, 4, -4, 2, 0], rotate: [0, 2, -2, 1, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-block"
            >
              <div className="inline-block border-4 border-stroke-bold bg-primary text-on-primary px-4 py-2 font-label-mono text-label-mono neo-shadow -rotate-2 cursor-pointer hover:bg-secondary-fixed hover:text-primary transition-colors">
                Agensi Anti-Mainstream
              </div>
            </motion.div>
          </Magnetic>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="font-display-xl text-headline-lg-mobile md:text-display-xl text-primary max-w-4xl mx-auto flex flex-col md:inline-block items-center justify-center"
        >
          Bersama Kreasi.in,
          <Magnetic className="inline-block md:ml-4 mt-4 md:mt-0">
            <span className="bg-secondary-fixed px-4 border-4 border-stroke-bold inline-flex items-center gap-4 neo-shadow rotate-1 cursor-pointer hover:bg-primary hover:text-secondary-fixed transition-colors">
              Semuanya
              <RotatingText
                texts={['Diberesin', 'Dibenerin', 'Dikerjain']}
                mainClassName="inline-flex"
                staggerFrom="last"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={2500}
              />
            </span>
          </Magnetic>
        </motion.h1>

        {/* Typewriter description */}
        <motion.div variants={item} className="max-w-xl mx-auto leading-relaxed">
          <TextType
            text="Agensi kreatif buat lo yang bosen sama yang biasa-biasa aja. Desain & Code? Kita sikat! No ribet, sabi banget."
            as="p"
            className="font-body-lg text-body-lg text-on-surface-variant"
            typingSpeed={38}
            loop={true}
            pauseDuration={2500}
            showCursor={true}
            cursorCharacter="|"
          />
        </motion.div>

        {/* CTA buttons */}
        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mt-2">
          <a
            href="#contact"
            className="bg-secondary-fixed text-primary font-button-text text-button-text border-4 border-stroke-bold px-10 py-5 neo-shadow neo-shadow-hover neo-shadow-active text-lg uppercase tracking-wider flex items-center justify-center gap-2"
          >
            Mulai Kolaborasi! <span className="material-symbols-outlined">rocket_launch</span>
          </a>
          <a
            href="#portfolio"
            className="bg-surface text-primary font-button-text text-button-text border-4 border-stroke-bold px-10 py-5 neo-shadow neo-shadow-hover neo-shadow-active text-lg uppercase tracking-wider flex items-center justify-center gap-2"
          >
            Liat Portfolio <span className="material-symbols-outlined">arrow_downward</span>
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-0 mt-4 border-4 border-stroke-bold overflow-hidden neo-shadow"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="flex flex-col items-center px-8 py-4"
              style={{
                background: i === 1 ? '#330060' : i === 0 ? '#F5D60C' : '#f9f9f9',
                borderRight: i < stats.length - 1 ? '4px solid #000' : 'none',
              }}
            >
              <span
                className="font-headline-md font-black leading-none"
                style={{
                  fontSize: '28px',
                  color: i === 1 ? '#F5D60C' : '#330060',
                }}
              >
                {s.value}
              </span>
              <span
                className="font-label-mono text-xs uppercase tracking-widest mt-1"
                style={{ color: i === 1 ? '#ffffff' : '#4b4451' }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <span className="font-label-mono text-xs uppercase tracking-widest text-on-surface-variant opacity-50">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-6 h-6 border-4 border-stroke-bold flex items-center justify-center" style={{ background: '#F5D60C' }}>
            <span className="material-symbols-outlined text-sm text-primary" style={{ fontSize: '14px' }}>arrow_downward</span>
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
}
