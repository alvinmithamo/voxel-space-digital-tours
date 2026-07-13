import { motion } from "framer-motion";
import { Search, Trophy, Heart } from "lucide-react";

const points = [
  {
    icon: Search,
    title: "Every decision starts online",
    description:
      "Your next guest, buyer, or diner will look you up before ever walking through your door. What they find in those seconds determines whether they choose you or scroll past.",
  },
  {
    icon: Trophy,
    title: "First movers set the standard",
    description:
      "In your neighbourhood, your category — the first business to offer an immersive experience becomes the one others are compared to. That's a powerful position to hold.",
  },
  {
    icon: Heart,
    title: "Emotion before logic",
    description:
      "People don't choose a hotel for the amenities list or a restaurant for the menu alone. They choose it because they've already imagined being there. We build that imagination.",
  },
];

const UrgencySection = () => {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <h2 className="section-heading mb-4">
            The way people choose spaces has changed.
          </h2>
          <p className="section-subheading">
            Before a call, before a visit, before a booking, people scroll. What they find in
            those few seconds is the decision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <point.icon className="w-5 h-5 text-muted-foreground mb-4" />
              <h3 className="font-serif text-xl text-foreground mb-3">{point.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
