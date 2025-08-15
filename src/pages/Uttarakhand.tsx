import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, Users } from "lucide-react";
import uttarakhandImage from "@/assets/Uttarakhand.jpg";

const Uttarakhand = () => {
  const navigate = useNavigate();

  const uttarakhandTours = [
    {
      id: 1,
      name: "Chopta Tungnath Chandrashila Trek",
      location: "Garhwal, Uttarakhand",
      image: uttarakhandImage,
      rating: 4.9,
      reviews: 189,
      duration: "4 Days",
      groupSize: "6-15 People",
      price: "₹8,999",
      originalPrice: "₹12,999",
      highlights: ["Mini Switzerland of Uttarakhand", "Highest Shiva Temple", "Swiss Camp Accommodation"],
      category: "Adventure",
      tourSlug: "chopta-tungnath",
      description: "Trek to Tungnath, the highest Shiva temple in the world, through lush meadows and alpine landscapes."
    },
    {
      id: 2,
      name: "Naagtibba Weekend Trek",
      location: "Garhwal Himalayas, Uttarakhand",
      image: uttarakhandImage,
      rating: 4.7,
      reviews: 134,
      duration: "2 Days",
      groupSize: "4-12 People",
      price: "₹5,999",
      originalPrice: "₹8,999",
      highlights: ["Serpent's Peak Adventure", "Panoramic Himalayan Views", "Perfect for Beginners"],
      category: "Adventure",
      tourSlug: "naagtibba-trek",
      description: "Perfect weekend trek to Serpent's Peak with breathtaking views of snow-capped peaks like Bandarpoonch."
    },
    {
      id: 3,
      name: "Chakrata Hill Station Getaway",
      location: "Dehradun, Uttarakhand",
      image: uttarakhandImage,
      rating: 4.6,
      reviews: 156,
      duration: "3 Days",
      groupSize: "2-10 People",
      price: "₹7,999",
      originalPrice: "₹10,999",
      highlights: ["Hidden Hill Station Gem", "Tiger Falls", "Chilmiri Neck Views"],
      category: "Adventure",
      tourSlug: "chakrata-adventure",
      description: "Discover the hidden gem of Chakrata with Tiger Falls and panoramic views from Chilmiri Neck."
    }
  ];

  const handleTourClick = (tourSlug: string) => {
    navigate(`/tour/${tourSlug}`);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Adventure": return "bg-orange-500";
      default: return "bg-primary";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-orange-600/90 to-orange-700/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: `url(${uttarakhandImage})` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Uttarakhand
            <span className="block text-accent mt-2">Adventures</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Explore the "Land of Gods" with its majestic peaks, spiritual temples, and pristine hill stations. 
            From beginner-friendly treks to hidden gems, discover Uttarakhand's natural splendor.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-white/90">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Uttarakhand, India</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-400" />
              <span>4.7+ Average Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>500+ Happy Trekkers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Discover Divine
              <span className="block text-gradient">Uttarakhand Treks</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From sacred temples to serene hill stations, embark on unforgettable journeys through 
              the spiritual and natural heart of the Himalayas.
            </p>
          </div>

          {/* Tours Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uttarakhandTours.map((tour) => (
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
                        <span className="text-muted-foreground text-sm">({tour.reviews} reviews)</span>
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
                    className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white border-0 rounded-xl py-3 font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
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

          {/* Special Section for Uttarakhand */}
          <div className="mt-16 text-center bg-gradient-to-r from-orange-50 to-orange-100 rounded-3xl p-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Why Choose Uttarakhand?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-orange-600" />
                </div>
                <h4 className="font-semibold mb-2">Sacred Destinations</h4>
                <p className="text-muted-foreground">Visit the highest Shiva temple and spiritual peaks</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h4 className="font-semibold mb-2">Beginner Friendly</h4>
                <p className="text-muted-foreground">Perfect treks for first-time trekkers and families</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-orange-600" />
                </div>
                <h4 className="font-semibold mb-2">Year-Round Beauty</h4>
                <p className="text-muted-foreground">Stunning landscapes in every season</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Uttarakhand;
