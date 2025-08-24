import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Plane,
  Globe,
  Heart,
  ArrowUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "About Us", link: "/about-us" }
  ];

  const destinations = [
    { name: "Kashmir", link: "/kashmir" },
    { name: "Ladakh", link: "/ladakh" },
    { name: "Himachal", link: "/himachal" },
    { name: "Spiti Valley", link: "/spiti-valley" },
    { name: "Uttarakhand", link: "/uttarakhand" },
    { name: "Rajasthan", link: "/rajasthan" },
    { name: "Weekend Getaways", link: "/weekend-getaways" }
  ];

  const policies = [
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "Terms & Conditions", link: "/terms-and-conditions" },
    { name: "Disclaimer", link: "/disclaimer" },
    { name: "Cancellation Policy", link: "#" },
    { name: "Refund Policy", link: "#" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary to-accent text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Plane className="h-8 w-8" />
                <span className="text-2xl font-bold">WanderSaga</span>
              </div>
              
              <p className="text-white/80 leading-relaxed">
                Creating unforgettable travel experiences for over a decade. Your journey to 
                extraordinary destinations starts with us.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="text-sm">New Delhi, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <span className="text-sm">+91-9286483766</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <span className="text-sm">Info@wandersaga.in</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4">
                <button 
                  onClick={() => window.open('https://www.instagram.com/wandersagavoyages/', '_blank')}
                  className="w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="h-7 w-7" />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    {link.link.startsWith('/') ? (
                      <Link 
                        to={link.link}
                        className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a 
                        href={link.link} 
                        className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Destinations */}
            <div>
              <h3 className="text-lg font-bold mb-6">Popular Destinations</h3>
              <ul className="space-y-3">
                {destinations.map((destination) => (
                  <li key={destination.name}>
                    <Link 
                      to={destination.link} 
                      className="text-white/80 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                    >
                      <Globe className="h-3 w-3 mr-2 text-accent group-hover:scale-110 transition-transform duration-300" />
                      {destination.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-bold mb-6">Stay Updated</h3>
              <p className="text-white/80 text-sm mb-4">
                Subscribe to our newsletter for exclusive deals and travel tips.
              </p>
              
              <div className="space-y-3">
                <div className="flex">
                  <Input 
                    placeholder="Enter your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-r-none"
                  />
                  <Button className="bg-accent hover:bg-accent/90 rounded-l-none px-6">
                    Subscribe
                  </Button>
                </div>
                
                <p className="text-xs text-white/60">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-sm text-white/80">
                © 2024 . All rights reserved. Made with ❤️ for travelers.
              </div>
              
              <div className="flex flex-wrap items-center gap-6">
                {policies.map((policy) => (
                  policy.link.startsWith('/') ? (
                    <Link 
                      key={policy.name}
                      to={policy.link} 
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {policy.name}
                    </Link>
                  ) : (
                    <a 
                      key={policy.name}
                      href={policy.link} 
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {policy.name}
                    </a>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-accent hover:bg-accent/90 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
        >
          <ArrowUp className="h-5 w-5 text-white" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;