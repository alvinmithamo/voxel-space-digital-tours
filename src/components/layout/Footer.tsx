import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <defs>
                    <linearGradient id="footerCubeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(210 70% 55%)" />
                      <stop offset="100%" stopColor="hsl(180 50% 45%)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M20 4 L36 12 L36 28 L20 36 L4 28 L4 12 Z"
                    fill="none"
                    stroke="url(#footerCubeGradient)"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M4 12 L20 20 L36 12"
                    fill="none"
                    stroke="url(#footerCubeGradient)"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M20 20 L20 36"
                    fill="none"
                    stroke="url(#footerCubeGradient)"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div>
                <span className="font-display font-bold text-lg text-foreground">
                  VOXEL SPACE
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Transforming commercial properties into interactive digital assets. 
              Empowering businesses across Kenya and East Africa.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Facebook, href: "#" },
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-9 h-9 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors group"
                >
                  <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6 uppercase tracking-wider text-sm">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Virtual Tours", href: "/services/virtual-tours" },
                { label: "360° Videography", href: "/services/videography" },
                { label: "Hosting Solutions", href: "/services/hosting" },
                { label: "CRM Integration", href: "/services/hosting" },
                { label: "Custom Development", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6 uppercase tracking-wider text-sm">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Blog", href: "/blog" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6 uppercase tracking-wider text-sm">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Westlands, Nairobi<br />Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+254700000000" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +254 700 000 000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:info@voxelspace.co.ke" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@voxelspace.co.ke
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Voxel Space Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
