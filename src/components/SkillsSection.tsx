import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Megaphone,
  Search,
  MousePointerClick,
  Facebook,
  FileText,
  Linkedin,
} from "lucide-react";

const skills = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "End-to-end digital marketing solutions integrating multiple channels for maximum impact. From market research to campaign execution, I manage every aspect of your digital presence.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    description:
      "Improve visibility on Google with proven SEO strategies including keyword research, on-page optimization, technical SEO, and local SEO to dominate Indore search results.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: MousePointerClick,
    title: "Google Ads",
    description:
      "Create and manage effective Google Ads campaigns that generate quality leads while maximizing ROI. Expert in search, display, shopping, and video advertising.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Facebook,
    title: "Meta Ads",
    description:
      "Design targeted Facebook and Instagram campaigns that connect your brand with the right audience. Expert in audience segmentation, creative development, and A/B testing.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description:
      "Create strategic, SEO-optimized content that educates, engages, and converts. From blog posts to email campaigns, every piece guides customers through their journey.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Linkedin,
    title: "LinkedIn Marketing",
    description:
      "Leverage LinkedIn for B2B brand building, networking, and lead generation. Expert in profile optimization, strategic content, and targeted lead generation campaigns.",
    color: "bg-accent/10 text-accent",
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            My Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Digital Marketing Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A full range of services to help your business thrive in the
            competitive online landscape
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-6 border border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${skill.color} mb-5 group-hover:scale-110 transition-transform`}
              >
                <skill.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {skill.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
