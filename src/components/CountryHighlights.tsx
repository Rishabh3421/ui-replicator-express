import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, GraduationCap, Users, Clock, FileText } from "lucide-react";

interface CountryHighlightsProps {
  name: string;
  flag_emoji: string;
  visa_types: string[];
  avg_processing_time: string;
  hero_image?: string | null;
}

const CountryHighlights = ({ name, flag_emoji, visa_types, avg_processing_time, hero_image }: CountryHighlightsProps) => {
  const highlights = [
    {
      icon: <GraduationCap className="h-6 w-6 text-accent" />,
      title: "Education Excellence",
      description: "World-class universities and institutions"
    },
    {
      icon: <Users className="h-6 w-6 text-accent" />,
      title: "Cultural Diversity",
      description: "Welcoming multicultural environment"
    },
    {
      icon: <MapPin className="h-6 w-6 text-accent" />,
      title: "Quality of Life",
      description: "High standard of living and safety"
    },
    {
      icon: <FileText className="h-6 w-6 text-accent" />,
      title: "Easy Process",
      description: "Streamlined visa application process"
    }
  ];

  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-4">Why Study in {name}?</h2>
        <p className="text-muted-foreground">Discover what makes {name} {flag_emoji} a top destination</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {highlights.map((highlight, index) => (
          <Card key={index} className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">{highlight.icon}</div>
              <h3 className="font-semibold text-primary mb-2">{highlight.title}</h3>
              <p className="text-sm text-muted-foreground">{highlight.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Stats */}
      <Card className="bg-gradient-to-r from-accent/10 to-primary/10">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-2">{visa_types.length}</div>
              <p className="text-muted-foreground">Visa Categories</p>
              <div className="flex flex-wrap justify-center gap-1 mt-2">
                {visa_types.slice(0, 3).map((type) => (
                  <Badge key={type} variant="outline" className="text-xs">
                    {type}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-primary">Processing Time</span>
              </div>
              <p className="text-muted-foreground text-sm">{avg_processing_time}</p>
            </div>
            
            <div>
              <div className="text-2xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Success Rate</p>
              <p className="text-xs text-accent mt-1">With proper documentation</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default CountryHighlights;