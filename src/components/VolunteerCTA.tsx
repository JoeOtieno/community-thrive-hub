import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import volunteerImg from "@/assets/volunteer.jpg";

const benefits = [
  "Make a direct impact on youth lives",
  "Gain field experience in community development",
  "Join a passionate global network",
  "Flexible commitments — remote & on-site",
];

const VolunteerCTA = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Join The Movement</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Involved:{" "}
              <span className="text-primary italic">Become a Volunteer</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We welcome volunteers from Kenya and around the world. Whether you can give your time on the ground or contribute skills remotely, there's a place for you at GaFORD.
            </p>
            <ul className="space-y-3 mb-8">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <CheckCircle size={18} className="text-primary shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <Link to="/get-involved">
              <Button size="lg" className="gap-2">
                Volunteer Now <ArrowRight size={16} />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={volunteerImg}
              alt="Volunteer with GaFORD"
              className="rounded-2xl w-full object-cover aspect-[4/3]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerCTA;
