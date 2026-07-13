import { motion } from "framer-motion";
import { Target, Heart, Lightbulb, Users, Award, Building } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace cutting-edge technology to deliver solutions that exceed expectations.",
  },
  {
    icon: Heart,
    title: "Client Focus",
    description: "Your success is our priority. We tailor every solution to your unique needs.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We maintain the highest standards in every project we undertake.",
  },
];

const team = [
  {
    name: "David Kimani",
    role: "Founder & CEO",
    bio: "With over 15 years in real estate technology, David founded Voxel Space to revolutionize property marketing in Africa.",
  },
  {
    name: "Grace Wanjiku",
    role: "Head of Operations",
    bio: "Grace ensures seamless project delivery with her expertise in project management and client relations.",
  },
  {
    name: "Brian Omondi",
    role: "Lead 3D Technician",
    bio: "Brian brings properties to life with his mastery of 360° capture technology and virtual tour creation.",
  },
  {
    name: "Mercy Achieng",
    role: "Marketing Director",
    bio: "Mercy drives our brand strategy and helps clients maximize the impact of their digital assets.",
  },
];

const milestones = [
  { year: "2025", event: "Voxel Space Ltd founded in Nairobi" },
  { year: "2025", event: "Completed first 50 commercial property tours" },
  { year: "2025", event: "Launched self-hosting platform for clients" },
  { year: "2026", event: "Expanded to serve East African market" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 geometric-grid opacity-20" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-block font-display text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4">
                About Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Bridging Physical and <span className="text-gradient">Digital Spaces</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2025 in Nairobi, Voxel Space Ltd is pioneering the digital transformation 
                of commercial properties across Kenya and East Africa.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We empower businesses by transforming physical spaces into interactive digital assets. 
                  Our mission is to reduce unnecessary on-site visits, enhance property marketing, and 
                  provide clients with powerful tools to showcase their spaces to the world.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Through cutting-edge 360° technology and custom hosting solutions, we're making 
                  commercial property visualization accessible, immersive, and impactful for businesses 
                  of all sizes.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { icon: Building, label: "100+ Properties", sublabel: "Digitized" },
                  { icon: Users, label: "50+ Clients", sublabel: "Served" },
                  { icon: Award, label: "Matterport", sublabel: "Certified" },
                  { icon: Target, label: "40%", sublabel: "Avg. Lead Increase" },
                ].map((stat, index) => (
                  <div key={index} className="bg-background rounded-xl p-6 text-center border border-border">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="font-display font-bold text-xl text-foreground">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These core principles guide everything we do at Voxel Space.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent-gradient flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        {/* <section className="py-20 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The passionate professionals behind Voxel Space's success.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-background rounded-2xl p-6 border border-border hover:border-primary/30 transition-all"
                >
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <span className="font-display font-bold text-2xl text-primary">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground text-center mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary text-center mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground text-center">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Timeline Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Journey
              </h2>
            </motion.div>
            <div className="max-w-2xl mx-auto">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 mb-8 last:mb-0"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-primary" />
                    {index < milestones.length - 1 && <div className="w-0.5 h-full bg-border mt-2" />}
                  </div>
                  <div className="pb-8">
                    <span className="font-display font-bold text-primary">{milestone.year}</span>
                    <p className="text-foreground mt-1">{milestone.event}</p>
                  </div>
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

export default About;
