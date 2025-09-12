import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import jobVisaImage from "@/assets/job-visa.jpg";
import businessVisaImage from "@/assets/business-visa.jpg";
import studentVisaImage from "@/assets/student-visa.jpg";
import prImmigrationImage from "@/assets/PR-Immigration.jpg";
import business from "@/assets/business.jpg";
import family from "@/assets/family.jpg";

const slugify = (str: string) =>
  str.toLowerCase().replace(/&/g, "and").replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");

const Services = () => {
  const services = [
    {
      title: "Student Visa",
      description: "Study abroad programs and student visa assistance",
      image: studentVisaImage,
      link: "/services/student-visa"
    },
    {
      title: "Work Visa",
      description: "Professional work permits and employment visas",
      image: jobVisaImage,
      link: "/services/work-visa"
    },
    {
      title: "Tourist & Visitor",
      description: "Tourism and visitor visa services",
      image: businessVisaImage,
      link: "/services/tourist-visa"
    },
    {
      title: "PR & Immigration",
      description: "Permanent residency and immigration solutions",
      image: prImmigrationImage,
      link: "/services/PR-Immigration"
    },
    {
      title: "Business & Investor",
      description: "Business and investment visa programs",
      image: business,
      link: "/services/business-visa"
    },
    {
      title: "Family & Dependent",
      description: "Family reunification and dependent visas",
      image: family,
      link: "/services/family-visa"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Services Grid */}
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">What We Do</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              Our Visa <span className="text-accent">Services</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive visa and immigration services tailored to your specific needs and aspirations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-soft bg-background hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <p className="text-sm">{service.description}</p>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <div className="h-1 w-12 bg-accent mx-auto mb-4 transition-all duration-300 group-hover:w-20"></div>
                    <Button 
                      variant="outline" 
                      className="text-primary border-primary hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 hover:scale-105"
                      asChild
                    >
                      <Link to={`/services/${service.link.split('/services/')[1]}`}>
                        Explore More
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us + Process */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-16 bg-secondary"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-accent font-medium text-sm mb-3">WHY CHOOSE US</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Trusted guidance from{" "}
                <span className="text-accent italic">experienced</span> consultants
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Licensed & Compliant",
                    desc: "Advisory aligned with latest immigration rules and policies.",
                    icon: "✅",
                  },
                  {
                    title: "Profile-First Strategy",
                    desc: "Tailored country/course selection for your background.",
                    icon: "🎯",
                  },
                  {
                    title: "Document Perfection",
                    desc: "SOPs, LORs, resume, and forms prepared to embassy standards.",
                    icon: "🧾",
                  },
                  {
                    title: "End-to-End Support",
                    desc: "From eligibility to post-landing—one partner for all stages.",
                    icon: "🤝",
                  },
                ].map((f, index) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-5 border-0 shadow-soft bg-background">
                      <div className="text-2xl">{f.icon}</div>
                      <h3 className="mt-3 font-semibold text-primary">{f.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Simple Process */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-primary text-primary-foreground rounded-2xl p-8"
            >
              <div className="text-accent font-medium text-sm mb-2">OUR PROCESS</div>
              <h3 className="text-2xl font-bold mb-6">
                A clear path from enquiry to approval
              </h3>
              <ol className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "Free Eligibility Check",
                    text: "Share goals and documents for a quick profile assessment.",
                  },
                  {
                    step: "02",
                    title: "Strategy & Documents",
                    text: "We finalize your country/program and perfect your paperwork.",
                  },
                  {
                    step: "03",
                    title: "Application & Visa",
                    text: "Submit applications, schedule biometrics/interview, and track.",
                  },
                  {
                    step: "04",
                    title: "Post-Landing Support",
                    text: "Accommodation tips, insurance, banking, and next-steps.",
                  },
                ].map((s, index) => (
                  <motion.li 
                    key={s.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <span className="font-bold text-accent">{s.step}</span>
                    <div>
                      <div className="font-semibold">{s.title}</div>
                      <div className="text-sm opacity-90">{s.text}</div>
                    </div>
                  </motion.li>
                ))}
              </ol>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <Button
                  className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90"
                  asChild
                >
                  <Link to="/contact">Book Free Consultation</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Services;
