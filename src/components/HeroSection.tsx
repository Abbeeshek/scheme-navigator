import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Gold accent line */}
        <div className="w-16 h-px bg-primary mx-auto mb-8 opacity-60 animate-fade-in" />
        
        {/* Main Title */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-6 animate-fade-up opacity-0">
          <span className="text-foreground">PM</span>
          <span className="text-gradient-gold ml-4">SCHEMES</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto mb-12 animate-fade-up opacity-0 animation-delay-200">
          Awareness. Access. Inclusive Growth for All.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-up opacity-0 animation-delay-400">
          <button className="group relative px-8 py-4 border border-gold-subtle rounded-sm bg-transparent hover:bg-primary/5 transition-all duration-500">
            <span className="text-sm font-medium tracking-widest uppercase text-foreground/90">
              Explore Schemes
            </span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-primary group-hover:w-full transition-all duration-500" />
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 animation-delay-600">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-muted-foreground/30 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
