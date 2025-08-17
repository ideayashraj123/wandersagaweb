import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { X, Gift, Percent, ArrowRight, Sparkles, MapPin, Plane, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { sendBookingEmail, sendEmailFallback, BookingFormData } from "@/lib/emailService";

interface PromotionalPopupProps {
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const PromotionalPopup = ({ isOpen: externalIsOpen, onOpenChange }: PromotionalPopupProps = {}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Use external control if provided, otherwise use internal state
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const setIsOpen = onOpenChange || setInternalIsOpen;

  useEffect(() => {
    // Only show popup automatically if not externally controlled
    if (externalIsOpen === undefined) {
      const timer = setTimeout(() => {
        setInternalIsOpen(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [externalIsOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const bookingData: BookingFormData = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      travelers: 2, // Default for promotional popup
      tentativeDates: 'To be discussed',
      tourName: `Promotional Inquiry - ${formData.get('destination') as string || 'General'}`,
      tourPrice: 'Special Offer - 25% OFF',
    };

    try {
      // Try to send email using EmailJS
      const emailSent = await sendBookingEmail(bookingData);
      
      if (emailSent) {
        toast({ 
          title: "Thank you for your interest!", 
          description: "Our travel expert will contact you shortly with exclusive deals." 
        });
      } else {
        // Fallback to mailto if EmailJS fails
        sendEmailFallback(bookingData);
        toast({ 
          title: "Inquiry initiated", 
          description: "Your email client has been opened. Please send the email to complete your inquiry." 
        });
      }
      
      setIsOpen(false);
    } catch (error) {
      console.error('Error sending promotional inquiry:', error);
      // Use fallback method
      sendEmailFallback(bookingData);
      toast({ 
        title: "Inquiry initiated", 
        description: "Your email client has been opened. Please send the email to complete your inquiry." 
      });
      setIsOpen(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-xs sm:max-w-sm md:max-w-3xl p-0 overflow-hidden border-0 bg-transparent mx-auto max-h-[75vh] sm:max-h-none">
        <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden max-h-[75vh] sm:max-h-none overflow-y-auto sm:overflow-visible">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20 p-1 sm:p-1.5 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 shadow-lg"
          >
            <X className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600" />
          </button>

          <div className="grid md:grid-cols-2 h-full">
            {/* Left Side - Promotional Content */}
            <div 
              className="relative p-2 sm:p-6 lg:p-8 bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-600 text-white overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(34, 211, 238, 0.9) 0%, rgba(59, 130, 246, 0.9) 50%, rgba(37, 99, 235, 0.9) 100%), url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-16 sm:w-24 h-16 sm:h-24 bg-white/10 rounded-full -translate-x-8 sm:-translate-x-12 -translate-y-8 sm:-translate-y-12"></div>
              <div className="absolute bottom-0 right-0 w-12 sm:w-20 h-12 sm:h-20 bg-white/10 rounded-full translate-x-6 sm:translate-x-10 translate-y-6 sm:translate-y-10"></div>
              <div className="absolute top-1/2 left-2 sm:left-3 w-8 sm:w-12 h-8 sm:h-12 bg-cyan-200/20 rounded-full"></div>
              
              {/* Floating Icons */}
              <div className="absolute top-3 sm:top-4 left-4 sm:left-6 animate-bounce">
                <Plane className="h-3 w-3 sm:h-5 sm:w-5 text-white/60" />
              </div>
              <div className="absolute bottom-4 sm:bottom-6 left-6 sm:left-8 animate-pulse">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-white/60" />
              </div>
              <div className="absolute top-8 sm:top-12 right-8 sm:right-12 animate-bounce delay-500">
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-200" />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-center">
                {/* Special Offer Badge */}
                <div className="inline-flex items-center space-x-1 sm:space-x-2 bg-cyan-300 text-gray-900 px-2 sm:px-3 py-0.5 sm:py-1.5 rounded-full text-xs font-bold mb-1 sm:mb-4 w-fit">
                  <Gift className="h-2 w-2 sm:h-3 sm:w-3" />
                  <span className="text-xs">SPECIAL OFFER</span>
                </div>

                {/* Main Heading */}
                <div className="mb-1 sm:mb-4">
                  <h1 className="text-lg sm:text-3xl lg:text-5xl font-black leading-tight mb-1 sm:mb-3">
                    <span className="block text-cyan-200">SUPER</span>
                    <span className="block text-white">SALE</span>
                  </h1>
                </div>

                {/* Discount Box */}
                <div className="bg-white text-gray-900 rounded-lg sm:rounded-xl p-1.5 sm:p-4 mb-1 sm:mb-4 transform rotate-2 shadow-xl">
                  <div className="text-center">
                    <div className="text-xl sm:text-4xl lg:text-5xl font-black mb-1">
                      <span className="text-gray-900">25</span>
                      <span className="text-blue-500 text-sm sm:text-2xl align-top">%</span>
                    </div>
                    <div className="text-blue-500 font-bold text-xs sm:text-sm">
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
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 sm:py-3 px-2 sm:px-6 rounded-full text-xs sm:text-sm shadow-lg transform hover:scale-105 transition-all duration-300 w-fit"
                >
                  BOOK NOW
                </Button>

                {/* Limited Time */}
                <p className="text-white/90 text-xs mt-1 sm:mt-3 animate-pulse">
                  ⏰ Limited time offer - Don't miss out!
                </p>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="p-2 sm:p-6 lg:p-8 bg-white">
              <div className="h-full flex flex-col justify-center">
                <div className="mb-2 sm:mb-6">
                  <h2 className="text-base sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-3">
                    Plan Your Next Trip
                  </h2>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Get exclusive deals and personalized travel recommendations
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-1.5 sm:space-y-4">
                  <div className="grid gap-1.5 sm:gap-3 md:grid-cols-2">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      className="h-9 sm:h-10 text-xs sm:text-sm border-2 border-gray-200 rounded-lg focus:border-primary"
                      required
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="h-9 sm:h-10 text-xs sm:text-sm border-2 border-gray-200 rounded-lg focus:border-primary"
                      required
                    />
                  </div>
                  
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="h-9 sm:h-10 text-xs sm:text-sm border-2 border-gray-200 rounded-lg focus:border-primary"
                    required
                  />
                  
                  <Input
                    type="text"
                    name="destination"
                    placeholder="Preferred Destination"
                    className="h-9 sm:h-10 text-xs sm:text-sm border-2 border-gray-200 rounded-lg focus:border-primary"
                  />

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-9 sm:h-12 text-xs sm:text-sm font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-3 w-3 sm:h-4 sm:w-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Submit
                        <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-1 sm:mt-4 text-center">
                  <p className="text-xs text-gray-500">
                    🔒 Your information is secure and will never be shared
                  </p>
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
export type { PromotionalPopupProps };
