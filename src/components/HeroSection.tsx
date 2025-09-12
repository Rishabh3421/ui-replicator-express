import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";

import heroAirplane from "@/assets/hero-airplane.jpg";
import heroAirport from "@/assets/hero-airport.jpg";
import heroDocuments from "@/assets/hero-documents.jpg";
import heroStudents from "@/assets/hero-students.jpg";

const textParent = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.12 },
  },
};

const textChild = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const cardSlideIn = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.15 } },
};

const indicatorsFade = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
};

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // main enquiry form (on hero)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [visaType, setVisaType] = useState("");

  // modal state + modal form fields
  const [showModal, setShowModal] = useState(false);
  const [modalName, setModalName] = useState("");
  const [modalEmail, setModalEmail] = useState("");
  const [modalPhone, setModalPhone] = useState("");
  const [modalVisa, setModalVisa] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  const slides = [
    { image: heroAirplane, alt: "Flying airplane - Immigration dreams" },
    { image: heroAirport, alt: "Airport departure - Travel abroad" },
    { image: heroDocuments, alt: "Visa documents - Immigration process" },
    { image: heroStudents, alt: "International students - Study abroad success" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // WhatsApp handler for hero quick enquiry
  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nVisa Type: ${visaType}`;
    window.open(
      `https://wa.me/919050519168?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    setName("");
    setEmail("");
    setPhone("");
    setVisaType("");
  };

  // WhatsApp handler for modal apply form
  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `APPLY NOW Enquiry\n\nName: ${modalName}\nEmail: ${modalEmail}\nPhone: ${modalPhone}\nVisa Type: ${modalVisa}\nMessage: ${modalMessage}`;
    window.open(
      `https://wa.me/919050519168?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    // reset
    setModalName("");
    setModalEmail("");
    setModalPhone("");
    setModalVisa("");
    setModalMessage("");
    setShowModal(false);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Left gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
          {/* LEFT: animated text block */}
          <motion.div
            className="lg:col-span-5 space-y-8"
            variants={textParent}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium"
              variants={textChild}
            >
              Managing Director: Ravi Kumar
            </motion.div>

            <motion.h1
              variants={textChild}
              className="text-white text-5xl lg:text-7xl font-bold leading-tight max-w-[18ch]"
            >
              Anywhere You Want to <span className="text-accent">Be</span>
            </motion.h1>

            <motion.p
              variants={textChild}
              className="text-white/90 text-xl lg:text-2xl leading-relaxed max-w-[54ch]"
            >
              Study. Work. Travel. Settle Abroad with Confidence.
            </motion.p>

            <motion.div variants={textChild} className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setShowModal(true)}
                className="bg-accent text-accent-foreground px-8 py-4 text-lg animate-pulse"
              >
                Apply Now
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowModal(true)}
                className="border-2 border-white text-black hover:bg-white hover:text-primary px-8 py-4 text-lg"
              >
                Free Consultation
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT: animated form card */}
          <motion.div
            className="lg:col-span-7 lg:justify-self-end"
            variants={cardSlideIn}
            initial="hidden"
            animate="visible"
          >
            <div className="w-full bg-white/15 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
              <h3 className="text-2xl font-semibold mb-6 text-center text-white">Quick Enquiry</h3>

              <form
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                onSubmit={handleEnquirySubmit}
              >
                <Input
                  placeholder="Your Name"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 w-full"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 w-full"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <Select value={visaType} onValueChange={setVisaType}>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white w-full">
                    <SelectValue placeholder="Select Visa Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Student Visa">Student Visa</SelectItem>
                    <SelectItem value="Work Visa">Work Visa</SelectItem>
                    <SelectItem value="PR Visa">PR Visa</SelectItem>
                    <SelectItem value="Tourist Visa">Tourist Visa</SelectItem>
                    <SelectItem value="Business Visa">Business Visa</SelectItem>
                    <SelectItem value="Family Visa">Family Visa</SelectItem>
                  </SelectContent>
                </Select>

                <div className="md:col-span-2">
                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3"
                  >
                    Submit Enquiry
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slide indicators */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20"
        variants={indicatorsFade}
        initial="hidden"
        animate="visible"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === currentSlide ? "bg-accent scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </motion.div>

      {/* Modal Apply Now form */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Apply for Visa Consultation</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleModalSubmit} className="space-y-4">
            <Input
              placeholder="Full Name"
              value={modalName}
              onChange={(e) => setModalName(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={modalEmail}
              onChange={(e) => setModalEmail(e.target.value)}
              required
            />
            <Input
              type="tel"
              placeholder="Phone Number"
              value={modalPhone}
              onChange={(e) => setModalPhone(e.target.value)}
              required
            />
            <Select value={modalVisa} onValueChange={setModalVisa}>
              <SelectTrigger>
                <SelectValue placeholder="Select Visa Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Student Visa">Student Visa</SelectItem>
                <SelectItem value="Work Visa">Work Visa</SelectItem>
                <SelectItem value="PR Visa">PR Visa</SelectItem>
                <SelectItem value="Tourist Visa">Tourist Visa</SelectItem>
                <SelectItem value="Business Visa">Business Visa</SelectItem>
                <SelectItem value="Family Visa">Family Visa</SelectItem>
              </SelectContent>
            </Select>
            <textarea
              className="w-full rounded-md border p-2"
              rows={3}
              placeholder="Additional message (optional)"
              value={modalMessage}
              onChange={(e) => setModalMessage(e.target.value)}
            />

            <div className="flex gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowModal(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button type="submit" className="flex-1 bg-accent hover:bg-accent/90">
                Submit
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HeroSection;
