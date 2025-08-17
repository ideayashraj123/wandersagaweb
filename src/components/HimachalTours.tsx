import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Star, 
  Users, 
  Calendar,
  TreePine,
  Mountain,
  Camera,
  Tent,
  Route,
  Waves,
  Coffee,
  Heart,
  ArrowLeft
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

// Himachal Pradesh tour data
const himachalTours = [
  {
    id: "tirthan-jibhi-adventure",
    title: "Tirthan Jibhi Valley",
    location: "Himachal Pradesh",
    price: 12999,
    originalPrice: 16999,
    duration: "5 Days 4 Nights",
    rating: 4.8,
    image: "/src/assets/Himachal.webp",
    description: "Discover the serene beauty of Tirthan Valley and charming Jibhi village, perfect for nature lovers and peace seekers.",
    highlights: [
      "Great Himalayan National Park",
      "Jibhi Village Stay",
      "Tirthan River Activities",
      "Local Himachali Culture",
      "Mountain Photography"
    ],
    features: [
      { icon: TreePine, text: "Forest Trails" },
      { icon: Waves, text: "River Activities" },
      { icon: Camera, text: "Photography" },
      { icon: Coffee, text: "Village Stay" }
    ]
  },
  {
    id: "kasol-kheerganga-trek",
    title: "Kasol Kheerganga Trek",
    location: "Parvati Valley",
    price: 8999,
    originalPrice: 11999,
    duration: "4 Days 3 Nights",
    rating: 4.7,
    image: "/src/assets/Himachal.webp",
    description: "Experience the magical Parvati Valley with Kasol's café culture and the mystical Kheerganga hot springs trek.",
    highlights: [
      "Kasol Café Culture",
      "Kheerganga Hot Springs",
      "Parvati Valley Views",
      "Israeli Food Trail",
      "Riverside Camping"
    ],
    features: [
      { icon: Mountain, text: "Trek Adventure" },
      { icon: Waves, text: "Hot Springs" },
      { icon: Tent, text: "Camping" },
      { icon: Coffee, text: "Café Culture" }
    ]
  },
  {
    id: "mcleodganj-triund-bir",
    title: "McLeodganj Triund Bir",
    location: "Dharamshala Region",
    price: 11999,
    originalPrice: 15999,
    duration: "6 Days 5 Nights",
    rating: 4.9,
    image: "/src/assets/Himachal.webp",
    description: "Explore the spiritual heart of Himachal with Dalai Lama's residence, Triund trek, and paragliding in Bir.",
    highlights: [
      "Dalai Lama Temple",
      "Triund Trek",
      "Bir Paragliding",
      "Tibetan Culture",
      "Mountain Monasteries"
    ],
    features: [
      { icon: Mountain, text: "Triund Trek" },
      { icon: Users, text: "Cultural Tour" },
      { icon: Camera, text: "Paragliding" },
      { icon: Heart, text: "Spiritual" }
    ]
  },
  {
    id: "yunam-kanda-trek",
    title: "Yunam Kanda Trek",
    location: "Lahaul Spiti",
    price: 18999,
    originalPrice: 23999,
    duration: "8 Days 7 Nights",
    rating: 4.6,
    image: "/src/assets/Spitivalley.webp",
    description: "Challenge yourself with this high-altitude trek to Yunam Kanda peak, offering spectacular views of the Himalayas.",
    highlights: [
      "High Altitude Trek",
      "Yunam Kanda Peak",
      "Glacier Views",
      "Alpine Lakes",
      "Wilderness Camping"
    ],
    features: [
      { icon: Mountain, text: "High Altitude" },
      { icon: Route, text: "Challenging Trek" },
      { icon: Tent, text: "Camping" },
      { icon: Camera, text: "Photography" }
    ]
  },
  {
    id: "manali-sissu-kasol",
    title: "Manali Sissu Kasol",
    location: "Himachal Pradesh",
    price: 14999,
    originalPrice: 19999,
    duration: "7 Days 6 Nights",
    rating: 4.8,
    image: "/src/assets/Himachal.webp",
    description: "A comprehensive Himachal tour covering adventure capital Manali, scenic Sissu, and bohemian Kasol.",
    highlights: [
      "Solang Valley Adventures",
      "Atal Tunnel Experience",
      "Sissu Waterfall",
      "Kasol Riverside",
      "Rohtang Pass Views"
    ],
    features: [
      { icon: Mountain, text: "Adventure Sports" },
      { icon: Camera, text: "Scenic Beauty" },
      { icon: Route, text: "Road Trip" },
      { icon: Waves, text: "River Views" }
    ]
  },
  {
    id: "shimla-kalpa-chitkul",
    title: "Shimla Kalpa Chitkul",
    location: "Kinnaur Valley",
    price: 16999,
    originalPrice: 21999,
    duration: "8 Days 7 Nights",
    rating: 4.7,
    image: "/src/assets/Himachal.webp",
    description: "Journey through the Queen of Hills to the last village of India, experiencing diverse landscapes and cultures.",
    highlights: [
      "Shimla Mall Road",
      "Kinnaur Kailash Views",
      "Last Village of India",
      "Apple Orchards",
      "Ancient Temples"
    ],
    features: [
      { icon: Mountain, text: "Hill Stations" },
      { icon: TreePine, text: "Apple Orchards" },
      { icon: Camera, text: "Photography" },
      { icon: Users, text: "Cultural Tour" }
    ]
  }
];

const HimachalTours: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleTourClick = (tourId: string) => {
    navigate(`/tour/${tourId}`);
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto text-center text-white">
          <button
            onClick={handleBackClick}
            className="absolute left-0 top-0 flex items-center space-x-2 text-white/80 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Himachal Pradesh Tours
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Discover the Land of Gods - From serene valleys to spiritual retreats, adventure sports to cultural experiences
          </p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Explore Himachal's Best Destinations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From the Queen of Hills to hidden valleys, experience the diverse beauty of Himachal Pradesh
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {himachalTours.map((tour) => (
              <Card
                key={tour.id}
                className="group cursor-pointer overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 rounded-2xl"
                onMouseEnter={() => setHoveredCard(tour.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleTourClick(tour.id)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Discount Badge */}
                  <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-1">
                    Save ₹{(tour.originalPrice - tour.price).toLocaleString()}
                  </Badge>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-gray-800">{tour.rating}</span>
                  </div>

                  {/* Price overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-emerald-600">
                              ₹{tour.price.toLocaleString()}
                            </span>
                            <span className="text-sm text-gray-500 line-through">
                              ₹{tour.originalPrice.toLocaleString()}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">{tour.duration}</p>
                        </div>
                        <Calendar className="h-6 w-6 text-blue-500" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {tour.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="h-4 w-4 mr-1 text-red-500" />
                      <span className="text-sm">{tour.location}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {tour.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {tour.features.slice(0, 4).map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          <feature.icon className="h-3 w-3" />
                          <span>{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Tour Highlights:</h4>
                    <div className="space-y-1">
                      {tour.highlights.slice(0, 3).map((highlight, index) => (
                        <div key={index} className="flex items-center text-xs text-gray-600">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                          {highlight}
                        </div>
                      ))}
                      {tour.highlights.length > 3 && (
                        <div className="text-xs text-blue-600 font-medium">
                          +{tour.highlights.length - 3} more highlights
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Book Now */}
                  <div className="flex items-center justify-end text-sm">
                    <span className="text-emerald-600 font-medium">Book Now</span>
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

export default HimachalTours;
