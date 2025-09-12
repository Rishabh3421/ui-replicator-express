import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
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
    }
  ];

  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Success Stories</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
            What Our Clients <span className="text-accent">Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real experiences from real people who achieved their dreams with Easy World.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group p-8 hover:shadow-2xl transition-all duration-500 border-0 shadow-soft hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
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
                  <div className="text-3xl group-hover:animate-bounce-gentle">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-bold text-primary group-hover:text-accent transition-colors duration-300">
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

        <div className="text-center">
          <Button className="bg-accent hover:bg-accent-dark text-accent-foreground px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Read More Success Stories
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
// added comment