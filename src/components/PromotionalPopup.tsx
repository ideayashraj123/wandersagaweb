import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Gift, Percent, ArrowRight, Sparkles, MapPin, Plane } from "lucide-react";
import { cn } from "@/lib/utils";

const PromotionalPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Show popup after 2 seconds when page loads
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email submitted:", email);
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden border-0 bg-transparent">
        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 z-20 p-1.5 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 shadow-lg"
          >
            <X className="h-4 w-4 text-gray-600" />
          </button>

          <div className="grid lg:grid-cols-2 h-full">
            {/* Left Side - Promotional Content */}
            <div 
              className="relative p-6 lg:p-8 bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-600 text-white overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(34, 211, 238, 0.9) 0%, rgba(59, 130, 246, 0.9) 50%, rgba(37, 99, 235, 0.9) 100%), url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-white/10 rounded-full -translate-x-12 -translate-y-12"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-white/10 rounded-full translate-x-10 translate-y-10"></div>
              <div className="absolute top-1/2 left-3 w-12 h-12 bg-cyan-200/20 rounded-full"></div>
              
              {/* Floating Icons */}
              <div className="absolute top-4 left-6 animate-bounce">
                <Plane className="h-5 w-5 text-white/60" />
              </div>
              <div className="absolute bottom-6 left-8 animate-pulse">
                <MapPin className="h-4 w-4 text-white/60" />
              </div>
              <div className="absolute top-12 right-12 animate-bounce delay-500">
                <Sparkles className="h-4 w-4 text-cyan-200" />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-center">
                {/* Special Offer Badge */}
                <div className="inline-flex items-center space-x-2 bg-cyan-300 text-gray-900 px-3 py-1.5 rounded-full text-xs font-bold mb-4 w-fit">
                  <Gift className="h-3 w-3" />
                  <span>SPECIAL OFFER</span>
                </div>

                {/* Main Heading */}
                <div className="mb-4">
                  <h1 className="text-3xl lg:text-5xl font-black leading-tight mb-3">
                    <span className="block text-cyan-200">SUPER</span>
                    <span className="block text-white">SALE</span>
                  </h1>
                </div>

                {/* Discount Box */}
                <div className="bg-white text-gray-900 rounded-xl p-4 mb-4 transform rotate-2 shadow-xl">
                  <div className="text-center">
                    <div className="text-4xl lg:text-5xl font-black mb-1">
                      <span className="text-gray-900">25</span>
                      <span className="text-blue-500 text-2xl align-top">%</span>
                    </div>
                    <div className="text-blue-500 font-bold text-sm">
                      OFF
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      ON ALL TRIPS
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  onClick={() => setIsOpen(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-sm shadow-lg transform hover:scale-105 transition-all duration-300 w-fit"
                >
                  BOOK NOW
                </Button>

                {/* Limited Time */}
                <p className="text-white/90 text-xs mt-3 animate-pulse">
                  ⏰ Limited time offer - Don't miss out!
                </p>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="p-6 lg:p-8 bg-white">
              <div className="h-full flex flex-col justify-center">
                <div className="mb-6">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                    Plan Your Next Trip
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Get exclusive deals and personalized travel recommendations
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-3">
                    <Input
                      type="text"
                      placeholder="Full Name"
                      className="h-10 text-sm border-2 border-gray-200 rounded-lg focus:border-primary"
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-10 text-sm border-2 border-gray-200 rounded-lg focus:border-primary"
                      required
                    />
                  </div>
                  
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    className="h-10 text-sm border-2 border-gray-200 rounded-lg focus:border-primary"
                    required
                  />
                  
                  <Input
                    type="text"
                    placeholder="Preferred Destination"
                    className="h-10 text-sm border-2 border-gray-200 rounded-lg focus:border-primary"
                  />

                  <div className="flex items-center space-x-2 text-xs text-gray-600">
                    <input type="checkbox" required className="rounded" />
                    <span>I agree to receive promotional emails and updates</span>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full h-12 text-sm font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Get My Discount
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>

                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500">
                    🔒 Your information is secure and will never be shared
                  </p>
                </div>

                {/* Trust Indicators */}
                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  <div className="p-2 bg-gray-50 rounded-lg">
                    <div className="text-lg font-bold text-primary">500+</div>
                    <div className="text-xs text-gray-600">Happy Travelers</div>
                  </div>
                  <div className="p-2 bg-gray-50 rounded-lg">
                    <div className="text-lg font-bold text-primary">50+</div>
                    <div className="text-xs text-gray-600">Destinations</div>
                  </div>
                  <div className="p-2 bg-gray-50 rounded-lg">
                    <div className="text-lg font-bold text-primary">24/7</div>
                    <div className="text-xs text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PromotionalPopup;
