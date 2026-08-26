import { motion } from 'framer-motion';
import DotField from '../ui/DotField';
import Magnetic from '../ui/Magnetic';
import RotatingText from '../ui/RotatingText';
import TextType from '../ui/TextType';

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-6rem)] flex flex-col justify-center items-center text-center gap-8 relative border-b-4 border-stroke-bold">
      <div className="absolute inset-0 -z-10">
        <DotField
          dotRadius={2}
          dotSpacing={16}
          bulgeStrength={67}
          glowRadius={200}
          sparkle={false}
          waveAmplitude={0}
          gradientFrom="#330060"
          gradientTo="#4b1b7d"
          glowColor="transparent"
        />
      </div>
      <Magnetic>
        <motion.div
          animate={{
            y: [0, -6, 4, -2, 0],
            x: [0, 4, -4, 2, 0],
            rotate: [0, 2, -2, 1, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="inline-block"
        >
          <div className="inline-block border-4 border-stroke-bold bg-primary text-on-primary px-4 py-2 font-label-mono text-label-mono neo-shadow -rotate-2 mt-8 md:mt-0 cursor-pointer hover:bg-secondary-fixed hover:text-primary transition-colors">
            Agensi Anti-Mainstream
          </div>
        </motion.div>
      </Magnetic>
      <h1 className="font-display-xl text-headline-lg-mobile md:text-display-xl text-primary max-w-4xl mx-auto flex flex-col md:inline-block items-center justify-center">
        Bersama Kreasi.in,
        <Magnetic className="inline-block md:ml-4 mt-4 md:mt-0">
          <span className="bg-secondary-fixed px-4 border-4 border-stroke-bold inline-flex items-center gap-4 neo-shadow rotate-1 cursor-pointer hover:bg-primary hover:text-secondary-fixed transition-colors">
            Semuanya
            <RotatingText
              texts={['Diberesin', 'Dibenerin', 'Dikerjain']}
              mainClassName="inline-flex"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2500}
            />
          </span>
        </Magnetic>
      </h1>
      <div className="max-w-2xl mx-auto leading-relaxed">
        <TextType
          text="Agensi kreatif buat lo yang bosen sama yang biasa-biasa aja. Desain & Code? Kita sikat! No ribet, sabi banget."
          as="p"
          className="font-body-lg text-body-lg text-on-surface"
          typingSpeed={40}
          loop={true}
          pauseDuration={2500}
          showCursor={true}
          cursorCharacter="|"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-6 mt-8">
        <button className="bg-secondary-fixed text-primary font-button-text text-button-text border-4 border-stroke-bold px-10 py-5 neo-shadow neo-shadow-hover neo-shadow-active text-lg uppercase tracking-wider flex items-center justify-center gap-2">
          Mulai Kolaborasi! <span className="material-symbols-outlined">rocket_launch</span>
        </button>
        <button className="bg-surface text-primary font-button-text text-button-text border-4 border-stroke-bold px-10 py-5 neo-shadow neo-shadow-hover neo-shadow-active text-lg uppercase tracking-wider flex items-center justify-center gap-2">
          Liat Portofolio <span className="material-symbols-outlined">arrow_downward</span>
        </button>
      </div>
    </section>
  );
}
