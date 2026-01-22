import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Box, Video, Cloud, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const services = [
  {
    icon: Box,
    title: "Virtual Tours",
    description: "Immersive 360° panoramas with interactive hotspots, detailed floor plans, and precise measurements. Let clients explore every corner of your property remotely.",
    features: [
      "High-resolution 360° panoramic images",
      "Interactive hotspots and navigation",
      "Detailed floor plans with measurements",
      "Dollhouse and floorplan views",
      "Mobile and VR compatible",
      "Branded tour interface",
    ],
    link: "/services/virtual-tours",
    pricing: "From KES 50,000",
  },
  {
    icon: Video,
    title: "360° Videography",
    description: "Dynamic video content that brings properties to life. Perfect for promotional campaigns, social media, and marketing materials that capture attention.",
    features: [
      "Cinematic 360° video capture",
      "Professional editing and color grading",
      "Social media optimized formats",
      "Brand integration and overlays",
      "Background music and voiceover",
      "Fast turnaround delivery",
    ],
    link: "/services/videography",
    pricing: "From KES 80,000",
  },
  {
    icon: Cloud,
    title: "Hosting & Integration",
    description: "Secure self-hosting solutions with seamless website and CRM integration. Full control over your digital assets with enterprise-grade security.",
    features: [
      "Custom domain hosting",
      "Website embed integration",
      "CRM system connectivity",
      "Analytics and reporting dashboard",
      "White-label solutions",
      "API access for developers",
    ],
    link: "/services/hosting",
    pricing: "From KES 15,000/month",
  },
];

const Services = () => {
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
              <span className="inline-block font-display text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4">
                Our Services
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Complete <span className="text-gradient">Digital Twin</span> Solutions
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From capture to hosting, we provide end-to-end solutions that transform 
                your commercial properties into powerful marketing assets.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-16">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <div className="w-16 h-16 rounded-2xl bg-accent-gradient flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="mb-6">
                      <span className="font-display font-bold text-2xl text-gradient">
                        {service.pricing}
                      </span>
                    </div>
                    <Link to={service.link}>
                      <Button variant="hero" size="lg" className="group">
                        Learn More
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                  <div className={`bg-background rounded-2xl p-8 border border-border ${index % 2 === 1 ? "md:order-1" : ""}`}>
                    <h3 className="font-display font-semibold text-foreground mb-6">
                      What's Included
                    </h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Not Sure Which Service You Need?
              </h2>
              <p className="text-muted-foreground mb-8">
                Our team will help you choose the right solution for your property and budget.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Get a Free Consultation
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
