import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <div className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-accent font-medium text-sm">TESTIMONIAL</div>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Feedback from our <span className="text-accent italic">Clients</span>
            </h2>
            
            <Card className="bg-background text-foreground p-6">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Fraudister from countries campaigned under the legal case we 
                previously are we. Business lawyers in house business laws. Business 
                We are obliged to propose appropriate business laws for our customers."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-muted rounded-full"></div>
                <div>
                  <div className="font-semibold">Alex Sam Martin</div>
                  <div className="text-sm text-muted-foreground">Director</div>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-accent text-accent-foreground p-6 rounded-lg text-center">
                <div className="text-3xl font-bold">852</div>
                <div className="text-sm">Visas are Approved</div>
              </div>
              <div className="bg-accent text-accent-foreground p-6 rounded-lg text-center">
                <div className="text-3xl font-bold">630</div>
                <div className="text-sm">Satisfied Clients</div>
              </div>
            </div>
            <div className="space-y-6 mt-8">
              <div className="bg-accent text-accent-foreground p-6 rounded-lg text-center">
                <div className="text-3xl font-bold">900</div>
                <div className="text-sm">Placed Students</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;