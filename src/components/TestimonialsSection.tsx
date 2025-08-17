import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import happyTravelers from "@/assets/happy-travelers.jpg";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, India",
      image: happyTravelers,
      rating: 5,
      text: "Our Spiti Valley expedition with WanderSaga was absolutely incredible! The remote locations, crystal clear lakes, and ancient monasteries left us speechless. Their local guides knew every hidden gem and made our journey truly authentic.",
      trip: "Spiti Valley Expedition"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Delhi, India",
      image: happyTravelers,
      rating: 5,
      text: "The Ladakh adventure tour was the trip of a lifetime! Professional guides, well-planned itinerary, and breathtaking experiences. WanderSaga handled everything seamlessly, allowing us to focus on enjoying the journey.",
      trip: "Ladakh Adventure Tour"
    },
    {
      id: 3,
      name: "Arjun Mehta",
      location: "Bangalore, India",
      image: happyTravelers,
      rating: 5,
      text: "WanderSaga organized the perfect Kashmir trip for our family. From the shikara rides on Dal Lake to the snow activities in Gulmarg, every moment was magical. The accommodations were excellent and the food was absolutely delicious!",
      trip: "Kashmir Paradise Valley"
    },
    {
      id: 4,
      name: "Sneha Gupta",
      location: "Pune, India",
      image: happyTravelers,
      rating: 5,
      text: "As a solo female traveler, I was initially nervous about the Himalayan trek, but WanderSaga's team made me feel completely safe and supported. The Chopta-Tungnath trek was challenging yet rewarding. Highly recommended!",
      trip: "Chopta Tungnath Trek"
    },
    {
      id: 5,
      name: "Vikram Singh",
      location: "Jaipur, India",
      image: happyTravelers,
      rating: 5,
      text: "The Rajasthan heritage tour exceeded all our expectations! WanderSaga's deep knowledge of local culture and history made our visit to palaces and forts come alive. The desert camping experience was the highlight of our trip.",
      trip: "Royal Rajasthan Heritage"
    },
    {
      id: 6,
      name: "Kavya Nair",
      location: "Chennai, India",
      image: happyTravelers,
      rating: 5,
      text: "Our weekend getaway to Himachal with WanderSaga was perfectly planned. The Kasol-Kheerganga trek was adventure at its best, and the natural hot springs were so relaxing. Can't wait to book our next trip with them!",
      trip: "Kasol Kheerganga Trek"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-5 w-5 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`} 
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            💬 What Our Travelers Say
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Real Stories from Our Travelers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Hear from our satisfied customers who have 
            experienced the magic of traveling with WanderSaga.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-card backdrop-blur-sm border-0 shadow-large rounded-3xl overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Testimonial Content */}
                <div className="flex-1">
                  <Quote className="h-12 w-12 text-accent mb-6 opacity-20" />
                  
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>
                    
                    <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-6">
                      "{testimonials[currentIndex].text}"
                    </blockquote>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-foreground text-lg">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-muted-foreground">
                          {testimonials[currentIndex].location}
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-sm text-accent font-medium">
                          {testimonials[currentIndex].trip}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Customer Image */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-medium">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border-white/20 hover:bg-white shadow-medium"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border-white/20 hover:bg-white shadow-medium"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary w-8' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;