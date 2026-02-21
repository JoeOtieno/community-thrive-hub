import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Users, Handshake, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ways = [
  {
    icon: Heart,
    title: "Donate",
    description: "Support our programs with a one-time or monthly contribution. Every gift makes a difference.",
    link: "/donate",
    cta: "Give Now",
  },
  {
    icon: Users,
    title: "Volunteer",
    description: "Join our team in Kenya or the USA. Share your skills through mentoring, fundraising, or fieldwork.",
    link: "/get-involved",
    cta: "Join Us",
  },
  {
    icon: Handshake,
    title: "Partner",
    description: "Collaborate with us as an NGO, institution, or corporate partner to amplify community impact.",
    link: "/get-involved",
    cta: "Learn More",
  },
];

const GetInvolvedSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Take Action</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            How You Can <span className="text-primary italic">Help</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {ways.map((way, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-background rounded-xl p-8 text-center hover:shadow-lg transition-shadow border border-border"
            >
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-5">
                <way.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{way.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{way.description}</p>
              <Link to={way.link}>
                <Button variant="outline" size="sm" className="gap-1 rounded-full">
                  {way.cta} <ArrowRight size={14} />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
