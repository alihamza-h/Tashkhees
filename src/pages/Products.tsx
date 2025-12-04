import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, ArrowRight, Layers, ShieldCheck, Cpu } from "lucide-react";
import { Button } from "../components/ui/button";

const products = [
    {
        id: 1,
        title: "MedScribe AI",
        category: "Healthcare",
        description: "Automated medical transcription and documentation assistant powered by advanced NLP.",
        icon: Layers,
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070",
        features: ["99% Accuracy", "EHR Integration", "Real-time Processing"]
    },
    {
        id: 2,
        title: "LegalMind",
        category: "Legal Tech",
        description: "Intelligent contract analysis and case prediction engine for modern law firms.",
        icon: ShieldCheck,
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=2070",
        features: ["Contract Review", "Risk Assessment", "Case Law Search"]
    },
    {
        id: 3,
        title: "EduCore",
        category: "Education",
        description: "Personalized learning platform adapting to each student's pace and style.",
        icon: Cpu,
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1974",
        features: ["Adaptive Learning", "Performance Analytics", "Virtual Tutor"]
    }
];

export function Products() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % products.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    };

    return (
        <section className="section-container bg-white relative overflow-hidden">


            <div className="container mx-auto px-4 z-10 relative h-full flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        Our <span className="text-gradient">Products</span>
                    </h2>
                    <p className="text-gray-600 text-lg">Innovative solutions powering the future.</p>
                </motion.div>

                <div className="relative max-w-6xl mx-auto w-full">
                    {/* Main Carousel Area */}
                    <div className="relative h-[500px] md:h-[600px] w-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 flex flex-col md:flex-row bg-white border border-[#10b981] rounded-3xl overflow-hidden shadow-2xl"
                            >
                                {/* Image Section */}
                                <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden group">
                                    <img
                                        src={products[currentIndex].image}
                                        alt={products[currentIndex].title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 rounded-xl bg-white hover:bg-[#10b981] text-green-400">
                                            {(() => {
                                                const Icon = products[currentIndex].icon;
                                                return <Icon className="w-6 h-6" />;
                                            })()}
                                        </div>
                                        <span className="text-gray-700 font-medium tracking-wide uppercase text-sm">
                                            {products[currentIndex].category}
                                        </span>
                                    </div>

                                    <h3 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                                        {products[currentIndex].title}
                                    </h3>

                                    <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                                        {products[currentIndex].description}
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                        {products[currentIndex].features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-gray-600">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    <Button className="w-fit bg-white hover:bg-[#10b981] hover:bg-[#34d399] text-gray-900 px-8 py-6 rounded-full text-lg group">
                                        Learn More
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Controls */}
                    <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 z-20">
                        <button
                            onClick={prevSlide}
                            className="p-4 rounded-full bg-white hover:bg-[#10b981] hover:bg-[#059669] text-gray-900  border border-[#10b981] transition-all hover:scale-110"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 z-20">
                        <button
                            onClick={nextSlide}
                            className="p-4 rounded-full bg-white hover:bg-[#10b981] hover:bg-[#059669] text-gray-900  border border-[#10b981] transition-all hover:scale-110"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-3 mt-8">
                        {products.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-blue-400 w-8" : "bg-[#059669] hover:bg-white hover:bg-[#10b981]"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
