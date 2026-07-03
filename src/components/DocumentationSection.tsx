import { motion } from "framer-motion";
import { Chrome, Download, Settings, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { slideFromLeft, slideFromRight, staggerContainer, staggerItem } from "./animations/AnimatedSection";

const steps = [
  {
    icon: Chrome,
    title: "1. Install Extension",
    description: "Click the 'Add to Chrome' button to open the Chrome Web Store. Click 'Add to Chrome' on the extension page.",
  },
  {
    icon: Download,
    title: "2. Confirm Installation",
    description: "A popup will appear asking for permissions. Click 'Add extension' to complete the installation.",
  },
  {
    icon: Settings,
    title: "3. Pin to Toolbar",
    description: "Click the puzzle icon in Chrome's toolbar, then click the pin icon next to PhishShield for easy access.",
  },
  {
    icon: CheckCircle2,
    title: "4. Start Browsing Safely",
    description: "That's it! PhishShield will now automatically protect you from phishing attacks and malicious URLs.",
  },
];

const DocumentationSection = () => {
  return (
    <section id="docs" className="section-padding bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Documentation</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get Started in Minutes
            </h2>
            <p className="text-muted-foreground mb-8">
              Installing PhishShield takes less than a minute. Follow these simple steps to start protecting yourself from online threats.
            </p>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {steps.map((step) => (
                <motion.div 
                  key={step.title} 
                  variants={staggerItem}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                  className="flex gap-4 cursor-default"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0"
                  >
                    <step.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button 
                size="lg" 
                className="gradient-primary text-primary-foreground gap-2 rounded-full px-8 mt-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-1"
              >
                <Chrome className="w-5 h-5" />
                Install Now — Free
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Guide */}
          <motion.div 
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-3xl border border-border p-8 shadow-card"
            >
              <div className="bg-muted rounded-2xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                    <Chrome className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Chrome Web Store</p>
                    <p className="text-sm text-muted-foreground">Extensions</p>
                  </div>
                </div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-card rounded-xl p-4 border border-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl overflow-hidden">
  <img
    src="/orange_fish.jpg"
    alt="PhishShield Logo"
    className="w-full h-full object-cover rounded-xl"
  />
</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">PhishShield</h4>
                      <p className="text-sm text-muted-foreground mb-3">Phishing & Malware Protection</p>
                      <div className="flex items-center gap-3">
                        <Button 
                          size="sm" 
                          className="gradient-primary text-primary-foreground rounded-full text-xs transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                        >
                          Add to Chrome
                        </Button>
                        <span className="text-xs text-muted-foreground">Free</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Features List */}
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {["Real-time phishing detection", "URL unshortening", "Privacy-focused", "Zero configuration"].map((feature, index) => (
                  <motion.div 
                    key={feature} 
                    variants={staggerItem}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 cursor-default"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                    </motion.div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full px-4 py-2 text-sm font-semibold shadow-lg cursor-default"
            >
              100% Free
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DocumentationSection;
