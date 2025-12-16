import { Lightbulb, Compass, Users } from "lucide-react";

const focusAreas = [
  {
    icon: Lightbulb,
    title: "Scheme Awareness",
    description:
      "Comprehensive information on all Prime Minister–led government schemes, eligibility criteria, and application processes made accessible to every citizen.",
  },
  {
    icon: Compass,
    title: "Guidance & Facilitation",
    description:
      "Step-by-step support and documentation assistance to help citizens navigate the application process and successfully access scheme benefits.",
  },
  {
    icon: Users,
    title: "Community Inclusion",
    description:
      "Targeted outreach to underserved communities ensuring no eligible beneficiary is left behind in accessing government welfare programs.",
  },
];

const FocusAreasSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-primary mb-6">
            Our Focus
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            Key Focus Areas
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {focusAreas.map((area, index) => (
            <div
              key={area.title}
              className="group relative p-8 lg:p-10 rounded-sm bg-card border border-border hover:border-gold-subtle transition-all duration-500 glow-gold hover:glow-gold"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-sm bg-secondary mb-6">
                <area.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-4 group-hover:text-gradient-gold transition-colors duration-300">
                {area.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreasSection;
