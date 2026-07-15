import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-secondary/50 rounded-3xl p-8 md:p-12 lg:p-16 border border-border relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-center mb-10">
                <span className="inline-block font-sans text-sm font-semibold tracking-wider uppercase text-foreground/60 mb-4">
                  Ready to Transform?
                </span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                  Let's Create Your{" "}
                  <span className="italic">Digital Twin</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Get a free consultation and quote for your property. Our team will 
                  guide you through the entire process from capture to deployment.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Button
                  className="rounded-full bg-foreground text-background hover:bg-foreground/90 font-sans normal-case tracking-normal group w-full sm:w-auto"
                >
                  Get a Free Quote
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-border font-sans normal-case tracking-normal w-full sm:w-auto"
                >
                  Schedule a Call
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
                <a
                  href="tel:+254700000000"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +254 700 000 000
                </a>
                <a
                  href="mailto:info@voxelspace.co.ke"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@voxelspace.co.ke
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
