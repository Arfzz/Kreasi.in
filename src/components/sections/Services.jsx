export default function Services() {
  return (
    <section className="py-section-padding border-b-4 border-stroke-bold mb-section-padding" id="services">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase inline-block border-b-4 border-stroke-bold pb-2">Layanan Kita</h2>
          <p className="font-body-lg text-body-lg text-on-surface mt-4">Ngapain pusing? Serahin aja ke ahlinya.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* Service 1 */}
        <div className="group h-full bg-surface hover:bg-primary border-4 border-stroke-bold p-8 neo-shadow flex flex-col gap-6 hover:-translate-y-6 hover:scale-105 hover:-rotate-2 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
          <div className="w-16 h-16 bg-secondary-fixed border-4 border-stroke-bold rounded-full flex items-center justify-center neo-shadow">
            <span className="material-symbols-outlined text-3xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>palette</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-primary group-hover:text-secondary-fixed transition-colors">Design</h3>
          <p className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-primary flex-grow transition-colors">
            UI/UX yang gak cuma cakep diliat, tapi juga enak dipake. Branding yang bikin brand lo stand out dari yang lain.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="border-2 border-stroke-bold px-3 py-1 font-label-mono text-xs uppercase bg-surface group-hover:bg-secondary-fixed group-hover:text-primary transition-colors">UI/UX</span>
            <span className="border-2 border-stroke-bold px-3 py-1 font-label-mono text-xs uppercase bg-surface group-hover:bg-secondary-fixed group-hover:text-primary transition-colors">Branding</span>
          </div>
        </div>
        {/* Service 2 */}
        <div className="group h-full bg-surface hover:bg-primary border-4 border-stroke-bold p-8 neo-shadow flex flex-col gap-6 hover:-translate-y-6 hover:scale-105 hover:-rotate-2 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
          <div className="w-16 h-16 bg-secondary-fixed border-4 border-stroke-bold rounded-full flex items-center justify-center neo-shadow">
            <span className="material-symbols-outlined text-3xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>code</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-primary group-hover:text-secondary-fixed transition-colors">Web Dev</h3>
          <p className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-primary flex-grow transition-colors">
            Website kenceng, SEO friendly, dan pastinya scalable. Dibangun pake teknologi kekinian biar gak gampang basi. Gaspol!
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="border-2 border-stroke-bold px-3 py-1 font-label-mono text-xs uppercase bg-surface group-hover:bg-secondary-fixed group-hover:text-primary transition-colors">React</span>
            <span className="border-2 border-stroke-bold px-3 py-1 font-label-mono text-xs uppercase bg-surface group-hover:bg-secondary-fixed group-hover:text-primary transition-colors">Express.js</span>
          </div>
        </div>
        {/* Service 3 */}
        <div className="group h-full bg-surface hover:bg-primary border-4 border-stroke-bold p-8 neo-shadow flex flex-col gap-6 hover:-translate-y-6 hover:scale-105 hover:-rotate-2 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
          <div className="w-16 h-16 bg-secondary-fixed border-4 border-stroke-bold rounded-full flex items-center justify-center neo-shadow">
            <span className="material-symbols-outlined text-3xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>smartphone</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-primary group-hover:text-secondary-fixed transition-colors">Mobile App</h3>
          <p className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-primary flex-grow transition-colors">
            Bikin aplikasi di genggaman tangan user lo. Native atau cross-platform, kita sikat miring!
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="border-2 border-stroke-bold px-3 py-1 font-label-mono text-xs uppercase bg-surface group-hover:bg-secondary-fixed group-hover:text-primary transition-colors">iOS</span>
            <span className="border-2 border-stroke-bold px-3 py-1 font-label-mono text-xs uppercase bg-surface group-hover:bg-secondary-fixed group-hover:text-primary transition-colors">Android</span>
          </div>
        </div>
      </div>
    </section>
  );
}
