import { useNavigate } from "react-router-dom";
import { ArrowLeft, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const navigate = useNavigate();

  const handlePhoneCall = () => {
    window.open("tel:+919286483766", "_self");
  };

  const handleEmailClick = () => {
    window.open("mailto:info@wandersaga.in", "_self");
  };

  const handleWhatsApp = () => {
    const message = "Hi! I'm interested in your travel packages. Can you help me?";
    const whatsappUrl = `https://wa.me/919286483766?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[35vh] sm:h-[40vh] bg-gradient-to-br from-primary via-primary/90 to-accent flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center text-white space-y-3 px-4">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="absolute -top-16 sm:-top-20 left-0 sm:left-4 text-white hover:bg-white/20 text-sm"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back
          </Button>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">Contact Us</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto px-4">
            Get in touch with us for your next adventure
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-2">
              Ready to plan your next adventure? We're here to help you create unforgettable memories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 px-4">
                <div className="bg-primary/10 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-sm sm:text-base">Call Us</h3>
                <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm">Speak directly with our travel experts</p>
                <Button 
                  onClick={handlePhoneCall}
                  className="btn-hero text-xs sm:text-sm px-3 py-2"
                >
                  +91-9286483766
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 px-4">
                <div className="bg-primary/10 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-sm sm:text-base">Email Us</h3>
                <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm">Send us your travel queries</p>
                <Button 
                  onClick={handleEmailClick}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white text-xs sm:text-sm px-2 py-2"
                >
                  info@wandersaga.in
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 px-4">
                <div className="bg-primary/10 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-sm sm:text-base">WhatsApp</h3>
                <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm">Chat with us instantly</p>
                <Button 
                  onClick={handleWhatsApp}
                  className="bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm px-3 py-2"
                >
                  Chat Now
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 px-4">
                <div className="bg-primary/10 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-sm sm:text-base">Office Hours</h3>
                <p className="text-muted-foreground mb-1 sm:mb-2 text-xs sm:text-sm">Monday - Saturday</p>
                <p className="text-xs sm:text-sm text-muted-foreground">9:00 AM - 7:00 PM</p>
              </CardContent>
            </Card>
          </div>

          {/* Company Info */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 sm:space-y-8">
              <Card>
                <CardHeader className="px-4 sm:px-6">
                  <CardTitle className="text-lg sm:text-xl">Why Choose WanderSaga?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 rounded-full p-2 mt-1 flex-shrink-0">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base">Expert Local Guides</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Our experienced guides know every hidden gem and local secret.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 rounded-full p-2 mt-1 flex-shrink-0">
                      <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base">24/7 Support</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        We're always here to help, before, during, and after your trip.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 rounded-full p-2 mt-1 flex-shrink-0">
                      <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base">Customized Packages</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Every trip is tailored to your preferences and budget.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="px-4 sm:px-6">
                  <CardTitle className="text-lg sm:text-xl">Follow Us</CardTitle>
                  <CardDescription className="text-sm">
                    Stay connected for travel inspiration and updates
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-4 sm:px-6">
                  <div className="flex space-x-3 sm:space-x-4">
                    <Button 
                      size="icon" 
                      variant="outline" 
                      onClick={() => window.open('https://www.instagram.com/wandersagavoyages/', '_blank')}
                      className="h-12 w-12 sm:h-14 sm:w-14"
                    >
                      <Instagram className="h-6 w-6 sm:h-7 sm:w-7" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="px-4 sm:px-6">
                  <CardTitle className="text-lg sm:text-xl">Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm sm:text-base">+91-9286483766</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Call for immediate assistance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm sm:text-base break-all">info@wandersaga.in</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Email for detailed inquiries</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
