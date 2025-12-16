const Footer = () => {
  return (
    <footer className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-serif text-2xl text-foreground">PM</span>
              <span className="font-serif text-2xl text-gradient-gold">SCHEMES</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              A Network Global initiative dedicated to creating awareness and 
              facilitating access to Prime Minister–led government schemes for 
              all eligible citizens.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Schemes Directory", "Eligibility Check", "Application Guide", "FAQs"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-foreground mb-6">
              Contact
            </h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>support@networkglobal.in</li>
              <li>1800-XXX-XXXX (Toll Free)</li>
              <li>Mon - Sat, 9:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            © 2024 Network Global. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
