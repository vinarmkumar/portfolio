import { motion } from "framer-motion";
import { FaUniversity, FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    level: "Bachelor of Technology",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    branch: "Computer Science and Engineering",
    cgpa: "7.66/10",
    duration: "Aug 2023 - Present",
    icon: FaUniversity,
    color: "from-[#1cd8d2] to-[#00bf8f]"
  },
  {
    level: "12th Grade (Intermediate)",
    institution: "D.A.V Public School",
    location: "Jamalpur, Bihar",
    branch: "Science Stream",
    percentage: "80.6%",
    duration: "Apr 2020 - Mar 2022",
    icon: FaGraduationCap,
    color: "from-[#00bf8f] to-[#302b63]"
  },
  {
    level: "10th Grade (Matriculation)",
    institution: "Saraswati Vidya Mandir",
    location: "Jamalpur, Bihar",
    percentage: "86.6%",
    duration: "Apr 2019 - Mar 2020",
    icon: FaGraduationCap,
    color: "from-[#302b63] to-[#1cd8d2]"
  }
];

export default function Education() {
  return (
    <section id="education" className="relative w-full bg-black text-white py-24 px-4 md:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[#302b63]/15 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 11, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-[#1cd8d2]/10 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
          transition={{ duration: 13, repeat: Infinity, delay: 2 }}
        />
      </div>

      <motion.div
        className="text-center mb-20 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] bg-clip-text text-transparent">
          Education
        </h2>
        <div className="h-1 w-40 mx-auto bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] rounded-full"></div>
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10">
        {educationData.map((edu, idx) => {
          const IconComponent = edu.icon;
          return (
            <motion.div
              key={idx}
              className="mb-10 last:mb-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="group relative">
                {/* Animated left accent bar */}
                <motion.div
                  className={`absolute -left-3 top-0 w-1.5 h-full rounded-full bg-gradient-to-b ${edu.color} origin-top`}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                />

                {/* Main card */}
                <div className="pl-8 pr-6 py-8 rounded-xl border border-[#1cd8d2]/20 group-hover:border-[#1cd8d2]/60 bg-gradient-to-r from-[#1cd8d2]/5 to-transparent backdrop-blur-sm hover:from-[#1cd8d2]/10 transition-all duration-500">
                  {/* Top section with icon and duration */}
                  <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${edu.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="text-xl" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-[#1cd8d2] transition-colors duration-300">
                          {edu.level}
                        </h3>
                        <p className="text-lg text-[#00bf8f] font-semibold">{edu.institution}</p>
                      </div>
                    </div>
                    <div className="px-4 py-2 rounded-lg text-xs font-bold bg-gradient-to-r from-[#1cd8d2]/20 to-[#00bf8f]/20 border border-[#1cd8d2]/40 text-[#1cd8d2] whitespace-nowrap">
                      {edu.duration}
                    </div>
                  </div>

                  {/* Details grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-16 md:ml-0">
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-wide font-semibold mb-1">Specialization</p>
                      <p className="text-gray-200">{edu.branch}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-wide font-semibold mb-1">Location</p>
                      <p className="text-gray-200">{edu.location}</p>
                    </div>
                    {edu.cgpa && (
                      <div>
                        <p className="text-sm text-gray-400 uppercase tracking-wide font-semibold mb-1">CGPA</p>
                        <p className="text-lg font-bold text-[#00bf8f]">{edu.cgpa}</p>
                      </div>
                    )}
                    {edu.percentage && (
                      <div>
                        <p className="text-sm text-gray-400 uppercase tracking-wide font-semibold mb-1">Percentage</p>
                        <p className="text-lg font-bold text-[#00bf8f]">{edu.percentage}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
