import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, Users } from "lucide-react";
import ladakhImage from "@/assets/Ladakh.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Ladakh = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ladakhTours = [
    {
      id: 1,
      name: "Leh Ladakh Adventure Expedition",
      location: "Leh, Ladakh",
      image: ladakhImage,
      rating: 4.9,
      duration: "8 Days",
      groupSize: "4-12 People",
      price: "₹28,999",
      originalPrice: "₹36,999",
      description: "Embark on an epic journey through the high-altitude desert landscapes of Ladakh with stunning monasteries.",
      highlights: ["Pangong Lake", "Nubra Valley", "Khardung La", "Monasteries"],
      slug: "leh-ladakh-adventure"
    },
    {
      id: 2,
      name: "Pangong Lake & Nubra Valley",
      location: "Pangong, Ladakh",
      image: ladakhImage,
      rating: 4.8,
      duration: "6 Days",
      groupSize: "2-8 People",
      price: "₹24,999",
      originalPrice: "₹31,999",
      description: "Witness the mesmerizing blue waters of Pangong Lake and the unique cold desert of Nubra Valley.",
      highlights: ["Pangong Lake", "Camel Safari", "Diskit Monastery", "Sand Dunes"],
      slug: "pangong-nubra-valley"
    },
    {
      id: 3,
      name: "Ladakh Bike Expedition",
      location: "Manali to Leh",
      image: ladakhImage,
      rating: 4.7,
      duration: "10 Days",
      groupSize: "4-10 People",
      price: "₹35,999",
      originalPrice: "₹42,999",
      description: "Experience the ultimate adventure on the world's highest motorable roads on this epic bike journey.",
      highlights: ["Rohtang Pass", "Khardung La", "Magnetic Hill", "Adventure Ride"],
      slug: "ladakh-bike-expedition"
    }
  ];

  const handleTourClick = (slug: string) => {
    navigate(`/tour/${slug}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={ladakhImage} 
            alt="Ladakh Adventure" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Mystical <span className="text-blue-400">Ladakh</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Explore the Land of High Passes with dramatic landscapes, ancient monasteries, and crystal-clear lakes
            </p>
          </div>
        </div>
      </div>

      {/* Tours Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ladakh Tour Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the rugged beauty and spiritual essence of Ladakh with our adventure-packed tour packages
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ladakhTours.map((tour) => (
            <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer" onClick={() => handleTourClick(tour.slug)}>
              <div className="relative overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-medium">
                    Save ₹{(parseInt(tour.originalPrice.replace(/[₹,]/g, '')) - parseInt(tour.price.replace(/[₹,]/g, ''))).toLocaleString()}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>{tour.location}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {tour.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {tour.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{tour.groupSize}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{tour.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-green-600">{tour.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">{tour.originalPrice}</span>
                      <p className="text-sm text-gray-500">per person</p>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready for the Ultimate Adventure?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us on an unforgettable journey through the mystical landscapes of Ladakh.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Plan Your Trip
            </Button>
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Ladakh;
