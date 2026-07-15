import { motion } from "framer-motion";
import { Globe, Mail } from "lucide-react";

const PartnershipsSection = () => {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <Globe className="w-8 h-8 mx-auto mb-6 text-muted-foreground" />
          <h2 className="section-heading mb-4">
            Interested in bringing Voxel Space to your region?
          </h2>
          <p className="section-subheading mb-8">
            We're actively exploring partnerships to expand our immersive 3D virtual tour
            services across East Africa and beyond. If you'd like to collaborate and bring our
            experiences to your market, we'd love to hear from you.
          </p>
          <a
            href="mailto:info@voxelspace.co.ke"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:gap-3 transition-all"
          >
            <Mail className="w-4 h-4" />
            Get in touch with us at info@voxelspaceke.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
