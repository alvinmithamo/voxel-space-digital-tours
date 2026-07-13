import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe, BadgeCheck, Zap, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/home2.jpg";

const trustBadges = [
  { icon: Globe, label: "Browser-native", sublabel: "No app, no headset" },
  { icon: BadgeCheck, label: "Fixed-price projects", sublabel: "No surprises" },
  { icon: Zap, label: "Single-day capture", sublabel: "For most spaces" },
  { icon: Code, label: "Embeds anywhere", sublabel: "One line of HTML" },
];

const HeroSection = () => {
  const [viewerLoaded, setViewerLoaded] = useState(false);

  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-eyebrow mb-6 justify-center"
          >
            WELCOME TO OUR SPACE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] mb-6"
          >
            Don't show them the room.
            <br />
            <span className="italic">Let them live in it.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subheading max-w-2xl mx-auto mb-8"
          >
            We give our customers the confidence to choose us. We let you step inside and explore
            spaces on any device before you book, with no apps, no headsets, and zero friction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Button
              asChild
              className="rounded-full bg-foreground text-background hover:bg-foreground/90 font-sans normal-case tracking-normal px-6 h-11"
            >
              <a href="#spaces">
                Explore Spaces
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-border font-sans normal-case tracking-normal px-6 h-11"
            >
              <a href="#contact">Book a Briefing</a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden border border-border bg-card aspect-[16/9] md:aspect-[2/1]"
        >
          {!viewerLoaded && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-muted/50">
              <p className="text-sm text-muted-foreground">Loading space...</p>
            </div>
          )}
          <img
            src={heroImg}
            alt="Immersive 3D property walkthrough preview"
            className={`w-full h-full object-cover transition-opacity duration-700 ${viewerLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setViewerLoaded(true)}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto mt-12"
        >
          {trustBadges.map((badge) => (
            <div key={badge.label} className="text-center">
              <badge.icon className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm font-medium text-foreground">{badge.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{badge.sublabel}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
