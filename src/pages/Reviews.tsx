import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ReviewCard } from "@/components/ReviewCard";
import { PageTransition } from "@/components/PageTransition";
import { reviews } from "@/data/reviews";

const Reviews = () => {
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
                Testimonials
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
                Customer <span className="text-boutique-rose">Reviews</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Read what our beloved customers have to say about their experience 
                with  Srila's Boutique.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="section-padding">
          <div className="container-boutique">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <ReviewCard key={review.id} review={review} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section-padding bg-secondary/30">
          <div className="container-boutique">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                { value: "50+", label: "Happy Customers" },
                { value: "100+", label: "Garments Crafted" },
                { value: "4.6", label: "Average Rating" },
                { value: "7+", label: "Years Experience" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="font-display text-3xl md:text-4xl font-semibold text-boutique-rose mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </PageTransition>
  );
};

export default Reviews;
