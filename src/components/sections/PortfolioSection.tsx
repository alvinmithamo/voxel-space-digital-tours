import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import home1 from "@/assets/home1.jpg";
import home2 from "@/assets/home2.jpg";
import home3 from "@/assets/home3.jpg";

const projects = [
  {
    title: "Serena Safari Lodge",
    category: "Hospitality",
    description:
      "A fully immersive digital walkthrough of a safari lodge and its surroundings, letting guests explore the ambiance and layout before booking.",
    image: home1,
    tourLabel: "360° Immersive Tour",
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
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
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
              <a
                href="/portfolio"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:gap-3 transition-all"
              >
                <span className="text-xs tracking-wider uppercase">360</span>
                {project.tourLabel}
                <ArrowRight className="w-4 h-4" />
              </a>
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
    </section>
  );
};

export default PortfolioSection;
