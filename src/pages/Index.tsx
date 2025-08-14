import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PopularLocations from "@/components/PopularLocations";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PopularLocations />
      <FeaturedDestinations />
      <ServicesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
