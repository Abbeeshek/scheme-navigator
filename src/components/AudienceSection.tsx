import { GraduationCap, Building2, Wheat, Briefcase, UserCheck } from "lucide-react";

const audiences = [
  { icon: GraduationCap, label: "Youth & Students" },
  { icon: Building2, label: "MSMEs" },
  { icon: Wheat, label: "Farmers" },
  { icon: Briefcase, label: "Unorganized Workers" },
  { icon: UserCheck, label: "Network Members" },
];

const AudienceSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-primary mb-6">
              Who We Serve
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-tight">
              Empowering Every
              <br />
              <span className="text-gradient-gold">Eligible Citizen</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              From aspiring entrepreneurs to agricultural communities, PM SCHEMES 
              ensures that government benefits reach those who need them most. 
              Our platform is designed to serve diverse segments of Indian society, 
              removing barriers to access and enabling inclusive growth.
            </p>

            {/* CTA */}
            <button className="text-sm font-medium tracking-widest uppercase text-primary hover:text-foreground transition-colors duration-300 flex items-center gap-2">
              Check Your Eligibility
              <span className="w-6 h-px bg-primary" />
            </button>
          </div>

          {/* Audience Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {audiences.map((audience, index) => (
              <div
                key={audience.label}
                className={`group p-6 rounded-sm bg-secondary/50 border border-border hover:border-gold-subtle transition-all duration-300 ${
                  index === 4 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <audience.icon 
                  className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300 mb-4" 
                  strokeWidth={1.5} 
                />
                <span className="text-sm text-foreground/80 font-medium">
                  {audience.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
