import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      className="bg-background min-h-[85vh] flex items-center overflow-hidden relative"
      style={{
        backgroundImage: "url('/public/children.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="py-12 md:py-20"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-foreground">
              <span className="text-white">Empowering communities,</span> <span className="text-primary italic">transforming</span> <span className="text-white">lives.</span>
            </h1>

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
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    </section>
  );
};

export default HeroSection;
