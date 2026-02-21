import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroVol1 from "@/assets/hero-volunteer-1.jpg";
import heroVol2 from "@/assets/hero-volunteer-2.jpg";

const HeroSection = () => {
  return (
    <section className="bg-background min-h-[85vh] flex items-center overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="py-12 md:py-20"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-foreground">
              Your <span className="text-primary italic">Support</span>
              <br />
              Can Transform
              <br />
              Communities
            </h1>

            <div className="flex items-start gap-8 mb-8">
              {/* Stat */}
              <div className="shrink-0">
                <div className="text-3xl md:text-4xl font-bold text-foreground">5000+</div>
                <div className="text-sm text-muted-foreground">People donated</div>
              </div>

              {/* Subtext */}
              <p className="text-muted-foreground leading-relaxed max-w-sm">
                Empowering communities, transforming lives. Your support can bring hope to those in need.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/donate">
                <Button size="lg" className="rounded-full px-8 text-base">
                  Donate Now
                </Button>
              </Link>
              <Link to="/get-involved">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 text-base border-foreground text-foreground hover:bg-foreground hover:text-background"
                >
                  Get Involved
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right: Images */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:grid grid-cols-2 gap-4 items-end"
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src={heroVol1}
                alt="Volunteer at community center"
                className="w-full h-[420px] object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden -mt-12">
              <img
                src={heroVol2}
                alt="Community member with donation"
                className="w-full h-[480px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
