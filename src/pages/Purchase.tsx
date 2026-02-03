import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { PageTransition } from "@/components/PageTransition";
import { products } from "@/data/products";

const Purchase = () => {
  return (
    <PageTransition>
      <Navbar />
      
      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-b from-boutique-blush-light/50 to-background">
          <div className="container-boutique">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="inline-block px-4 py-1 bg-boutique-blush/50 rounded-full text-sm font-medium text-foreground mb-4">
                Our Services
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
                Our <span className="text-boutique-rose">Collection</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Explore our range of bespoke stitching services. Each piece is crafted 
                with love, precision, and the finest materials.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="section-padding">
          <div className="container-boutique">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Info Banner */}
        <section className="section-padding bg-secondary/30">
          <div className="container-boutique">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-12 text-center"
            >
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Custom Orders <span className="text-boutique-gold">Welcome</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Don't see exactly what you're looking for? We specialize in custom designs 
                tailored to your unique vision. Contact us to discuss your dream outfit.
              </p>
              <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  Free Consultation
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  Premium Fabrics
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  Expert Tailoring
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

export default Purchase;
