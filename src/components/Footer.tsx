import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/srilasriboutique", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Collection", path: "/purchase" },
  { name: "Reviews", path: "/reviews" },
  { name: "Contact", path: "/contact" },
];

export const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container-boutique section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display text-xl font-semibold mb-4 text-foreground">
              Srila's <span className="text-boutique-rose">Boutique</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Where tradition meets elegance. We craft beautiful garments with love, 
              precision, and a touch of luxury.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-foreground hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-medium mb-4 text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-medium mb-4 text-foreground">
              Our Services
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Straight-fit</li>
              <li>Single umbrella Model</li>
              <li>Kids-Wear</li>
              <li>Custom Design</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-medium mb-4 text-foreground">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>11th,thozhuvar street,Periyamariyamman koil,Pethanaikenpalayam,Salem , 636109</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 63820 59703</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>srilasri.c@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Srila's Boutique. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
