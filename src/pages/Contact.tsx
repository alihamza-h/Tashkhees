import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "../components/ui/button";

export function Contact() {
  return (
    <section className="section-container bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-gray-600 mb-12 text-lg">
            Ready to transform your business with AI? Our team is here to help you every step of the way.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-white hover:bg-[#10b981] p-3 rounded-lg">
                <Mail className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Email Us</h3>
                <p className="text-gray-600">contact@tashkhees.ai</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white hover:bg-[#10b981] p-3 rounded-lg">
                <Phone className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Call Us</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white hover:bg-[#10b981] p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Visit Us</h3>
                <p className="text-gray-600">123 AI Boulevard, Tech District</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white p-8 rounded-3xl border border-[#10b981]"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  className="w-full bg-white border border-[#10b981] rounded-lg px-4 py-3 text-gray-900 focus:border-[#34d399] focus:outline-none transition-colors"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  className="w-full bg-white border border-[#10b981] rounded-lg px-4 py-3 text-gray-900 focus:border-[#34d399] focus:outline-none transition-colors"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full bg-white border border-[#10b981] rounded-lg px-4 py-3 text-gray-900 focus:border-[#34d399] focus:outline-none transition-colors"
                placeholder="john@company.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows={4}
                className="w-full bg-white border border-[#10b981] rounded-lg px-4 py-3 text-gray-900 focus:border-[#34d399] focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <Button className="w-full bg-white hover:bg-[#10b981] hover:bg-green-700 text-gray-900 py-6 rounded-xl text-lg font-medium transition-all">
              Send Message
              <Send className="ml-2 w-5 h-5" />
            </Button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
