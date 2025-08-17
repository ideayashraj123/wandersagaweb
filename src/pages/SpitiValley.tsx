import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, Users } from "lucide-react";
import mountainAdventure from "@/assets/mountain-adventure.jpg";
import culturalHeritage from "@/assets/cultural-heritage.jpg";
import heroBeach from "@/assets/hero-beach.jpg";
import spitiValley from "@/assets/Spitivalley.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SpitiValley = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const spitiTours = [
    {
      id: 1,
      name: "Full Circuit Summer Spiti Expedition",
      location: "Spiti Valley, India",
      image: mountainAdventure,
      rating: 4.9,
      duration: "6N/7D",
      groupSize: "4-12 People",
      price: "₹19,499",
      originalPrice: "₹24,999",
      highlights: ["Chandrataal Lake", "World's Highest Post Office", "Fossil Park at Langza"],
      category: "Adventure",
      tourSlug: "summer-spiti-circuit-chandrataal",
      description: "Experience the complete Spiti Valley circuit with Chandrataal Lake, ancient monasteries, and breathtaking landscapes."
    },
    {
      id: 2,
      name: "Winter Spiti Expedition",
      location: "Spiti Valley, India",
      image: heroBeach,
      rating: 4.9,
      duration: "5-7 Days",
      groupSize: "2-8 People",
      price: "₹19,999",
      originalPrice: "₹25,999",
      highlights: ["Snow Adventures", "Frozen Waterfalls", "Winter Monasteries"],
      category: "Adventure",
      tourSlug: "winter-spiti-expedition",
      description: "Explore the mystical winter landscape of Spiti Valley with frozen waterfalls and snow-covered monasteries."
    },
    {
      id: 3,
      name: "Spiti Valley Bike Expedition",
      location: "Spiti Valley, India",
      image: culturalHeritage,
      rating: 4.7,
      duration: "6-8 Days",
      groupSize: "2-6 People",
      price: "₹29,999",
      originalPrice: "₹35,999",
      highlights: ["Ultimate Biking Adventure", "High Passes", "Mechanical Backup"],
      category: "Adventure",
      tourSlug: "spiti-valley-bike-expedition",
      description: "An ultimate biking adventure through the rugged terrain of Spiti Valley with mechanical support."
    },
    {
      id: 4,
      name: "Short Circuit Summer Spiti Expedition",
      location: "Spiti Valley, India",
      image: spitiValley,
      rating: 4.9,
      duration: "5 Days",
      groupSize: "4-10 People",
      price: "₹13,999",
      originalPrice: "₹18,999",
      highlights: ["Chandrataal Lake", "Rohtang Pass", "Kaza Exploration"],
      category: "Adventure",
      tourSlug: "short-circuit-summer-spiti",
      description: "A shorter version of the Spiti circuit perfect for those with limited time but want to experience the valley's highlights."
    }
  ];

  const handleTourClick = (tourSlug: string) => {
    navigate(`/tour/${tourSlug}`);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Adventure": return "bg-green-500";
      default: return "bg-primary";
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-r from-primary/90 to-primary/80 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: `url(${spitiValley})` }}
          ></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Spiti Valley
              <span className="block text-accent mt-2">Expeditions</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Discover the mystical land of Spiti Valley, often called "Little Tibet". 
            From ancient monasteries to pristine lakes, experience the raw beauty of the Himalayas.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-white/90">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Himachal Pradesh, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Choose Your
              <span className="block text-gradient">Spiti Adventure</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From summer circuits to winter expeditions, find the perfect Spiti Valley experience 
              tailored to your adventure style and timeline.
            </p>
          </div>

          {/* Tours Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {spitiTours.map((tour) => (
              <Card 
                key={tour.id}
                className="group overflow-hidden bg-card shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 border-0 rounded-3xl h-full flex flex-col cursor-pointer"
                onClick={() => handleTourClick(tour.tourSlug)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 left-4 ${getCategoryColor(tour.category)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {tour.category}
                  </div>
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-3">
                    <div className="text-sm text-muted-foreground line-through">
                      {tour.originalPrice}
                    </div>
                    <div className="text-lg font-bold text-primary">
                      {tour.price}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {tour.name}
                    </h3>
                    
                    <div className="flex items-center text-muted-foreground mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{tour.location}</span>
                    </div>

                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {tour.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{tour.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{tour.groupSize}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="font-medium">{tour.rating}</span>
                      </div>
                    </div>
                    
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {tour.highlights.slice(0, 3).map((highlight, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white border-0 rounded-xl py-3 font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTourClick(tour.tourSlug);
                    }}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default SpitiValley;
