import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  MessageCircle,
  FileCheck,
  DollarSign,
  BarChart3,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

const benefits = [
  { icon: MessageCircle, text: "Free 30-minute consultation" },
  { icon: FileCheck, text: "Customized strategy for your business" },
  { icon: DollarSign, text: "Transparent pricing, no hidden fees" },
  { icon: BarChart3, text: "Regular reporting & performance updates" },
  { icon: HeartHandshake, text: "Ongoing support and optimization" },
];

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-card"
          >
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
                Let's Work Together
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to See Real Results?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                If you're looking to increase your online visibility, generate
                more leads, or grow your sales through digital channels, I'm
                here to help. Let's create a customized strategy that delivers
                measurable results.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <benefit.icon size={16} />
                  </div>
                  <span className="text-sm text-foreground font-medium">
                    {benefit.text}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="text-center"
            >
              <a
                href="mailto:tanushree@example.com"
                className="inline-flex items-center gap-2 gradient-accent px-8 py-4 rounded-lg text-accent-foreground font-semibold hover:opacity-90 transition-all hover:shadow-lg group"
              >
                Get Your Free Consultation
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                Don't let your competitors dominate the digital space
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
