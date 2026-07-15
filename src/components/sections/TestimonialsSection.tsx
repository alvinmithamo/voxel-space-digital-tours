import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Voxel Space transformed how we market our properties. The virtual tours have significantly reduced unnecessary site visits while increasing qualified leads.",
    author: "James Mwangi",
    role: "Property Manager",
    company: "Prime Estates Kenya",
    rating: 5,
  },
  {
    quote:
      "The quality of their 360° videography is exceptional. Our hotel bookings increased by 50% after implementing the virtual tour on our website.",
    author: "Sarah Ochieng",
    role: "Marketing Director",
    company: "Safari Lodges Group",
    rating: 5,
  },
  {
    quote:
      "Professional team, outstanding results. The integration with our CRM was seamless, and the analytics have been invaluable for our sales strategy.",
    author: "Michael Kamau",
    role: "CEO",
    company: "Westlands Commercial",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block font-sans text-sm font-semibold tracking-wider uppercase text-foreground/60 mb-4">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative bg-background rounded-2xl p-8 border border-border hover:border-border/80 transition-all duration-200"
            >
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                  <Quote className="w-4 h-4 text-foreground" />
                </div>
              </div>

              <div className="flex gap-1 mb-6 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-foreground text-foreground"
                  />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <span className="font-serif font-bold text-lg text-foreground">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-serif font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
