import { 
  Plane, 
  MapPin, 
  Camera, 
  Shield, 
  Headphones, 
  Calendar,
  Globe,
  Heart
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Plane,
      title: "Flight Booking",
      description: "Best deals on international and domestic flights with flexible booking options.",
      features: ["24/7 Support", "Best Price Guarantee", "Flexible Dates"]
    },
    {
      icon: MapPin,
      title: "Hotel Reservations",
      description: "Handpicked accommodations from luxury resorts to boutique stays worldwide.",
      features: ["Verified Reviews", "Instant Confirmation", "Free Cancellation"]
    },
    {
      icon: Camera,
      title: "Guided Tours",
      description: "Expert local guides to help you discover hidden gems and cultural experiences.",
      features: ["Local Experts", "Small Groups", "Authentic Experiences"]
    },
    {
      icon: Globe,
      title: "Visa Assistance",
      description: "Complete visa processing support for hassle-free international travel.",
      features: ["Document Help", "Fast Processing", "Expert Guidance"]
    },
    {
      icon: Shield,
      title: "Travel Insurance",
      description: "Comprehensive coverage to protect your journey from unexpected events.",
      features: ["Medical Coverage", "Trip Protection", "24/7 Claims"]
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock assistance to ensure your travel experience is seamless.",
      features: ["Live Chat", "Phone Support", "Emergency Help"]
    },
    {
      icon: Calendar,
      title: "Custom Itineraries",
      description: "Personalized travel plans crafted to match your preferences and budget.",
      features: ["Tailored Plans", "Flexible Schedule", "Local Insights"]
    },
    {
      icon: Heart,
      title: "Group Travel",
      description: "Special packages for families, friends, and corporate group adventures.",
      features: ["Group Discounts", "Team Building", "Shared Experiences"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            🚀 Our Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need for
            <span className="block text-gradient">Perfect Travel</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From planning to execution, we handle every aspect of your journey 
            with care and expertise to ensure unforgettable experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className={`group bg-card hover:bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-1 rounded-2xl fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:animate-pulse-glow">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className="flex items-center text-xs text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect Indicator */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-in-up">
          <div className="bg-gradient-hero rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Start Your Adventure?
            </h3>
            <p className="text-lg mb-6 text-white/90">
              Let our travel experts create your perfect journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary">
                Info@wandersaga.in
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-6 py-3 rounded-xl font-medium transition-all duration-300">
                Call +91-9286483766
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;