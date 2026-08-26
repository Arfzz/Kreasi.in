export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary w-full border-t-4 border-stroke-bold">
      <div className="flex flex-col md:flex-row justify-between items-center py-12 px-grid-margin gap-gutter max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="font-headline-md text-headline-md font-black text-secondary-fixed">KREASI.IN</span>
          <p className="font-body-lg text-body-lg text-center md:text-left">© 2026 Kreasi.in Agency. Gak pake ribet, semua diberesin.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a className="font-label-mono text-label-mono text-on-primary opacity-90 hover:text-secondary-fixed hover:underline hover:scale-105 transition-all" href="#">Instagram</a>
          <a className="font-label-mono text-label-mono text-on-primary opacity-90 hover:text-secondary-fixed hover:underline hover:scale-105 transition-all" href="#">LinkedIn</a>
          <a className="font-label-mono text-label-mono text-on-primary opacity-90 hover:text-secondary-fixed hover:underline hover:scale-105 transition-all" href="#">Dribbble</a>
          <a className="font-label-mono text-label-mono text-on-primary opacity-90 hover:text-secondary-fixed hover:underline hover:scale-105 transition-all" href="#">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}
