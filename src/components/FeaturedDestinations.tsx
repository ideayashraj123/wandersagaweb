import { Star, MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useRef, useCallback, useMemo, memo } from "react";
import mountainAdventure from "@/assets/mountain-adventure.jpg";
import culturalHeritage from "@/assets/cultural-heritage.jpg";
import heroBeach from "@/assets/hero-beach.jpg";
import spitiValley from "@/assets/Spitivalley.jpg";

const FeaturedDestinations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Memoize destinations to prevent recreation on each render
  const destinations = useMemo(() => [
    {
      id: 1,
      name: "Winter Spiti Expedition",
      location: "Spiti Valley, India",
      image: heroBeach,
      rating: 4.9,
      reviews: 234,
      duration: "5-7 Days",
      groupSize: "2-8 People",
      price: "₹89,999",
      originalPrice: "₹1,19,999",
      highlights: ["Snow Adventures", "Frozen Waterfalls", "Winter Monasteries"],
      category: "Adventure"
    },
    {
      id: 2,
      name: "Summer Spiti Circuit with Chandrataal",
      location: "Spiti Valley, India",
      image: mountainAdventure,
      rating: 4.8,
      reviews: 189,
      duration: "7-10 Days",
      groupSize: "4-12 People",
      price: "₹45,999",
      originalPrice: "₹59,999",
      highlights: ["Chandrataal Lake", "High Altitude Desert", "Ancient Monasteries"],
      category: "Adventure"
    },
    {
      id: 3,
      name: "Spiti Valley Bike Exp",
      location: "Spiti Valley, India",
      image: culturalHeritage,
      rating: 4.7,
      reviews: 156,
      duration: "6-8 Days",
      groupSize: "2-6 People",
      price: "₹35,999",
      originalPrice: "₹49,999",
      highlights: ["Bike Adventure", "Mountain Passes", "Local Villages"],
      category: "Adventure"
    },
    {
      id: 4,
      name: "Short Circuit Summer Spiti Expedition",
      location: "Spiti Valley, India",
      image: spitiValley,
      rating: 4.9,
      reviews: 112,
      duration: "6-8 Days",
      groupSize: "4-10 People",
      price: "₹13,999",
      originalPrice: "₹18,999",
      highlights: ["High Altitude Desert", "Ancient Monasteries", "Adventure Drive"],
      category: "Adventure"
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

  // Optimized navigation functions with useCallback
  const goToNext = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, destinations.length - cardsPerView);
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
    setTimeout(() => setIsAutoPlaying(true), 5000);
  }, [destinations.length, cardsPerView]);

  const goToPrev = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, destinations.length - cardsPerView);
      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
    setTimeout(() => setIsAutoPlaying(true), 5000);
  }, [destinations.length, cardsPerView]);

  // Determine cards visible per view responsively with debouncing
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const updateCardsPerView = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const width = window.innerWidth;
        if (width >= 1024) {
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

  // Auto-scroll functionality with optimized cleanup
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = Math.max(0, destinations.length - cardsPerView);
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, destinations.length, cardsPerView]);

  return (
    <section className="py-20 bg-muted/30">
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
        <div className="relative">
          {/* Navigation Arrows */}
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

          {/* Carousel Container */}
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
                width: `${(destinations.length / cardsPerView) * 100}%`
              }}
            >
              {destinations.map((destination, index) => (
                <div
                  key={destination.id}
                  className="w-full flex-shrink-0 px-4"
                  style={{ width: `${100 / destinations.length}%` }}
                >
                  <Card 
                    className={`group overflow-hidden bg-card shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 border-0 rounded-3xl fade-in-up h-full flex flex-col`}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={destination.image} 
                        alt={destination.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                        decoding="async"
                        style={{
                          willChange: 'transform',
                          transform: 'translateZ(0)',
                        }}
                      />
                      
                      {/* Category Badge */}
                      <div className={`absolute top-4 left-4 ${getCategoryColor(destination.category)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                        {destination.category}
                      </div>
                      
                      {/* Price Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-3">
                        <div className="text-sm text-muted-foreground line-through">
                          {destination.originalPrice}
                        </div>
                        <div className="text-lg font-bold text-primary">
                          {destination.price}
                        </div>
                      </div>

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="flex-1">
                        <div className="mb-2">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {destination.name}
                          </h3>
                        </div>
                        
                        <div className="flex items-center text-muted-foreground mb-3">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{destination.location}</span>
                        </div>

                        <div className="flex items-center text-sm text-muted-foreground mb-4">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{destination.duration}</span>
                        </div>

                        {/* Highlights */}
                        <div className="mb-6">
                          <div className="flex flex-wrap gap-2">
                            {destination.highlights.map((highlight) => (
                              <span 
                                key={highlight}
                                className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <Button className="w-full btn-hero group-hover:scale-105 transition-transform mt-auto">
                        Book Now
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
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