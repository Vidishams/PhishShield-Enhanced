import { motion } from "framer-motion";
import { Github, Twitter, Mail } from "lucide-react";
import { staggerContainer, staggerItem } from "./animations/AnimatedSection";

const Footer = () => {
  const links = {
    product: [
      { name: "Features", href: "#features" },
      { name: "How It Works", href: "#how-it-works" },
      { name: "Documentation", href: "#docs" },
      { name: "FAQ", href: "#faq" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8"
        >
          {/* Brand */}
          <motion.div variants={staggerItem} className="md:col-span-2">
            <motion.a
              href="#"
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/orange_fish.jpg"
                alt="PhishShield Logo"
                className="w-10 h-10 rounded-xl object-cover"
              />
              <span className="text-xl font-bold text-foreground">
                PhishShield
              </span>
            </motion.a>

            <p className="text-muted-foreground text-sm max-w-md mb-6">
              Protecting users from phishing attacks and malicious URLs with
              real-time AI-powered detection.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div variants={staggerItem}>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 4 }}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div variants={staggerItem}>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 4 }}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-border mt-12 pt-8 text-center"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PhishShield. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;