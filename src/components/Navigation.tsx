import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const viewportHeight = window.innerHeight;
    // Calculate which section index we are currently on (0 to 4)
    // The total height is 500vh, so each "page" of scroll corresponds to 100vh of vertical scroll
    // However, since we are mapping 0-1 progress to 5 pages, we need to be careful.
    // Actually, with the ghost height of 500vh, scrolling 100vh vertically roughly corresponds to moving one page horizontally.
    const sectionIndex = Math.round(latest / viewportHeight);

    const sections = ["home", "about", "services", "products", "testimonials", "team", "contact"];
    if (sectionIndex >= 0 && sectionIndex < sections.length) {
      setActiveSection(sections[sectionIndex]);
    }
  });

  const scrollToSection = (id: string) => {
    const sections = ["home", "about", "services", "products", "testimonials", "team", "contact"];
    const index = sections.indexOf(id);

    if (index !== -1) {
      const top = index * window.innerHeight;
      window.scrollTo({
        top: top,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Products", id: "products" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Team", id: "team" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 py-6"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center bg-white  rounded-full px-6 py-3 border border-[#10b981] shadow-lg max-w-5xl mx-auto">
          <div
            className="text-xl font-bold text-white cursor-pointer flex items-center gap-2"
            onClick={() => scrollToSection("home")}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-[#10b981] to-[#6ee7b7] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="hidden sm:inline">Tashkhees</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive ? "text-white" : "text-gray-600 hover:text-white"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-[#10b981] rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </button>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Button
              className="bg-white text-green-950 hover:bg-green-50 font-semibold rounded-full px-6 h-10"
              onClick={() => scrollToSection("contact")}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white  border-t border-green-800 absolute top-full left-0 right-0 shadow-2xl"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium ${activeSection === link.id
                  ? "bg-[#10b981] text-white shadow-lg"
                  : "text-gray-700 hover:bg-[#d1fae5]"
                  }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
