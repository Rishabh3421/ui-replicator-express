import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import jobVisaImage from "@/assets/job-visa.jpg";
import businessVisaImage from "@/assets/business-visa.jpg";
import studentVisaImage from "@/assets/student-visa.jpg";

const slugify = (str: string) =>
  str.toLowerCase().replace(/&/g, "and").replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");

const Services = () => {
  const services = [
    {
      title: "Job Visa",
      image: jobVisaImage,
      description: "Professional job visa services for skilled workers",
    },
    {
      title: "Business Visa",
      image: businessVisaImage,
      description: "Business visa solutions for entrepreneurs and investors",
    },
    {
      title: "Diplomatic Visa",
      image: studentVisaImage,
      description: "Diplomatic visa services for official government business",
    },
    {
      title: "Worker Visa",
      image: jobVisaImage,
      description: "Worker visa assistance for employment opportunities",
    },
    {
      title: "Free Visa Enquiry",
      image: businessVisaImage,
      description: "Free consultation and visa enquiry services",
    },
    {
      title: "Student Visas",
      image: studentVisaImage,
      description: "Student visa services for educational opportunities abroad",
    },
  ].map((s) => ({ ...s, link: `/services/${slugify(s.title)}` }));

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Services Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              What We Do
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary leading-tight">
              Our Visa <span className="text-accent">Services</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
              Comprehensive visa and immigration services tailored to your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-soft bg-background hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Hover description */}
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <p className="text-sm">{service.description}</p>
                  </div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <div className="h-1 w-12 bg-accent mx-auto mb-4 transition-all duration-300 group-hover:w-20" />
                  <Button
                    variant="outline"
                    className="text-primary border-primary hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <Link to={service.link}>Explore More</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Replacement for Team Section: Why Choose Us + Process */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Why Choose Us */}
            <div>
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
                ].map((f) => (
                  <Card key={f.title} className="p-5 border-0 shadow-soft bg-background">
                    <div className="text-2xl">{f.icon}</div>
                    <h3 className="mt-3 font-semibold text-primary">{f.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Simple Process */}
            <div className="bg-primary text-primary-foreground rounded-2xl p-8">
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
                ].map((s) => (
                  <li key={s.step} className="flex items-start gap-4">
                    <span className="font-bold text-accent">{s.step}</span>
                    <div>
                      <div className="font-semibold">{s.title}</div>
                      <div className="text-sm opacity-90">{s.text}</div>
                    </div>
                  </li>
                ))}
              </ol>

              <Button
                className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90"
                asChild
              >
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
