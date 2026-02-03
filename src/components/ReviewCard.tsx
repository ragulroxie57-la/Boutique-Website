import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Review } from "@/data/reviews";

interface ReviewCardProps {
  review: Review;
  index?: number;
}

export const ReviewCard = ({ review, index = 0 }: ReviewCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="glass-card-hover rounded-2xl p-6"
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        {/* Customer Image */}
        <div className="w-14 h-14 rounded-full overflow-hidden bg-secondary flex-shrink-0">
          <img
            src={review.customerImage}
            alt={review.customerName}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1">
          <h4 className="font-display text-lg font-medium text-foreground">
            {review.customerName}
          </h4>
          <p className="text-sm text-muted-foreground">{review.productName}</p>
          
          {/* Stars */}
          <div className="flex gap-1 mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < review.rating
                    ? "text-boutique-gold fill-boutique-gold"
                    : "text-muted"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product Image */}
        <div className="w-16 h-16 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
          <img
            src={review.productImage}
            alt={review.productName}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Message */}
      <p className="text-muted-foreground text-sm leading-relaxed italic">
        "{review.message}"
      </p>

      {/* Date */}
      <p className="text-xs text-muted-foreground mt-4">
        {new Date(review.date).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>
    </motion.div>
  );
};
