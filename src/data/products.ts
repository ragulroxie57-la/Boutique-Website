export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "Mo-dress",
    name: "Single Straight Model",
    price: 350,
    description: "Exquisite Straight-fit wear crafted with love and precision. Custom designs that make your special day unforgettable.",
    image: "/Single.jpeg",
    category: "Traditional",
  },
  {
    id: "modern-wear",
    name: "Single umbrella Model",
    price: 350,
    description: "Perfectly fitted with intricate detailing. From simple elegance to designer patterns.",
    image: "/Single Umbrella.jpeg",
    category: "Modern",
  },
  {
    id: "Frill-Model",
    name: "Layers Frill Model",
    price: 400,
    description: "Elegant churidar sets tailored to perfection. Comfortable fit with beautiful finishing.",
    image: "/Layers Fril.jpeg",
    category: "Frill",
  },
  {
    id: "Modern-wear",
    name: "Double Umbrella Model",
    price: 400,
    description: " Double Umbrella Model that adds a touch of royalty. Intricate handwork on any fabric.",
    image: "/Double.jpeg",
    category: "Modern",
  },
  {
    id: "kids-wear",
    name: "Kids Wear",
    price: 200,
    description: "Adorable outfits for little ones. Comfortable, colorful, and crafted with care.",
    image: "/Kids.jpeg",
    category: "Kids",
  },
  {
    id: "custom-designer",
    name: "Custom Designer Outfit",
    price: 500,
    description: "Bring your vision to life with our custom designer service. Unique creations for special occasions.",
    image: "/Custom.jpeg",
    category: "Designer",
  },
];

export const featuredProducts = products.slice(0, 3);
