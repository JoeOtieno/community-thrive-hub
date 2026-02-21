import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import programHealth from "@/assets/program-health.jpg";
import programEducation from "@/assets/program-education.jpg";
import programMentalHealth from "@/assets/program-mental-health.jpg";
import programEconomic from "@/assets/program-economic.jpg";

const programs = [
  {
    title: "Reproductive Health",
    description: "Menstrual hygiene, family planning awareness, and contraceptive education for young people.",
    image: programHealth,
  },
  {
    title: "Education & Leadership",
    description: "Leadership training, school support interventions, and capacity building for youth.",
    image: programEducation,
  },
  {
    title: "Mental Health",
    description: "Awareness, stigma reduction, counseling, peer support, and community workshops.",
    image: programMentalHealth,
  },
  {
    title: "Economic Empowerment",
    description: "Small business training, financial support, and income-generation activities.",
    image: programEconomic,
  },
];

const ProgramsSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-primary italic">Impact</span> Programs
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2">{program.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{program.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/programs">
            <Button variant="outline" className="gap-2">
              View All Programs <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
