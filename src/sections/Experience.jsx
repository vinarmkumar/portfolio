
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Web Developer",
    company: "Brain Mentors",
    duration: "2022",
    description: "Worked with team to build high-performance apps, integrated AI features, and improved engagement by 10%."
  },
  {
    role: "Web Developer Intern",
    company: "Mobisoft Technologies",
    duration: "2022 - 2023",
    description: "In this internship, I gained valuable hands-on experience and expertise in various aspects of web development."
  },
  {
    role: "Graduate Engineer",
    company: "HCL Technologies",
    duration: "2024 - 2025",
    description: "Built the frontend of a GenAI-powered PV Intake Application using Next.js and TypeScript for a U.S life sciences client, enabling automated patient report processing across global regions."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative w-full bg-black text-white py-24 px-4 md:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-l from-[#1cd8d2]/10 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <motion.div
        className="text-center mb-20 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="h-1 w-32 mx-auto bg-linear-to-r from-[#1cd8d2] to-[#00bf8f] rounded-full"></div>
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="experience-card p-8 rounded-2xl h-full flex flex-col border border-[#1cd8d2]/20 hover:border-[#1cd8d2]/60 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ y: -12, boxShadow: "0 0 30px rgba(28,216,210,0.2)" }}
            >
              <div className="flex items-start justify-between mb-4 gap-3">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {exp.role}
                    <span className="block text-sm font-semibold text-[#1cd8d2] mt-0.5">{exp.company}</span>
                  </h3>
                </div>
                <div className="px-4 py-2 rounded-lg text-xs font-bold bg-linear-to-r from-[#1cd8d2]/20 to-[#00bf8f]/20 border border-[#1cd8d2]/40 text-[#1cd8d2] whitespace-nowrap">
                  {exp.duration}
                </div>
              </div>
              
              <div className="h-px bg-linear-to-r from-[#1cd8d2]/40 via-[#00bf8f]/20 to-transparent my-4 group-hover:from-[#1cd8d2]/60 transition-all duration-500"></div>
              
              <p className="text-sm text-gray-300 leading-relaxed font-medium group-hover:text-gray-200 transition-colors duration-500">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}