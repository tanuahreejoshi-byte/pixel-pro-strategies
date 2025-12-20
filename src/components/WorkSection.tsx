import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, ShoppingBag, Heart, Building2 } from "lucide-react";

const projects = [
  {
    icon: ShoppingBag,
    category: "Local SEO",
    title: "Retail Business Success",
    description:
      "Implemented comprehensive local SEO strategy for a retail business in Indore with minimal online visibility.",
    results: [
      "175% increase in organic traffic",
      "22 first-page keyword rankings",
      "55% increase in store footfall",
      "Top 3 Google Maps position",
    ],
    color: "from-primary to-primary-glow",
  },
  {
    icon: TrendingUp,
    category: "Google Ads",
    title: "E-commerce Growth",
    description:
      "Restructured Google Ads account for a fashion e-commerce client facing high costs with inconsistent sales.",
    results: [
      "250% increase in monthly revenue",
      "45% reduction in cost per acquisition",
      "6.2x return on ad spend",
      "80% improvement in conversion rate",
    ],
    color: "from-accent to-accent",
  },
  {
    icon: Heart,
    category: "Meta Ads",
    title: "Healthcare Brand Building",
    description:
      "Created multi-phase Meta Ads campaigns for a healthcare provider with low brand awareness.",
    results: [
      "8,200+ new engaged followers",
      "120+ qualified leads",
      "70% reduced cost per lead",
      "220% increased engagement",
    ],
    color: "from-primary to-primary-glow",
  },
  {
    icon: Building2,
    category: "Content & LinkedIn",
    title: "B2B Lead Generation",
    description:
      "Developed integrated content marketing strategy with LinkedIn for a B2B technology solutions company.",
    results: [
      "360% organic traffic growth",
      "35 industry keyword rankings",
      "85+ qualified B2B leads",
      "3x LinkedIn engagement",
    ],
    color: "from-accent to-accent",
  },
];

export const WorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Successful Campaigns & Results
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real results from real campaigns showcasing strategic approach and
            commitment to measurable outcomes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-card transition-all duration-300"
            >
              <div
                className={`h-2 bg-gradient-to-r ${project.color}`}
              />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                    <project.icon size={20} />
                  </div>
                  <span className="text-sm font-medium text-primary">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-5">
                  {project.description}
                </p>
                <div className="space-y-2">
                  {project.results.map((result, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-foreground font-medium">
                        {result}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
