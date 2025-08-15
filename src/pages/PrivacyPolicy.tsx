import { ArrowLeft, Shield, Eye, Lock, UserCheck, FileText, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: <FileText className="h-6 w-6" />,
      content: [
        "Personal Information: When you book a tour or contact us, we collect personal details such as your name, email address, phone number, passport information, and travel preferences.",
        "Payment Information: We collect payment details necessary to process your bookings. All payment information is securely processed through encrypted payment gateways.",
        "Website Usage: We collect information about how you use our website, including IP addresses, browser types, pages visited, and time spent on our site.",
        "Communication Records: We maintain records of communications between you and our team for quality assurance and customer service purposes."
      ]
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      icon: <UserCheck className="h-6 w-6" />,
      content: [
        "Service Delivery: To provide travel services, process bookings, and manage your travel arrangements.",
        "Communication: To communicate with you about your bookings, send travel updates, and provide customer support.",
        "Marketing: To send promotional offers and travel deals (only with your consent).",
        "Website Improvement: To analyze website usage and improve our services and user experience.",
        "Legal Compliance: To comply with legal obligations and protect our business interests."
      ]
    },
    {
      id: "information-sharing",
      title: "Information Sharing",
      icon: <Globe className="h-6 w-6" />,
      content: [
        "Service Partners: We share necessary information with hotels, transport providers, and other travel service partners to fulfill your bookings.",
        "Payment Processors: Payment information is shared with secure payment processing partners to complete transactions.",
        "Legal Requirements: We may disclose information when required by law or to protect our rights and safety.",
        "Business Transfers: In case of merger or acquisition, your information may be transferred to the new entity.",
        "We never sell your personal information to third parties for marketing purposes."
      ]
    },
    {
      id: "data-security",
      title: "Data Security",
      icon: <Shield className="h-6 w-6" />,
      content: [
        "Encryption: We use industry-standard SSL encryption to protect data transmission.",
        "Secure Storage: Personal information is stored on secure servers with restricted access.",
        "Regular Updates: We regularly update our security measures and conduct security audits.",
        "Staff Training: Our team is trained on data protection and privacy best practices.",
        "Access Controls: Only authorized personnel have access to your personal information."
      ]
    },
    {
      id: "your-rights",
      title: "Your Privacy Rights",
      icon: <Eye className="h-6 w-6" />,
      content: [
        "Access: You have the right to request access to your personal information we hold.",
        "Correction: You can request correction of inaccurate or incomplete personal information.",
        "Deletion: You can request deletion of your personal information, subject to legal requirements.",
        "Portability: You can request a copy of your personal information in a portable format.",
        "Opt-out: You can opt-out of marketing communications at any time.",
        "Contact us at info@wandersaga.in to exercise these rights."
      ]
    },
    {
      id: "cookies",
      title: "Cookies and Tracking",
      icon: <Lock className="h-6 w-6" />,
      content: [
        "Essential Cookies: We use essential cookies for website functionality and security.",
        "Analytics Cookies: We use analytics cookies to understand how visitors use our website.",
        "Marketing Cookies: With your consent, we use marketing cookies for personalized advertising.",
        "Cookie Control: You can control cookie preferences through your browser settings.",
        "Third-party Services: We may use third-party services like Google Analytics that set their own cookies."
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
              <Shield className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Privacy Policy</h1>
              <p className="text-xl text-white/90 mt-2">
                Your privacy is important to us
              </p>
            </div>
          </div>
          
          <p className="text-white/80 max-w-3xl">
            At WanderSaga, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This policy explains how we collect, use, and protect your data.
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

          {/* Policy Sections */}
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

          {/* Contact Information */}
          <Card className="shadow-lg bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">For Privacy Concerns</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>Email: privacy@wandersaga.in</p>
                    <p>Phone: +91-9286483766</p>
                    <p>Address: New Delhi, India</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Response Time</h3>
                  <p className="text-gray-700 mb-4">
                    We typically respond to privacy-related inquiries within 48 hours during business days.
                  </p>
                  <Button asChild>
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Legal Notice */}
          <Card className="shadow-lg border-l-4 border-accent">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3">Changes to This Policy</h3>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. When we make changes, we will notify you by:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                <li>Updating the "Last updated" date at the top of this policy</li>
                <li>Sending an email notification for significant changes</li>
                <li>Displaying a notice on our website</li>
              </ul>
              <p className="text-gray-700">
                Your continued use of our services after any changes indicates your acceptance of the updated policy.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
