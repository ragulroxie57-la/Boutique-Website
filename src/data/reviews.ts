export interface Review {
  id: string;
  customerName: string;
  customerImage: string;
  productName: string;
  productImage: string;
  rating: number;
  message: string;
  date: string;
}

export const reviews: Review[] = [
  {
    id: "1",
    customerName: "Priya Bhavan",
    customerImage: "/placeholder.svg",
    productName: "Single Straight Model",
    productImage: "/placeholder.svg",
    rating: 5,
    message: "Absolutely stunning work! My bridal lehenga was beyond my expectations. The attention to detail and the quality of stitching was impeccable. Thank you for making my special day even more beautiful!",
    date: "2024-01-15",
  },
  {
    id: "2",
    customerName: "Harini Shivaraj",
    customerImage: "/placeholder.svg",
    productName: "Aari Embroidery Work",
    productImage: "/placeholder.svg",
    rating: 5,
    message: "The Aari embroidery on my saree blouse is breathtaking! The intricate patterns and vibrant colors exceeded all my expectations. Truly artisan craftsmanship.",
    date: "2024-10-10",
  },
  {
    id: "3",
    customerName: "Ishu",
    customerImage: "/placeholder.svg",
    productName: "Blouse Stitching",
    productImage: "/placeholder.svg",
    rating: 5,
    message: "Perfect fit every single time! I've been coming here for all my blouse stitching needs. The team understands exactly what I want and delivers perfection.",
    date: "2025-04-05",
  },
  {
    id: "4",
    customerName: "Sureka",
    customerImage: "/placeholder.svg",
    productName: "Custom Designer Outfit",
    productImage: "/placeholder.svg",
    rating: 5,
    message: "Got a custom anarkali designed for my daughter's engagement. The design, fabric selection, and finishing were all top-notch. Highly recommend!",
    date: "2025-08-28",
  },
  {
    id: "5",
    customerName: "Varsha",
    customerImage: "/placeholder.svg",
    productName: "Layers Frill Model",
    productImage: "/placeholder.svg",
    rating: 5,
    message: "The churidar set I ordered fits like a dream! The stitching quality is excellent and the delivery was right on time. Will definitely order again.",
    date: "2025-12-20",
  },
  {
    id: "6",
    customerName: "Vasundra",
    customerImage: "/placeholder.svg",
    productName: "Double Umbrella Model",
    productImage: "/placeholder.svg",
    rating: 5,
    message: "My little one looked adorable in the custom pavadai! The fabric was so soft and the stitching was perfect. Thank you for the wonderful work!",
    date: "2026-01-15",
  },
];

export const featuredReviews = reviews.slice(0, 3);
