import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const categories = ["All", "Commercial Office", "Retail", "Hospitality", "Residential"];

const projects = [
  {
    id: 1,
    title: "Studio Apartment Tour",
    category: "Residential",
    location: "Virtual Demo",
    result: "Live immersive experience",
    description: "Experience our cutting-edge 3D virtual tour technology in this interactive sandbox environment.",
    is3DTour: true,
    tourUrl: "https://kuula.co/share/LYcNk?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1",
  },
  {
    id: 2,
    title: "Riara Road 1Bedroom Apartment",
    category: "Residential",
    location: "Virtual Demo",
    result: "Live immersive experience",
    description: "Experience our cutting-edge 3D virtual tour technology in this interactive sandbox environment.",
    is3DTour: true,
    tourUrl: "https://realsee.ai/ByNN9VVD?theme=minimalist&unbranded=1",
  },
  {
    id: 3,
    title: "Westlands Business Park",
    category: "Commercial Office",
    location: "Nairobi, Kenya",
    result: "Increased inquiries by 45%",
    description: "A premium 10-floor office complex with modern amenities and stunning city views.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    id: 4,
    title: "Karen Shopping Mall",
    category: "Retail",
    location: "Nairobi, Kenya",
    result: "60% more virtual visitors",
    description: "Upscale shopping destination featuring luxury brands and fine dining.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    id: 5,
    title: "Kilimani Towers",
    category: "Residential",
    location: "Nairobi, Kenya",
    result: "Reduced site visits by 35%",
    description: "Luxury residential apartments with panoramic views of Nairobi skyline.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
  },
  {
    id: 6,
    title: "Serena Safari Lodge",
    category: "Hospitality",
    location: "Masai Mara, Kenya",
    result: "Booking increase of 50%",
    description: "5-star safari lodge offering authentic African wilderness experience.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
  },
  {
    id: 7,
    title: "Gateway Mall Mombasa",
    category: "Retail",
    location: "Mombasa, Kenya",
    result: "Tenant inquiries up 70%",
    description: "Coastal city's premier shopping and entertainment destination.",
    image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&q=80",
  },
  {
    id: 8,
    title: "Riverside Office Complex",
    category: "Commercial Office",
    location: "Nairobi, Kenya",
    result: "Leasing cycle reduced 40%",
    description: "Modern co-working and office space in the heart of Riverside.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    id: 9,
    title: "Lake Naivasha Resort",
    category: "Hospitality",
    location: "Naivasha, Kenya",
    result: "Weekend bookings up 55%",
    description: "Lakeside resort with stunning views and world-class amenities.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
  },
  {
    id: 10,
    title: "Runda Gardens Estate",
    category: "Residential",
    location: "Nairobi, Kenya",
    result: "Sales cycle reduced 50%",
    description: "Exclusive gated community with luxurious family homes.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-secondary/50 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-block font-sans text-sm font-semibold tracking-wider uppercase text-foreground/60 mb-4">
                Our Work
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Featured <span className="italic">Projects</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Explore our portfolio of successful digital twin implementations across various industries.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Filter className="w-5 h-5 text-muted-foreground mr-2" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-foreground text-background"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-background rounded-2xl overflow-hidden border border-border hover:border-border/80 transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden relative bg-black">
                    {project.is3DTour ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="w-full h-full"
                      >
                        <iframe
                          src={project.tourUrl}
                          allowFullScreen={true}
                          frameBorder="0"
                          loading="lazy"
                          title="3D Virtual Tour"
                          className="w-full h-full"
                        />
                        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-tighter text-slate-300 border border-white/10 pointer-events-none">
                          Active 3D Sandbox Environment
                        </div>
                      </motion.div>
                    ) : (
                      <>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
                        <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <ExternalLink className="w-4 h-4 text-foreground" />
                        </button>
                      </>
                    )}
                  </div>
                  <div className="p-6">
                    <span className="inline-block text-xs font-semibold tracking-wider uppercase text-foreground/60 mb-2">
                      {project.category}
                    </span>
                    <h3 className="font-serif text-xl text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{project.location}</p>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                    <div className="pt-4 border-t border-border">
                      <span className="text-sm font-medium text-foreground">{project.result}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Ready to Join Our Portfolio?
              </h2>
              <p className="text-muted-foreground mb-8">
                Let us create a stunning digital twin for your property.
              </p>
              <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 font-sans normal-case tracking-normal">
                Start Your Project
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
