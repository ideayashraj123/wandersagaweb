import { useState, useMemo, memo } from "react";
import { Search, MapPin, Calendar, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroBeach from "@/assets/hero-beach.jpg";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Memoize popular destinations to prevent recreation
  const popularDestinations = useMemo(() => [
    "Dubai", "Thailand", "Vietnam", "Kashmir", "Ladakh", "Manali", "Goa", "Kerala"
  ], []);

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

      <div className="absolute bottom-32 right-20 glass-card p-3 float stagger-2 hidden lg:block">
        <div className="text-center">
          <div className="text-2xl font-bold text-white">500+</div>
          <div className="text-sm text-white/80">Happy Travelers</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="mb-6 fade-in-up">
              <span className="inline-block bg-accent/20 backdrop-blur-sm border border-accent/30 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
                ✨ Get Unforgettable Experiences
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                Discover Your
                <span className="block text-gradient">Dream Journey</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-8">
                Create memories that last a lifetime with our carefully curated travel experiences to the world's most beautiful destinations.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 fade-in-up stagger-1">
              <Button className="btn-hero text-lg px-8 py-4">
                <Search className="h-5 w-5 mr-2" />
                Explore Destinations
              </Button>
              <Button 
                variant="outline" 
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 px-8 py-4 text-lg"
              >
                Plan Your Trip
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 fade-in-up stagger-2">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">50+</div>
                <div className="text-sm text-white/80">Destinations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-white/80">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-white/80">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Search Form */}
          <div className="lg:ml-auto">
            <div className="glass-card p-8 rounded-3xl max-w-md fade-in-up stagger-3">
              <h3 className="text-2xl font-bold text-white mb-6">Plan Your Next Adventure</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Where do you want to go?
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="Search destinations..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Check-in
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="date"
                        className="pl-10 bg-white/10 backdrop-blur-sm border-white/20 text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Travelers
                    </label>
                    <Select>
                      <SelectTrigger className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                        <Users className="h-4 w-4 mr-2" />
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

                <Button className="w-full btn-hero text-lg py-3">
                  <Search className="h-5 w-5 mr-2" />
                  Find Your Adventure
                </Button>

                <div className="pt-4">
                  <p className="text-white/60 text-sm mb-3">Popular destinations:</p>
                  <div className="flex flex-wrap gap-2">
                    {popularDestinations.slice(0, 4).map((dest) => (
                      <button
                        key={dest}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs rounded-full hover:bg-white/20 transition-colors"
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default memo(HeroSection);