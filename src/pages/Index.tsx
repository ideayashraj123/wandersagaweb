import { lazy, Suspense, useState } from "react";
import SEO from "@/components/SEO";
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

  // SEO Schema for homepage
  const homepageSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency", 
    "name": "WanderSaga",
    "description": "Premium travel agency for Spiti Valley, Himachal, Uttarakhand tours",
    "url": "https://wandersaga.in",
    "telephone": "+91-9876543210",
    "email": "info@wandersaga.in",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500"
    },
    "offers": {
      "@type": "Offer",
      "name": "Himalayan Tours",
      "description": "Spiti Valley, Himachal, Uttarakhand travel packages"
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="WanderSaga - Spiti Valley & Himachal Tours | Travel Agency"
        description="Premium Spiti Valley, Himachal & Uttarakhand tours by WanderSaga. Expert guides, bike expeditions, 4.9★ rated. Book your dream Himalayan adventure today!"
        keywords="Spiti Valley tours, Himachal tours, Uttarakhand travel, travel agency India, bike expeditions, Himalayan adventures, Kashmir tours, Ladakh trips, WanderSaga"
        canonicalUrl="https://wandersaga.in"
        schema={homepageSchema}
      />
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
