import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const blogPosts = [
  {
    id: 1,
    title: "How Digital Twins Are Transforming Kenyan Real Estate",
    excerpt: "Discover how virtual tour technology is revolutionizing property marketing and sales in Kenya's competitive real estate market.",
    category: "Industry Trends",
    author: "David Kimani",
    date: "January 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  },
  {
    id: 2,
    title: "5 Benefits of Virtual Tours for Commercial Properties",
    excerpt: "Learn why more property managers are investing in 360° virtual tours to showcase their commercial spaces.",
    category: "Tips & Guides",
    author: "Grace Wanjiku",
    date: "January 10, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    id: 3,
    title: "The Future of Property Viewing: VR and Beyond",
    excerpt: "Exploring emerging technologies that will shape how we experience and purchase real estate in the coming years.",
    category: "Technology",
    author: "Brian Omondi",
    date: "January 5, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80",
  },
  {
    id: 4,
    title: "Case Study: How Safari Lodge Increased Bookings by 50%",
    excerpt: "A detailed look at how one of our hospitality clients leveraged virtual tours to boost their reservation rates.",
    category: "Case Studies",
    author: "Mercy Achieng",
    date: "December 28, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
  },
  {
    id: 5,
    title: "Optimizing Your Virtual Tour for Search Engines",
    excerpt: "SEO best practices to ensure your virtual tours get discovered by potential clients searching online.",
    category: "Tips & Guides",
    author: "David Kimani",
    date: "December 20, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80",
  },
  {
    id: 6,
    title: "Matterport vs. Traditional Photography: A Comparison",
    excerpt: "Understanding the differences between 360° virtual tours and standard property photography.",
    category: "Technology",
    author: "Brian Omondi",
    date: "December 15, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
];

const categories = ["All", "Industry Trends", "Tips & Guides", "Technology", "Case Studies"];

const Blog = () => {
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
                Blog & News
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Insights & <span className="text-gradient">Updates</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Stay updated with the latest trends in digital twins, virtual tours, and commercial property marketing.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-card border-b border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary mb-3">
                      {post.category}
                    </span>
                    <h2 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <Link
                      to="#"
                      className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link"
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-muted-foreground mb-8">
                Get the latest insights and updates delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 h-12 px-4 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground"
                />
                <button
                  type="submit"
                  className="h-12 px-8 rounded-lg bg-accent-gradient text-primary-foreground font-display font-semibold uppercase tracking-wide hover:shadow-glow transition-all"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
