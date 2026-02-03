import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Heart, Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { ReviewCard } from "@/components/ReviewCard";
import { PageTransition } from "@/components/PageTransition";
import { featuredProducts } from "@/data/products";
import { featuredReviews } from "@/data/reviews";

const WHATSAPP_NUMBER = "916382059703";
const WHATSAPP_MESSAGE = encodeURIComponent("Hello! I would like to book a stitching service.");

const features = [
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "Only the finest fabrics and materials for your special occasions",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every stitch crafted with passion and attention to detail",
  },
  {
    icon: Award,
    title: "Expert Craftmanship",
    description: "Over 7 years of experience in traditional and modern designs",
  },
];

const Index = () => {
  return (
    <PageTransition>
      <Navbar />
      
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-luxury-gradient" />
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-20 left-10 w-72 h-72 bg-boutique-rose rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-boutique-gold-light rounded-full blur-3xl animate-float" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-boutique-blush rounded-full blur-3xl opacity-30" />
          </div>

          {/* Decorative elements */}
          <div className="absolute top-32 right-20 hidden lg:block">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-2 border-boutique-gold/30 rounded-full"
            />
          </div>
          <div className="absolute bottom-40 left-20 hidden lg:block">
            <Star className="w-8 h-8 text-boutique-gold animate-float" fill="currentColor" />
          </div>

          <div className="container-boutique relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-6 py-2 bg-boutique-blush/50 backdrop-blur-sm rounded-full text-sm font-medium text-foreground mb-6 border border-boutique-rose/30"
              >
                ✨ Welcome to Srila's Boutique
              </motion.span>

              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 leading-tight">
                Elegance in
                <br />
                <span className="text-gradient-gold">Every Stitch</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                Where tradition meets modern elegance. We craft beautiful, 
                bespoke garments that celebrate your unique style and heritage.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="btn-gold text-base px-8 gap-2 rounded-full">
                      Book Stitching
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </a>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/purchase">
                    <Button size="lg" variant="outline" className="btn-outline text-base px-8 rounded-full">
                      Explore Collection
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-boutique-rose rounded-full flex justify-center pt-2"
            >
              <motion.div className="w-1.5 h-1.5 bg-boutique-rose rounded-full" />
            </motion.div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-boutique-cream/50">
          <div className="container-boutique">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1 bg-boutique-blush/50 rounded-full text-sm font-medium text-foreground mb-4">
                Why Choose Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Crafted with <span className="text-boutique-rose">Passion</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experience the perfect blend of traditional craftsmanship and contemporary design
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card-hover rounded-2xl p-8 text-center group"
                >
                  <div className="w-16 h-16 bg-rose-gold-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow transition-all duration-300">
                    <feature.icon className="h-8 w-8 text-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-medium text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="section-padding">
          <div className="container-boutique">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1 bg-boutique-gold-light/50 rounded-full text-sm font-medium text-foreground mb-4">
                Our Services
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Featured <span className="text-boutique-gold">Services</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover our most popular stitching services, crafted with precision and love
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link to="/purchase">
                <Button variant="outline" size="lg" className="btn-outline gap-2 rounded-full">
                  View All Services
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

      

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-boutique">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-3xl p-8 md:p-16 text-center bg-rose-gold-gradient relative overflow-hidden"
            >
              {/* Decorative circles */}
              <div className="absolute top-10 right-10 w-32 h-32 border-2 border-foreground/10 rounded-full" />
              <div className="absolute bottom-10 left-10 w-20 h-20 border-2 border-foreground/10 rounded-full" />
              
              <div className="relative z-10">
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                  Ready to Create Something Beautiful?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                  Let us help you bring your dream outfit to life. Book a consultation 
                  today and experience the art of bespoke tailoring.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="btn-gold text-base px-8 gap-2 rounded-full">
                      Book via WhatsApp
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </a>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="btn-outline text-base px-8 rounded-full bg-background/50">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </PageTransition>
  );
};

export default Index;
