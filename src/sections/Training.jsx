import { motion } from "framer-motion";
import { FaGraduationCap, FaBook, FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";
import cipherLogo from "../assets/cipher.png";

const trainings = [
  {
    program: "Full-Stack Developer Trainee",
    institute: "Cipher Schools",
    duration: "Jun 2025 - Jul 2025",
    highlights: [
      "Completed intensive full-stack development training focused on MERN stack",
      "Developed and integrated RESTful APIs, CRUD operations, JWT-based authentication",
      "Implemented secure user authentication with authorization systems",
      "Built AI-powered features using Gemini API integration",
      "Mastered modern web development practices and clean code principles"
    ],
    logo: "🏫",
    link: "https://www.cipherschools.com/certificate/preview?id=687e3e787efd6d5090703d92"
  }
];

export default function Training() {
  return (
    <section id="training" className="relative w-full bg-black text-white py-24 px-4 md:px-8 overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-40 right-10 w-96 h-96 bg-gradient-to-l from-[#00bf8f]/15 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 -left-32 w-80 h-80 bg-gradient-to-r from-[#302b63]/10 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, delay: 1 }}
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
          Training & Programs
        </h2>
        <div className="h-1 w-40 mx-auto bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] rounded-full"></div>
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            {trainings.map((training, idx) => (
          <motion.div
            key={idx}
            className="mb-8 cursor-pointer group"
            onClick={() => window.open(training.link, '_blank')}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="border-l-4 border-[#1cd8d2] pl-8 py-6 rounded-r-2xl bg-gradient-to-r from-[#1cd8d2]/5 to-transparent backdrop-blur-sm hover:from-[#1cd8d2]/10 transition-all duration-500">
              
              <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{training.logo}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {training.program}
                    </h3>
                  </div>
                  <p className="text-lg text-[#00bf8f] font-semibold">{training.institute}</p>
                </div>
                <div className="px-4 py-2 rounded-lg text-sm font-bold bg-gradient-to-r from-[#1cd8d2]/20 to-[#00bf8f]/20 border border-[#1cd8d2]/40 text-[#1cd8d2] whitespace-nowrap">
                  {training.duration}
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex-1 h-px bg-gradient-to-r from-[#1cd8d2]/40 via-[#00bf8f]/20 to-transparent"></div>
                <FaExternalLinkAlt className="text-[#1cd8d2] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
              </div>

              <div className="space-y-4">
                {training.highlights.map((highlight, hIdx) => (
                  <motion.div
                    key={hIdx}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + hIdx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <FaCheckCircle className="text-[#00bf8f] mt-1 flex-shrink-0" />
                    <p className="text-gray-300 leading-relaxed font-medium">{highlight}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
            ))}
          </div>

          <motion.div
            className="flex justify-center items-center hidden lg:flex"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#1cd8d2]/20 w-full max-w-sm"
              style={{ backgroundColor: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(10px)' }}
              whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}
            >
              <img
                src={cipherLogo}
                alt="Cipher Schools"
                className="w-full h-auto object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
