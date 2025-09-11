import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const NewsSection = () => {
  const articles = [
    {
      title: "Recent updates of visa and immigration",
      date: "December 15, 2023",
      category: "Immigration"
    },
    {
      title: "Essential of immigration trouble",
      date: "December 10, 2023", 
      category: "Visa"
    },
    {
      title: "How to develop a successful business",
      date: "December 5, 2023",
      category: "Business"
    },
    {
      title: "How to visit those visa requirements for",
      date: "December 1, 2023",
      category: "Travel"
    }
  ];

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Truvik get more articles from our<br />
            <span className="text-accent italic">Resources</span> news
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="w-full h-64 bg-muted rounded-lg"></div>
          </div>
          
          <div className="space-y-4">
            {articles.map((article, index) => (
              <Card key={index} className="p-4 hover:shadow-lg transition-shadow border-0 shadow-soft">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-muted rounded-lg flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="text-sm text-accent font-medium mb-1">{article.category}</div>
                    <h3 className="font-semibold text-primary mb-2">{article.title}</h3>
                    <div className="text-sm text-muted-foreground">{article.date}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;