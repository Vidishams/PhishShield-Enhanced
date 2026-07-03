import { motion } from "framer-motion";
import { ArrowRight, Link2, Search, ShieldCheck, Bell } from "lucide-react";
import { staggerContainer, staggerItem } from "./animations/AnimatedSection";

const steps = [
  {
    step: "01",
    icon: Link2,
    title: "Encounter a Link",
    description: "Click any shortened or suspicious URL while browsing the web.",
  },
  {
    step: "02",
    icon: Search,
    title: "Instant Analysis",
    description: "PhishShield unshortens the URL and scans the destination for threats.",
  },
  {
    step: "03",
    icon: ShieldCheck,
    title: "AI Detection",
    description: "Our machine learning model analyzes page content for phishing patterns.",
  },
  {
    step: "04",
    icon: Bell,
    title: "Get Protected",
    description: "Receive instant alerts if threats are detected, keeping you safe.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Protection in 4 Simple Steps
          </h2>
          <p className="text-muted-foreground">
            PhishShield works silently in the background, analyzing every link you encounter.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((item, index) => (
            <motion.div 
              key={item.step} 
              variants={staggerItem}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="hidden lg:block absolute top-16 left-[60%] w-full"
                >
                  <ArrowRight className="w-6 h-6 text-border" />
                </motion.div>
              )}

              <div className="text-center">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative inline-flex mb-6"
                >
                  <motion.div 
                    whileHover={{ rotate: 5 }}
                    className="w-24 h-24 rounded-3xl bg-muted flex items-center justify-center transition-colors duration-300 hover:bg-muted/80"
                  >
                    <item.icon className="w-10 h-10 text-primary" />
                  </motion.div>
                  <motion.span 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full gradient-primary text-primary-foreground text-sm font-bold flex items-center justify-center"
                  >
                    {item.step}
                  </motion.span>
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
