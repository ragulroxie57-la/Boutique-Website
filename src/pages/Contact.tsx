import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const WHATSAPP_NUMBER = "916382059703";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(15, "Phone number must be less than 15 digits"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Boutique",
    content: "11th,thozhur St, Near Bus Stop,\nSalem, Tamil Nadu - 636109",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+91 63820 59703\n+91 93425 77328",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "srilasri.c@gmail.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Mon - Sat: 10:00 AM - 8:00 PM\nSunday: 11:00 AM - 6:00 PM",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          newErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(newErrors);
      return;
    }

    // Show success
    setIsSubmitted(true);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. Our designer will reach you shortly.",
    });
    
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello! I would like to inquire about your stitching services.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

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
                Contact Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
                Get in <span className="text-boutique-rose">Touch</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Have a question or want to discuss a custom order? We'd love to hear from you!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding">
          <div className="container-boutique">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-card rounded-2xl p-8 text-center"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send className="h-10 w-10 text-green-600" />
                    </div>
                    <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                      Thank <span className="text-boutique-gold">You!</span>
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Your message has been received. Our designer will reach you shortly 
                      to discuss your requirements.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="btn-outline"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8">
                    <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                      Send Us a <span className="text-boutique-rose">Message</span>
                    </h2>

                    <div className="space-y-5">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className={errors.name ? "border-destructive" : ""}
                        />
                        {errors.name && (
                          <p className="text-sm text-destructive mt-1">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive mt-1">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 63820 59703"
                          className={errors.phone ? "border-destructive" : ""}
                        />
                        {errors.phone && (
                          <p className="text-sm text-destructive mt-1">{errors.phone}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="message">Your Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your requirements..."
                          rows={4}
                          className={errors.message ? "border-destructive" : ""}
                        />
                        {errors.message && (
                          <p className="text-sm text-destructive mt-1">{errors.message}</p>
                        )}
                      </div>

                      <Button type="submit" className="w-full btn-primary gap-2" size="lg">
                        Send Message
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                )}
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card-hover rounded-xl p-6 flex gap-4"
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-medium text-foreground mb-1">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground text-sm whitespace-pre-line">
                        {info.content}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {/* WhatsApp Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="glass-card rounded-xl p-6 bg-gradient-to-br from-green-50 to-green-100/50"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-medium text-foreground">
                        Quick Contact
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Get instant response on WhatsApp
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={openWhatsApp}
                    className="w-full bg-green-500 hover:bg-green-600 text-white gap-2"
                    size="lg"
                  >
                    Chat on WhatsApp
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </PageTransition>
  );
};

export default Contact;
