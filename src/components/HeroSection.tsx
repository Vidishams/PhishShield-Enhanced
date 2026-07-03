import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Chrome, Shield, Zap, AlertTriangle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <Shield className="w-4 h-4" />
              Trusted by 10,000+ users
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
            >
              Detect Phishing
              <br />
              <span className="text-gradient">In Under a Second</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              PhishShield unshortens URLs and analyzes web pages in real-time to protect you from 
              malicious content. Get instant alerts before you become a victim.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                size="lg" 
                className="gradient-primary text-primary-foreground gap-2 rounded-full px-8 h-14 text-base transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-1"
              >
                <Chrome className="w-5 h-5" />
                Add to Chrome — It's Free
              </Button>
<a
  href="https://drive.google.com/embeddedfolderview?id=1TS5_8WgvVvPXJ7lYqHT_6LRswJXvu_R5#grid"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button 
    size="lg" 
    variant="outline" 
    className="rounded-full px-8 h-14 text-base transition-all duration-300 hover:bg-muted hover:-translate-y-1"
  >
    Watch Demo
  </Button>
</a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border"
            >
              {[
                { value: "99.9%", label: "Detection Rate" },
                { value: "<1s", label: "Scan Time" },
                { value: "500K+", label: "Threats Blocked" },
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-default"
                >
                  <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Browser Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative bg-card rounded-3xl border border-border shadow-card p-6"
            >
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-accent/60" />
                </div>
                <div className="flex-1 bg-muted rounded-lg px-4 py-2 text-sm text-muted-foreground truncate">
                  https://bit.ly/3x7Kj...
                </div>
              </div>

              {/* Extension Popup */}
              <div className="bg-muted rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
        <motion.div
  className="w-12 h-12 rounded-xl overflow-hidden border-2 border-white"
  animate={{ 
    boxShadow: [
      "0 0 10px rgba(0,0,0,0.15)",
      "0 0 20px rgba(0,0,0,0.25)",
      "0 0 10px rgba(0,0,0,0.15)"
    ]
  }}
  transition={{ duration: 2, repeat: Infinity }}
>
  <img
    src="/orange_fish.jpg"
    alt="PhishShield Logo"
    className="w-full h-full object-cover rounded-xl"
  />
</motion.div>
                  <div>
                    <p className="font-semibold text-foreground">PhishShield Active</p>
                    <p className="text-sm text-muted-foreground">Scanning URL...</p>
                  </div>
                </div>

                {/* Scan Animation */}
                <div className="relative bg-card rounded-xl p-4 mb-4 overflow-hidden">
                  <motion.div 
                    animate={{ y: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent" 
                  />
                  <div className="flex items-center gap-3 relative z-10">
                    <Zap className="w-5 h-5 text-primary" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">URL Unshortened</p>
                      <p className="text-xs text-muted-foreground truncate">https://malicious-site.com/login</p>
                    </div>
                  </div>
                </div>

                {/* Alert */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.4 }}
                  className="bg-destructive/10 border border-destructive/30 rounded-xl p-4 flex items-center gap-3"
                >
                  <motion.div
                    animate={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5, delay: 1.5, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                  </motion.div>
                  <div>
                    <p className="font-semibold text-destructive">Phishing Detected!</p>
                    <p className="text-sm text-muted-foreground">This site is unsafe</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="absolute -bottom-4 -left-4 bg-card rounded-2xl border border-border shadow-card p-4 flex items-center gap-3 cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Protected</p>
                <p className="text-xs text-muted-foreground">24/7 Active</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
