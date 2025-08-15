import { lazy, Suspense, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

// Lazy load components that are not immediately visible
const PremiumTrip = lazy(() => import("@/components/PremiumTrip"));
const PopularLocations = lazy(() => import("@/components/PopularLocations"));
const FeaturedDestinations = lazy(() => import("@/components/FeaturedDestinations"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const Footer = lazy(() => import("@/components/Footer"));
const PromotionalPopup = lazy(() => import("@/components/PromotionalPopup"));

// Performance-optimized loading component
const LazyComponentFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const Index = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePlanTripClick = () => {
    setIsPopupOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection onPlanTripClick={handlePlanTripClick} />
      <Suspense fallback={<LazyComponentFallback />}>
        <PremiumTrip />
      </Suspense>
      <Suspense fallback={<LazyComponentFallback />}>
        <PopularLocations />
      </Suspense>
      <Suspense fallback={<LazyComponentFallback />}>
        <FeaturedDestinations />
      </Suspense>
      <Suspense fallback={<LazyComponentFallback />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<LazyComponentFallback />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<LazyComponentFallback />}>
        <Footer />
      </Suspense>
      <Suspense fallback={<LazyComponentFallback />}>
        <PromotionalPopup isOpen={isPopupOpen} onOpenChange={setIsPopupOpen} />
      </Suspense>
    </div>
  );
};

export default Index;
