import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
   { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              {/* Geometric Cube Logo */}
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <defs>
                  <linearGradient id="cubeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(210 70% 55%)" />
                    <stop offset="100%" stopColor="hsl(180 50% 45%)" />
                  </linearGradient>
                </defs>
                {/* Wireframe Cube */}
                <path
                  d="M20 4 L36 12 L36 28 L20 36 L4 28 L4 12 Z"
                  fill="none"
                  stroke="url(#cubeGradient)"
                  strokeWidth="1.5"
                />
                <path
                  d="M4 12 L20 20 L36 12"
                  fill="none"
                  stroke="url(#cubeGradient)"
                  strokeWidth="1.5"
                />
                <path
                  d="M20 20 L20 36"
                  fill="none"
                  stroke="url(#cubeGradient)"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-wider text-foreground">
                VOXEL SPACE
              </span>
              <span className="text-[10px] text-muted-foreground tracking-widest uppercase hidden sm:block">
                Commercial Property Digital Twins
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-display text-sm font-medium transition-colors tracking-wide uppercase ${
                  location.pathname === link.href || location.pathname.startsWith(link.href + "/")
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button variant="hero" size="default">
                Get a Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-md border-t border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-display text-base font-medium transition-colors tracking-wide uppercase py-2 ${
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact">
                <Button variant="hero" size="lg" className="mt-4 w-full">
                  Get a Quote
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
