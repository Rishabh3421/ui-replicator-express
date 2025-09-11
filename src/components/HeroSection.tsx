import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useEffect } from "react";
import heroAirplane from "@/assets/hero-airplane.jpg";
import heroAirport from "@/assets/hero-airport.jpg";
import heroDocuments from "@/assets/hero-documents.jpg";
import heroStudents from "@/assets/hero-students.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { image: heroAirplane, alt: "Flying airplane - Immigration dreams" },
    { image: heroAirport, alt: "Airport departure - Travel abroad" },
    { image: heroDocuments, alt: "Visa documents - Immigration process" },
    { image: heroStudents, alt: "International students - Study abroad success" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

      {/* Left Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 py-20 relative z-10 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-8 animate-fade-in-left">
            <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium animate-bounce-gentle">
              Managing Director: Ravi Kumar
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
              Anywhere You Want to <span className="text-accent">Be</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              Study. Work. Travel. Settle Abroad with Confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-accent hover:bg-accent-dark text-accent-foreground px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Apply Now
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg transition-all duration-300 hover:scale-105">
                Free Consultation
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in-right lg:justify-self-end">
            <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 max-w-md w-full">
              <h3 className="text-2xl font-semibold mb-6 text-center text-white">Quick Enquiry</h3>
              <form className="space-y-4">
                <Input 
                  placeholder="Your Name" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 transition-all duration-300"
                />
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 transition-all duration-300"
                />
                <Input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 transition-all duration-300"
                />
                <Select>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white">
                    <SelectValue placeholder="Select Visa Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student Visa</SelectItem>
                    <SelectItem value="work">Work Visa</SelectItem>
                    <SelectItem value="pr">PR Visa</SelectItem>
                    <SelectItem value="tourist">Tourist Visa</SelectItem>
                    <SelectItem value="business">Business Visa</SelectItem>
                    <SelectItem value="family">Family Visa</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="w-full bg-accent hover:bg-accent-dark text-accent-foreground py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Submit Enquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-accent scale-125" 
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;