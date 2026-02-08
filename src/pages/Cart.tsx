import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const WHATSAPP_NUMBER = "916382059703";

const checkoutSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10).max(15),
  address: z.string().trim().min(1).max(500),
  instructions: z.string().max(1000).optional(),
});

const Cart = () => {
  const { items, updateQuantity, removeFromCart, clearCart, totalPrice } =
    useCart();

  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    instructions: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handlePlaceOrder = () => {
    const result = checkoutSchema.safeParse(formData);

    if (!result.success) {
      const newErrors = {};
      result.error.errors.forEach((err) => {
        newErrors[err.path[0]] = err.message;
      });

      setErrors(newErrors);
      return;
    }

    const orderItems = items
      .map(
        (item) =>
          `• ${item.name} x${item.quantity} - ₹${(
            item.price * item.quantity
          ).toLocaleString()}`
      )
      .join("\n");

    const message =
      `🛍️ *New Order from Srila's Boutique*\n\n` +
      `*Customer Details:*\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Address: ${formData.address}\n` +
      `${
        formData.instructions
          ? `Instructions: ${formData.instructions}\n`
          : ""
      }\n` +
      `*Order Items:*\n${orderItems}\n\n` +
      `*Total: ₹${totalPrice.toLocaleString()}*`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    toast({
      title: "Order Initiated!",
      description: "Continue in WhatsApp to confirm.",
    });

    clearCart();
  };

  /* ---------------- EMPTY CART ---------------- */

  if (items.length === 0) {
    return (
      <PageTransition>
        <Navbar />

        <main className="pt-20 min-h-[60vh]">
          <div className="container-boutique px-4 section-padding text-center">
            <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>

            <h1 className="text-2xl sm:text-3xl font-semibold mb-4">
              Your Cart is Empty
            </h1>

            <Link to="/purchase">
              <Button className="btn-primary gap-2">
                Browse Collection <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </main>

        <Footer />
      </PageTransition>
    );
  }

  /* ---------------- MAIN CART ---------------- */

  return (
    <PageTransition>
      <Navbar />

      <main className="pt-20">
        <section className="section-padding">
          <div className="container-boutique px-4">

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8">
              Shopping Cart
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* -------- CART ITEMS -------- */}

              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="glass-card p-4 flex flex-col sm:flex-row gap-4"
                  >

                    {/* Image */}
                    <div className="w-full sm:w-24 h-40 sm:h-24 overflow-hidden rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.category}
                      </p>
                      <p className="font-semibold text-boutique-gold">
                        ₹{item.price.toLocaleString()}
                      </p>
                    </div>

                    {/* Quantity */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between gap-3">
                      <button onClick={() => removeFromCart(item.id)}>
                        <Trash2 className="h-4 w-4" />
                      </button>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            item.quantity > 1 &&
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center"
                        >
                          <Minus size={14} />
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* -------- ORDER SUMMARY -------- */}

              <div>
                <div className="glass-card p-4 sm:p-6 lg:sticky lg:top-24">

                  <h2 className="text-lg font-semibold mb-6">
                    Order Summary
                  </h2>

                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between text-sm mb-2"
                    >
                      <span>
                        {item.name} x{item.quantity}
                      </span>
                      <span>
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  ))}

                  <div className="border-t pt-4 mt-4 flex justify-between font-semibold">
                    <span>Total</span>
                    <span>₹{totalPrice.toLocaleString()}</span>
                  </div>

                  {/* -------- FORM -------- */}

                  <div className="space-y-4 mt-6">
                    <div>
                      <Label>Name *</Label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={errors.name && "border-destructive"}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label>Email *</Label>
                      <Input
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={errors.email && "border-destructive"}
                      />
                    </div>

                    <div>
                      <Label>Phone *</Label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={errors.phone && "border-destructive"}
                      />
                    </div>

                    <div>
                      <Label>Address *</Label>
                      <Textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className={errors.address && "border-destructive"}
                      />
                    </div>

                    <div>
                      <Label>Instructions</Label>
                      <Textarea
                        name="instructions"
                        value={formData.instructions}
                        onChange={handleInputChange}
                      />
                    </div>

                    <Button
                      onClick={handlePlaceOrder}
                      className="w-full btn-primary py-5"
                    >
                      Place Order via WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* -------- MOBILE FLOAT BUTTON -------- */}

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background shadow-lg lg:hidden">
        <Button
          onClick={handlePlaceOrder}
          className="w-full btn-primary"
        >
          Checkout ₹{totalPrice.toLocaleString()}
        </Button>
      </div>
    </PageTransition>
  );
};

export default Cart;
