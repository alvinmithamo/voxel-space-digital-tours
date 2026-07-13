import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does the capture process take?",
    answer:
      "Most spaces are captured in a single day on-site. From there, rendering and polish typically takes 3–5 business days before your experience goes live.",
  },
  {
    question: "Do I need to close my space during capture?",
    answer:
      "Not necessarily. We work around your schedule and can capture during quieter hours. We'll discuss the best approach during your briefing call.",
  },
  {
    question: "What does it look like on mobile?",
    answer:
      "Our experiences are fully responsive and optimised for mobile browsers. No app download required — your customers explore directly from their phone.",
  },
  {
    question: "Can I embed the experience on my own website?",
    answer:
      "Yes. Every project includes a shareable link and a simple embed code — one line of HTML to add the walkthrough to your website, listing, or booking page.",
  },
  {
    question: "What happens if I renovate or redecorate later?",
    answer:
      "We offer update packages for existing tours. Whether it's a full refresh or a partial re-capture, we can bring your digital twin back in line with your space.",
  },
  {
    question: "Do you serve spaces outside Nairobi?",
    answer:
      "Yes — we serve spaces across Kenya and East Africa. Travel costs may apply for locations outside the Nairobi metro area.",
  },
  {
    question: "How does pricing work?",
    answer:
      "We provide fixed-price proposals after your briefing call — no surprises, no ongoing subscription. Pricing depends on space size, complexity, and deliverables.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12"
        >
          <h2 className="section-heading">Everything you need to know</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left font-sans font-medium text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
