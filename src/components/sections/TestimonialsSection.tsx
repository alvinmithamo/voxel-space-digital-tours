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
    <section className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 geometric-grid opacity-10" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rounded-full" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border border-primary/10 rounded-full" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block font-display text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative bg-background rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 rounded-lg bg-accent-gradient flex items-center justify-center">
                  <Quote className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <span className="font-display font-bold text-lg text-primary">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground">
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
