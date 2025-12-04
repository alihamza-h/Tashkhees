import { motion } from "motion/react";
import {
  Stethoscope,
  Scale,
  GraduationCap,
  Brain,
  Microscope,
  FileText,
  Search,
  MessageSquare,
  Users,
  BookOpen,
  ArrowRight,
  Shield,
  Cloud
} from "lucide-react";

export function Services() {
  const services = [
    {
      id: "healthcare",
      title: "Healthcare AI",
      description: "Advanced diagnostics & patient care.",
      icon: Stethoscope,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: "legal",
      title: "Legal Tech",
      description: "Intelligent research & case prediction.",
      icon: Scale,
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: "education",
      title: "AI Campus",
      description: "Workshops & mentorship programs.",
      icon: GraduationCap,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: "infrastructure",
      title: "Cloud Infra",
      description: "High-performance computing clusters.",
      icon: Cloud,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: "security",
      title: "Cyber Security",
      description: "Enterprise-grade data protection.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: "consulting",
      title: "AI Consulting",
      description: "Strategic implementation roadmaps.",
      icon: Brain,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600",
    }
  ];

  return (
    <section className="section-container bg-blue-950 snap-start">
      <div className="w-full max-w-7xl mx-auto h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-blue-200 text-sm md:text-base max-w-2xl mx-auto">
            Comprehensive AI solutions across industries.
          </p>
        </motion.div>

        {/* 2 Rows x 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-blue-900/30 border border-blue-800 rounded-2xl overflow-hidden hover:border-blue-500 transition-all group flex flex-row h-32 md:h-40"
            >
              {/* Image Section (Left) */}
              <div className="w-1/3 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-950/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content Section (Right) */}
              <div className="w-2/3 p-4 flex flex-col justify-center relative">
                <div className="absolute top-2 right-2 bg-blue-950/50 p-1.5 rounded-lg">
                  <service.icon className="w-4 h-4 text-blue-400" />
                </div>

                <h3 className="text-lg font-bold mb-1 text-white group-hover:text-blue-300 transition-colors">{service.title}</h3>
                <p className="text-blue-200 text-xs md:text-sm line-clamp-2">{service.description}</p>

                <div className="mt-2 flex items-center text-xs text-blue-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
