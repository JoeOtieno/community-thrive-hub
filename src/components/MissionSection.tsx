import { motion } from "framer-motion";
import { Heart, BookOpen, Brain, Sprout, Shield, TrendingUp } from "lucide-react";

const pillars = [
  { icon: Heart, label: "Health" },
  { icon: BookOpen, label: "Education" },
  { icon: Brain, label: "Mental Health" },
  { icon: Shield, label: "Protection" },
  { icon: Sprout, label: "Growth" },
  { icon: TrendingUp, label: "Empowerment" },
];

const MissionSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Our Mission</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">
            We believe in the power of{" "}
            <span className="text-primary italic">compassion</span> and{" "}
            <span className="italic">collective</span> action.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed mb-12">
            Our mission is to uplift underserved communities by providing vital resources, education, and support.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex items-center gap-2 bg-muted px-5 py-3 rounded-full"
            >
              <pillar.icon size={16} className="text-primary" />
              <span className="text-sm font-medium text-foreground">{pillar.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
