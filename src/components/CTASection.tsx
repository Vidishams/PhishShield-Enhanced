import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Chrome, Shield } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 gradient-primary" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />

          <div className="relative px-8 py-16 md:py-20 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-20 h-20 rounded-3xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-8"
              >
<img
  src="/orange_fish.jpg"
  alt="PhishShield Logo"
  className="w-full h-full rounded-3xl object-cover"
/>              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Start Protecting Yourself Today
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Join thousands of users who trust PhishGuard to keep them safe from phishing attacks and malicious websites.
              </p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 gap-2 rounded-full px-8 h-14 text-base font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <Chrome className="w-5 h-5" />
                  Add to Chrome — Free
                </Button>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-primary-foreground/60 text-sm mt-6"
              >
                Works on Chrome, Edge, Brave, and Opera
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
