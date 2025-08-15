import { useState, useEffect } from "react";
import { ArrowLeft, Quote, Heart, Star, Award, Users, Globe, Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutUs = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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

  const stats = [
    { icon: Users, number: "10,000+", label: "Happy Travelers" },
    { icon: Globe, number: "50+", label: "Destinations" },
    { icon: Star, number: "4.9", label: "Average Rating" },
    { icon: Award, number: "100+", label: "Awards Won" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passionate Excellence",
      description: "Every journey is crafted with love, attention to detail, and a commitment to creating unforgettable experiences."
    },
    {
      icon: Award,
      title: "Luxury Redefined",
      description: "We believe luxury isn't just about premium services—it's about meaningful connections and authentic experiences."
    },
    {
      icon: Globe,
      title: "Sustainable Travel",
      description: "We're committed to responsible tourism that preserves the beauty of destinations for future generations."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/src/assets/IMG_4401.jpg" 
            alt="YashRaj Singh - Founder of WanderSaga" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="text-white/80 hover:text-white hover:bg-white/10 mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              About
              <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                WanderSaga
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
              Weaving Adventures, Nurturing Dreams, Encircling Real Stories — Above Glitter, All Wonders.
            </p>

            <div className="flex items-center justify-center space-x-2 text-amber-400">
              <Quote className="w-6 h-6" />
              <span className="text-lg italic text-white/80">
                Because we're more than a travel agency
              </span>
              <Quote className="w-6 h-6 rotate-180" />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Our Story
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-orange-400 rounded-full"></div>
              </div>
              
              <div className="prose prose-lg text-gray-700 leading-relaxed">
                <p className="text-xl mb-6">
                  I am <strong>WanderSaga</strong>. I am not just a travel agency… I am your storyteller, 
                  your guide, your comfort in unfamiliar lands.
                </p>
                
                <p className="mb-6">
                  I don't just plan itineraries—I craft memories that stay long after the suitcase 
                  is unpacked. I take you to the peaks of Himachal, the soulful paths of Uttarakhand, 
                  the royal sands of Rajasthan, and the untamed beauty of the Northeast—not as a service, 
                  but as a promise.
                </p>
                
                <p className="text-lg font-medium text-primary">
                  With me, every trip is a chapter in your life's most beautiful story, 
                  told with luxury, ease, and love.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/src/assets/hero-beach.webp" 
                  alt="Wandersaga Travel Experience" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Camera className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">10,000+</p>
                    <p className="text-sm text-gray-600">Memories Created</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300">
                  <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The People In Charge
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-orange-400 rounded-full mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-96 md:h-auto">
                    <img 
                      src="/src/assets/IMG_4401.jpg" 
                      alt="YashRaj Singh - Founder" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">YashRaj Singh</h3>
                      <p className="text-primary font-semibold text-lg">Founder & Fellow Traveler</p>
                    </div>
                    
                    <blockquote className="text-gray-700 leading-relaxed mb-8 relative">
                      <Quote className="w-8 h-8 text-primary/30 absolute -top-2 -left-2" />
                      <p className="italic mb-4 pl-6">
                        "I am YashRaj Singh, the heart and vision behind WanderSaga Voyages. 
                        To me, leadership is not just about steering a company—it's about walking 
                        beside you as a friend, listening as a confidant, and guiding you as a fellow dreamer."
                      </p>
                      
                      <p className="pl-6 mb-4">
                        "Every journey you take with us carries a piece of my personal promise: 
                        to ensure you feel valued, cared for, and inspired at every step. 
                        I do not just plan trips; I weave experiences where comfort meets wonder, 
                        and where every traveler becomes family."
                      </p>
                    </blockquote>
                    
                    <div className="text-primary font-semibold">
                      <p>With gratitude & wanderlust,</p>
                      <p className="text-gray-900 font-bold">YashRaj Singh</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every journey we craft and every experience we create
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 bg-white">
                  <CardContent className="p-8 text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Let us craft your next unforgettable adventure. Your story is waiting to be written.
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => navigate('/')}
              className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Our Tours
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
