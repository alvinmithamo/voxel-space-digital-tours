import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUp, Linkedin, Instagram } from "lucide-react";
// import logo from "../../assets/voxel-space-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="font-serif text-2xl text-background">
               {/* <img src={logo} alt="Voxel Space Logo" className="h-20 md:h-40 w-auto object-cover" /> */}
            Voxel Space
            </Link>
            <p className="text-background/60 text-sm mt-4 leading-relaxed">
              © {currentYear} Voxel Space Ltd. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-background/50 uppercase tracking-wider mb-4">
              Socials
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center gap-2 text-sm text-background/80 hover:text-background transition-colors">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-sm text-background/80 hover:text-background transition-colors">
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-background/50 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Spaces", href: "/#spaces" },
                { label: "Process", href: "/#process" },
                { label: "Contact", href: "/#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-sm text-background/80 hover:text-background transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-background/50 uppercase tracking-wider mb-4">
              Contact Details
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+254700000000" className="flex items-center gap-2 text-sm text-background/80 hover:text-background transition-colors">
                  <Phone className="w-4 h-4 shrink-0" />
                  +254 742 742 872
                </a>
              </li>
              <li>
                <a href="mailto:info@voxelspace.co.ke" className="flex items-center gap-2 text-sm text-background/80 hover:text-background transition-colors">
                  <Mail className="w-4 h-4 shrink-0" />
                  info@voxelspaceke.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-background/80">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Based in Nairobi, Kenya — serving spaces across East Africa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-6">
            <Link to="#" className="text-sm text-background/60 hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm text-background/60 hover:text-background transition-colors">
              Terms of Service
            </Link>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
