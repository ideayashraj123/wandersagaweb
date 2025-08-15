import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  MapPin,
  Calendar,
  Clock3,
  Star,
  IndianRupee,
  Mountain,
  TreePine,
  Camera,
  ArrowLeft,
  Users,
  Award,
  Sunrise,
  Route
} from "lucide-react";

// Import images (you'll need to add these to your assets folder)
import uttarakhandImage from "@/assets/Uttarakhand.jpg";

const uttarakhandTours = [
  {
    id: "chopta-tungnath",
    name: "Chopta Tungnath Chandrashila",
    shortName: "Chopta Trek",
    tagline: "Mini Switzerland of Uttarakhand",
    description: "Experience the breathtaking beauty of Chopta meadows, visit the highest Shiva temple at Tungnath, and witness spectacular sunrise from Chandrashila peak.",
    image: uttarakhandImage,
    duration: "3D/2N",
    price: 8999,
    originalPrice: 12999,
    rating: 4.9,
    reviews: 245,
    bestTime: "Apr-Jun, Sep-Nov",
    difficulty: "Moderate",
    highlights: [
      "Tungnath Temple (Highest Shiva Temple)",
      "Chandrashila Summit at 4000m",
      "Rhododendron Forest Walk",
      "360° Himalayan Views",
      "Deoria Tal Lake"
    ],
    features: [
      { icon: Mountain, text: "4000m Peak" },
      { icon: TreePine, text: "Alpine Meadows" },
      { icon: Camera, text: "Photo Spots" },
      { icon: Sunrise, text: "Summit Sunrise" }
    ]
  },
  {
    id: "naagtibba-trek",
    name: "Naagtibba Weekend Trek",
    shortName: "Naagtibba",
    tagline: "Serpent's Peak Adventure",
    description: "Perfect weekend getaway trek offering stunning views of Bandarpunch, Kedarnath, and Gangotri peaks with beautiful oak and rhododendron forests.",
    image: uttarakhandImage,
    duration: "2D/1N",
    price: 4999,
    originalPrice: 6999,
    rating: 4.7,
    reviews: 189,
    bestTime: "Mar-Jun, Sep-Dec",
    difficulty: "Easy-Moderate",
    highlights: [
      "Nag Devta Temple",
      "Panoramic Himalayan Views",
      "Oak & Rhododendron Forests",
      "Camping Under Stars",
      "Village Culture Experience"
    ],
    features: [
      { icon: Route, text: "Easy Trek" },
      { icon: TreePine, text: "Forest Trail" },
      { icon: Mountain, text: "Peak Views" },
      { icon: Users, text: "Group Friendly" }
    ]
  },
  {
    id: "chakrata-adventure",
    name: "Chakrata Hill Station",
    shortName: "Chakrata",
    tagline: "Hidden Hill Station Gem",
    description: "Discover the untouched beauty of Chakrata with Tiger Falls, Chilmiri Neck viewpoint, and serene pine forests away from crowded hill stations.",
    image: uttarakhandImage,
    duration: "3D/2N",
    price: 7999,
    originalPrice: 10999,
    rating: 4.6,
    reviews: 156,
    bestTime: "Mar-Jun, Sep-Nov",
    difficulty: "Easy",
    highlights: [
      "Tiger Falls (Highest in Uttarakhand)",
      "Chilmiri Neck Viewpoint",
      "Deoban Forest Reserve",
      "Colonial Architecture",
      "Adventure Activities"
    ],
    features: [
      { icon: TreePine, text: "Pine Forests" },
      { icon: Camera, text: "Waterfalls" },
      { icon: Mountain, text: "Valley Views" },
      { icon: Award, text: "Offbeat" }
    ]
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case "easy":
      return "bg-green-100 text-green-800 border-green-200";
    case "easy-moderate":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "moderate":
      return "bg-orange-100 text-orange-800 border-orange-200";
    case "hard":
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const UttarakhandTours = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTourClick = (tourId: string) => {
    navigate(`/tour/${tourId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-green-50/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={uttarakhandImage}
            alt="Uttarakhand"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-green-800/80" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <Button
              variant="ghost"
              className="mb-6 text-white hover:text-blue-200 hover:bg-white/10"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Popular Locations
            </Button>
            
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
              <Mountain className="h-5 w-5" />
              <span>Uttarakhand Adventures</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Devbhoomi Uttarakhand
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Discover the divine land of gods with pristine peaks, sacred temples, and untouched wilderness
            </p>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Curated Uttarakhand Experiences
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From peaceful meadows to challenging peaks, explore the best of Uttarakhand with our expertly crafted tours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uttarakhandTours.map((tour) => (
              <Card
                key={tour.id}
                className="group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                onMouseEnter={() => setHoveredCard(tour.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleTourClick(tour.id)}
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <IndianRupee className="h-4 w-4 text-green-600" />
                      <span className="font-bold text-green-600">{tour.price.toLocaleString()}</span>
                    </div>
                    {tour.originalPrice && (
                      <div className="text-xs text-gray-500 line-through text-center">
                        ₹{tour.originalPrice.toLocaleString()}
                      </div>
                    )}
                  </div>

                  {/* Difficulty Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getDifficultyColor(tour.difficulty)} border`}>
                      {tour.difficulty}
                    </Badge>
                  </div>

                  {/* Tour Name Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{tour.shortName}</h3>
                    <p className="text-sm text-white/90">{tour.tagline}</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Clock3 className="h-4 w-4" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{tour.bestTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Star className="h-4 w-4 fill-yellow-500" />
                      <span className="text-sm font-semibold text-gray-900">{tour.rating}</span>
                      <span className="text-xs text-gray-500">({tour.reviews})</span>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {tour.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {tour.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-xs text-gray-600">
                        <feature.icon className="h-3 w-3 text-blue-600" />
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Trip Highlights</h4>
                    <div className="space-y-1">
                      {tour.highlights.slice(0, 3).map((highlight, index) => (
                        <div key={index} className="flex items-center space-x-2 text-xs text-gray-600">
                          <div className="w-1 h-1 bg-blue-600 rounded-full" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                      {tour.highlights.length > 3 && (
                        <div className="text-xs text-blue-600 font-medium">
                          +{tour.highlights.length - 3} more highlights
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UttarakhandTours;
