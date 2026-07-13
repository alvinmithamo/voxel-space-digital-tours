import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Briefing call",
    description: "We learn about your space, your audience, and what you want them to feel.",
  },
  {
    number: "2",
    title: "On-site capture",
    description: "Our team arrives with scanning equipment. Most spaces are captured in a single day.",
  },
  {
    number: "3",
    title: "Rendering & polish",
    description: "We apply our lighting model and aesthetic layer. This is where the experience comes alive.",
  },
  {
    number: "4",
    title: "Live & embedded",
    description: "Your experience goes live with a shareable link and an embed code for your website.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <h2 className="section-heading mb-4">From your space to a live experience.</h2>
          <p className="section-subheading">
            A streamlined process designed to minimise disruption and maximise fidelity.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="inline-block font-serif text-4xl text-muted-foreground/40 mb-4">
                {step.number}
              </span>
              <h3 className="font-serif text-xl text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
