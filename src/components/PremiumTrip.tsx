import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star, ArrowRight, Mountain } from "lucide-react";
import { motion } from "framer-motion";
import spitiBannerImage from "@/assets/images/spitibanner.jpg";

const PremiumTrip = () => {
  const navigate = useNavigate();

  const handleTripClick = () => {
    navigate("/spiti-valley");
  };

  // Using local Spiti banner image
  const premiumImage = spitiBannerImage;

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center mb-3">
            <Mountain className="h-5 w-5 text-primary mr-2" />
            <h2 className="text-3xl font-bold text-gray-900">
              Our Most Visited <span className="text-primary">Trip</span>
            </h2>
          </div>
          <p className="text-gray-600 max-w-xl mx-auto">
            The adventure that defines extraordinary journeys
          </p>
        </motion.div>

        {/* Compact Premium Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <Card 
            className="group relative overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 h-64 sm:h-72 md:h-64"
            onClick={handleTripClick}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={premiumImage}
                alt="Spiti Valley Mountains"
                className="w-full h-full object-cover object-[50%_30%] transform group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20" />
            </div>

            {/* Premium Badge */}
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
              <div className="bg-gradient-to-r from-amber-400 to-amber-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">
                ⭐ Most Popular
              </div>
            </div>

            {/* Compact Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="p-4 sm:p-6 lg:p-8 xl:p-12 max-w-full sm:max-w-2xl">
                {/* Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">
                  Spiti Valley Adventure
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-4 sm:mb-6 max-w-xs sm:max-w-md leading-relaxed">
                  Experience the raw beauty of the Himalayas with ancient monasteries and pristine landscapes.
                </p>

                {/* Compact Info & CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <div className="flex items-center space-x-2 sm:space-x-4">
                    <div>
                      <span className="text-xl sm:text-2xl font-bold text-white">₹19,499</span>
                      <span className="text-xs sm:text-sm text-white/60 line-through ml-2">₹24,999</span>
                    </div>
                    <div className="bg-green-500 text-white text-xs px-2 py-1 rounded">22% OFF</div>
                  </div>
                  
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white font-semibold px-4 sm:px-6 py-2 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 text-sm"
                  >
                    Explore Trip
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Accent Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumTrip;
