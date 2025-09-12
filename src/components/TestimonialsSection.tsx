import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Riya Sharma",
      role: "Student - Canada",
      image: "👩‍🎓",
      content: "Easy World made my dream of studying in Canada come true. Their personalized guidance and transparent process gave me confidence throughout my visa journey.",
      rating: 5
    },
    {
      name: "Arjun Mehta",
      role: "IT Professional - Australia", 
      image: "👨‍💻",
      content: "Exceptional service! The team helped me secure my work visa to Australia quickly and efficiently. Their expertise made all the difference.",
      rating: 5
    },
    {
      name: "Neha Kapoor",
      role: "Family Visa - UK",
      image: "👩‍👧‍👦",
      content: "Professional, reliable, and caring. Easy World helped reunite our family in the UK. Forever grateful for their dedicated support and guidance.",
      rating: 5
    },
    {
      name: "Raj Patel",
      role: "Business Visa - USA",
      image: "👨‍💼",
      content: "Outstanding business visa support. They handled all complexities with professionalism and helped me establish my business in the USA seamlessly.",
      rating: 5
    },
    {
      name: "Priya Singh",
      role: "PR - New Zealand",
      image: "👩‍⚕️",
      content: "The PR process seemed overwhelming until I found Easy World. Their step-by-step guidance made my New Zealand immigration dream a reality.",
      rating: 5
    }
  ];

  // Duplicate testimonials for infinite scroll
  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position when we've scrolled past the first set
      if (scrollPosition >= scrollContainer.scrollWidth / 3) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Success Stories</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
            What Our Clients <span className="text-accent">Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real experiences from real people who achieved their dreams with Easy World.
          </p>
        </motion.div>
        
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-hidden"
            style={{ 
              scrollBehavior: 'auto',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {infiniteTestimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="flex-shrink-0 w-80 p-8 hover:shadow-2xl transition-all duration-500 border-0 shadow-soft hover:-translate-y-2"
              >
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-accent/30" />
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">
                      {testimonial.image}
                    </div>
                    <div>
                      <div className="font-bold text-primary">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          {/* <Button className="bg-accent hover:bg-accent-dark text-accent-foreground px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Read More Success Stories
          </Button> */}
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsSection;