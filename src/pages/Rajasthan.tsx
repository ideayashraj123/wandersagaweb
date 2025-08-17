import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, Users } from "lucide-react";
import rajasthanImage from "@/assets/Rajasthan.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Rajasthan = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const rajasthanTours = [
    {
      id: 1,
      name: "Royal Rajasthan Heritage Tour",
      location: "Rajasthan, India",
      image: rajasthanImage,
      rating: 4.9,
      duration: "7 Days",
      groupSize: "4-12 People",
      price: "₹24,999",
      originalPrice: "₹32,999",
      description: "Explore the royal heritage of Rajasthan with visits to magnificent palaces, forts, and vibrant markets.",
      highlights: ["Amber Fort", "City Palace", "Hawa Mahal", "Desert Safari"],
      slug: "royal-rajasthan-heritage"
    },
    {
      id: 2,
      name: "Jaisalmer Desert Safari",
      location: "Jaisalmer, Rajasthan",
      image: rajasthanImage,
      rating: 4.8,
      duration: "4 Days",
      groupSize: "2-8 People",
      price: "₹15,999",
      originalPrice: "₹19,999",
      description: "Experience the golden sands of Thar Desert with camel safari and traditional Rajasthani culture.",
      highlights: ["Camel Safari", "Desert Camping", "Folk Dance", "Sunset at Dunes"],
      slug: "jaisalmer-desert-safari"
    },
    {
      id: 3,
      name: "Udaipur Lakes & Palaces",
      location: "Udaipur, Rajasthan",
      image: rajasthanImage,
      rating: 4.7,
      duration: "5 Days",
      groupSize: "2-10 People",
      price: "₹18,999",
      originalPrice: "₹24,999",
      description: "Discover the City of Lakes with its stunning palaces, serene lakes, and romantic ambiance.",
      highlights: ["Lake Pichola", "City Palace", "Jagdish Temple", "Boat Ride"],
      slug: "udaipur-lakes-palaces"
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
            src={rajasthanImage} 
            alt="Rajasthan Heritage" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Royal <span className="text-yellow-400">Rajasthan</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Experience the grandeur of royal palaces, vibrant culture, and golden deserts in the Land of Kings
            </p>
          </div>
        </div>
      </div>

      {/* Tours Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Rajasthan Tour Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the royal heritage and vibrant culture of Rajasthan with our carefully curated tour packages
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rajasthanTours.map((tour) => (
            <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer" onClick={() => handleTourClick(tour.slug)}>
              <div className="relative overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
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
            Ready to Explore Royal Rajasthan?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to customize your Rajasthan adventure and create memories that will last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700">
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

export default Rajasthan;
