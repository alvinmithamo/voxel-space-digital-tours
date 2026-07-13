import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const QuoteSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <Quote className="w-8 h-8 mx-auto mb-6 text-muted-foreground/50" />
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed italic mb-8">
            "We built this because we'd seen too many great spaces go unnoticed — not because
            they weren't worth visiting, but because no photograph could do them justice. When
            someone can walk your space before they arrive, the decision to come is already made."
          </p>
          <footer className="text-sm text-muted-foreground">
            — Founding Team, Voxel Space
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default QuoteSection;
