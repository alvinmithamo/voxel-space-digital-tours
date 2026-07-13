import { motion } from "framer-motion";
import { Hotel, UtensilsCrossed, Home, PartyPopper } from "lucide-react";

const audiences = [
  {
    icon: Hotel,
    label: "Hotels & Guesthouses",
    headline: "Guests feel it before they arrive.",
    description:
      "Let guests walk your lobby and picture their stay. When they've already experienced your space, the booking feels like a formality.",
  },
  {
    icon: UtensilsCrossed,
    label: "Restaurants & Dining",
    headline: "The atmosphere lands before they even walk in.",
    description:
      "Every diner picks a restaurant before they walk in. Give them the layout, the light, the feel of the room — not just a menu link.",
  },
  {
    icon: Home,
    label: "Real Estate",
    headline: "Qualified buyers show up ready to decide.",
    description:
      "Buyers who've already walked the space virtually arrive at viewings with questions, not doubts. Less time explaining, more time closing.",
  },
  {
    icon: PartyPopper,
    label: "Events & Venues",
    headline: "Clients say yes before the site visit.",
    description:
      "Wedding planners, corporate teams, event organisers — they all need to see themselves in the space. Give them that before the first site visit.",
  },
];

const AudienceSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <h2 className="section-heading mb-4">Who it's for.</h2>
          <p className="section-subheading">
            If your customers look before they come, this is for you. One platform, every space
            that deserves to be felt before it's visited.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {audiences.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-5"
            >
              <div className="shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center bg-background">
                <item.icon className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-2">
                  {item.label}
                </p>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">
                  {item.headline}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
