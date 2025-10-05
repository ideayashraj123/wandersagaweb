import { useState, useMemo, memo, useRef, useEffect } from "react";
import { Search, MapPin, Calendar, Users, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import heroBeach from "@/assets/hero-beach.jpg";

interface HeroSectionProps {
  onPlanTripClick?: () => void;
}

const HeroSection = ({ onPlanTripClick }: HeroSectionProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState("");
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  // Available destinations that match the navbar
  const destinations = useMemo(() => [
    { name: "Spiti Valley", path: "/spiti-valley", searchTerms: ["spiti", "valley", "spiti valley"] },
    { name: "Himachal Pradesh", path: "/himachal", searchTerms: ["himachal", "himachal pradesh", "hp", "kasol"] },
    { name: "Uttarakhand", path: "/uttarakhand", searchTerms: ["uttarakhand", "uk"] },
    { name: "Rajasthan", path: "/rajasthan", searchTerms: ["rajasthan", "rajsthan"] },
    { name: "Kashmir", path: "/kashmir", searchTerms: ["kashmir", "j&k"] },
    { name: "Ladakh", path: "/ladakh", searchTerms: ["ladakh"] },
  ], []);

  // Memoize popular destinations to prevent recreation
  const popularDestinations = useMemo(() => [
    "Spiti Valley", "Kasol", "Uttarakhand", "Rajasthan"
  ], []);

  // Filter destinations based on search query
  const filteredDestinations = useMemo(() => {
    if (!searchQuery.trim()) return destinations;
    
    return destinations.filter(dest => 
      dest.searchTerms.some(term => 
        term.toLowerCase().includes(searchQuery.toLowerCase())
      ) || dest.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, destinations]);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setIsDropdownOpen(value.length > 0);
  };

  // Handle destination selection
  const handleDestinationSelect = (destination: typeof destinations[0]) => {
    setSearchQuery(destination.name);
    setSelectedDestination(destination.path);
    setIsDropdownOpen(false);
  };

  // Handle Find Your Adventure button click
  const handleFindAdventure = () => {
    if (selectedDestination && selectedDestination !== "/") {
      navigate(selectedDestination);
    } else if (searchQuery.trim()) {
      // Try to find a matching destination
      const matchedDestination = destinations.find(dest => 
        dest.searchTerms.some(term => 
          term.toLowerCase() === searchQuery.toLowerCase()
        ) || dest.name.toLowerCase() === searchQuery.toLowerCase()
      );
      
      if (matchedDestination) {
        navigate(matchedDestination.path);
      } else {
        // If no match found, show a message or navigate to homepage
        console.log("Destination not found");
        // You can add a toast notification here if needed
      }
    } else {
      // If no search query, navigate to explore page or show destinations
      navigate('/');
    }
  };

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBeach} 
          alt="Tropical Paradise" 
          className="w-full h-full object-cover"
          style={{
            willChange: 'transform',
            transform: 'translateZ(0)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 hero-pattern"></div>
      </div>

      {/* Floating Elements */}
      {/* Removed Premium Experience floating button */}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="mb-4 sm:mb-6 fade-in-up">
              <span className="inline-block bg-accent/20 backdrop-blur-sm border border-accent/30 text-accent px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                ✨ Get Unforgettable Experiences
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6">
                Discover Spiti Valley
                <span className="block text-gradient">& Himalayan Adventures</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed mb-6 sm:mb-8">
                Create memories that last a lifetime with our carefully curated <strong>Spiti Valley tours</strong>, <strong>Himachal adventures</strong>, and <strong>Himalayan expeditions</strong> to the world's most beautiful destinations.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 fade-in-up stagger-1">
              <Button className="btn-hero text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 w-full sm:w-auto">
                <Search className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Explore Destinations
              </Button>
              <Button 
                variant="outline" 
                onClick={onPlanTripClick}
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
              >
                Plan Your Trip
              </Button>
            </div>

            {/* Popular Destinations Quick Links */}
            <div className="fade-in-up stagger-2">
              <p className="text-white/80 text-xs sm:text-sm mb-3 sm:mb-4">Popular Destinations:</p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => navigate('/spiti-valley')}
                  className="bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2"
                >
                  Spiti Valley Tours
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => navigate('/himachal')}
                  className="bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2"
                >
                  Himachal Tours
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => navigate('/uttarakhand')}
                  className="bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2"
                >
                  Uttarakhand Tours
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => navigate('/kashmir')}
                  className="bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2"
                >
                  Kashmir Tours
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - Search Form */}
          <div className="lg:ml-auto w-full">
            <div className="glass-card p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl max-w-md mx-auto lg:mx-0 fade-in-up stagger-3">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Plan Your Next Adventure</h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-white/80 text-xs sm:text-sm font-medium mb-2">
                    Where do you want to go?
                  </label>
                  <div className="relative" ref={searchRef}>
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground z-10" />
                    <Input
                      placeholder="Search destinations..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                      onFocus={() => setIsDropdownOpen(searchQuery.length > 0)}
                      className="pl-9 sm:pl-10 pr-10 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 h-11 sm:h-12 text-sm sm:text-base"
                    />
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10 hover:bg-white/10 rounded-full p-1 transition-all duration-200"
                    >
                      <ChevronDown className={`h-4 w-4 text-white/60 hover:text-white transition-all duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Dropdown */}
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-60 overflow-y-auto">
                        {(searchQuery.trim() ? filteredDestinations : destinations).length > 0 ? (
                          (searchQuery.trim() ? filteredDestinations : destinations).map((destination, index) => (
                            <button
                              key={index}
                              onClick={() => handleDestinationSelect(destination)}
                              className="w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 hover:bg-gray-50 transition-colors duration-200 text-gray-800 hover:text-primary border-b border-gray-100 last:border-b-0 flex items-center space-x-2"
                            >
                              <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0" />
                              <span className="font-medium text-sm sm:text-base">{destination.name}</span>
                            </button>
                          ))
                        ) : (
                          <div className="px-4 py-3 text-gray-500 text-sm">
                            No destinations found
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-white/80 text-xs sm:text-sm font-medium mb-2">
                      Check-in
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
                      <Input
                        type="date"
                        className="pl-8 sm:pl-10 bg-white/10 backdrop-blur-sm border-white/20 text-white h-11 sm:h-12 text-sm sm:text-base"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/80 text-xs sm:text-sm font-medium mb-2">
                      Travelers
                    </label>
                    <Select>
                      <SelectTrigger className="bg-white/10 backdrop-blur-sm border-white/20 text-white h-11 sm:h-12 text-sm sm:text-base">
                        <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                        <SelectValue placeholder="2 Adults" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Adult</SelectItem>
                        <SelectItem value="2">2 Adults</SelectItem>
                        <SelectItem value="3">3 Adults</SelectItem>
                        <SelectItem value="4">4+ Adults</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button 
                  className="w-full btn-hero text-base sm:text-lg py-3 sm:py-3.5 mt-2"
                  onClick={handleFindAdventure}
                >
                  <Search className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Find Your Adventure
                </Button>

                <div className="pt-3 sm:pt-4">
                  <p className="text-white/60 text-xs sm:text-sm mb-2 sm:mb-3">Popular destinations:</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {popularDestinations.map((dest) => (
                      <button
                        key={dest}
                        onClick={() => {
                          setSearchQuery(dest);
                          // Find if this destination has a specific route
                          const matchedDestination = destinations.find(d => 
                            d.name.toLowerCase().includes(dest.toLowerCase()) || 
                            d.searchTerms.some(term => term.toLowerCase().includes(dest.toLowerCase()))
                          );
                          if (matchedDestination) {
                            setSelectedDestination(matchedDestination.path);
                          } else if (dest.toLowerCase() === "kasol") {
                            // Kasol is part of Himachal Pradesh
                            setSelectedDestination("/himachal");
                          }
                        }}
                        className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs rounded-full hover:bg-white/20 transition-colors"
                      >
                        {dest}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default memo(HeroSection);