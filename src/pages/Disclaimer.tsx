import { useState, useEffect } from "react";
import { ArrowLeft, Shield, AlertTriangle, FileText, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Disclaimer = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const sections = [
    {
      icon: Info,
      title: "Content Accuracy",
      content: "The information provided on this website is for general information purposes only. While we strive to ensure that the information is accurate and up-to-date, we make no guarantees regarding the accuracy, completeness, suitability, or reliability of the information."
    },
    {
      icon: FileText,
      title: "Travel Information",
      content: "WANDERSAGA is a travel website that provides information on travel destinations, attractions, activities, and accommodations. However, we do not guarantee the availability, quality, or safety of any travel services or products mentioned on our website. It is the user's responsibility to independently verify the accuracy and reliability of any information provided and to assess the suitability and safety of any travel service or product before making a booking or purchase."
    },
    {
      icon: AlertTriangle,
      title: "Liability",
      content: "WANDERSAGA India will not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use or inability to use this website or any information contained herein. We are not liable for any damages or losses resulting from the use of any third-party websites linked to or from our website."
    },
    {
      icon: Shield,
      title: "Third-Party Links",
      content: "Our website may contain links to third-party websites that are not owned or controlled by WANDERSAGA. We are not responsible for the content, privacy policies, or practices of any third-party websites."
    },
    {
      icon: FileText,
      title: "Changes to Terms and Conditions",
      content: "WANDERSAGA reserves the right to change these terms and conditions at any time without prior notice. Your continued use of the website after any changes are made will constitute your acceptance of the new terms and conditions."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate(-1)}
              className="mb-6 text-primary hover:text-primary/80"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            
            <div className="flex items-center justify-center mb-6">
              <Shield className="h-12 w-12 text-primary mr-4" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                Disclaimer
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Important information regarding the use of WANDERSAGA India website and services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            className="mb-12"
          >
            <Card className="border-l-4 border-l-primary shadow-lg">
              <CardContent className="p-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                  The following disclaimer outlines the terms and conditions that apply to the use of WANDERSAGA India website. 
                  By accessing and using this website, you agree to accept and abide by these terms and conditions.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Disclaimer Sections */}
          <motion.div
            variants={stagger}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            className="space-y-8"
          >
            {sections.map((section, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center text-xl text-gray-900">
                      <section.icon className="h-6 w-6 text-primary mr-3" />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">
                      {section.content}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Final Agreement */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            className="mt-12"
          >
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Agreement to Terms
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  By using this website, you acknowledge that you have read, understood, and agreed to be bound by these terms and conditions.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-4">
              If you have any questions about this disclaimer, please contact us.
            </p>
            <Button 
              onClick={() => navigate('/about-us')}
              className="bg-primary hover:bg-primary/90"
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Disclaimer;
