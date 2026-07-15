import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Clock, ArrowRight, Heart, Zap, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const benefits = [
  {
    icon: Heart,
    title: "Health Coverage",
    description: "Comprehensive medical insurance for you and your family.",
  },
  {
    icon: Zap,
    title: "Growth Opportunities",
    description: "Training programs and career advancement paths.",
  },
  {
    icon: Users,
    title: "Great Team",
    description: "Work with passionate professionals who love what they do.",
  },
  {
    icon: TrendingUp,
    title: "Competitive Pay",
    description: "Salary packages that reflect your skills and experience.",
  },
];

const openings = [
  {
    id: 1,
    title: "3D Capture Technician",
    department: "Operations",
    location: "Nairobi, Kenya",
    type: "Full-time",
    description: "Join our field team to capture stunning 360° imagery of commercial properties across Kenya.",
  },
  {
    id: 2,
    title: "Sales Executive",
    department: "Sales",
    location: "Nairobi, Kenya",
    type: "Full-time",
    description: "Drive business growth by connecting with property managers and real estate developers.",
  },
  {
    id: 3,
    title: "Frontend Developer",
    department: "Technology",
    location: "Remote / Nairobi",
    type: "Full-time",
    description: "Build beautiful, interactive web experiences for our virtual tour platform.",
  },
  {
    id: 4,
    title: "Marketing Coordinator",
    department: "Marketing",
    location: "Nairobi, Kenya",
    type: "Full-time",
    description: "Develop and execute marketing campaigns to grow our brand presence.",
  },
];

const Careers = () => {
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
                Careers
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Join Our <span className="italic">Growing Team</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Help us transform how the world experiences commercial properties. We're looking for passionate 
                individuals who want to make an impact.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                Why Work With Us?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We believe in taking care of our team so they can do their best work.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-secondary/50 rounded-xl p-6 border border-border text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
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
                Open Positions
              </h2>
              <p className="text-muted-foreground">
                Find your next opportunity with Voxel Space.
              </p>
            </motion.div>
            <div className="max-w-3xl mx-auto space-y-4">
              {openings.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background rounded-xl p-6 border border-border hover:border-border/80 transition-all group"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <span className="inline-block text-xs font-semibold tracking-wider uppercase text-foreground/60 mb-2">
                        {job.department}
                      </span>
                      <h3 className="font-serif text-xl text-foreground mb-2">
                        {job.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <Link to="/contact">
                      <Button variant="outline" className="rounded-full border-border font-sans normal-case tracking-normal group-hover:bg-foreground group-hover:text-background">
                        Apply Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-muted-foreground mb-8">
                We're always looking for talented people. Send us your CV and we'll keep you in mind for future opportunities.
              </p>
              <Link to="/contact">
                <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 font-sans normal-case tracking-normal">
                  Get in Touch
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
