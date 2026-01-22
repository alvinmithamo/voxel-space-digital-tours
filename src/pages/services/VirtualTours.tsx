import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Box, Check, ArrowRight, Eye, Map, Ruler, Smartphone, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const features = [
  {
    icon: Eye,
    title: "360° Panoramic Views",
    description: "Ultra-high resolution panoramic images that capture every detail of your space.",
  },
  {
    icon: Map,
    title: "Interactive Navigation",
    description: "Intuitive hotspots and navigation that guide visitors through your property.",
  },
  {
    icon: Ruler,
    title: "Precise Measurements",
    description: "Accurate room dimensions and floor plans for detailed property assessment.",
  },
  {
    icon: Smartphone,
    title: "Mobile & VR Ready",
    description: "Optimized for all devices including mobile phones and VR headsets.",
  },
  {
    icon: Box,
    title: "Dollhouse View",
    description: "3D dollhouse visualization showing the complete property layout.",
  },
  {
    icon: Palette,
    title: "Custom Branding",
    description: "Branded interface with your logo, colors, and contact information.",
  },
];

const pricing = [
  {
    name: "Basic Tour",
    price: "KES 50,000",
    description: "Perfect for small offices and retail spaces",
    features: ["Up to 10 panoramic shots", "Basic floor plan", "Web hosting (1 year)", "Mobile compatible"],
  },
  {
    name: "Professional",
    price: "KES 100,000",
    description: "Ideal for medium commercial properties",
    features: ["Up to 25 panoramic shots", "Detailed floor plan with measurements", "Dollhouse view", "Custom branding", "Analytics dashboard", "Web hosting (1 year)"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "KES 200,000+",
    description: "For large properties and portfolios",
    features: ["Unlimited panoramic shots", "Multiple buildings/floors", "Premium hosting", "API integration", "Priority support", "Custom development"],
  },
];

const VirtualTours = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 geometric-grid opacity-20" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <Link to="/services" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Back to Services
              </Link>
              <div className="w-20 h-20 rounded-2xl bg-accent-gradient flex items-center justify-center mx-auto mb-6">
                <Box className="w-10 h-10 text-primary-foreground" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Virtual Tours
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Immersive 360° experiences that let clients explore your properties from anywhere in the world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                What's Included
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background rounded-xl p-6 border border-border hover:border-primary/30 transition-all"
                >
                  <feature.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Pricing Plans
              </h2>
              <p className="text-muted-foreground">Choose the package that fits your needs</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`rounded-2xl p-8 border ${
                    plan.popular
                      ? "bg-card-gradient border-primary shadow-glow"
                      : "bg-card border-border"
                  }`}
                >
                  {plan.popular && (
                    <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary mb-4">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="font-display text-3xl font-bold text-gradient mb-6">{plan.price}</div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant={plan.popular ? "hero" : "heroOutline"} className="w-full">
                      Get Started
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VirtualTours;
