import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";
import { 
  ArrowLeft, 
  CheckCircle, 
  Clock, 
  Users, 
  FileText, 
  DollarSign,
  Phone,
  Mail,
  MessageCircle
} from "lucide-react";

const ServiceDetail = () => {
  const { service } = useParams();
  const [showEnquiry, setShowEnquiry] = useState(false);

  // Service data
  const serviceData: { [key: string]: any } = {
    "student-visa": {
      title: "Student Visa Services",
      description: "Complete assistance for your study abroad journey with expert guidance and documentation support.",
      image: "/src/assets/student-visa.jpg",
      benefits: [
        "University selection guidance",
        "Application assistance",
        "Document preparation",
        "Visa interview preparation",
        "Pre-departure orientation",
        "Post-arrival support"
      ],
      requirements: [
        "Valid passport",
        "Academic transcripts",
        "Letter of acceptance",
        "Financial proof",
        "English proficiency test scores",
        "Statement of purpose"
      ],
      processingTime: "2-4 weeks",
      successRate: "95%",
      fee: "Starting from ₹50,000"
    },
    "work-visa": {
      title: "Work Visa Services",
      description: "Professional work permits and employment visa assistance for global career opportunities.",
      image: "/src/assets/job-visa.jpg",
      benefits: [
        "Job search assistance",
        "Employer liaison",
        "Work permit processing",
        "Skills assessment",
        "Professional registration",
        "Family visa support"
      ],
      requirements: [
        "Valid passport",
        "Educational certificates",
        "Work experience letters",
        "Skills assessment",
        "Job offer letter",
        "Medical examination"
      ],
      processingTime: "3-6 weeks",
      successRate: "92%",
      fee: "Starting from ₹75,000"
    },
    "tourist-visa": {
      title: "Tourist & Visitor Visa",
      description: "Hassle-free tourist and visitor visa services for your perfect vacation or business trip.",
      image: "/src/assets/business-visa.jpg",
      benefits: [
        "Quick processing",
        "Document verification",
        "Travel itinerary planning",
        "Hotel booking assistance",
        "Travel insurance guidance",
        "24/7 support"
      ],
      requirements: [
        "Valid passport",
        "Passport photographs",
        "Bank statements",
        "Travel itinerary",
        "Hotel bookings",
        "Return ticket"
      ],
      processingTime: "5-10 days",
      successRate: "98%",
      fee: "Starting from ₹15,000"
    },
    "PR-Immigration": {
      title: "PR & Immigration Services",
      description: "Comprehensive permanent residency and immigration solutions for your new life abroad.",
      image: "/src/assets/PR-Immigration.jpg",
      benefits: [
        "Points assessment",
        "Profile optimization",
        "Document collection",
        "Application submission",
        "Interview preparation",
        "Settlement services"
      ],
      requirements: [
        "Valid passport",
        "Educational credentials",
        "Work experience proof",
        "Language test results",
        "Medical examination",
        "Police clearance"
      ],
      processingTime: "6-12 months",
      successRate: "88%",
      fee: "Starting from ₹1,50,000"
    },
    "business-visa": {
      title: "Business & Investor Visa",
      description: "Business and investment visa programs for entrepreneurs and investors seeking global opportunities.",
      image: "/src/assets/business.jpg",
      benefits: [
        "Business plan development",
        "Investment guidance",
        "Legal compliance",
        "Market analysis",
        "Incorporation support",
        "Ongoing consultation"
      ],
      requirements: [
        "Valid passport",
        "Business plan",
        "Financial statements",
        "Investment proof",
        "Professional references",
        "Due diligence reports"
      ],
      processingTime: "4-8 weeks",
      successRate: "85%",
      fee: "Starting from ₹2,00,000"
    },
    "family-visa": {
      title: "Family & Dependent Visa",
      description: "Family reunification and dependent visa services to bring your loved ones together.",
      image: "/src/assets/family.jpg",
      benefits: [
        "Relationship verification",
        "Document authentication",
        "Application guidance",
        "Interview preparation",
        "Settlement planning",
        "Educational support"
      ],
      requirements: [
        "Valid passport",
        "Relationship proof",
        "Sponsor documents",
        "Financial support proof",
        "Medical examination",
        "Background checks"
      ],
      processingTime: "3-6 months",
      successRate: "90%",
      fee: "Starting from ₹80,000"
    }
  };

  const currentService = serviceData[service || ""];

  if (!currentService) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">The requested service could not be found.</p>
          <Button asChild>
            <Link to="/services">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-secondary/20 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-primary">{currentService.title}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden mb-8">
                <img 
                  src={currentService.image} 
                  alt={currentService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h1 className="text-4xl font-bold mb-2">{currentService.title}</h1>
                  <p className="text-xl opacity-90">{currentService.description}</p>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              <Card className="p-6 text-center">
                <Clock className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-1">{currentService.processingTime}</div>
                <div className="text-sm text-muted-foreground">Processing Time</div>
              </Card>
              <Card className="p-6 text-center">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-1">{currentService.successRate}</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </Card>
              <Card className="p-6 text-center">
                <DollarSign className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-1">{currentService.fee}</div>
                <div className="text-sm text-muted-foreground">Service Fee</div>
              </Card>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-primary mb-6">What We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentService.benefits.map((benefit: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-primary mb-6">Required Documents</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentService.requirements.map((requirement: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{requirement}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Quick Apply */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Ready to Apply?</h3>
                <p className="text-muted-foreground mb-6">
                  Get started with your {currentService.title.toLowerCase()} application today.
                </p>
                <Button 
                  className="w-full mb-4" 
                  size="lg"
                  onClick={() => setShowEnquiry(true)}
                >
                  Apply Now
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/contact">Schedule Consultation</Link>
                </Button>
              </Card>

              {/* Contact */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Need Help?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <div>
                      <div className="font-medium">Call Us</div>
                      <div className="text-sm text-muted-foreground">+91 98765 43210</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-accent" />
                    <div>
                      <div className="font-medium">Email Us</div>
                      <div className="text-sm text-muted-foreground">info@easyworld.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5 text-accent" />
                    <div>
                      <div className="font-medium">WhatsApp</div>
                      <div className="text-sm text-muted-foreground">+91 98765 43210</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Button variant="outline" asChild size="lg">
            <Link to="/services">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Services
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Enquiry Form Modal */}
      {showEnquiry && (
        <EnquiryForm isOpen={showEnquiry} onClose={() => setShowEnquiry(false)} />
      )}

      <Footer />
    </div>
  );
};

export default ServiceDetail;