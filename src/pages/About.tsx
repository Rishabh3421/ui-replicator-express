import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import welcomeImage from "@/assets/mdd (1).jpg";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const MD_NAME = "Ravi Kumar";

const testimonials = [
  {
    quote:
      "Easy World made my student visa process simple and stress-free. Highly recommended!",
    name: "Riya Sharma",
    role: "Student Visa Client",
  },
  {
    quote:
      "Professional and trustworthy. My PR approval came faster than expected.",
    name: "Arjun Mehta",
    role: "PR Visa Client",
  },
  {
    quote:
      "Thanks to Easy World, my family is now reunited in Canada. Great service!",
    name: "Neha Kapoor",
    role: "Family Visa Client",
  },
  {
    quote:
      "Transparent process and clear timelines. Got my Work Visa for Australia smoothly.",
    name: "Vikram Singh",
    role: "Work Visa Client",
  },
];

const About = () => {
  // carousel hook with autoplay
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000 }),
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Intro Section */}
      <section className="py-16 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in-left">
              <img
                src={welcomeImage}
                alt="Managing Director - Easy World Educational Consultant"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>

            <div className="space-y-6 animate-fade-in-right">
              <div className="text-accent font-medium text-sm">ABOUT EASY WORLD</div>
              <h1 className="text-3xl lg:text-4xl font-bold text-primary">
                Your trusted partner for{" "}
                <span className="text-accent italic">visas & immigration</span>
              </h1>

              <p className="text-muted-foreground">
                For over <strong>5 years</strong>, Easy World Educational Consultant has been
                guiding students, professionals, and families toward global opportunities. We
                provide transparent, end-to-end support with a focus on trust and results.
              </p>

              <div className="rounded-lg bg-secondary p-4">
                <div className="text-sm text-muted-foreground">Managing Director</div>
                <div className="text-xl font-semibold text-primary">{MD_NAME}</div>
                <p className="mt-2 text-muted-foreground">
                  “At Easy World, we don’t just process visas—we help build futures.”
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "5+ years of expertise",
                  "1000+ successful cases",
                  "Personalized case reviews",
                  "Transparent & hassle-free process",
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-accent" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 pt-2">
                <Button className="bg-accent hover:bg-accent-dark text-accent-foreground animate-pulse-glow">
                  Book Free Consultation
                </Button>
                <Button variant="outline">Explore Services</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 bg-secondary/50 animate-slide-up">
        <div className="container mx-auto px-4">
          <div className="text-accent font-medium text-sm mb-3">WHY CHOOSE US</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10">
            Why choose <span className="text-accent italic">Easy World</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "End-to-end guidance",
                desc:
                  "From profile assessment, documentation, and filing to final decision—we’re with you at every step.",
              },
              {
                title: "Certified & experienced team",
                desc:
                  "A team of trained consultants with updated knowledge of immigration rules and country-specific requirements.",
              },
              {
                title: "Multi-country coverage",
                desc:
                  "Canada, Australia, New Zealand, USA, UK, Europe, Japan, Singapore and more—choose what fits your goals.",
              },
            ].map((item) => (
              <Card key={item.title} className="p-6 border-0 shadow-soft">
                <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-16 bg-background animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <div className="text-accent font-medium text-sm mb-4">TESTIMONIALS</div>
          <h2 className="text-3xl font-bold text-primary mb-8">
            What our clients say <span className="text-accent italic">about us</span>
          </h2>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t) => (
                <Card
                  key={t.name}
                  className="p-6 border-0 shadow-soft text-left min-w-[300px] sm:min-w-[350px] mr-6 bg-secondary/20 backdrop-blur-sm"
                >
                  <div className="text-accent text-4xl mb-3">“</div>
                  <p className="text-muted-foreground mb-4">{t.quote}</p>
                  <div className="font-semibold text-primary">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </Card>
              ))}
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            (Swipe or wait for auto-slide)
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
