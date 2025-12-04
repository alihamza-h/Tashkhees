import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "../components/ui/button";

export function Contact() {
  return (
    <section className="section-container bg-blue-950">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-blue-200 mb-12 text-lg">
            Ready to transform your business with AI? Our team is here to help you every step of the way.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-blue-900/30 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Email Us</h3>
                <p className="text-blue-200">contact@tashkhees.ai</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-900/30 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Call Us</h3>
                <p className="text-blue-200">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-900/30 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Visit Us</h3>
                <p className="text-blue-200">123 AI Boulevard, Tech District</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-blue-900/20 p-8 rounded-3xl border border-blue-800/50 backdrop-blur-sm"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-blue-300">First Name</label>
                <input
                  type="text"
                  className="w-full bg-blue-950/50 border border-blue-800 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-blue-300">Last Name</label>
                <input
                  type="text"
                  className="w-full bg-blue-950/50 border border-blue-800 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-300">Email</label>
              <input
                type="email"
                className="w-full bg-blue-950/50 border border-blue-800 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="john@company.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-300">Message</label>
              <textarea
                rows={4}
                className="w-full bg-blue-950/50 border border-blue-800 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-xl text-lg font-medium transition-all">
              Send Message
              <Send className="ml-2 w-5 h-5" />
            </Button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
