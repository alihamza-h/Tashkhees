import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechFlow",
    content: "Tashkhees transformed our diagnostic workflow with their AI solutions. The accuracy and speed are unmatched.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Director, LegalEase",
    content: "The legal document automation tool is a game-changer. It has saved us countless hours of manual work.",
    rating: 5
  },
  {
    name: "Dr. Emily Carter",
    role: "Head of Radiology, City Hospital",
    content: "Their cancer detection algorithms are incredibly precise. A vital tool for modern healthcare.",
    rating: 5
  },
  {
    name: "David Smith",
    role: "Dean, Future Tech Institute",
    content: "The AI workshops provided by Tashkhees were comprehensive and engaging. Our students loved them.",
    rating: 5
  },
  {
    name: "Jessica Williams",
    role: "CEO, StartUp Inc",
    content: "Incredible team to work with. They understood our vision and delivered a product that exceeded expectations.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="section-container overflow-hidden bg-white relative">

      <div className="container mx-auto px-4 z-10 relative mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Client <span className="text-gradient">Testimonials</span>
        </motion.h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Trusted by industry leaders across the globe.
        </p>
      </div>

      <div className="w-full overflow-hidden relative z-10">
        <div className="flex w-max">
          <motion.div
            className="flex gap-8 px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30,
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="w-[350px] md:w-[450px] p-8 rounded-2xl bg-white border border-[#10b981] hover:bg-white transition-colors flex flex-col gap-4 relative group"
              >
                <div className="absolute -top-4 -left-4 bg-white hover:bg-[#10b981] p-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity shadow-lg shadow-[#10b981]">
                  <Quote className="w-6 h-6 text-gray-900" />
                </div>

                <div className="flex gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-lg text-gray-700 italic leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="mt-auto pt-6 border-t border-white flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#10b981] to-[#6ee7b7] flex items-center justify-center text-xl font-bold text-gray-900">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-700">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
