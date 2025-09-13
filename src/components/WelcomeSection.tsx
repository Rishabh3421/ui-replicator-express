import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import welcomeImage from "../assets/mddd (1).jpeg";

const parentStagger = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, when: "beforeChildren", staggerChildren: 0.12 },
  },
};

const child = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const imageWrap = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65 } },
};

const feature = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const WelcomeSection = () => {
  const features = [
    "5+ Years Experience",
    "1000+ Success Cases",
    "Personalized Service",
    "100% Transparency",
  ];

  return (
    <div className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: image (never cropped on mobile) */}
          <motion.div
            className="relative"
            variants={imageWrap}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Card wrapper for padding/rounding */}
            <div className="rounded-2xl shadow-2xl bg-white p-4">
              {/* Aspect box ensures full logo visibility; object-contain prevents cropping */}
              <div className="aspect-square w-full">
                <img
                  src={welcomeImage}
                  alt="Easy World MD logo"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Quote: static below image on mobile; overlay on large screens */}
              <div className="mt-4 lg:mt-0 lg:absolute lg:bottom-6 lg:left-6 lg:right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <p className="text-primary font-medium italic text-center">
                    "At Easy World, we don't just process visas—we help build futures."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: staggered text/content */}
          <motion.div
            className="space-y-8"
            variants={parentStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            <motion.div
              className="text-accent font-semibold text-sm uppercase tracking-wider"
              variants={child}
            >
              Who We Are
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-primary leading-tight"
              variants={child}
            >
              Your Global Education
              <br />
              <span className="text-accent">Consultant</span> Partner
            </motion.h2>

            <motion.p
              className="text-muted-foreground text-lg leading-relaxed"
              variants={child}
            >
              With over 5 years of experience, Easy World Educational Consultant has helped 1000+
              students and professionals achieve their dreams of studying, working, and settling
              abroad. We provide personalized, transparent guidance for every step of your journey.
            </motion.p>

            {/* Features grid with small stagger */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ staggerChildren: 0.08 }}
            >
              {features.map((text) => (
                <motion.div
                  key={text}
                  className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105"
                  variants={feature}
                >
                  <div className="bg-accent rounded-full p-2 group-hover:animate-bounce-gentle">
                    <Check className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={child}>
              <Button className="bg-accent hover:bg-accent-dark text-accent-foreground px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Start Your Journey Today
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
