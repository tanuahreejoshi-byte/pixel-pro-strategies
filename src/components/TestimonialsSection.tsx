import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Tanushree is an exceptional digital marketer in Indore! Her SEO strategies helped our business rank on the first page of Google for our most important keywords. We've seen tremendous growth in website traffic and actual customers coming to our store.",
    name: "Rajesh Verma",
    role: "Retail Business Owner",
  },
  {
    quote:
      "Working with Tanushree transformed our online advertising completely. Her expertise in Google Ads and Meta Ads delivered an incredible return on investment. Partnering with her was one of the best business decisions we've made!",
    name: "Priya Desai",
    role: "E-commerce Founder",
  },
  {
    quote:
      "As a digital marketing professional, Tanushree brought fresh insights and proven strategies to our B2B marketing efforts. Her content marketing approach and LinkedIn campaigns helped us establish real authority in our industry.",
    name: "Amit Malhotra",
    role: "Marketing Manager",
  },
  {
    quote:
      "Tanushree's strategic approach to Meta Ads completely transformed our social media presence. She didn't just run ads – she created a comprehensive strategy that built our brand and generated leads at costs we never imagined possible.",
    name: "Neha Kapoor",
    role: "Healthcare Business Owner",
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What My Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it – hear from businesses I've helped
            succeed
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-card transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
