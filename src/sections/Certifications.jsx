import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import mongodbLogo from "../assets/mongodb.png";
import infosysLogo from "../assets/infosys.png";
import nptelLogo from "../assets/nptel.jpg";

const certifications = [
  {
    title: "MongoDB Certified Developer Associate",
    issuer: "MongoDB",
    date: "Aug 2025 - Sep 2025",
    logo: mongodbLogo,
    color: "from-[#13aa52] to-[#0d7b3f]",
    description: "Professional certification validating expertise in MongoDB database design, development, and deployment.",
    link: "https://drive.google.com/drive/folders/1kzUAOWK31sjg2N-hUMxWwkIJ7zgq5tJU"
  },
  {
    title: "Master Generative AI and AI Tools",
    issuer: "Infosys",
    date: "Jun 2025 - Sep 2025",
    logo: infosysLogo,
    color: "from-[#0066cc] to-[#0052a3]",
    description: "Comprehensive training in generative AI, LLMs, prompt engineering, and practical AI tool implementation.",
    link: "https://drive.google.com/drive/folders/1JlkCCC-CaLDrFXP99AM6vReSqW07Ja-G"
  },
  {
    title: "Cloud Computing Certificate",
    issuer: "NPTEL",
    date: "Jul 2025 - Oct 2025",
    logo: nptelLogo,
    color: "from-[#ff9500] to-[#f57f17]",
    description: "Professional certification in cloud computing fundamentals, architecture, and best practices.",
    link: "https://drive.google.com/file/d/1VATMHmu4Z7CXDskm2SU3neQ3fsFdiFFz/view"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative w-full bg-black text-white py-24 px-4 md:px-8 overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 -right-40 w-96 h-96 bg-gradient-to-l from-[#1cd8d2]/10 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-40 w-96 h-96 bg-gradient-to-r from-[#00bf8f]/10 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, 40, 0] }}
          transition={{ duration: 14, repeat: Infinity, delay: 1 }}
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
          Certifications
        </h2>
        <div className="h-1 w-40 mx-auto bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] rounded-full"></div>
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8 }}
              onClick={() => window.open(cert.link, '_blank')}
            >
              
              <div className="absolute inset-0 bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-lg"></div>

              <div className="relative p-8 rounded-2xl border border-[#1cd8d2]/20 group-hover:border-[#1cd8d2]/60 bg-black/40 backdrop-blur-sm transition-all duration-500 h-full flex flex-col">
                
                <div className={`mb-6 w-16 h-16 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300 p-2`}>
                  <img 
                    src={cert.logo} 
                    alt={cert.issuer} 
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#1cd8d2] transition-colors duration-300">
                  {cert.title}
                </h3>
                
                <p className="text-[#00bf8f] font-semibold mb-4 text-sm">{cert.issuer}</p>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{cert.description}</p>

                <div className="mt-auto pt-4 border-t border-[#1cd8d2]/20 flex items-center justify-between">
                  <p className="text-xs font-bold text-[#1cd8d2] uppercase tracking-wider">{cert.date}</p>
                  <FaExternalLinkAlt className="text-[#1cd8d2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-5 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
