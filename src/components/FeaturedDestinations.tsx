import { Star, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import mountainAdventure from "@/assets/mountain-adventure.jpg";
import culturalHeritage from "@/assets/cultural-heritage.jpg";
import heroBeach from "@/assets/hero-beach.jpg";

const FeaturedDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Maldives Paradise",
      location: "Indian Ocean",
      image: heroBeach,
      rating: 4.9,
      reviews: 234,
      duration: "5-7 Days",
      groupSize: "2-8 People",
      price: "₹89,999",
      originalPrice: "₹1,19,999",
      highlights: ["Overwater Bungalows", "Snorkeling", "Spa Treatments"],
      category: "Beach"
    },
    {
      id: 2,
      name: "Himalayan Adventure",
      location: "Leh Ladakh, India",
      image: mountainAdventure,
      rating: 4.8,
      reviews: 189,
      duration: "7-10 Days",
      groupSize: "4-12 People",
      price: "₹45,999",
      originalPrice: "₹59,999",
      highlights: ["Trekking", "Monasteries", "Scenic Routes"],
      category: "Adventure"
    },
    {
      id: 3,
      name: "Cultural Heritage Tour",
      location: "Rajasthan, India",
      image: culturalHeritage,
      rating: 4.7,
      reviews: 156,
      duration: "6-8 Days",
      groupSize: "2-6 People",
      price: "₹35,999",
      originalPrice: "₹49,999",
      highlights: ["Palaces", "Desert Safari", "Local Cuisine"],
      category: "Cultural"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Beach": return "bg-blue-500";
      case "Adventure": return "bg-green-500";
      case "Cultural": return "bg-purple-500";
      default: return "bg-primary";
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            🌟 Featured Destinations
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Discover Amazing
            <span className="block text-gradient">Travel Experiences</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From pristine beaches to majestic mountains, explore our handpicked destinations 
            that promise unforgettable memories and extraordinary adventures.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card 
              key={destination.id} 
              className={`group overflow-hidden bg-card shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 border-0 rounded-3xl fade-in-up stagger-${index + 1}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 ${getCategoryColor(destination.category)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                  {destination.category}
                </div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-3">
                  <div className="text-sm text-muted-foreground line-through">
                    {destination.originalPrice}
                  </div>
                  <div className="text-lg font-bold text-primary">
                    {destination.price}
                  </div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {destination.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{destination.rating}</span>
                      <span className="text-sm text-muted-foreground">({destination.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{destination.location}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{destination.groupSize}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.map((highlight) => (
                        <span 
                          key={highlight}
                          className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full btn-hero group-hover:scale-105 transition-transform">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 fade-in-up stagger-4">
          <Button variant="outline" size="lg" className="px-8">
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;