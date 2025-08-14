import { useState, useEffect, useRef, useCallback, useMemo, memo } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import destination images
import spitiImage from "@/assets/Spitivalley.jpg";
import ladakhImage from "@/assets/Ladakh.jpg";
import meghalayaImage from "@/assets/Meghalaya.JPG";
import kashmirImage from "@/assets/Kashmir.jpg";
import uttarakhandImage from "@/assets/Uttarakhand.jpg";
import himachalImage from "@/assets/Himachal.jpg";
import rajasthanImage from "@/assets/Rajasthan.jpg";

const PopularLocations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(5);
  const carouselRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Memoize locations to prevent recreation on each render
  const locations = useMemo(() => [
    {
      id: 1,
      name: "Spiti Valley",
      image: spitiImage,
      subtitle: "See More",
      description: "The Middle Land"
    },
    {
      id: 2,
      name: "Ladakh",
      image: ladakhImage,
      subtitle: "See More",
      description: "Moonland"
    },
    {
      id: 3,
      name: "Meghalaya",
      image: meghalayaImage,
      subtitle: "See More",
      description: "Abode of Clouds"
    },
    {
      id: 4,
      name: "Kashmir",
      image: kashmirImage,
      subtitle: "See More",
      description: "Paradise on Earth"
    },
    {
      id: 5,
      name: "Uttarakhand",
      image: uttarakhandImage,
      subtitle: "See More",
      description: "Devbhoomi"
    },
    {
      id: 6,
      name: "Himachal Pradesh",
      image: himachalImage,
      subtitle: "See More",
      description: "Land of Gods"
    },
    {
      id: 7,
      name: "Rajasthan",
      image: rajasthanImage,
      subtitle: "See More",
      description: "Land of Kings"
    }
  ], []);

  // Optimized navigation functions with useCallback
  const goToNext = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, locations.length - cardsPerView);
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
    setTimeout(() => setIsAutoPlaying(true), 5000);
  }, [locations.length, cardsPerView]);

  const goToPrev = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, locations.length - cardsPerView);
      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
    setTimeout(() => setIsAutoPlaying(true), 5000);
  }, [locations.length, cardsPerView]);

  // Determine cards visible per view responsively with debouncing
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const updateCardsPerView = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const width = window.innerWidth;
        if (width >= 1024) {
          setCardsPerView(5);
        } else if (width >= 768) {
          setCardsPerView(3);
        } else if (width >= 640) {
          setCardsPerView(2);
        } else {
          setCardsPerView(1);
        }
      }, 100);
    };
    
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView, { passive: true });
    return () => {
      window.removeEventListener("resize", updateCardsPerView);
      clearTimeout(timeoutId);
    };
  }, []);

  // Auto-scroll functionality with optimized cleanup
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = Math.max(0, locations.length - cardsPerView);
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, locations.length, cardsPerView]);

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MapPin className="h-4 w-4" />
            <span>Popular Locations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Popular Locations
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm border-white/20 hover:bg-white shadow-lg"
            onClick={goToPrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm border-white/20 hover:bg-white shadow-lg"
            onClick={goToNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Carousel */}
          <div 
            ref={carouselRef}
            className="overflow-hidden rounded-2xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                width: `${(locations.length / cardsPerView) * 100}%`
              }}
            >

              {locations.map((location) => (
                <div
                  key={location.id}
                  className="w-full max-w-xs mx-auto sm:w-1/2 md:w-1/3 lg:w-1/5 px-3 flex-shrink-0"
                >
                  <Card onClick={() => navigate(`/tour/${location.name.toLowerCase().includes('spiti') ? 'spiti-valley' : location.name.toLowerCase().includes('himachal') ? 'himachal-pradesh' : location.name.toLowerCase()}`)} className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer h-80">
                    <div className="relative h-full overflow-hidden rounded-xl">
                      <img 
                        src={location.image} 
                        alt={location.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                        style={{
                          willChange: 'transform',
                          transform: 'translateZ(0)',
                        }}
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      
                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                          {location.name}
                        </h3>
                        <p className="text-sm text-white/80 mb-3">
                          {location.description}
                        </p>
                        <Button 
                          variant="outline"
                          size="sm" 
                          className="text-white border-white/30 bg-white/10 hover:bg-white hover:text-black transition-all duration-300"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/tour/${location.name.toLowerCase().includes('spiti') ? 'spiti-valley' : location.name.toLowerCase().includes('himachal') ? 'himachal-pradesh' : location.name.toLowerCase()}`);
                          }}
                        >
                          {location.subtitle}
                        </Button>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: Math.max(1, locations.length - cardsPerView + 1) }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary shadow-lg' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 5000);
                }}
              />
            ))}
          </div>
        </div>

        {/* Auto-play Status */}
        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            {isAutoPlaying ? "Auto-playing • Hover to pause" : "Auto-play paused"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default memo(PopularLocations);