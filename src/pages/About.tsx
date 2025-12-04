import { motion } from "motion/react";
import { Target, Users, Lightbulb, Award, Eye } from "lucide-react";

export function About() {
  return (
    <section className="section-container bg-white relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto z-10 relative">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Tashkhees</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded as an AI-based software house, Tashkhees emerged from a vision to harness
              the power of artificial intelligence across multiple industries. We are the parent hub
              for innovative products in healthcare, legal tech, and education.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white hover:bg-[#10b981] p-6 rounded-2xl border border-green-800">
              <Target className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-sm text-gray-700">
                To revolutionize industries through innovative AI-powered software solutions.
              </p>
            </div>
            <div className="bg-white hover:bg-[#10b981] p-6 rounded-2xl border border-green-800">
              <Eye className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Vision</h3>
              <p className="text-sm text-gray-700">
                To be the global leader in AI innovation, making advanced AI accessible to all.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-30" />
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1080"
            alt="AI Technology Network"
            className="relative rounded-2xl shadow-2xl border border-[#10b981]"
          />

          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl border border-green-700 shadow-xl max-w-xs">
            <div className="flex items-center gap-4 mb-2">
              <Award className="w-8 h-8 text-yellow-400" />
              <span className="font-bold text-lg">Award Winning</span>
            </div>
            <p className="text-sm text-gray-700">Recognized for excellence in AI innovation and implementation.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
