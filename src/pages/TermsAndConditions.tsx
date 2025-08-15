import { ArrowLeft, FileText, Shield, Users, CreditCard, Clock, AlertTriangle, Heart, MapPin, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  const sections = [
    {
      id: "booking-payment",
      title: "Booking & Payment",
      icon: <CreditCard className="h-6 w-6" />,
      content: [
        "All bookings require an advance payment, which is non-refundable and non-transferable under any circumstances.",
        "The remaining trip/trek amount must be paid in full before the departure date. Pending payments may lead to automatic cancellation of your booking without any refund.",
        "The names provided at the time of booking will be final. Transfer of booking to another person is not permitted."
      ]
    },
    {
      id: "identification-verification",
      title: "Identification & Verification",
      icon: <Shield className="h-6 w-6" />,
      content: [
        "A valid government-issued ID will be verified before boarding for the trip. Failure to provide proper identification may result in denied boarding without a refund."
      ]
    },
    {
      id: "refunds-inclusions",
      title: "Refunds & Inclusions",
      icon: <FileText className="h-6 w-6" />,
      content: [
        "No refunds, discounts, or future travel credits will be issued for any inclusions not availed by the traveler during the trip (e.g., missed meals, activities, or accommodations)."
      ]
    },
    {
      id: "safety-belongings",
      title: "Safety of Belongings",
      icon: <Shield className="h-6 w-6" />,
      content: [
        "Travelers are solely responsible for their valuables and personal belongings throughout the journey. WanderSaga Voyages will not be liable for any loss, theft, or damage."
      ]
    },
    {
      id: "departure-punctuality",
      title: "Departure & Punctuality",
      icon: <Clock className="h-6 w-6" />,
      content: [
        "Departure times are fixed and will be communicated well in advance.",
        "Travelers must report to the departure location at least 30 minutes prior to the given time.",
        "In case of delays, notify your Trip Leader/Coordinator at the earliest. Failure to do so may result in trip cancellation without refund."
      ]
    },
    {
      id: "conduct-during-trip",
      title: "Conduct During the Trip",
      icon: <Users className="h-6 w-6" />,
      content: [
        "Smoking and drinking are strictly prohibited inside any travel vehicle (bus, car, tempo traveler, etc.) for the safety and comfort of all passengers.",
        "Any misbehavior, harassment, or nuisance towards fellow travelers, trip leaders, vendors, or staff will result in immediate removal from the trip without refund."
      ]
    },
    {
      id: "risk-liability",
      title: "Risk & Liability",
      icon: <AlertTriangle className="h-6 w-6" />,
      content: [
        "WanderSaga Voyages organizes adventure trips and treks, which may involve risks such as accidents, bodily injuries, illness, loss of life, or financial loss.",
        "Neither WanderSaga Voyages nor its agents shall be held responsible for any loss, damage, injury, death, delay, or inconvenience caused by:",
        "• Acts, errors, or omissions of third-party service providers.",
        "• Natural calamities, weather conditions, or unforeseen events beyond our control."
      ]
    },
    {
      id: "insurance-medical",
      title: "Insurance & Medical",
      icon: <Heart className="h-6 w-6" />,
      content: [
        "We do not provide any insurance for medical emergencies, sickness, injuries, or loss of life.",
        "Travelers are strongly advised to arrange their own travel and medical insurance."
      ]
    },
    {
      id: "itinerary-changes",
      title: "Itinerary Changes",
      icon: <MapPin className="h-6 w-6" />,
      content: [
        "The itinerary is subject to change due to factors such as weather, road conditions, accidents, or participant health.",
        "WanderSaga Voyages reserves the right to make necessary changes in the interest of traveler safety and comfort."
      ]
    },
    {
      id: "acceptance-risk",
      title: "Acceptance of Risk",
      icon: <Scale className="h-6 w-6" />,
      content: [
        "By booking with WanderSaga Voyages, you acknowledge the nature of adventure travel, accept the inherent risks involved, and agree to travel responsibly while following the instructions of the trip leader."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-white/10 p-3 rounded-lg">
              <FileText className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Terms & Conditions</h1>
              <p className="text-xl text-white/90 mt-2">
                WanderSaga Voyages
              </p>
            </div>
          </div>
          
          <p className="text-white/80 max-w-4xl">
            Before booking your trip with WanderSaga Voyages, we request you to carefully read the following Terms & Conditions that apply to all bookings. By confirming your reservation, you agree to these terms.
          </p>
          
          <div className="mt-6 text-sm text-white/70">
            <p>Last updated: August 16, 2025</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8">
          {/* Quick Navigation */}
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Navigation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center space-x-2 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors text-sm"
                  >
                    {section.icon}
                    <span>{section.title}</span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Terms Sections */}
          {sections.map((section, index) => (
            <Card key={section.id} id={section.id} className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-primary/10 p-2 rounded-lg text-primary">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {index + 1}. {section.title}
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {section.content.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Important Notice */}
          <Card className="shadow-lg border-l-4 border-accent bg-gradient-to-r from-accent/5 to-primary/5">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-accent" />
                <h2 className="text-2xl font-bold text-gray-900">Important Notice</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                By booking with WanderSaga Voyages and proceeding with payment, you acknowledge that you have read, understood, and agreed to be bound by all the above terms and conditions. These terms are designed to ensure the safety, comfort, and satisfaction of all our travelers.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="shadow-lg bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">For Terms & Conditions Queries</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>Email: info@wandersaga.in</p>
                    <p>Phone: +91-9286483766</p>
                    <p>Address: New Delhi, India</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Business Hours</h3>
                  <div className="space-y-2 text-gray-700 mb-4">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                  <Button asChild>
                    <Link to="/about-us">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Legal Updates */}
          <Card className="shadow-lg border-l-4 border-primary">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3">Updates to Terms & Conditions</h3>
              <p className="text-gray-700 mb-4">
                WanderSaga Voyages reserves the right to update these Terms & Conditions at any time. When we make changes, we will:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                <li>Update the "Last updated" date at the top of this page</li>
                <li>Notify existing customers via email for significant changes</li>
                <li>Display prominent notices on our website</li>
                <li>Ensure new bookings are subject to the updated terms</li>
              </ul>
              <p className="text-gray-700">
                We recommend checking this page periodically to stay informed of any updates that may affect your travel plans.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
