import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Video, Check, ArrowRight, Film, Music, Share2, Palette, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const features = [
  {
    icon: Film,
    title: "Cinematic Quality",
    description: "Professional-grade 360° video capture with smooth motion and stunning clarity.",
  },
  {
    icon: Sparkles,
    title: "Expert Editing",
    description: "Color grading, transitions, and post-production by experienced editors.",
  },
  {
    icon: Music,
    title: "Audio Enhancement",
    description: "Background music, voiceover, and audio mixing for compelling narratives.",
  },
  {
    icon: Share2,
    title: "Social Media Ready",
    description: "Optimized formats for YouTube, Instagram, LinkedIn, and other platforms.",
  },
  {
    icon: Palette,
    title: "Brand Integration",
    description: "Custom overlays, logos, and brand elements seamlessly integrated.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Quick delivery without compromising on quality standards.",
  },
];

const pricing = [
  {
    name: "Promotional",
    price: "KES 80,000",
    description: "Short promotional video for marketing",
    features: ["Up to 2 minutes", "Basic editing", "Background music", "1 revision round", "Social media formats"],
  },
  {
    name: "Premium",
    price: "KES 150,000",
    description: "Comprehensive property showcase",
    features: ["Up to 5 minutes", "Professional editing", "Voiceover option", "Brand integration", "3 revision rounds", "All formats"],
    popular: true,
  },
  {
    name: "Documentary",
    price: "KES 300,000+",
    description: "Full property documentary experience",
    features: ["10+ minutes", "Cinematic production", "Professional voiceover", "Drone footage", "Unlimited revisions", "Raw footage included"],
  },
];

const Videography = () => {
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
                <Video className="w-10 h-10 text-primary-foreground" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                360° Videography
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dynamic video content that brings your properties to life and captivates your audience.
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

export default Videography;
