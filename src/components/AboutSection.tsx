const AboutSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section indicator */}
          <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-primary mb-6">
            About the Platform
          </span>

          {/* Heading */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8 leading-tight">
            Bridging Citizens to
            <br />
            <span className="text-gradient-gold">Government Initiatives</span>
          </h2>

          {/* Description */}
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            PM SCHEMES is a dedicated platform within the Network Global ecosystem 
            that creates awareness and provides comprehensive guidance on Prime 
            Minister–led government schemes. Our mission is to ensure every eligible 
            citizen understands and can access the benefits designed to uplift communities 
            and drive inclusive national growth.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
            <div>
              <span className="block font-serif text-3xl md:text-4xl text-gradient-gold mb-2">100+</span>
              <span className="text-sm text-muted-foreground tracking-wide">Schemes Covered</span>
            </div>
            <div>
              <span className="block font-serif text-3xl md:text-4xl text-gradient-gold mb-2">Pan India</span>
              <span className="text-sm text-muted-foreground tracking-wide">Coverage</span>
            </div>
            <div>
              <span className="block font-serif text-3xl md:text-4xl text-gradient-gold mb-2">24/7</span>
              <span className="text-sm text-muted-foreground tracking-wide">Support Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
