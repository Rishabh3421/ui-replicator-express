import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, ArrowRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Country {
  id: string;
  slug: string;
  name: string;
  flag_emoji: string;
  hero_image: string | null;
  short_blurb: string;
  visa_types: string[];
}

const Countries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVisaType, setSelectedVisaType] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const allVisaTypes = ["Student", "Work", "PR", "Tourist", "Business", "Family"];

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    filterCountries();
  }, [countries, searchTerm, selectedVisaType]);

  const fetchCountries = async () => {
    try {
      const { data, error } = await supabase
        .from("countries")
        .select("*")
        .order("name");

      if (error) throw error;
      setCountries(data || []);
    } catch (error) {
      console.error("Error fetching countries:", error);
      toast({
        title: "Error",
        description: "Failed to load countries",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const filterCountries = () => {
    let filtered = countries;

    if (searchTerm) {
      filtered = filtered.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.short_blurb.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedVisaType) {
      filtered = filtered.filter((country) =>
        country.visa_types.includes(selectedVisaType)
      );
    }

    setFilteredCountries(filtered);
  };

  const handleCountryClick = (slug: string) => {
    navigate(`/countries/${slug}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Study & Work Destinations
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Explore visa opportunities across top global destinations for education, work, and settlement.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search */}
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search countries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>

            {/* Visa Type Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                variant={selectedVisaType === null ? "default" : "outline"}
                onClick={() => setSelectedVisaType(null)}
                size="sm"
              >
                All Visas
              </Button>
              {allVisaTypes.map((type) => (
                <Button
                  key={type}
                  variant={selectedVisaType === type ? "default" : "outline"}
                  onClick={() => setSelectedVisaType(type)}
                  size="sm"
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-muted-foreground">Loading countries...</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Choose Your Destination
                </h2>
                <p className="text-lg text-muted-foreground">
                  {filteredCountries.length} {filteredCountries.length === 1 ? 'country' : 'countries'} found
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCountries.map((country) => (
                  <Card
                    key={country.id}
                    className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-soft bg-background hover:-translate-y-2"
                    onClick={() => handleCountryClick(country.slug)}
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="text-6xl mb-4 group-hover:animate-bounce-gentle transition-all duration-300 group-hover:scale-110">
                        {country.flag_emoji}
                      </div>
                      <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                        {country.name}
                      </h3>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-muted-foreground mb-4 min-h-[48px]">
                        {country.short_blurb}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {country.visa_types.slice(0, 3).map((type) => (
                          <Badge key={type} variant="secondary" className="text-xs">
                            {type}
                          </Badge>
                        ))}
                        {country.visa_types.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{country.visa_types.length - 3} more
                          </Badge>
                        )}
                      </div>

                      <Button 
                        className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300"
                        size="lg"
                      >
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredCountries.length === 0 && !loading && (
                <div className="text-center py-12">
                  <p className="text-xl text-muted-foreground mb-4">No countries found</p>
                  <p className="text-muted-foreground">Try adjusting your search or filters</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Countries;