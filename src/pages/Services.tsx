import { motion } from "motion/react";
import { ScrollReveal } from "../components/ScrollReveal";
import { ParallaxSection } from "../components/ParallaxSection";
import { 
  Stethoscope, 
  Database, 
  Brain, 
  Cloud, 
  Shield, 
  Settings,
  ArrowRight,
  Check
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router";

export function Services() {
  const services = [
    {
      icon: Stethoscope,
      title: "Medical Software Development",
      description: "Custom-built healthcare applications tailored to your specific clinical workflows and operational needs.",
      features: [
        "Electronic Health Records (EHR) systems",
        "Patient management platforms",
        "Clinical decision support tools",
        "Telemedicine solutions"
      ],
      color: "from-emerald-500 to-emerald-700"
    },
    {
      icon: Brain,
      title: "AI Diagnostics & Analytics",
      description: "Advanced machine learning algorithms that enhance diagnostic accuracy and provide predictive insights.",
      features: [
        "Medical image analysis",
        "Predictive patient analytics",
        "Risk stratification models",
        "Natural language processing for medical records"
      ],
      color: "from-teal-500 to-teal-700"
    },
    {
      icon: Database,
      title: "Healthcare Data Integration",
      description: "Seamless integration of disparate healthcare systems to create a unified data ecosystem.",
      features: [
        "HL7 & FHIR integration",
        "Legacy system modernization",
        "Real-time data synchronization",
        "Interoperability solutions"
      ],
      color: "from-cyan-500 to-cyan-700"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable, secure cloud solutions designed specifically for healthcare data and applications.",
      features: [
        "HIPAA-compliant cloud hosting",
        "Disaster recovery planning",
        "Automated backup systems",
        "Multi-region deployment"
      ],
      color: "from-sky-500 to-sky-700"
    },
    {
      icon: Shield,
      title: "Cybersecurity & Compliance",
      description: "Comprehensive security solutions to protect sensitive patient data and ensure regulatory compliance.",
      features: [
        "Penetration testing",
        "HIPAA compliance audits",
        "Data encryption services",
        "Security monitoring 24/7"
      ],
      color: "from-emerald-600 to-emerald-800"
    },
    {
      icon: Settings,
      title: "Deployment & Support",
      description: "End-to-end implementation support and ongoing maintenance to ensure optimal system performance.",
      features: [
        "On-site installation assistance",
        "Staff training programs",
        "24/7 technical support",
        "Regular system updates"
      ],
      color: "from-teal-600 to-teal-800"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 to-emerald-950/90 z-10" />
          <img
            src="https://images.unsplash.com/photo-1631556760646-50241850eb25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVzZWFyY2glMjBsYWJ8ZW58MXx8fHwxNzY0NTI4MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Medical Research"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl md:text-7xl mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our <span className="text-emerald-400">Services</span>
          </motion.h1>
          <motion.p
            className="text-xl text-emerald-50 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Comprehensive healthcare technology solutions tailored to your needs
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-6 text-black">
                What We <span className="text-emerald-600">Offer</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From concept to deployment, we provide end-to-end healthcare technology solutions
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <ParallaxSection offset={30}>
                  <motion.div
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-full hover:shadow-2xl transition-shadow"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`bg-gradient-to-br ${service.color} p-8`}>
                      <motion.div
                        className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center mb-4"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <service.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-2xl text-white mb-2">{service.title}</h3>
                      <p className="text-white/90">{service.description}</p>
                    </div>

                    <div className="p-8">
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </ParallaxSection>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-6 text-black">
                Our <span className="text-emerald-600">Process</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A proven methodology for delivering exceptional healthcare solutions
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your unique healthcare challenges and requirements" },
              { step: "02", title: "Design", description: "Creating intuitive, user-centered solutions with medical experts" },
              { step: "03", title: "Development", description: "Building robust, scalable systems using cutting-edge technology" },
              { step: "04", title: "Deployment", description: "Seamless implementation with comprehensive training and support" }
            ].map((process, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  className="text-center relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-7xl bg-gradient-to-br from-emerald-500 to-emerald-700 bg-clip-text text-transparent mb-4 opacity-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 0.2, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {process.step}
                  </motion.div>
                  <h3 className="text-2xl mb-3 text-black">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                  
                  {index < 3 && (
                    <motion.div
                      className="hidden md:block absolute top-12 -right-4 w-8 h-0.5 bg-emerald-300"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                    />
                  )}
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
                  Let's Build Something Amazing Together
                </h2>
                <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                  Ready to transform your healthcare operations? Our team is here to help you every step of the way.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white group">
                    Get Started Today
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
