import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, Users } from "lucide-react";
import himachalImage from "@/assets/Himachal.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Himachal = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const himachalTours = [
    {
      id: 1,
      name: "Tirthan Jibhi Valley",
      location: "Himachal Pradesh, India",
      image: himachalImage,
      rating: 4.8,
      reviews: 142,
      duration: "3 Days",
      groupSize: "2-8 People",
      price: "₹12,999",
      originalPrice: "₹16,999",
      highlights: ["Serene Valley Escape", "Great Himalayan National Park", "Jalori Pass"],
      category: "Adventure",
      tourSlug: "tirthan-jibhi-adventure",
      description: "Experience the mesmerizing blend of natural beauty and tranquility in Jibhi-Jalori-Tirthan circuit."
    },
    {
      id: 2,
      name: "Kasol Kheerganga Trek",
      location: "Parvati Valley, Himachal Pradesh",
      image: himachalImage,
      rating: 4.7,
      reviews: 189,
      duration: "3 Days",
      groupSize: "4-12 People",
      price: "₹8,999",
      originalPrice: "₹12,999",
      highlights: ["Parvati Valley Magic", "Natural Hot Springs", "Israeli Cafe Culture"],
      category: "Adventure",
      tourSlug: "kasol-kheerganga-trek",
      description: "Mystical journey through lush Parvati Valley with natural hot springs and panoramic mountain views."
    },
    {
      id: 3,
      name: "McLeodganj Triund Bir",
      location: "Dharamshala, Himachal Pradesh",
      image: himachalImage,
      rating: 4.9,
      reviews: 167,
      duration: "6 Days",
      groupSize: "2-10 People",
      price: "₹15,999",
      originalPrice: "₹19,999",
      highlights: ["Spiritual & Adventure Hub", "Dalai Lama's Residence", "Paragliding in Bir"],
      category: "Adventure",
      tourSlug: "mcleodganj-triund-bir",
      description: "Explore the spiritual heart of Himachal with Dalai Lama's residence, Triund trek, and paragliding in Bir."
    },
    {
      id: 4,
      name: "Shimla Kalpa Chitkul",
      location: "Kinnaur, Himachal Pradesh",
      image: himachalImage,
      rating: 4.8,
      reviews: 156,
      duration: "4 Days",
      groupSize: "4-12 People",
      price: "₹16,999",
      originalPrice: "₹21,999",
      highlights: ["Queen of Hills to Last Village", "Kinnaur Kailash Views", "Apple Orchards"],
      category: "Adventure",
      tourSlug: "shimla-kalpa-chitkul",
      description: "Journey from the bustling hill station of Shimla to the remote charm of Chitkul, the last inhabited village."
    },
    {
      id: 5,
      name: "Manali Sissu Kasol",
      location: "Himachal Pradesh, India",
      image: himachalImage,
      rating: 4.8,
      reviews: 201,
      duration: "3 Days",
      groupSize: "2-8 People",
      price: "₹14,999",
      originalPrice: "₹19,999",
      highlights: ["Complete Himachal Experience", "Atal Tunnel", "Adventure Sports"],
      category: "Adventure",
      tourSlug: "manali-sissu-kasol",
      description: "Complete Himachal experience covering Manali's adventure sports, Sissu's tranquility, and Kasol's hippie culture."
    },
    {
      id: 6,
      name: "Yulla Kanda Trek",
      location: "Himachal Pradesh, India",
      image: himachalImage,
      rating: 4.6,
      reviews: 89,
      duration: "4 Days",
      groupSize: "2-6 People",
      price: "₹18,999",
      originalPrice: "₹24,999",
      highlights: ["World's Highest Krishna Temple", "Glacial Lake", "Spiritual Journey"],
      category: "Adventure",
      tourSlug: "yulla-kanda-trek",
      description: "Trek to world's highest Krishna temple at 4,000 meters, offering spiritual significance and raw Himalayan beauty."
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
      <div className="bg-gradient-to-br from-slate-50 to-green-50">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-r from-green-600/90 to-green-700/80 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: `url(${himachalImage})` }}
          ></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Himachal Pradesh
              <span className="block text-accent mt-2">Adventures</span>
            </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Discover the diverse landscapes of Himachal Pradesh, from serene valleys to spiritual hubs. 
            Experience trekking, adventure sports, and the rich culture of the Himalayas.
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
              Explore Incredible
              <span className="block text-gradient">Himachal Destinations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From spiritual journeys to adrenaline-pumping adventures, discover the perfect Himachal experience 
              that matches your travel dreams and timeline.
            </p>
          </div>

          {/* Tours Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {himachalTours.map((tour) => (
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
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white border-0 rounded-xl py-3 font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
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

export default Himachal;
