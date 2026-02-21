import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";

const testimonials = [
  {
    quote: "GaFORD's reproductive health program changed my life. I learned things no one ever taught me in school, and now I'm able to teach others in my village.",
    name: "James Ochieng",
    role: "Youth Advocate, Kisumu",
    image: testimonial1,
  },
  {
    quote: "Through the economic empowerment program, I started a small tailoring business. I can now provide for my family and mentor other young women.",
    name: "Faith Akinyi",
    role: "Program Graduate, Nairobi",
    image: testimonial2,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Real Stories, Real <span className="text-primary italic">Change</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-xl p-6"
            >
              <Quote size={28} className="text-primary mb-4" />
              <p className="text-secondary-foreground/80 leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-secondary-foreground/60">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
