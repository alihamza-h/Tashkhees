import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ScrollReveal } from "../components/ScrollReveal";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "../components/ui/button";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      organization: "Metropolitan Hospital",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
      rating: 5,
      text: "Tashkhees has revolutionized how we handle patient diagnostics. Their AI-powered system has improved our diagnostic accuracy by 35% and significantly reduced wait times. The integration was seamless, and their support team is exceptional."
    },
    {
      name: "Michael Chen",
      role: "Hospital Administrator",
      organization: "City General Medical Center",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      rating: 5,
      text: "The medical software development team at Tashkhees delivered beyond our expectations. They understood our complex workflows and created a solution that our staff actually loves to use. Patient satisfaction scores have increased by 40% since implementation."
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Director of Radiology",
      organization: "Advanced Imaging Institute",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      rating: 5,
      text: "The AI diagnostic tools from Tashkhees have been a game-changer for our radiology department. The system catches details that could easily be missed and provides valuable second opinions. It's like having an extra expert radiologist on our team."
    },
    {
      name: "James Patterson",
      role: "IT Director",
      organization: "Regional Healthcare Network",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      rating: 5,
      text: "Working with Tashkhees on our healthcare data integration project was a pleasure. They managed to connect all our legacy systems without any downtime. The real-time data synchronization has improved our operational efficiency tremendously."
    },
    {
      name: "Dr. Lisa Thompson",
      role: "Primary Care Physician",
      organization: "Community Health Clinic",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      rating: 5,
      text: "As a small clinic, we needed affordable yet powerful technology. Tashkhees provided us with enterprise-level solutions at a price we could afford. The patient management system has streamlined our operations and allowed us to see more patients."
    },
    {
      name: "Robert Williams",
      role: "Chief Technology Officer",
      organization: "National Medical Group",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      rating: 5,
      text: "The cybersecurity solutions from Tashkhees have given us peace of mind. Their comprehensive approach to HIPAA compliance and data protection is exactly what we needed. We've passed every audit with flying colors since partnering with them."
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 to-emerald-950/90 z-10" />
          <img
            src="https://images.unsplash.com/photo-1720180246107-cf498760f1de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMG1vZGVybiUyMGludGVyaW9yfGVufDF8fHx8MTc2NDU2MjkyNXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hospital Interior"
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
            Client <span className="text-emerald-400">Testimonials</span>
          </motion.h1>
          <motion.p
            className="text-xl text-emerald-50 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Hear what healthcare professionals say about working with us
          </motion.p>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-12 md:p-16 shadow-2xl relative"
                  >
                    <Quote className="absolute top-8 left-8 w-16 h-16 text-emerald-200" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-6 mb-8">
                        <motion.img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-20 h-20 rounded-full object-cover border-4 border-emerald-500"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        />
                        <div>
                          <h3 className="text-2xl text-black mb-1">
                            {testimonials[currentIndex].name}
                          </h3>
                          <p className="text-gray-600 mb-2">
                            {testimonials[currentIndex].role}
                          </p>
                          <p className="text-emerald-600">
                            {testimonials[currentIndex].organization}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-1 mb-6">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                          >
                            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                          </motion.div>
                        ))}
                      </div>

                      <motion.p
                        className="text-xl text-gray-700 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        "{testimonials[currentIndex].text}"
                      </motion.p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex justify-center gap-4 mt-8">
                  <Button
                    onClick={prevTestimonial}
                    variant="outline"
                    size="icon"
                    className="w-12 h-12 rounded-full border-emerald-500 text-emerald-600 hover:bg-emerald-50"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                  <Button
                    onClick={nextTestimonial}
                    variant="outline"
                    size="icon"
                    className="w-12 h-12 rounded-full border-emerald-500 text-emerald-600 hover:bg-emerald-50"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-2 mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? "bg-emerald-600 w-8"
                          : "bg-emerald-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl mb-12 text-center text-white">
              Trusted by Healthcare Leaders
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Happy Clients" },
              { value: "98%", label: "Satisfaction Rate" },
              { value: "1M+", label: "Patients Served" },
              { value: "50+", label: "Countries" }
            ].map((stat, index) => (
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
    </div>
  );
}
