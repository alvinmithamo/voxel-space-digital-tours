import { motion } from "framer-motion";
import { Box, Video, Cloud, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Box,
    title: "Virtual Tours",
    description:
      "Immersive 360° panoramas with interactive hotspots, detailed floor plans, and precise measurements. Let clients explore every corner of your property remotely.",
    features: ["360° Panoramas", "Interactive Hotspots", "Floor Plans", "Measurements"],
  },
  {
    icon: Video,
    title: "360° Videography",
    description:
      "Dynamic video content that brings properties to life. Perfect for promotional campaigns, social media, and marketing materials that capture attention.",
    features: ["Cinematic Quality", "Social Media Ready", "Brand Integration", "Fast Delivery"],
  },
  {
    icon: Cloud,
    title: "Hosting & Integration",
    description:
      "Secure self-hosting solutions with seamless website and CRM integration. Full control over your digital assets with enterprise-grade security.",
    features: ["Custom Hosting", "Website Embeds", "CRM Integration", "Analytics"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 geometric-grid opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block font-display text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Complete Digital Twin Solutions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From capture to hosting, we provide end-to-end solutions that transform 
            your commercial properties into powerful marketing assets.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-card-gradient rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <a
                href="#"
                className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div className="absolute top-4 right-4 w-16 h-16 border border-primary/10 rounded-full" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
