import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import welcomeImage from "@/assets/MD.png";
import Watermark from "@/assets/mddd (1).jpeg";
import TestimonialsSection from "@/components/TestimonialsSection";
import { motion } from "framer-motion";

const MD_NAME = "Sahil Maan";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Intro Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-16"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src={welcomeImage}
                alt="Managing Director - Easy World Educational Consultant"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <img
                src={Watermark} 
                alt="Watermark logo"
                className="absolute top-25 left-[40%] w-[50%] h-[50%] object-contain opacity-10 pointer-events-none select-none"
              />
              <div className="text-accent font-medium text-sm">
                ABOUT EASY WORLD
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-primary">
                Your trusted partner for{" "}
                <span className="text-accent italic">visas & immigration</span>
              </h1>

              <p className="text-muted-foreground">
                For over <strong>5 years</strong>, Easy World Educational
                Consultant has been guiding students, professionals, and
                families toward global opportunities. We provide transparent,
                end-to-end support with a focus on trust and results.
              </p>

              <div className="rounded-lg bg-secondary p-4">
                <div className="text-sm text-muted-foreground">
                  Managing Director
                </div>
                <div className="text-xl font-semibold text-primary">
                  {MD_NAME}
                </div>
                <p className="mt-2 text-muted-foreground">
                  "At Easy World, we don't just process visas—we help build
                  futures."
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "5+ years of expertise",
                  "1000+ successful cases",
                  "Personalized case reviews",
                  "Transparent & hassle-free process",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <Check className="w-5 h-5 text-accent" />
                    <span className="text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex gap-3 pt-2"
              >
                <Button className="bg-accent hover:bg-accent-dark text-accent-foreground">
                  Book Free Consultation
                </Button>
                <Button variant="outline">Explore Services</Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-16 bg-secondary/50"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-accent font-medium text-sm mb-3">
              WHY CHOOSE US
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10">
              Why choose <span className="text-accent italic">Easy World</span>?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "End-to-end guidance",
                desc: "From profile assessment, documentation, and filing to final decision—we're with you at every step.",
              },
              {
                title: "Certified & experienced team",
                desc: "A team of trained consultants with updated knowledge of immigration rules and country-specific requirements.",
              },
              {
                title: "Multi-country coverage",
                desc: "Canada, Australia, New Zealand, USA, UK, Europe, Japan, Singapore and more—choose what fits your goals.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 border-0 shadow-soft">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      <Footer />
    </div>
  );
};

export default About;
