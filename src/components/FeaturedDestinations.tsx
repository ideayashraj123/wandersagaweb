import { Star, MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useRef, useCallback, useMemo, memo } from "react";
import { useNavigate } from "react-router-dom";
import spitiBike from "@/assets/images/spitibike.jpg";
import spitiShortCircuit from "@/assets/images/spitishortcircuit.jpg";
import winterSpiti from "@/assets/images/winterspiti.jpg";
import spitiLakeWithChandrataal from "@/assets/images/spitiliake with chandratal.jpg";

const FeaturedDestinations = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Memoize destinations to prevent recreation on each render
  const destinations = useMemo(() => [
    {
      id: 1,
      name: "Winter Spiti Expedition",
      location: "Spiti Valley, India",
      image: winterSpiti,
      rating: 4.9,
      duration: "5-7 Days",
      groupSize: "2-8 People",
      price: "₹19,999",
      originalPrice: "₹25,999",
      highlights: ["Snow Adventures", "Frozen Waterfalls", "Winter Monasteries"],
      category: "Adventure",
      tourSlug: "winter-spiti-expedition"
    },
    {
      id: 2,
      name: "Summer Spiti Circuit with Chandrataal",
      location: "Spiti Valley, India",
      image: spitiLakeWithChandrataal,
      rating: 4.9,
      duration: "6N/7D",
      groupSize: "4-12 People",
      price: "₹19,499",
      originalPrice: "₹24,999",
      highlights: ["Chandrataal Lake", "World's Highest Post Office", "Fossil Park at Langza"],
      category: "Adventure",
      tourSlug: "summer-spiti-circuit-chandrataal"
    },
    {
      id: 3,
      name: "Spiti Valley Bike Exp",
      location: "Spiti Valley, India",
      image: spitiBike,
      rating: 4.7,
      duration: "6-8 Days",
      groupSize: "2-6 People",
      price: "₹29,999",
      originalPrice: "₹35,999",
      highlights: ["Ultimate Biking Adventure", "High Passes", "Mechanical Backup"],
      category: "Adventure",
      tourSlug: "spiti-valley-bike-expedition"
    },
    {
      id: 4,
      name: "Short Circuit Summer Spiti Expedition",
      location: "Spiti Valley, India",
      image: spitiShortCircuit,
      rating: 4.9,
      duration: "5 Days",
      groupSize: "4-10 People",
      price: "₹13,999",
      originalPrice: "₹18,999",
      highlights: ["Chandrataal Lake", "Rohtang Pass", "Kaza Exploration"],
      category: "Adventure",
      tourSlug: "short-circuit-summer-spiti"
    }
  ], []);

  // Memoize the category color function
  const getCategoryColor = useCallback((category: string) => {
    switch (category) {
      case "Beach": return "bg-blue-500";
      case "Adventure": return "bg-green-500";
      case "Cultural": return "bg-purple-500";
      default: return "bg-primary";
    }
  }, []);

  // Handle destination click
  const handleDestinationClick = useCallback((tourSlug: string) => {
    navigate(`/tour/${tourSlug}`);
  }, [navigate]);

  // Optimized navigation functions with useCallback
  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, destinations.length - cardsPerView);
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  }, [destinations.length, cardsPerView]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, destinations.length - cardsPerView);
      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
  }, [destinations.length, cardsPerView]);

  // Determine cards visible per view responsively with debouncing
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const updateCardsPerView = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const width = window.innerWidth;
        if (width >= 1280) {
          setCardsPerView(3);
        } else if (width >= 1024) {
          setCardsPerView(3);
        } else if (width >= 768) {
          setCardsPerView(2);
        } else {
          setCardsPerView(1);
        }
      }, 100); // Debounce resize events
    };
    
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView, { passive: true });
    return () => {
      window.removeEventListener("resize", updateCardsPerView);
      clearTimeout(timeoutId);
    };
  }, []);

  // Reset currentIndex when cardsPerView changes to prevent out-of-bounds
  useEffect(() => {
    const maxIndex = Math.max(0, destinations.length - cardsPerView);
    if (currentIndex > maxIndex) {
      setCurrentIndex(0);
    }
  }, [cardsPerView, destinations.length, currentIndex]);

  return (
    <section id="featured-destinations" className="py-20 bg-muted/30">
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

        {/* Destinations Carousel */}
        <div className="relative px-4 sm:px-8 md:px-12 lg:px-16">
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 sm:left-4 md:left-8 lg:left-12 top-1/3 -translate-y-1/2 z-10 bg-white/95 backdrop-blur-sm border-white/30 hover:bg-white hover:scale-110 shadow-lg transition-all duration-300 hidden md:flex"
            onClick={goToPrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 sm:right-4 md:right-8 lg:right-12 top-1/3 -translate-y-1/2 z-10 bg-white/95 backdrop-blur-sm border-white/30 hover:bg-white hover:scale-110 shadow-lg transition-all duration-300 hidden md:flex"
            onClick={goToNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Carousel Container */}
          <div 
            ref={carouselRef}
            className="overflow-hidden rounded-2xl"
          >
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              }}
            >
              {destinations.map((destination, index) => (
                <div
                  key={destination.id}
                  className="flex-shrink-0 px-2 sm:px-3 md:px-4"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <Card 
                    className={`group overflow-hidden bg-card shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 border-0 rounded-2xl sm:rounded-3xl fade-in-up h-full flex flex-col cursor-pointer`}
                    onClick={() => handleDestinationClick(destination.tourSlug)}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={destination.image} 
                        alt={destination.name}
                        className="w-full h-48 sm:h-56 md:h-64 object-cover object-[50%_80%] group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                        decoding="async"
                        style={{
                          willChange: 'transform',
                          transform: 'translateZ(0)',
                        }}
                      />
                      
                      {/* Category Badge */}
                      <div className={`absolute top-3 sm:top-4 left-3 sm:left-4 ${getCategoryColor(destination.category)} text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium`}>
                        {destination.category}
                      </div>
                      
                      {/* Price Badge */}
                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3">
                        <div className="text-xs sm:text-sm text-muted-foreground line-through">
                          {destination.originalPrice}
                        </div>
                        <div className="text-sm sm:text-lg font-bold text-primary">
                          {destination.price}
                        </div>
                      </div>

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <CardContent className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                      <div className="flex-1">
                        <div className="mb-2">
                          <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {destination.name}
                          </h3>
                        </div>
                        
                        <div className="flex items-center text-muted-foreground mb-2 sm:mb-3">
                          <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                          <span className="text-xs sm:text-sm">{destination.location}</span>
                        </div>

                        <div className="flex items-center text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                          <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                          <span>{destination.duration}</span>
                        </div>

                        {/* Highlights */}
                        <div className="mb-4 sm:mb-6">
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {destination.highlights.map((highlight) => (
                              <span 
                                key={highlight}
                                className="px-2 sm:px-3 py-1 bg-accent/10 text-accent text-xs rounded-full"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <Button 
                        className="w-full btn-hero group-hover:scale-105 transition-transform mt-auto text-sm sm:text-base py-2 sm:py-3"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDestinationClick(destination.tourSlug);
                        }}
                      >
                        Book Now
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            {/* Mobile Navigation Arrows */}
            <Button
              variant="outline"
              size="sm"
              className="md:hidden bg-white/90 backdrop-blur-sm border-white/30 hover:bg-white shadow-lg"
              onClick={goToPrev}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots */}
            <div className="flex space-x-2">
              {Array.from({ length: Math.max(1, destinations.length - cardsPerView + 1) }).map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary shadow-lg' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  onClick={() => {
                    setCurrentIndex(index);
                  }}
                />
              ))}
            </div>

            {/* Mobile Navigation Arrows */}
            <Button
              variant="outline"
              size="sm"
              className="md:hidden bg-white/90 backdrop-blur-sm border-white/30 hover:bg-white shadow-lg"
              onClick={goToNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
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

export default memo(FeaturedDestinations);