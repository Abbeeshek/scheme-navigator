import { Award, Briefcase, Building, CreditCard } from "lucide-react";

const ecosystemLinks = [
  {
    icon: Award,
    title: "Certifications",
    description: "Professional credentials & skill development certificates",
  },
  {
    icon: Briefcase,
    title: "MSME Services",
    description: "Business registration, compliance & growth support",
  },
  {
    icon: Building,
    title: "Employment",
    description: "Job opportunities & career guidance services",
  },
  {
    icon: CreditCard,
    title: "Banking Inclusion",
    description: "Financial services & digital payment access",
  },
];

const EcosystemSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-foreground to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-foreground to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-primary mb-6">
            Network Integration
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            Part of a Larger Ecosystem
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            PM SCHEMES integrates seamlessly with Network Global services, 
            creating a unified pathway to opportunity and growth.
          </p>
        </div>

        {/* Ecosystem Links */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ecosystemLinks.map((link) => (
            <div
              key={link.title}
              className="group relative p-6 text-center border-t border-border hover:border-primary/30 transition-all duration-300"
            >
              <link.icon
                className="w-10 h-10 text-muted-foreground group-hover:text-primary mx-auto mb-4 transition-colors duration-300"
                strokeWidth={1}
              />
              <h3 className="font-serif text-lg text-foreground mb-2">
                {link.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {link.description}
              </p>
            </div>
          ))}
        </div>

        {/* Connection visual */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-primary/40" />
            <div className="w-24 h-px bg-gradient-to-r from-primary/40 to-transparent" />
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Connected Services
            </span>
            <div className="w-24 h-px bg-gradient-to-l from-primary/40 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-primary/40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
