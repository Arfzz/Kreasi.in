export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full z-[100] bg-background-main border-b-4 border-stroke-bold shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex justify-between items-center h-24 px-grid-margin max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <img alt="Kreasi.in Logo" className="h-12 w-12 border-2 border-stroke-bold bg-secondary-fixed object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWX0vlVh-EVhpEZOkubnFpmjnSL6EWmsomKrm8MjdumAIeH0-D5WtYzlOCflBtER8jzsiM3Gudnr6-0qMd3kuJk05Y6xsemX7-0zZ0tCYELCbcKDLltTlMYvxhqwnQjyFsBgBAxSOADxNkPUs228v_RO_v7PFaKxTRV5pO722OKMrWZXmeUGDcOF96xsOXOTG7DrAtfPvUAmzGJGh7HFit0XxcIa3nPRZe8lg0jrsMljaVP0HVzTV9gQ"/>
          <span className="font-headline-lg-mobile text-headline-lg-mobile font-black text-primary uppercase tracking-tighter">Kreasi.in</span>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a className="font-label-mono text-label-mono text-on-surface font-bold opacity-80 hover:text-primary hover:opacity-100 transition-colors" href="#services">Services</a>
          <a className="font-label-mono text-label-mono text-on-surface font-bold opacity-80 hover:text-primary hover:opacity-100 transition-colors" href="#about">About Us</a>
          <a className="font-label-mono text-label-mono text-on-surface font-bold opacity-80 hover:text-primary hover:opacity-100 transition-colors" href="#portfolio">Portfolio</a>
          <a className="font-label-mono text-label-mono text-on-surface font-bold opacity-80 hover:text-primary hover:opacity-100 transition-colors" href="#contact">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:inline-flex items-center justify-center bg-secondary-fixed text-primary font-button-text text-button-text border-4 border-stroke-bold px-6 py-3 neo-shadow neo-shadow-hover neo-shadow-active uppercase tracking-wider">
            Hire Us!
          </button>
          <button className="md:hidden p-2 border-4 border-stroke-bold bg-primary text-on-primary neo-shadow neo-shadow-hover neo-shadow-active">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
