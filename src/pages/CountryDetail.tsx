import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";
import CountryHighlights from "@/components/CountryHighlights";
import { ArrowLeft, MapPin, Clock, CheckCircle, MessageCircle, Mail } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Country {
  id: string;
  slug: string;
  name: string;
  flag_emoji: string;
  hero_image: string | null;
  short_blurb: string;
  top_colleges: any;
  best_places: any;
  why_choose: string[];
  required_docs: string[];
  avg_processing_time: string;
  visa_types: string[];
}

const CountryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [country, setCountry] = useState<Country | null>(null);
  const [selectedVisaType, setSelectedVisaType] = useState<string | null>(null);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fallback country images
  const countryImages: { [key: string]: string } = {
    canada: "https://images.unsplash.com/photo-1530025809667-1f4bcff8e60f?q=80&w=1691&auto=format&fit=crop",
    australia: "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=1633&auto=format&fit=crop",
    "new-zealand": "https://images.unsplash.com/photo-1683712922661-71b6f671ac25?q=80&w=1170&auto=format&fit=crop",
    usa: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1499&auto=format&fit=crop",
    uk: "https://images.unsplash.com/photo-1464021025634-49b81a77a858?q=80&w=1170&auto=format&fit=crop",
    europe: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1170&auto=format&fit=crop",
    japan: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1170&auto=format&fit=crop",
    singapore: "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=1171&auto=format&fit=crop"
  };

  const getCountryImage = () => {
    return country?.hero_image || countryImages[slug || ''] || countryImages.canada;
  };

  useEffect(() => {
    if (slug) {
      fetchCountry();
    }
  }, [slug]);

  const fetchCountry = async () => {
    try {
      const { data, error } = await supabase
        .from("countries")
        .select("*")
        .eq("slug", slug)
        .single();

      if (error) throw error;
      setCountry(data);
    } catch (error) {
      console.error("Error fetching country:", error);
      toast({
        title: "Error",
        description: "Country not found",
        variant: "destructive",
      });
      navigate("/countries");
    } finally {
      setLoading(false);
    }
  };

  const handleApply = () => {
    setShowEnquiry(true);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/9050519168", "_blank");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!country) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Country Not Found</h1>
          <Link to="/countries">
            <Button>Back to Countries</Button>
          </Link>
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
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-primary hover:text-accent">Home</Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/countries" className="text-primary hover:text-accent">Countries</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-muted-foreground">{country.name}</span>
          </nav>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 container mx-auto px-4 py-8">
        {/* Main Content */}
        <div className="flex-1">
          {/* Hero Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl overflow-hidden">
              <div className="relative">
                {/* Background Image - Always show */}
                <div className="absolute inset-0">
                  <img 
                    src={getCountryImage()}
                    alt={`${country.name} landscape`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-dark/80"></div>
                </div>
                
                <div className="relative p-8 text-white min-h-[300px] flex items-center">
                  <div className="flex items-center gap-6 w-full">
                    <div className="text-8xl">{country.flag_emoji}</div>
                    <div className="flex-1">
                      <h1 className="text-4xl lg:text-5xl font-bold mb-4">{country.name}</h1>
                      <p className="text-xl text-white/90 mb-6">{country.short_blurb}</p>
                      <Button 
                        size="lg" 
                        className="bg-white text-primary hover:bg-white/90"
                        onClick={handleApply}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Country Highlights */}
          <CountryHighlights 
            name={country.name}
            flag_emoji={country.flag_emoji}
            visa_types={country.visa_types}
            avg_processing_time={country.avg_processing_time}
            hero_image={country.hero_image}
          />

          {/* Why Choose Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Why Choose {country.name}?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {country.why_choose.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{reason}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Top Colleges Section */}
          {country.top_colleges && Array.isArray(country.top_colleges) && country.top_colleges.length > 0 && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Top Colleges/Universities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {country.top_colleges.map((college: any, index: number) => (
                   <Card key={index} className="hover:shadow-lg transition-shadow">
                     <CardContent className="p-6">
                       <div className="flex items-start justify-between mb-3">
                         <h3 className="font-semibold text-primary flex-1">{college.name}</h3>
                         {college.rank && (
                           <Badge variant="secondary" className="ml-2">
                             #{college.rank}
                           </Badge>
                         )}
                       </div>
                       <div className="flex items-center gap-2 text-muted-foreground mb-2">
                         <MapPin className="h-4 w-4" />
                         <span className="text-sm">{college.city}</span>
                       </div>
                       {college.description && (
                         <p className="text-sm text-muted-foreground">{college.description}</p>
                       )}
                     </CardContent>
                   </Card>
                 ))}
              </div>
            </section>
          )}

          {/* Best Places Section */}
          {country.best_places && Array.isArray(country.best_places) && country.best_places.length > 0 && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Best Places to Live/Study</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {country.best_places.map((place: any, index: number) => (
                   <Card key={index} className="hover:shadow-lg transition-shadow">
                     <CardContent className="p-6">
                       <h3 className="font-semibold text-primary mb-2">{place.name}</h3>
                       <div className="flex items-center gap-2 text-muted-foreground mb-2">
                         <MapPin className="h-4 w-4" />
                         <span className="text-sm">{place.city}</span>
                       </div>
                       {place.description && (
                         <p className="text-sm text-muted-foreground">{place.description}</p>
                       )}
                     </CardContent>
                   </Card>
                 ))}
              </div>
            </section>
          )}

          {/* Visa Information Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Visa Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Available Visa Types:</h3>
                <div className="flex flex-wrap gap-3">
                  {country.visa_types.map((type) => (
                    <Badge
                      key={type}
                      variant={selectedVisaType === type ? "default" : "outline"}
                      className="cursor-pointer text-sm py-2 px-4"
                      onClick={() => setSelectedVisaType(selectedVisaType === type ? null : type)}
                    >
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>

              {selectedVisaType && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span>{selectedVisaType} Visa Requirements</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-3">Required Documents:</h4>
                        <ul className="space-y-2">
                          {country.required_docs.map((doc, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                              <span className="text-muted-foreground">{doc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {country.avg_processing_time && (
                        <div className="flex items-center gap-2 p-4 bg-secondary/20 rounded-lg">
                          <Clock className="h-5 w-5 text-accent" />
                          <span className="font-medium">Processing Time: {country.avg_processing_time}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </section>

          {/* Back to Countries */}
          <div className="mb-8">
            <Link to="/countries">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Countries
              </Button>
            </Link>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-80">
          <div className="sticky top-8 space-y-6">
            {/* Quick Apply Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Ready to Apply?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={handleApply}
                >
                  Apply for {country.name}
                </Button>
                
                <div className="text-center text-sm text-muted-foreground">
                  Get expert guidance for your visa application
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full gap-2"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full gap-2"
                  onClick={() => window.location.href = "mailto:mdeasyworld@gmail.com"}
                >
                  <Mail className="h-4 w-4" />
                  Email Us
                </Button>
                
                <div className="text-center text-xs text-muted-foreground pt-2">
                  Get free consultation and expert advice
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Enquiry Form Modal */}
      {showEnquiry && (
        <EnquiryForm 
          isOpen={showEnquiry}
          onClose={() => setShowEnquiry(false)}
          defaultCountry={country.name}
          defaultVisaType={selectedVisaType}
        />
      )}

      <Footer />
    </div>
  );
};

export default CountryDetail;