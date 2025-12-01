import { motion } from "motion/react";
import { ScrollReveal } from "../components/ScrollReveal";
import { ParallaxSection } from "../components/ParallaxSection";
import { Linkedin, Mail } from "lucide-react";

export function Team() {
  const teamMembers = [
    {
      name: "Dr. Ahmed Hassan",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      bio: "15+ years in healthcare technology innovation",
      linkedin: "#",
      email: "ahmed@tashkhees.com"
    },
    {
      name: "Sarah Martinez",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bio: "AI & Machine Learning specialist with 12 years experience",
      linkedin: "#",
      email: "sarah@tashkhees.com"
    },
    {
      name: "Dr. James Wilson",
      role: "Chief Medical Officer",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
      bio: "Board-certified physician and digital health expert",
      linkedin: "#",
      email: "james@tashkhees.com"
    },
    {
      name: "Priya Sharma",
      role: "VP of Product Development",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      bio: "Product strategy and healthcare UX specialist",
      linkedin: "#",
      email: "priya@tashkhees.com"
    },
    {
      name: "Michael Chen",
      role: "Head of AI Research",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "PhD in Computer Science, published researcher",
      linkedin: "#",
      email: "michael@tashkhees.com"
    },
    {
      name: "Dr. Emily Roberts",
      role: "Clinical Integration Lead",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
      bio: "Bridging clinical practice with technology",
      linkedin: "#",
      email: "emily@tashkhees.com"
    },
    {
      name: "David Kim",
      role: "Director of Engineering",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Full-stack development and cloud architecture expert",
      linkedin: "#",
      email: "david@tashkhees.com"
    },
    {
      name: "Lisa Anderson",
      role: "Head of Customer Success",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "Ensuring client satisfaction and long-term partnerships",
      linkedin: "#",
      email: "lisa@tashkhees.com"
    }
  ];

  const departments = [
    { name: "Engineering", count: 45 },
    { name: "Product", count: 18 },
    { name: "Medical Affairs", count: 12 },
    { name: "Sales & Support", count: 25 }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 to-emerald-950/90 z-10" />
          <img
            src="https://images.unsplash.com/photo-1565647946321-a146ac24a220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMGRvY3RvcnxlbnwxfHx8fDE3NjQ1Njc0MzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Medical Team"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl md:text-7xl mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our <span className="text-emerald-400">Team</span>
          </motion.h1>
          <motion.p
            className="text-xl text-emerald-50 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Meet the experts dedicated to transforming healthcare technology
          </motion.p>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-6 text-black">
                Leadership <span className="text-emerald-600">Team</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Bringing together medical expertise and technological innovation
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <ParallaxSection offset={20}>
                  <motion.div
                    className="group relative"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-lg">
                      <motion.img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-80 object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      
                      {/* Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-emerald-900/95 via-emerald-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <p className="text-emerald-100 mb-4">{member.bio}</p>
                          <div className="flex gap-3">
                            <motion.a
                              href={member.linkedin}
                              className="bg-white/20 backdrop-blur-sm p-2 rounded-lg hover:bg-white/30 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Linkedin className="w-5 h-5 text-white" />
                            </motion.a>
                            <motion.a
                              href={`mailto:${member.email}`}
                              className="bg-white/20 backdrop-blur-sm p-2 rounded-lg hover:bg-white/30 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Mail className="w-5 h-5 text-white" />
                            </motion.a>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    <div className="mt-4 text-center">
                      <h3 className="text-xl mb-1 text-black">{member.name}</h3>
                      <p className="text-emerald-600">{member.role}</p>
                    </div>
                  </motion.div>
                </ParallaxSection>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-6 text-black">
                Our <span className="text-emerald-600">Departments</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                100+ talented professionals across multiple specialties
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  className="bg-white p-8 rounded-2xl shadow-lg text-center"
                  whileHover={{ y: -10, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-6xl bg-gradient-to-br from-emerald-500 to-emerald-700 bg-clip-text text-transparent mb-4"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {dept.count}
                  </motion.div>
                  <h3 className="text-xl text-black">{dept.name}</h3>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-500 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-300 rounded-full blur-3xl" />
              </div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl mb-6 text-white">
                  Join Our Team
                </h2>
                <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                  We're always looking for talented individuals who are passionate about healthcare innovation. 
                  If you want to make a real difference, we'd love to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="mailto:careers@tashkhees.com"
                    className="inline-block"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg transition-colors">
                      View Open Positions
                    </div>
                  </motion.a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
