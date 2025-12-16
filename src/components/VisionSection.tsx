const VisionSection = () => {
  return (
    <section className="py-32 lg:py-40 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote mark */}
          <span className="block font-serif text-8xl text-primary/20 mb-8">"</span>

          {/* Vision statement */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8 leading-tight">
            Every citizen deserves the opportunity to thrive. 
            <span className="text-gradient-gold block mt-4">
              We exist to make that access universal.
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
            Our vision is an India where government benefits reach every eligible 
            citizen, where no community is left behind, and where inclusive growth 
            is not just a promise—but a reality.
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-primary/30" />
            <span className="text-xs tracking-[0.3em] uppercase text-primary">
              PM Schemes
            </span>
            <div className="w-12 h-px bg-primary/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
