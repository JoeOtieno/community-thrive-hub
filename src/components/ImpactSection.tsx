import { motion } from "framer-motion";
import volunteerImg from "@/assets/volunteer.jpg";

const stats = [
  { value: "5,000+", label: "Youth Reached Across Kenya" },
  { value: "$500K+", label: "Resources Mobilized" },
  { value: "100+", label: "Workshops & Trainings" },
];

const ImpactSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={volunteerImg}
              alt="GaFORD community impact"
              className="rounded-2xl w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-xl p-5 shadow-lg">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm">Communities</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Our Impact</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Together, We Can Make a{" "}
              <span className="text-primary italic">Difference</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Since our founding, GaFORD has been at the forefront of community transformation — working with youth, women, and vulnerable populations to build lasting change.
            </p>

            <div className="space-y-5">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-accent-foreground">{stat.value.replace(/[^0-9]/g, '').slice(0, 3)}</span>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
