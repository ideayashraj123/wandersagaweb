import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, MapPin, Phone, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

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
    { name: "Contact", href: "#contact" },
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
              onClick={() => navigate('/')}
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
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
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
                      className="absolute top-full left-0 mt-2 w-80 bg-white shadow-2xl border border-gray-200 rounded-xl overflow-visible z-[9999]"
                      style={{ 
                        position: 'absolute',
                        top: '100%',
                        left: '0',
                        marginTop: '8px',
                        zIndex: 9999
                      }}
                    >
                      <div className="p-3 space-y-1">
                        {item.dropdownItems && item.dropdownItems.length > 0 ? (
                          item.dropdownItems.map((dropdownItem, index) => (
                            <button
                              key={`${dropdownItem.slug}-${index}`}
                              onClick={() => handleTourClick(dropdownItem.slug)}
                              className="w-full text-left px-4 py-3 rounded-lg hover:bg-primary/10 transition-all duration-200 text-gray-800 hover:text-primary font-medium text-sm block border-b border-gray-100 last:border-b-0"
                            >
                              {dropdownItem.name}
                            </button>
                          ))
                        ) : (
                          <div className="px-4 py-3 text-sm text-gray-500">
                            No tours available
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className={`flex items-center space-x-2 text-sm ${
                isScrolled ? "text-muted-foreground" : "text-white/90"
              }`}>
                <Phone className="h-4 w-4" />
                <span>+91-9286483766</span>
              </div>
              <Button 
                size="sm" 
                className="btn-hero"
              >
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
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
              <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                <Phone className="h-4 w-4" />
                <span>+91-9286483766</span>
              </div>
              <Button className="btn-hero w-full">
                <User className="h-4 w-4 mr-2" />
                Login / Sign Up
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;