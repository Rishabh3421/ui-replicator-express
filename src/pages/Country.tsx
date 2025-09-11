import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Country = () => {
  const countryInfo = {
    name: "United Kingdom",
    shortName: "United Kingdom",
    population: "(GBR) 106,789,08",
    capital: "London",
    largestCity: "London"
  };

  const universities = [
    { rank: "01", name: "Harvard University", ranking: "01" },
    { rank: "02", name: "Oxford University", ranking: "02" },
    { rank: "03", name: "California Institute of Technology - Caltech", ranking: "03" },
    { rank: "04", name: "Princeton University", ranking: "04" },
    { rank: "05", name: "University of California Berkeley", ranking: "05" },
    { rank: "06", name: "Yale University", ranking: "06" },
    { rank: "07", name: "Massachusetts Institute of Technology (MIT)", ranking: "07" },
    { rank: "08", name: "University of Chicago", ranking: "08" },
    { rank: "09", name: "University of Pennsylvania", ranking: "09" },
    { rank: "10", name: "Stanford University", ranking: "10" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <div className="bg-header-bg text-header-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">United Kingdom</h1>
          <div className="flex items-center justify-center space-x-2 text-sm">
            <span className="text-accent">Home</span>
            <span>•</span>
            <span>United Kingdom</span>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Search */}
              <Card className="p-6 border-0 shadow-soft">
                <h3 className="font-semibold text-primary mb-4">— Search</h3>
                <div className="flex">
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="flex-1 px-3 py-2 border border-border rounded-l text-sm"
                  />
                  <Button className="bg-accent hover:bg-accent-dark text-accent-foreground px-4 py-2 rounded-l-none">
                    🔍
                  </Button>
                </div>
              </Card>

              {/* Categories */}
              <Card className="p-6 border-0 shadow-soft">
                <h3 className="font-semibold text-primary mb-4">— Categories</h3>
                <ul className="space-y-2 text-sm">
                  <li className="text-muted-foreground hover:text-primary cursor-pointer">→ Austria</li>
                  <li className="text-muted-foreground hover:text-primary cursor-pointer">→ PR Services</li>
                  <li className="text-muted-foreground hover:text-primary cursor-pointer">→ Travel Insurance</li>
                  <li className="text-muted-foreground hover:text-primary cursor-pointer">→ Work Permits</li>
                </ul>
              </Card>

              {/* Recent Posts */}
              <Card className="p-6 border-0 shadow-soft">
                <h3 className="font-semibold text-primary mb-4">— Our Recent Posts</h3>
                <div className="space-y-4">
                  {[
                    { title: "Recent updates of visa and immigration", date: "September 16, 2023" },
                    { title: "Customers applying for priority visas", date: "September 14, 2023" },
                    { title: "Employment insurance for foreign nationals", date: "September 12, 2023" }
                  ].map((post, index) => (
                    <div key={index} className="flex space-x-3">
                      <div className="w-12 h-12 bg-muted rounded"></div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-primary">{post.title}</h4>
                        <p className="text-xs text-muted-foreground">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Tags Cloud */}
              <Card className="p-6 border-0 shadow-soft">
                <h3 className="font-semibold text-primary mb-4">— Tags Cloud</h3>
                <div className="flex flex-wrap gap-2">
                  {["America", "Animation", "Idea", "Popular City", "Trendy Visa", "Unique Places", "Visa Consultancy"].map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-secondary text-muted-foreground text-xs rounded hover:bg-accent hover:text-accent-foreground cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>

              {/* Contact Info */}
              <Card className="p-6 border-0 shadow-soft">
                <h3 className="font-semibold text-primary mb-4">— Contact Info</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong>Address:</strong><br />
                    2932 S New Hope Helens, MT 40528-3th<br />
                    Commercial Australia
                  </div>
                  <div>
                    <strong>Contact Me:</strong><br />
                    + 0903-745-46789
                  </div>
                  <div>
                    <strong>Email:</strong><br />
                    demo@gmail.com
                  </div>
                </div>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About UK Section */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">About the United Kingdom</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-muted-foreground mb-6">
                      Regarded and demonstrated by the charms of pleasure the moment blinded by desire that they cannot foresee 
                      the pain and trouble that are bound to ensue; and equal blame rh in shrinking from in the pains and trouble.
                    </p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="font-medium">Short Name:</span>
                        <span className="text-muted-foreground">{countryInfo.shortName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Population:</span>
                        <span className="text-muted-foreground">{countryInfo.population}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Capital:</span>
                        <span className="text-muted-foreground">{countryInfo.capital}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Largest City:</span>
                        <span className="text-muted-foreground">{countryInfo.largestCity}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="w-full h-48 bg-gradient-to-br from-blue-600 to-red-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-6xl">🇬🇧</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* UK Image */}
              <div className="w-full h-64 bg-muted rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                  <span className="text-white text-lg">Tower Bridge, London</span>
                </div>
              </div>

              {/* Top Universities */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">Top universities of United Kingdom</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-semibold text-primary">Sl</th>
                        <th className="text-left py-3 px-4 font-semibold text-primary">Name of Universities</th>
                        <th className="text-left py-3 px-4 font-semibold text-primary">Ranking</th>
                      </tr>
                    </thead>
                    <tbody>
                      {universities.map((uni, index) => (
                        <tr key={index} className="border-b border-border hover:bg-secondary">
                          <td className="py-3 px-4 text-muted-foreground">{uni.rank}</td>
                          <td className="py-3 px-4 text-foreground">{uni.name}</td>
                          <td className="py-3 px-4 text-muted-foreground">{uni.ranking}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Historical Places */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">Historical places</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-full h-32 bg-muted rounded-lg"></div>
                  <div className="w-full h-32 bg-muted rounded-lg"></div>
                  <div className="w-full h-32 bg-muted rounded-lg"></div>
                  <div className="w-full h-32 bg-muted rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Country;