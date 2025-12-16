import { Shield, FileCheck, Scale } from "lucide-react";

const principles = [
  {
    icon: Shield,
    title: "Transparency",
    description: "Clear, accurate information with full disclosure of processes and requirements.",
  },
  {
    icon: FileCheck,
    title: "Official Channels",
    description: "All guidance aligned with government portals and authorized documentation.",
  },
  {
    icon: Scale,
    title: "Ethical Facilitation",
    description: "No hidden fees or unauthorized intermediaries in the application process.",
  },
];

const ResponsibleSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Principles */}
          <div className="order-2 lg:order-1 space-y-8">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className="flex gap-6 p-6 rounded-sm bg-background/50 border border-border"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-sm bg-secondary">
                  <principle.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-primary mb-6">
              Our Commitment
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-tight">
              A Responsible
              <br />
              <span className="text-gradient-gold">Approach</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Trust is the foundation of our platform. We operate with complete 
              transparency, ensuring all information and guidance strictly adheres 
              to official government channels. Our facilitation process is ethical, 
              accessible, and designed to protect citizen interests at every step.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsibleSection;
