import { motion } from "framer-motion";
import { Armchair, TrendingUp } from "lucide-react";
import home1 from "@/assets/home1.jpg";
import home3 from "@/assets/home3.jpg";

const valueProps = [
  {
    icon: Armchair,
    title: "Frictionless Exploration",
    description:
      "Navigate any space with fluid, natural movement. The controls disappear; the space is all that's left.",
    image: home1,
    imageAlt: "A warm minimalist living room with afternoon light",
  },
  {
    icon: TrendingUp,
    title: "Higher Conversions",
    description:
      "When someone has already walked your space, booking feels like a natural next step — not a leap of faith.",
    image: home3,
    imageAlt: "A person browsing a property listing on a laptop",
  },
];

const ValuePropsSection = () => {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="section-heading mb-4">
            When someone can walk your space,
            <br />
            <span className="italic">the decision makes itself.</span>
          </h2>
          <p className="section-subheading">
            Our experiences are built to strip away distraction, so your customers stop scrolling
            and start picturing themselves there.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6">
                <img
                  src={prop.image}
                  alt={prop.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <prop.icon className="w-5 h-5 text-muted-foreground mb-3" />
              <h3 className="font-serif text-2xl text-foreground mb-3">{prop.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{prop.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropsSection;
