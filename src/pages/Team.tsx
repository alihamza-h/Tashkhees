import { motion } from "motion/react";
import { Linkedin, Twitter, Mail } from "lucide-react";

export function Team() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "James Wilson",
      role: "Head of Engineering",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Maria Rodriguez",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "David Kim",
      role: "Lead Data Scientist",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Emily Davis",
      role: "Legal Tech Lead",
      image: "https://images.unsplash.com/photo-1598550874175-4d7112ee7f38?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Michael Brown",
      role: "Education Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    }
  ];

  return (
    <section className="section-container bg-blue-950 snap-start">
      <div className="w-full max-w-7xl mx-auto h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Meet Our <span className="text-gradient">Experts</span>
          </h2>
          <p className="text-blue-200 text-sm md:text-base max-w-2xl mx-auto">
            Driving innovation across healthcare, legal, and education sectors.
          </p>
        </motion.div>

        {/* 2 Rows x 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-blue-900/20 border border-blue-800 rounded-xl overflow-hidden hover:border-blue-500 transition-all flex items-center p-4 gap-4 h-28 md:h-32"
            >
              {/* Avatar Image */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-blue-800 group-hover:border-blue-400 transition-colors shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Info */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">{member.name}</h3>
                <p className="text-blue-400 text-sm font-medium mb-2">{member.role}</p>

                {/* Social Icons (Visible on Hover) */}
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-[-10px] group-hover:translate-x-0">
                  <a href="#" className="text-blue-300 hover:text-white transition-colors"><Linkedin size={16} /></a>
                  <a href="#" className="text-blue-300 hover:text-white transition-colors"><Twitter size={16} /></a>
                  <a href="#" className="text-blue-300 hover:text-white transition-colors"><Mail size={16} /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
