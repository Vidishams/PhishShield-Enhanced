import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { staggerContainer, staggerItem } from "./animations/AnimatedSection";

const faqs = [
  {
    question: "How does PhishShield detect phishing sites?",
    answer: "PhishShield uses advanced machine learning algorithms trained on millions of phishing examples. It analyzes URL patterns, page content, SSL certificates, and domain reputation to identify threats with 99.9% accuracy.",
  },
  {
    question: "Does PhishShield slow down my browsing?",
    answer: "Not at all! Our analysis happens in under one second and runs asynchronously, so you won't notice any delay in your browsing experience. The extension is optimized for minimal resource usage.",
  },
  {
    question: "Is my browsing data collected or stored?",
    answer: "No. PhishShield is designed with privacy as a core principle. All URL analysis happens locally on your device. We never collect, store, or transmit your browsing history or personal data.",
  },
  {
    question: "Which browsers are supported?",
    answer: "Currently, PhishShield is available as a Chrome extension and works on all Chromium-based browsers including Google Chrome, Microsoft Edge, Brave, and Opera.",
  },
  {
    question: "How do I report a false positive or missed threat?",
    answer: "You can report any issues directly through the extension by clicking the PhishShield icon and selecting 'Report Issue'. Our team reviews all submissions to continuously improve detection accuracy.",
  },
  {
    question: "Is PhishShield really free?",
    answer: "Yes! PhishShield is completely free for personal use with no hidden fees, premium tiers, or ads. We believe everyone deserves protection from online threats.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about PhishShield.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={staggerItem}>
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-2xl px-6 data-[state=open]:shadow-card transition-shadow duration-300"
                >
                  <AccordionTrigger className="text-left text-foreground font-medium py-6 hover:no-underline group">
                    <span className="group-hover:text-primary transition-colors duration-200">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
