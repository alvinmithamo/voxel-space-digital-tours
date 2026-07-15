import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
} from "@/components/ui/dialog";
import home1 from "@/assets/home1.jpg";
import home2 from "@/assets/home2.jpg";
import home3 from "@/assets/home3.jpg";

const projects = [
  {
    title: "Studio Apartment Tour",
    category: "Demo",
    description:
      "Experience our cutting-edge 3D virtual tour technology. Click to explore this immersive walkthrough demo.",
    image: home1,
    tourLabel: "360° Immersive Tour",
    is3DTour: true,
    tourUrl: "https://kuula.co/share/LYcNk?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1",
  },
  {
    title: "Westlands Business Park",
    category: "Commercial",
    description:
      "A full digital twin covering the lobby and office floors, giving tenants an immersive walkthrough before stepping foot on site.",
    image: home2,
    tourLabel: "360° Immersive Tour",
  },
  {
    title: "Karen Garden Residence",
    category: "Real Estate",
    description:
      "A fully immersive digital walkthrough inside a residential property, letting buyers explore the layout before visiting.",
    image: home3,
    tourLabel: "360° Immersive Tour",
  },
  {
    title: "Gateway Mall Mombasa",
    category: "Retail",
    description:
      "Immerse yourself in a complete 3D digital twin of a retail complex, where you can navigate through every corner and understand the layout.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tourLabel: "360° Immersive Tour",
  },
];

const PortfolioSection = () => {
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [activeTourUrl, setActiveTourUrl] = useState("");

  const handleTourClick = (url: string) => {
    setActiveTourUrl(url);
    setIsTourOpen(true);
  };

  return (
    <section id="spaces" className="py-20 md:py-28 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <p className="section-eyebrow mb-4">Portfolio</p>
          <h2 className="section-heading mb-4">See the world through our view.</h2>
          <p className="section-subheading">
            A selection of spaces we've brought to life. Each experience captures not just the
            geometry, but the feeling of being there.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div 
                className={`relative aspect-[4/3] rounded-xl overflow-hidden mb-5 ${project.is3DTour ? 'cursor-pointer' : ''}`}
                onClick={() => project.is3DTour && handleTourClick(project.tourUrl)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {project.is3DTour && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-foreground">
                      Click to explore 3D tour
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <span className="text-xs font-medium tracking-wider uppercase text-background/80">
                    {project.category}
                  </span>
                  <span className="text-xs text-background/70">View the Property</span>
                </div>
              </div>

              <h3 className="font-serif text-2xl text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>
              {project.is3DTour ? (
                <button
                  onClick={() => handleTourClick(project.tourUrl)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:gap-3 transition-all"
                >
                  <span className="text-xs tracking-wider uppercase">360</span>
                  {project.tourLabel}
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <a
                  href="/portfolio"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:gap-3 transition-all"
                >
                  <span className="text-xs tracking-wider uppercase">360</span>
                  {project.tourLabel}
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 p-8 md:p-12 rounded-2xl border border-dashed border-border text-center"
        >
          <Plus className="w-8 h-8 mx-auto mb-4 text-muted-foreground" />
          <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">Your space, next.</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Every great experience starts with a conversation. Let's talk about yours.
          </p>
          <Button
            asChild
            className="rounded-full bg-foreground text-background hover:bg-foreground/90 font-sans normal-case tracking-normal"
          >
            <a href="#contact">Get in touch</a>
          </Button>
        </motion.div>
      </div>

      <Dialog open={isTourOpen} onOpenChange={setIsTourOpen}>
        <DialogOverlay className="bg-black/90" />
        <DialogContent className="w-[95vw] h-[90vh] max-w-7xl p-0 bg-black border-0">
          <button
            onClick={() => setIsTourOpen(false)}
            className="absolute right-4 top-4 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <iframe
            src={activeTourUrl}
            allowFullScreen={true}
            frameBorder="0"
            title="3D Virtual Tour"
            className="w-full h-full"
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioSection;
