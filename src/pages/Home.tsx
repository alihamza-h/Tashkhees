import { motion } from "motion/react";
import { ArrowRight, Brain, Sparkles, Globe, Cpu } from "lucide-react";
import { Button } from "../components/ui/button";
import { ThreeScene } from "../components/ThreeScene";

export function Home() {
  return (
    <section className="section-container relative overflow-hidden">
      {/* 3D Background Scene */}
      <ThreeScene />

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-[#10b981] border border-[#10b981] mb-8 "
          >
            <Sparkles className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-gray-600">Next-Gen AI Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
          >
            Empowering Future with <br />
            <span className="text-gradient">Artificial Intelligence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            We transform complex challenges into intelligent solutions. From Healthcare to Legal Tech, our AI-driven software redefines what's possible.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button className="h-14 px-8 text-lg rounded-full bg-white hover:bg-[#10b981] hover:bg-[#34d399] shadow-lg shadow-[#10b981] group">
              Explore Solutions
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="h-14 px-8 text-lg rounded-full border-green-700 text-gray-700 hover:bg-white hover:bg-[#10b981] ">
              View Case Studies
            </Button>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#10b981] pt-12"
        >
          {[
            { icon: Brain, label: "AI Models", value: "50+" },
            { icon: Globe, label: "Global Clients", value: "100+" },
            { icon: Cpu, label: "Processing Power", value: "10PF" },
            { icon: Sparkles, label: "Success Rate", value: "99%" },
          ].map((stat, index) => (
            <div key={index} className="text-center group hover:bg-white hover:bg-[#10b981] p-4 rounded-2xl transition-colors">
              <div className="mb-4 inline-flex p-3 rounded-xl bg-white hover:bg-[#10b981] text-green-400 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-700">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
