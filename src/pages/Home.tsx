import { motion } from "motion/react";
import { ArrowRight, Brain, Sparkles, Globe, Cpu } from "lucide-react";
import { Button } from "../components/ui/button";
import { ThreeScene } from "../components/ThreeScene";

export function Home() {
  return (
    <section className="section-container relative overflow-hidden">
      {/* 3D Background Scene */}
      <ThreeScene />

      {/* Gradient Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-950/50 to-blue-950/90 z-0 pointer-events-none" />

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/50 border border-blue-700/50 mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-200">Next-Gen AI Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Empowering Future with <br />
            <span className="text-gradient">Artificial Intelligence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We transform complex challenges into intelligent solutions. From Healthcare to Legal Tech, our AI-driven software redefines what's possible.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button className="h-14 px-8 text-lg rounded-full bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/25 group">
              Explore Solutions
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="h-14 px-8 text-lg rounded-full border-blue-700 text-blue-100 hover:bg-blue-900/50 backdrop-blur-sm">
              View Case Studies
            </Button>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-blue-800/50 pt-12"
        >
          {[
            { icon: Brain, label: "AI Models", value: "50+" },
            { icon: Globe, label: "Global Clients", value: "100+" },
            { icon: Cpu, label: "Processing Power", value: "10PF" },
            { icon: Sparkles, label: "Success Rate", value: "99%" },
          ].map((stat, index) => (
            <div key={index} className="text-center group hover:bg-blue-900/20 p-4 rounded-2xl transition-colors">
              <div className="mb-4 inline-flex p-3 rounded-xl bg-blue-900/30 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-blue-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
