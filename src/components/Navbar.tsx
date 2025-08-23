import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, MapPin, Phone, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const navigate = useNavigate();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleLogoClick = () => {
    setIsLocationModalOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  interface SpitiTour {
    name: string;
    slug: string;
  }

  interface NavItem {
    name: string;
    href: string;
    hasDropdown?: boolean;
    dropdownItems?: SpitiTour[];
  }

  const spitiTours: SpitiTour[] = [
    { name: "Full Circuit Summer Spiti Expedition", slug: "summer-spiti-circuit-chandrataal" },
    { name: "Winter Spiti Expedition", slug: "winter-spiti-expedition" },
    { name: "Spiti Valley Bike Expedition", slug: "spiti-valley-bike-expedition" },
    { name: "Short Circuit Summer Spiti Expedition", slug: "short-circuit-summer-spiti" },
  ];

  const himachalTours: SpitiTour[] = [
    { name: "Tirthan Jibhi Valley", slug: "tirthan-jibhi-adventure" },
    { name: "Kasol Kheerganga Trek", slug: "kasol-kheerganga-trek" },
    { name: "McLeodganj Triund Bir", slug: "mcleodganj-triund-bir" },
    { name: "Shimla Kalpa Chitkul", slug: "shimla-kalpa-chitkul" },
    { name: "Manali Sissu Kasol", slug: "manali-sissu-kasol" },
    { name: "Yulla Kanda Trek", slug: "yulla-kanda-trek" },
  ];

  const uttarakhandTours: SpitiTour[] = [
    { name: "Chopta Tungnath Chandrashila Trek", slug: "chopta-tungnath" },
    { name: "Naagtibba Weekend Trek", slug: "naagtibba-trek" },
    { name: "Chakrata Hill Station Getaway", slug: "chakrata-adventure" },
  ];

  const weekendGetawayTours: SpitiTour[] = [
    { name: "Yulla Kanda Trek", slug: "yulla-kanda-trek" },
    { name: "Chakrata Hill Station Getaway", slug: "chakrata-adventure" },
    { name: "Kedarnath Spiritual Journey", slug: "kedarnath" },
    { name: "Chopta Tungnath Chandrashila Trek", slug: "chopta-tungnath" },
    { name: "Naagtibba Weekend Trek", slug: "naagtibba-trek" },
    { name: "Shimla Kalpa Chitkul", slug: "shimla-kalpa-chitkul" },
    { name: "Manali Sissu Kasol", slug: "manali-sissu-kasol" },
    { name: "McLeodganj Triund Bir", slug: "mcleodganj-triund-bir" },
    { name: "Kasol Kheerganga Trek", slug: "kasol-kheerganga-trek" },
    { name: "Tirthan Jibhi Valley", slug: "tirthan-jibhi-adventure" },
  ];

  const rajasthanTours: SpitiTour[] = [
    { name: "Royal Rajasthan Heritage Tour", slug: "royal-rajasthan-heritage" },
    { name: "Jaisalmer Desert Safari", slug: "jaisalmer-desert-safari" },
    { name: "Udaipur Lakes & Palaces", slug: "udaipur-lakes-palaces" },
  ];

  const kashmirTours: SpitiTour[] = [
    { name: "Kashmir Paradise Valley Tour", slug: "kashmir-paradise-valley" },
    { name: "Gulmarg Skiing Adventure", slug: "gulmarg-skiing-adventure" },
    { name: "Pahalgam & Betaab Valley", slug: "pahalgam-betaab-valley" },
  ];

  const ladakhTours: SpitiTour[] = [
    { name: "Leh Ladakh Adventure Expedition", slug: "leh-ladakh-adventure" },
    { name: "Pangong Lake & Nubra Valley", slug: "pangong-nubra-valley" },
    { name: "Ladakh Bike Expedition", slug: "ladakh-bike-expedition" },
  ];

  const navItems: NavItem[] = [
    { 
      name: "Spiti Valley", 
      href: "/spiti-valley", 
      hasDropdown: true,
      dropdownItems: spitiTours
    },
    { 
      name: "Himachal", 
      href: "/himachal", 
      hasDropdown: true,
      dropdownItems: himachalTours
    },
    { 
      name: "Uttarakhand", 
      href: "/uttarakhand", 
      hasDropdown: true,
      dropdownItems: uttarakhandTours
    },
    { 
      name: "Weekend Getaways", 
      href: "/weekend-getaways", 
      hasDropdown: true,
      dropdownItems: weekendGetawayTours
    },
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact" },
  ];

  const handleNavClick = (item: NavItem) => {
    if (item.hasDropdown) {
      if (item.name === "Spiti Valley") {
        navigate('/spiti-valley');
      } else if (item.name === "Himachal") {
        navigate('/himachal');
      } else if (item.name === "Uttarakhand") {
        navigate('/uttarakhand');
      } else if (item.name === "Weekend Getaways") {
        navigate('/weekend-getaways');
      }
    } else {
      // Handle regular navigation
      if (item.href.startsWith('/')) {
        // Navigate to page
        navigate(item.href);
      } else {
        // Handle anchor navigation
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const handleTourClick = (slug: string) => {
    navigate(`/tour/${slug}`);
    setActiveDropdown(null);
  };

  const handleMouseEnter = (itemName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms delay before closing
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? "bg-white/98 backdrop-blur-lg shadow-elegant border-b border-white/10" 
          : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div 
              className="flex items-center space-x-3 group cursor-pointer"
              onClick={handleLogoClick}
            >
              <div className={`p-2 rounded-xl transition-all duration-500 ${
                isScrolled ? "bg-primary/10" : "bg-white/10 backdrop-blur-sm"
              }`}>
                <MapPin className={`h-6 w-6 transition-colors duration-500 ${
                  isScrolled ? "text-primary" : "text-white"
                }`} />
              </div>
              <span className={`text-xl font-bold transition-all duration-500 tracking-tight ${
                isScrolled ? "text-primary" : "text-white"
              }`}>
                WanderSaga
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 whitespace-nowrap relative overflow-visible">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
                  onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
                  style={{ zIndex: 100 }}
                >
                  <button
                    onClick={() => handleNavClick(item)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-sm relative group flex items-center space-x-1 ${
                      isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    )}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                  </button>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div 
                      className="absolute top-full left-0 pt-2 w-80 z-[9999]"
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}
                      style={{ 
                        position: 'absolute',
                        top: '100%',
                        left: '0',
                        zIndex: 9999
                      }}
                    >
                      <div className="bg-white/20 backdrop-blur-md shadow-2xl border border-white/30 rounded-xl overflow-hidden">
                        <div className="p-3 space-y-1">
                          {item.dropdownItems && item.dropdownItems.length > 0 ? (
                            item.dropdownItems.map((dropdownItem, index) => (
                              <button
                                key={`${dropdownItem.slug}-${index}`}
                                onClick={() => handleTourClick(dropdownItem.slug)}
                                className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/20 transition-all duration-200 text-white hover:text-white font-medium text-sm block border-b border-white/20 last:border-b-0"
                              >
                                {dropdownItem.name}
                              </button>
                            ))
                          ) : (
                            <div className="px-4 py-3 text-sm text-white/70">
                              No tours available
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button 
                size="sm" 
                className="btn-hero"
              >
                <Phone className="h-4 w-4 mr-2" />
                +91-9286483766
              </Button>
              {/* <Button 
                size="sm" 
                className="btn-hero"
              >
                <User className="h-4 w-4 mr-2" />
                Login
              </Button> */}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ${
          isMobileMenuOpen 
            ? "max-h-screen opacity-100" 
            : "max-h-0 opacity-0 overflow-hidden"
        }`}>
          <div className="bg-white/95 backdrop-blur-md border-t border-border/20 px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <div key={item.name}>
                <button
                  onClick={() => {
                    if (item.hasDropdown) {
                      setActiveDropdown(activeDropdown === item.name ? null : item.name);
                    } else {
                      handleNavClick(item);
                      setIsMobileMenuOpen(false);
                    }
                  }}
                  className="flex items-center justify-between w-full py-2 text-foreground font-medium hover:text-accent transition-colors"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </button>
                
                {/* Mobile Dropdown */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.dropdownItems && item.dropdownItems.length > 0 ? (
                      item.dropdownItems.map((dropdownItem) => (
                        <button
                          key={dropdownItem.slug}
                          onClick={() => {
                            handleTourClick(dropdownItem.slug);
                            setIsMobileMenuOpen(false);
                            setActiveDropdown(null);
                          }}
                          className="block w-full text-left py-2 px-3 text-sm text-muted-foreground hover:text-primary rounded-lg hover:bg-primary/5 transition-all duration-200"
                        >
                          {dropdownItem.name}
                        </button>
                      ))
                    ) : (
                      <div className="px-3 py-2 text-sm text-muted-foreground">
                        No tours available
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-border/20">
              <Button className="btn-hero w-full mb-4">
                <Phone className="h-4 w-4 mr-2" />
                +91-9286483766
              </Button>
              {/* <Button className="btn-hero w-full">
                <User className="h-4 w-4 mr-2" />
                Login / Sign Up
              </Button> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Location Modal */}
      <Dialog open={isLocationModalOpen} onOpenChange={setIsLocationModalOpen}>
        <DialogContent className="max-w-md mx-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Our Location
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="text-sm text-muted-foreground">
              <p className="font-medium mb-2">WanderSaga Office</p>
              <p>6th floor, Roots Tower</p>
              <p>Near V3S Mall, Swasthya Vihar</p>
              <p>New Delhi, Delhi 110092</p>
            </div>
            
            <div className="aspect-video w-full rounded-lg overflow-hidden border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4901763115567!2d77.28945731454795!3d28.616634382420454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e564b1a9e5%3A0x7d5d4b7b7b7b7b7b!2sRoots%20Tower%2C%20Swasthya%20Vihar%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1692785432123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="WanderSaga Office Location"
              ></iframe>
            </div>
            
            <div className="flex gap-3">
              <Button 
                onClick={() => {
                  const address = "WANDERSAGA, 6th floor, Roots Tower, near V3S MALL, Swasthya Vihar, New Delhi, Delhi, 110092";
                  const encodedAddress = encodeURIComponent(address);
                  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
                  window.open(googleMapsUrl, '_blank');
                }}
                className="flex-1 btn-hero"
              >
                <MapPin className="h-4 w-4 mr-2" />
                Open in Maps
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setIsLocationModalOpen(false)}
                className="flex-1"
              >
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;