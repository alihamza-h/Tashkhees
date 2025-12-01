import { motion, useScroll, useTransform } from "motion/react";
import { ScrollReveal } from "../components/ScrollReveal";
import { ParallaxSection } from "../components/ParallaxSection";
import { ArrowRight, Brain, Shield, Zap, Users, ChevronDown } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { useRef } from "react";

export function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Diagnostics",
      description: "Leverage cutting-edge artificial intelligence to enhance diagnostic accuracy and patient outcomes.",
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "HIPAA-compliant infrastructure ensuring your patient data remains protected at all times.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Real-time processing and analysis for immediate clinical decision support.",
    },
    {
      icon: Users,
      title: "Seamless Integration",
      description: "Easy integration with existing healthcare systems and electronic medical records.",
    },
  ];

  const stats = [
    { value: "500+", label: "Healthcare Providers" },
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "24/7", label: "Expert Support" },
    { value: "50+", label: "Countries Served" },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ scale }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 to-emerald-950/90 z-10" />
          <img
            src="https://images.unsplash.com/photo-1560306990-18fa759c8713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neSUyMGhlYXJ0fGVufDF8fHx8MTc2NDU2NzQzNHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Medical Technology"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center"
          style={{ opacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl mb-6 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Empowering Healthcare
              <br />
              <span className="text-emerald-400">Through Technology</span>
            </motion.h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-emerald-50 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Tashkhees delivers innovative AI-based software solutions that transform healthcare delivery, 
            enhance patient care, and streamline medical operations.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Link to="/services">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white group">
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-900">
                Get Started
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white opacity-70" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-6 text-black">
                Why Choose <span className="text-emerald-600">Tashkhees</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We combine medical expertise with technological innovation to deliver 
                solutions that make a real difference in healthcare.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <ParallaxSection offset={30}>
                  <motion.div
                    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full hover:shadow-xl transition-shadow"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="bg-gradient-to-br from-emerald-500 to-emerald-700 w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="text-xl mb-4 text-black">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                </ParallaxSection>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-5xl md:text-6xl mb-2 text-white"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-emerald-100">{stat.label}</div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-500 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-300 rounded-full blur-3xl" />
              </div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl mb-6 text-white">
                  Ready to Transform Your Healthcare?
                </h2>
                <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                  Join hundreds of healthcare providers who trust Tashkhees for their digital transformation journey.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white group">
                    Schedule a Demo
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
