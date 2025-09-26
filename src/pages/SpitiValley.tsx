import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, Users, Phone, Mail, Calendar } from "lucide-react";
import spitiValley from "@/assets/Spitivalley.jpg";
import spitiBike from "@/assets/images/spitibike.jpg";
import spitiShortCircuit from "@/assets/images/spitishortcircuit.jpg";
import winterSpiti from "@/assets/images/winterspiti.jpg";
import spitiLakeWithChandrataal from "@/assets/images/spitiliake with chandratal.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SpitiValley = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const spitiTours = [
    {
      id: 1,
      name: "Full Circuit Summer Spiti Valley Tour Package",
      location: "Spiti Valley, Himachal Pradesh",
      image: spitiLakeWithChandrataal,
      rating: 4.9,
      duration: "6N/7D",
      groupSize: "4-12 People",
      price: "₹19,499",
      originalPrice: "₹24,999",
      highlights: ["Chandrataal Lake", "World's Highest Post Office at Hikkim", "Fossil Park at Langza", "Key Monastery"],
      category: "Adventure",
      tourSlug: "summer-spiti-circuit-chandrataal",
      description: "Experience the complete Spiti Valley circuit with our premium travel package featuring Chandrataal Lake, ancient monasteries, and breathtaking Himalayan landscapes. Perfect for first-time Spiti Valley travelers.",
      altText: "Spiti Valley full circuit tour with Chandrataal Lake - WanderSaga travel agency"
    },
    {
      id: 2,
      name: "Winter Spiti Valley Expedition Package",
      location: "Spiti Valley, Himachal Pradesh",
      image: winterSpiti,
      rating: 4.9,
      duration: "6N/7D",
      groupSize: "2-8 People",
      price: "₹16,500",
      originalPrice: "₹25,999",
      highlights: ["Snow Adventures", "Frozen Waterfalls", "Winter Monasteries", "Chadar Trek Style"],
      category: "Adventure",
      tourSlug: "winter-spiti-expedition",
      description: "Explore the mystical winter landscape of Spiti Valley with our specialized winter tour package featuring frozen waterfalls, snow-covered monasteries, and unique winter experiences in Little Tibet.",
      altText: "Winter Spiti Valley tour package with snow adventures - WanderSaga"
    },
    {
      id: 3,
      name: "Spiti Valley Bike Expedition Tour",
      location: "Spiti Valley via Manali-Leh Highway",
      image: spitiBike,
      rating: 4.7,
      duration: "6-8 Days",
      groupSize: "2-6 People",
      price: "₹29,999",
      originalPrice: "₹35,999",
      highlights: ["Royal Enfield Bikes", "High Altitude Passes", "Mechanical Support", "Expert Riders"],
      category: "Adventure",
      tourSlug: "spiti-valley-bike-expedition",
      description: "Ultimate Spiti Valley bike trip for adventure enthusiasts. Our premium bike expedition includes Royal Enfield motorcycles, experienced guides, mechanical support, and thrilling high-altitude passes.",
      altText: "Spiti Valley bike trip expedition on Royal Enfield - Adventure travel agency"
    },
    {
      id: 4,
      name: "Short Circuit Spiti Valley Budget Tour",
      location: "Spiti Valley via Shimla",
      image: spitiShortCircuit,
      rating: 4.9,
      duration: "5 Days",
      groupSize: "4-10 People",
      price: "₹13,999",
      originalPrice: "₹18,999",
      highlights: ["Chandrataal Lake", "Rohtang Pass", "Kaza Exploration", "Budget Friendly"],
      category: "Adventure",
      tourSlug: "short-circuit-summer-spiti",
      description: "Perfect budget-friendly Spiti Valley tour for travelers with limited time. Experience the valley's highlights including Chandrataal Lake, Kaza town, and stunning mountain landscapes at affordable prices.",
      altText: "Budget Spiti Valley short circuit tour package - Affordable travel agency"
    }
  ];

  const handleTourClick = (tourSlug: string) => {
    navigate(`/tour/${tourSlug}`);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Adventure": return "bg-green-500";
      default: return "bg-primary";
    }
  };

  // SEO Schema for Spiti Valley tours
  const spitiValleySchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "WanderSaga - Spiti Valley Tours",
    "description": "Leading travel agency for Spiti Valley expeditions, bike trips, and adventure tours",
    "url": "https://wandersaga.in/spiti-valley",
    "telephone": "+91-9876543210",
    "email": "info@wandersaga.in",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "Himachal Pradesh"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Spiti Valley Full Circuit Tour",
        "description": "Complete Spiti Valley circuit with Chandrataal Lake",
        "price": "19499",
        "priceCurrency": "INR"
      },
      {
        "@type": "Offer", 
        "name": "Spiti Valley Bike Expedition",
        "description": "Royal Enfield bike trip through Spiti Valley",
        "price": "29999",
        "priceCurrency": "INR"
      }
    ],
    "areaServed": {
      "@type": "Place",
      "name": "Spiti Valley, Himachal Pradesh, India"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500"
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Spiti Valley Tours & Travel Packages 2025 | Best Spiti Valley Travel Agency"
        description="Experience the best Spiti Valley tours with WanderSaga - Leading travel agency for Spiti Valley expeditions. Book Spiti Valley bike trips, winter tours, Chandrataal Lake packages. Expert guides, affordable prices. #1 Spiti Valley travel company."
        keywords="Spiti Valley tours, Spiti Valley travel agency, Spiti Valley packages, Spiti Valley bike trip, Spiti Valley winter tour, Chandrataal Lake tour, Spiti Valley expedition, travel agency Spiti, Spiti Valley trek, best Spiti Valley tour operator, Spiti Valley travel packages 2025, Himachal Pradesh tours, Little Tibet tours, Spiti Valley budget tours, luxury Spiti tours"
        canonicalUrl="https://wandersaga.in/spiti-valley"
        ogImage="https://wandersaga.in/spiti-valley-tours.jpg"
        schema={spitiValleySchema}
      />
      
      <Navbar />
      <div className="pt-20">
        <Breadcrumb />
      </div>
      <div className="bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-r from-primary/90 to-primary/80 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div 
            className="absolute inset-0 bg-cover bg-no-repeat" 
            style={{ 
              backgroundImage: `url(${spitiValley})`,
              backgroundPosition: '50% 15%'
            }}
          ></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Best Spiti Valley Travel Agency
              <span className="block text-accent mt-2">Premium Spiti Valley Tours & Expeditions</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Discover the mystical "Little Tibet" with India's leading Spiti Valley travel agency. 
              Experience premium Spiti Valley tours, bike expeditions, winter adventures, and Chandrataal Lake packages. 
              Expert guides, 5-star reviews, affordable prices.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-white/90 mb-8">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-accent" />
                <span>Spiti Valley, Himachal Pradesh</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span>4.9★ Rated Travel Agency</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-accent" />
                <span>5000+ Happy Travelers</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: +91-9876543210
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-xl font-semibold text-lg">
                <Calendar className="h-5 w-5 mr-2" />
                Book Free Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Why Choose WanderSaga for Your Spiti Valley Adventure?
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    WanderSaga is the premier <strong>Spiti Valley travel agency</strong> with over 10 years of expertise in organizing 
                    unforgettable Spiti Valley expeditions. Our specialized Spiti Valley tours are designed for adventure enthusiasts 
                    seeking authentic experiences in the remote Himalayan wilderness.
                  </p>
                  <p>
                    From thrilling <strong>Spiti Valley bike trips</strong> to serene winter expeditions and breathtaking 
                    <strong> Chandrataal Lake tours</strong>, we offer comprehensive travel packages that cater to every type of traveler.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-4 bg-accent/5 rounded-xl">
                    <div className="text-3xl font-bold text-accent">5000+</div>
                    <div className="text-sm text-muted-foreground">Happy Travelers</div>
                  </div>
                  <div className="text-center p-4 bg-accent/5 rounded-xl">
                    <div className="text-3xl font-bold text-accent">4.9★</div>
                    <div className="text-sm text-muted-foreground">Customer Rating</div>
                  </div>
                  <div className="text-center p-4 bg-accent/5 rounded-xl">
                    <div className="text-3xl font-bold text-accent">50+</div>
                    <div className="text-sm text-muted-foreground">Tour Packages</div>
                  </div>
                  <div className="text-center p-4 bg-accent/5 rounded-xl">
                    <div className="text-3xl font-bold text-accent">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={spitiLakeWithChandrataal} 
                  alt="Spiti Valley Chandrataal Lake tour by WanderSaga travel agency"
                  className="w-full rounded-2xl shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-primary">From ₹13,999</div>
                  <div className="text-sm text-muted-foreground">Per Person</div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Tours Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Best Spiti Valley Tour Packages 2025
              <span className="block text-gradient mt-2">Choose Your Perfect Spiti Valley Adventure</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Explore our curated collection of <strong>Spiti Valley tours</strong> - from budget-friendly expeditions to luxury packages. 
              Our expert travel agency offers the best <strong>Spiti Valley travel packages</strong> including bike trips, winter tours, 
              and Chandrataal Lake expeditions. Book with India's most trusted Spiti Valley tour operator.
            </p>
          </div>

          {/* Tours Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {spitiTours.map((tour) => (
              <Card 
                key={tour.id}
                className="group overflow-hidden bg-card shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 border-0 rounded-3xl h-full flex flex-col cursor-pointer"
                onClick={() => handleTourClick(tour.tourSlug)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.altText}
                    className="w-full h-64 object-cover object-[50%_80%] group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 left-4 ${getCategoryColor(tour.category)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {tour.category}
                  </div>
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-3">
                    <div className="text-sm text-muted-foreground line-through">
                      {tour.originalPrice}
                    </div>
                    <div className="text-lg font-bold text-primary">
                      {tour.price}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {tour.name}
                    </h3>
                    
                    <div className="flex items-center text-muted-foreground mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{tour.location}</span>
                    </div>

                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {tour.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{tour.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{tour.groupSize}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="font-medium">{tour.rating}</span>
                      </div>
                    </div>
                    
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {tour.highlights.slice(0, 3).map((highlight, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white border-0 rounded-xl py-3 font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTourClick(tour.tourSlug);
                    }}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="mt-16 text-center bg-white rounded-3xl p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Book Your Spiti Valley Adventure?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied travelers who chose WanderSaga for their Spiti Valley journey. 
              Get instant quotes, expert advice, and 24/7 support for your dream Spiti Valley expedition.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <Phone className="h-5 w-5 mr-2" />
                Call Travel Expert: +91-9876543210
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl font-semibold text-lg"
              >
                <Mail className="h-5 w-5 mr-2" />
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section - Why Choose Spiti Valley */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-foreground mb-12">
              Spiti Valley Travel Guide - Everything You Need to Know
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Why Spiti Valley is the Ultimate Adventure Destination
              </h3>
              <p className="text-muted-foreground mb-6">
                Spiti Valley, often called "Little Tibet," is a high-altitude cold desert in Himachal Pradesh that offers 
                some of the most spectacular landscapes in the Indian Himalayas. As the leading <strong>Spiti Valley travel agency</strong>, 
                WanderSaga has been organizing premium expeditions to this mystical destination for over a decade.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Best Time to Visit Spiti Valley
              </h3>
              <p className="text-muted-foreground mb-6">
                The best time for <strong>Spiti Valley tours</strong> is from May to October for summer expeditions, and December to March 
                for winter adventures. Our expert travel agency recommends June to September for first-time visitors, when all roads 
                are accessible and weather conditions are optimal for sightseeing.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Top Attractions in Our Spiti Valley Packages
              </h3>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li><strong>Chandrataal Lake</strong> - The pristine high-altitude lake featured in all our premium packages</li>
                <li><strong>Key Monastery</strong> - Ancient Buddhist monastery with stunning valley views</li>
                <li><strong>Hikkim Post Office</strong> - World's highest post office at 15,500 feet</li>
                <li><strong>Pin Valley National Park</strong> - Home to rare snow leopards and blue sheep</li>
                <li><strong>Langza Fossil Village</strong> - Ancient marine fossils and Buddha statue</li>
                <li><strong>Tabo Monastery</strong> - 1000-year-old "Ajanta of the Himalayas"</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Our Spiti Valley Travel Services
              </h3>
              <p className="text-muted-foreground mb-6">
                As a premium <strong>Spiti Valley tour operator</strong>, we provide comprehensive travel services including 
                comfortable accommodations, experienced local guides, reliable transportation, safety equipment, and 24/7 support. 
                Our <strong>Spiti Valley bike trips</strong> include Royal Enfield motorcycles with full mechanical backup.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Explore More Himalayan Destinations
              </h3>
              <p className="text-muted-foreground mb-4">
                Looking for more adventure? Discover our other premium travel packages:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <Button 
                  variant="outline" 
                  className="text-left p-4 h-auto justify-start"
                  onClick={() => navigate('/himachal')}
                >
                  <div>
                    <div className="font-semibold">Himachal Tours</div>
                    <div className="text-xs text-muted-foreground">Shimla, Manali & More</div>
                  </div>
                </Button>
                <Button 
                  variant="outline" 
                  className="text-left p-4 h-auto justify-start"
                  onClick={() => navigate('/uttarakhand')}
                >
                  <div>
                    <div className="font-semibold">Uttarakhand Tours</div>
                    <div className="text-xs text-muted-foreground">Kedarnath, Valley of Flowers</div>
                  </div>
                </Button>
                <Button 
                  variant="outline" 
                  className="text-left p-4 h-auto justify-start"
                  onClick={() => navigate('/kashmir')}
                >
                  <div>
                    <div className="font-semibold">Kashmir Tours</div>
                    <div className="text-xs text-muted-foreground">Paradise on Earth</div>
                  </div>
                </Button>
                <Button 
                  variant="outline" 
                  className="text-left p-4 h-auto justify-start"
                  onClick={() => navigate('/ladakh')}
                >
                  <div>
                    <div className="font-semibold">Ladakh Tours</div>
                    <div className="text-xs text-muted-foreground">Land of High Passes</div>
                  </div>
                </Button>
                <Button 
                  variant="outline" 
                  className="text-left p-4 h-auto justify-start"
                  onClick={() => navigate('/rajasthan')}
                >
                  <div>
                    <div className="font-semibold">Rajasthan Tours</div>
                    <div className="text-xs text-muted-foreground">Royal Heritage</div>
                  </div>
                </Button>
                <Button 
                  variant="outline" 
                  className="text-left p-4 h-auto justify-start"
                  onClick={() => navigate('/weekend-getaways')}
                >
                  <div>
                    <div className="font-semibold">Weekend Getaways</div>
                    <div className="text-xs text-muted-foreground">Quick Escapes</div>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-foreground mb-12">
              Frequently Asked Questions - Spiti Valley Tours
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  What is the best time to visit Spiti Valley?
                </h3>
                <p className="text-muted-foreground">
                  The best time for Spiti Valley tours is May to October for summer expeditions. Our travel agency 
                  recommends June to September for first-time visitors when roads are accessible and weather is optimal.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  How much does a Spiti Valley tour cost?
                </h3>
                <p className="text-muted-foreground">
                  Our Spiti Valley packages range from ₹13,999 for short circuit tours to ₹29,999 for premium bike expeditions. 
                  All packages include accommodation, transportation, meals, and expert guides.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Is Spiti Valley safe for tourists?
                </h3>
                <p className="text-muted-foreground">
                  Yes, Spiti Valley is safe with our experienced guides and safety protocols. Our travel agency provides 
                  24/7 support, emergency contacts, and comprehensive safety briefings for all tour participants.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  What is included in Spiti Valley tour packages?
                </h3>
                <p className="text-muted-foreground">
                  Our packages include accommodation, transportation, meals, experienced guides, permits, 
                  and 24/7 support. Bike tours include Royal Enfield motorcycles and mechanical backup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default SpitiValley;
