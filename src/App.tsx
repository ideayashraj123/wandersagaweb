import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TourDetail from "./pages/TourDetail";
import UttarakhandTours from "./components/UttarakhandTours";
import HimachalTours from "./components/HimachalTours";
import SpitiValley from "./pages/SpitiValley";
import Himachal from "./pages/Himachal";
import Uttarakhand from "./pages/Uttarakhand";
import WeekendGetaways from "./pages/WeekendGetaways";
import AboutUs from "./pages/AboutUs";
import Disclaimer from "./pages/Disclaimer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Rajasthan from "./pages/Rajasthan";
import Kashmir from "./pages/Kashmir";
import Ladakh from "./pages/Ladakh";
import Contact from "./pages/Contact";

// Optimize QueryClient for better performance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (replaces cacheTime in v5)
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider delayDuration={200}>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/spiti-valley" element={<SpitiValley />} />
          <Route path="/himachal" element={<Himachal />} />
          <Route path="/uttarakhand" element={<Uttarakhand />} />
          <Route path="/rajasthan" element={<Rajasthan />} />
          <Route path="/kashmir" element={<Kashmir />} />
          <Route path="/ladakh" element={<Ladakh />} />
          <Route path="/weekend-getaways" element={<WeekendGetaways />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/uttarakhand-tours" element={<UttarakhandTours />} />
          <Route path="/himachal-tours" element={<HimachalTours />} />
          <Route path="/tour/:slug" element={<TourDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
