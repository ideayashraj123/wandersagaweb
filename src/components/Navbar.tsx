import { useState, useEffect } from "react";
import { Menu, X, MapPin, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "International Packages", href: "#international" },
    { name: "India Packages", href: "#india" },
    { name: "Adventure Tours", href: "#adventure" },
    { name: "Weekend Getaways", href: "#weekend" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

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
            <div className="flex items-center space-x-3 group">
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
            <div className="hidden lg:flex items-center space-x-1 whitespace-nowrap">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-sm relative group ${
                    isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
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
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-foreground font-medium hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
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