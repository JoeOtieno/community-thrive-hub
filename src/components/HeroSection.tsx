import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Users, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="container mx-auto relative z-10 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Empowering Youth.{" "}
            <span className="text-primary">Strengthening</span>{" "}
            Communities.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg leading-relaxed">
            GaFORD — Gateway for Rural Development — drives change through health education, youth empowerment, and community-led action in Kenya and beyond.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/donate">
              <Button size="lg" className="gap-2 text-base px-8">
                <Heart size={18} /> Donate Now
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Users size={18} /> Get Involved <ArrowRight size={16} />
              </Button>
            </Link>
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex gap-8 mt-12"
          >
            {[
              { value: "5,000+", label: "Youth Reached" },
              { value: "100+", label: "Workshops" },
              { value: "15+", label: "Communities" },
            ].map((stat, i) => (
              <div key={i} className="text-primary-foreground">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-primary-foreground/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
