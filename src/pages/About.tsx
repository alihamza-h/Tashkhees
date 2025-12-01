import { motion } from "motion/react";
import { ScrollReveal } from "../components/ScrollReveal";
import { ParallaxSection } from "../components/ParallaxSection";
import { Target, Eye, Award, TrendingUp } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To revolutionize healthcare delivery through innovative AI-powered software solutions that enhance patient care, improve diagnostic accuracy, and streamline medical operations worldwide.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the global leader in healthcare technology innovation, making advanced medical AI accessible to every healthcare provider and patient, regardless of location or resources.",
    },
  ];

  const achievements = [
    { icon: Award, title: "ISO 27001 Certified", description: "Information security management" },
    { icon: Award, title: "HIPAA Compliant", description: "Healthcare data protection" },
    { icon: Award, title: "SOC 2 Type II", description: "Security and availability" },
    { icon: Award, title: "FDA Cleared", description: "Medical device software" },
  ];

  const progressBars = [
    { label: "AI Accuracy", percentage: 98 },
    { label: "Client Satisfaction", percentage: 96 },
    { label: "System Uptime", percentage: 99.9 },
    { label: "Data Security", percentage: 100 },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 to-emerald-950/90 z-10" />
          <img
            src="https://images.unsplash.com/photo-1565647946321-a146ac24a220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMGRvY3RvcnxlbnwxfHx8fDE3NjQ1Njc0MzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Medical Team"
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
            About <span className="text-emerald-400">Tashkhees</span>
          </motion.h1>
          <motion.p
            className="text-xl text-emerald-50 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Pioneering the future of healthcare through AI innovation
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <ParallaxSection offset={50}>
                <img
                  src="https://images.unsplash.com/photo-1695048441269-41b4d75351c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZGlnaXRhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY0NTY2NjY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Healthcare Technology"
                  className="rounded-2xl shadow-2xl"
                />
              </ParallaxSection>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <h2 className="text-4xl md:text-5xl mb-6 text-black">
                  Our <span className="text-emerald-600">Story</span>
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Founded in 2018, Tashkhees emerged from a simple yet powerful vision: to bridge the gap 
                    between cutting-edge artificial intelligence and practical healthcare applications. Our 
                    team of medical professionals and software engineers recognized the immense potential 
                    of AI to transform patient care.
                  </p>
                  <p>
                    What started as a small research project has grown into a comprehensive healthcare 
                    technology platform serving over 500 healthcare providers across 50 countries. We've 
                    processed millions of medical cases, continuously improving our algorithms to deliver 
                    unprecedented accuracy and reliability.
                  </p>
                  <p>
                    Today, Tashkhees stands at the forefront of medical AI innovation, with a dedicated 
                    team of experts working tirelessly to develop solutions that save lives, reduce costs, 
                    and make quality healthcare accessible to everyone.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <motion.div
                  className="bg-white p-10 rounded-2xl shadow-lg h-full"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="bg-gradient-to-br from-emerald-500 to-emerald-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl mb-4 text-black">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Bars */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl mb-12 text-center text-black">
              Our <span className="text-emerald-600">Excellence</span>
            </h2>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-8">
            {progressBars.map((bar, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-black">{bar.label}</span>
                    <span className="text-emerald-600">{bar.percentage}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-emerald-500 to-emerald-700"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${bar.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-emerald-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl mb-12 text-center text-white">
              Certifications & Achievements
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  className="text-center p-8 bg-emerald-800/30 backdrop-blur-sm rounded-2xl border border-emerald-700"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <achievement.icon className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-xl mb-2 text-white">{achievement.title}</h3>
                  <p className="text-emerald-200">{achievement.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
