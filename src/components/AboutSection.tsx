import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  BarChart3,
  Target,
  MessageCircle,
  MapPin,
  Lightbulb,
  Heart,
} from "lucide-react";

const highlights = [
  {
    icon: BarChart3,
    title: "Data-Driven Approach",
    description: "Strategic decisions backed by analytics and insights",
  },
  {
    icon: Target,
    title: "ROI Focused",
    description: "Measurable results that impact your bottom line",
  },
  {
    icon: MessageCircle,
    title: "Transparent Communication",
    description: "Regular updates and honest reporting",
  },
  {
    icon: MapPin,
    title: "Local Market Expert",
    description: "Deep knowledge of Indore market dynamics",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "Always updated with latest industry trends",
  },
  {
    icon: Heart,
    title: "Personalized Attention",
    description: "Every client gets dedicated focus",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Partner in Digital Growth
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Hello! I'm Tanushree Joshi, a passionate digital marketer in
                Indore with one year of professional experience in helping
                businesses succeed online. My journey into digital marketing
                began with a deep interest in understanding how brands can
                leverage the power of the internet to reach and engage their
                target audiences effectively.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                As a digital marketing professional, I combine strategic
                thinking with creative execution to deliver campaigns that make
                a real impact. Whether it's improving your search engine
                rankings through SEO, managing high-performing Google Ads
                campaigns, or developing content that resonates with your
                audience, I bring a comprehensive approach to every project.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My working philosophy is simple: understand your needs, develop
                a clear strategy, execute with precision, track performance
                meticulously, and optimize continuously for better results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 gradient-hero rounded-2xl blur-xl opacity-20" />
              <div className="relative bg-card rounded-2xl p-8 shadow-card border border-border">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  What Makes Me Different
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {highlights.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">
                          {item.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
