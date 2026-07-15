import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Westlands, Nairobi", "Kenya"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+254 700 000 000", "+254 711 000 000"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@voxelspace.co.ke", "sales@voxelspace.co.ke"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 1:00 PM"],
  },
];

const faqs = [
  {
    question: "How long does it take to create a virtual tour?",
    answer: "Typically 3-5 business days for standard properties. Larger or more complex spaces may take 1-2 weeks.",
  },
  {
    question: "Do you work outside Nairobi?",
    answer: "Yes! We serve all of Kenya and East Africa. Travel costs may apply for locations outside Nairobi.",
  },
  {
    question: "Can I update my tour after it's created?",
    answer: "Absolutely. We offer update packages for existing tours when you make changes to your space.",
  },
  {
    question: "What equipment do you use?",
    answer: "We use Matterport Pro cameras and other professional 360° equipment for the highest quality results.",
  },
];

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

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
                Get in Touch
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Let's Start Your <span className="italic">Project</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ready to transform your property? Get in touch for a free consultation and quote.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-2xl text-foreground mb-6">
                  Send Us a Message
                </h2>
                {isSubmitted ? (
                  <div className="bg-background rounded-2xl p-8 border border-border text-center">
                    <CheckCircle className="w-16 h-16 text-foreground mx-auto mb-4" />
                    <h3 className="font-serif text-xl text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          required
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-background border-border"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          required
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-background border-border"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          placeholder="+254 700 000 000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-background border-border"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Service Interested In
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full h-10 px-3 rounded-lg bg-background border border-border text-foreground"
                        >
                          <option value="">Select a service</option>
                          <option value="virtual-tours">Virtual Tours</option>
                          <option value="videography">360° Videography</option>
                          <option value="hosting">Hosting & Integration</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        required
                        rows={5}
                        placeholder="Tell us about your project..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-background border-border resize-none"
                      />
                    </div>
                    <Button type="submit" className="rounded-full bg-foreground text-background hover:bg-foreground/90 font-sans normal-case tracking-normal w-full md:w-auto">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                )}
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-2xl text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="bg-secondary/50 rounded-xl p-6 border border-border"
                    >
                      <info.icon className="w-8 h-8 text-foreground mb-4" />
                      <h3 className="font-serif font-semibold text-foreground mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, dIndex) => (
                        <p key={dIndex} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>

                <div className="bg-background rounded-xl border border-border overflow-hidden h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.277444357954!2d36.80278!3d-1.26389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a6bf7445dc1%3A0x940f3c4f1c9a7f6a!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1699900000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Voxel Space Location"
                  />
                </div>
              </motion.div>
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
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                Frequently Asked Questions
              </h2>
            </motion.div>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background rounded-xl p-6 border border-border"
                >
                  <h3 className="font-serif font-semibold text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
