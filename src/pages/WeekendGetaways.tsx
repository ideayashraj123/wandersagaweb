import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, Users, Calendar } from "lucide-react";
import uttarakhandImage from "@/assets/Uttarakhand.jpg";
import himachalImage from "@/assets/Himachal.jpg";
import kashmirImage from "@/assets/Kashmir.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WeekendGetaways = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const weekendTours = [
    {
      id: 1,
      name: "Yulla Kanda Trek",
      location: "Himachal Pradesh, India",
      image: himachalImage,
      rating: 4.6,
      duration: "4 Days",
      groupSize: "2-6 People",
      price: "₹18,999",
      originalPrice: "₹24,999",
      highlights: ["World's Highest Krishna Temple", "Glacial Lake", "Spiritual Journey"],
      category: "Spiritual",
      tourSlug: "yulla-kanda-trek",
      description: "Trek to world's highest Krishna temple at 4,000 meters, offering spiritual significance and raw Himalayan beauty.",
      difficulty: "Challenging"
    },
    {
      id: 2,
      name: "Chakrata Hill Station Getaway",
      location: "Dehradun, Uttarakhand",
      image: uttarakhandImage,
      rating: 4.6,
      duration: "3 Days",
      groupSize: "2-10 People",
      price: "₹7,999",
      originalPrice: "₹10,999",
      highlights: ["Hidden Hill Station Gem", "Tiger Falls", "Chilmiri Neck Views"],
      category: "Relaxation",
      tourSlug: "chakrata-adventure",
      description: "Discover the hidden gem of Chakrata with Tiger Falls and panoramic views from Chilmiri Neck.",
      difficulty: "Easy"
    },
    {
      id: 3,
      name: "Kedarnath Spiritual Journey",
      location: "Uttarakhand, India",
      image: kashmirImage,
      rating: 4.8,
      duration: "5 Days",
      groupSize: "6-15 People",
      price: "₹15,999",
      originalPrice: "₹20,999",
      highlights: ["Sacred Jyotirlinga", "Helicopter Options", "Divine Experience"],
      category: "Spiritual",
      tourSlug: "kedarnath",
      description: "Sacred pilgrimage to one of the 12 Jyotirlingas, nestled in the majestic Garhwal Himalayas.",
      difficulty: "Moderate"
    },
    {
      id: 4,
      name: "Chopta Tungnath Chandrashila Trek",
      location: "Garhwal, Uttarakhand",
      image: uttarakhandImage,
      rating: 4.9,
      duration: "4 Days",
      groupSize: "6-15 People",
      price: "₹8,999",
      originalPrice: "₹12,999",
      highlights: ["Mini Switzerland of Uttarakhand", "Highest Shiva Temple", "Swiss Camp Accommodation"],
      category: "Adventure",
      tourSlug: "chopta-tungnath",
      description: "Trek to Tungnath, the highest Shiva temple in the world, through lush meadows and alpine landscapes.",
      difficulty: "Moderate"
    },
    {
      id: 5,
      name: "Naagtibba Weekend Trek",
      location: "Garhwal Himalayas, Uttarakhand",
      image: uttarakhandImage,
      rating: 4.7,
      duration: "2 Days",
      groupSize: "4-12 People",
      price: "₹5,999",
      originalPrice: "₹8,999",
      highlights: ["Serpent's Peak Adventure", "Panoramic Himalayan Views", "Perfect for Beginners"],
      category: "Adventure",
      tourSlug: "naagtibba-trek",
      description: "Perfect weekend trek to Serpent's Peak with breathtaking views of snow-capped peaks like Bandarpoonch.",
      difficulty: "Easy"
    },
    {
      id: 6,
      name: "Shimla Kalpa Chitkul",
      location: "Kinnaur, Himachal Pradesh",
      image: himachalImage,
      rating: 4.8,
      duration: "4 Days",
      groupSize: "4-12 People",
      price: "₹16,999",
      originalPrice: "₹21,999",
      highlights: ["Queen of Hills to Last Village", "Kinnaur Kailash Views", "Apple Orchards"],
      category: "Scenic",
      tourSlug: "shimla-kalpa-chitkul",
      description: "Journey from the bustling hill station of Shimla to the remote charm of Chitkul, the last inhabited village.",
      difficulty: "Easy"
    },
    {
      id: 7,
      name: "Manali Sissu Kasol",
      location: "Himachal Pradesh, India",
      image: himachalImage,
      rating: 4.8,
      duration: "3 Days",
      groupSize: "2-8 People",
      price: "₹14,999",
      originalPrice: "₹19,999",
      highlights: ["Complete Himachal Experience", "Atal Tunnel", "Adventure Sports"],
      category: "Adventure",
      tourSlug: "manali-sissu-kasol",
      description: "Complete Himachal experience covering Manali's adventure sports, Sissu's tranquility, and Kasol's hippie culture.",
      difficulty: "Easy"
    },
    {
      id: 8,
      name: "McLeodganj Triund Bir",
      location: "Dharamshala, Himachal Pradesh",
      image: himachalImage,
      rating: 4.9,
      duration: "6 Days",
      groupSize: "2-10 People",
      price: "₹15,999",
      originalPrice: "₹19,999",
      highlights: ["Spiritual & Adventure Hub", "Dalai Lama's Residence", "Paragliding in Bir"],
      category: "Spiritual",
      tourSlug: "mcleodganj-triund-bir",
      description: "Explore the spiritual heart of Himachal with Dalai Lama's residence, Triund trek, and paragliding in Bir.",
      difficulty: "Moderate"
    },
    {
      id: 9,
      name: "Kasol Kheerganga Trek",
      location: "Parvati Valley, Himachal Pradesh",
      image: himachalImage,
      rating: 4.7,
      duration: "3 Days",
      groupSize: "4-12 People",
      price: "₹8,999",
      originalPrice: "₹12,999",
      highlights: ["Parvati Valley Magic", "Natural Hot Springs", "Israeli Cafe Culture"],
      category: "Adventure",
      tourSlug: "kasol-kheerganga-trek",
      description: "Mystical journey through lush Parvati Valley with natural hot springs and panoramic mountain views.",
      difficulty: "Moderate"
    },
    {
      id: 10,
      name: "Tirthan Jibhi Valley",
      location: "Himachal Pradesh, India",
      image: himachalImage,
      rating: 4.8,
      duration: "3 Days",
      groupSize: "2-8 People",
      price: "₹12,999",
      originalPrice: "₹16,999",
      highlights: ["Serene Valley Escape", "Great Himalayan National Park", "Jalori Pass"],
      category: "Relaxation",
      tourSlug: "tirthan-jibhi-adventure",
      description: "Experience the mesmerizing blend of natural beauty and tranquility in Jibhi-Jalori-Tirthan circuit.",
      difficulty: "Easy"
    }
  ];

  const handleTourClick = (tourSlug: string) => {
    navigate(`/tour/${tourSlug}`);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Adventure": return "bg-green-500";
      case "Spiritual": return "bg-purple-500";
      case "Relaxation": return "bg-blue-500";
      case "Scenic": return "bg-pink-500";
      default: return "bg-primary";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "text-green-600 bg-green-100";
      case "Moderate": return "text-orange-600 bg-orange-100";
      case "Challenging": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-gradient-to-br from-slate-50 to-purple-50">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-r from-purple-600/90 to-indigo-700/80 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: `url(${himachalImage})` }}
          ></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Weekend
              <span className="block text-accent mt-2">Getaways</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Escape the routine with perfect weekend adventures. From spiritual journeys to relaxing hill stations, 
            discover destinations that rejuvenate your soul in just a few days.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-white/90">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>2-6 Days Perfect Getaways</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Perfect
              <span className="block text-gradient">Weekend Escapes</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from spiritual retreats, adventure treks, scenic drives, or peaceful hill stations. 
              Every destination is carefully curated for the perfect short getaway.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium">All Destinations</span>
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium">Adventure</span>
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium">Spiritual</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">Relaxation</span>
            <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full font-medium">Scenic</span>
          </div>

          {/* Tours Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weekendTours.map((tour) => (
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
                  
                  {/* Difficulty Badge */}
                  <div className={`absolute top-4 left-20 ${getDifficultyColor(tour.difficulty)} px-3 py-1 rounded-full text-xs font-medium`}>
                    {tour.difficulty}
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
                      {tour.highlights.slice(0, 2).map((highlight, index) => (
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
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white border-0 rounded-xl py-3 font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
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

          {/* Call to Action */}
          <div className="mt-16 text-center bg-gradient-to-r from-purple-50 to-indigo-100 rounded-3xl p-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Can't Find Your Perfect Weekend?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our travel experts can customize any destination to fit your weekend schedule and preferences.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white px-8"
            >
              Plan Custom Weekend
            </Button>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default WeekendGetaways;
