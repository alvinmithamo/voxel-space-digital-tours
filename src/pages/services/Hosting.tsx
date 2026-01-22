import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cloud, Check, ArrowRight, Globe, Code, BarChart, Shield, Zap, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const features = [
  {
    icon: Globe,
    title: "Custom Domain",
    description: "Host tours on your own domain for seamless brand experience.",
  },
  {
    icon: Code,
    title: "Easy Embedding",
    description: "Simple iframe embeds for your website, CRM, or marketing platforms.",
  },
  {
    icon: BarChart,
    title: "Analytics Dashboard",
    description: "Track views, engagement, and visitor behavior with detailed reports.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SSL encryption, secure hosting, and GDPR-compliant data handling.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description: "CDN-powered delivery for lightning-fast loading worldwide.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Priority technical support and assistance when you need it.",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "KES 15,000/mo",
    description: "For small portfolios",
    features: ["Up to 5 tours", "Basic analytics", "Standard support", "Website embed", "SSL certificate"],
  },
  {
    name: "Business",
    price: "KES 35,000/mo",
    description: "For growing businesses",
    features: ["Up to 20 tours", "Advanced analytics", "Priority support", "Custom domain", "CRM integration", "API access"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: ["Unlimited tours", "White-label solution", "Dedicated support", "Custom integrations", "SLA guarantee", "On-premise option"],
  },
];

const Hosting = () => {
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
                <Cloud className="w-10 h-10 text-primary-foreground" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Hosting & Integration
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Secure, scalable hosting solutions with seamless integration into your existing systems.
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
                Platform Features
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
                Hosting Plans
              </h2>
              <p className="text-muted-foreground">Flexible plans that scale with your needs</p>
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

export default Hosting;
