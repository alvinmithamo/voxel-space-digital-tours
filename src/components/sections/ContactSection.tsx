import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Clock, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const nextSteps = [
  { step: "1", title: "Briefing call", description: "A 30-minute conversation about your space, goals, and audience." },
  { step: "2", title: "Custom proposal", description: "We'll share a tailored scope, timeline, and fixed price within 24 hours." },
  { step: "3", title: "On-site capture", description: "Our team comes to you. Most captures are completed in a single day." },
];

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    spaceType: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || (!formData.email && !formData.phone)) return;
    
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://formspree.io/f/mrenbvyp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          spaceType: formData.spaceType,
          _subject: "New contact lead form submission from Voxel Space website",
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or email us directly at info@voxelspaceke.com");
      }
    } catch (err) {
      setError("Something went wrong. Please try again or email us directly at info@voxelspaceke.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <p className="section-eyebrow mb-4">
            <Mail className="w-4 h-4" />
            Get in touch
          </p>
          <h2 className="section-heading mb-4">Let's bring your space to life.</h2>
          <p className="section-subheading">
            Tell us about your space and what you'd like your customers to feel. We'll take it from
            there. We'll send a fixed-price proposal within 48 hours of your briefing call — no
            surprises, no ongoing subscription.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <h3 className="font-serif text-xl text-foreground mb-6">Tell us about your space</h3>

            {isSubmitted ? (
              <div className="rounded-xl border border-border bg-background p-8 text-center">
                <CheckCircle className="w-12 h-12 text-foreground mx-auto mb-4" />
                <h4 className="font-serif text-xl text-foreground mb-2">Thank you!</h4>
                <p className="text-sm text-muted-foreground">
                  We'll be in touch within one business day to schedule your briefing call.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
                    {error}
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name <span className="text-muted-foreground">*</span>
                  </label>
                  <Input
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background border-border h-11"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Contact <span className="text-muted-foreground">*</span>
                  </label>
                  <p className="text-xs text-muted-foreground mb-2">email or phone — at least one</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      type="email"
                      placeholder="Work email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background border-border h-11"
                    />
                    <Input
                      type="tel"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-background border-border h-11"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company / property name <span className="text-muted-foreground">(recommended)</span>
                  </label>
                  <Input
                    placeholder="Your company or property"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-background border-border h-11"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Type of space <span className="text-muted-foreground">(recommended)</span>
                  </label>
                  <Select
                    value={formData.spaceType}
                    onValueChange={(value) => setFormData({ ...formData, spaceType: value })}
                  >
                    <SelectTrigger className="bg-background border-border h-11">
                      <SelectValue placeholder="Select a category…" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hotel">Hotel / guesthouse / AirBnB</SelectItem>
                      <SelectItem value="restaurant">Restaurant / café / bar</SelectItem>
                      <SelectItem value="retail">Retail / showroom</SelectItem>
                      <SelectItem value="event">Event venue</SelectItem>
                      <SelectItem value="real-estate">Real estate</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-foreground text-background hover:bg-foreground/90 font-sans normal-case tracking-normal px-6"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                  {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                </Button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-10"
          >
            <div>
              <h3 className="font-serif text-xl text-foreground mb-6">Contact details</h3>
              <ul className="space-y-5">
                <li className="flex gap-3">
                  <Mail className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Email us</p>
                    <a href="mailto:info@voxelspace.co.ke" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      info@voxelspace.co.ke
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Clock className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Response time</p>
                    <p className="text-sm text-muted-foreground">Within one business day</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Based in</p>
                    <p className="text-sm text-muted-foreground">
                      Nairobi, Kenya — serving spaces across East Africa
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl text-foreground mb-6">What happens next</h3>
              <ol className="space-y-5">
                {nextSteps.map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <span className="font-serif text-lg text-muted-foreground/50 shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
