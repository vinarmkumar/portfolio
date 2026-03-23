import { useState, useEffect, useMemo } from "react"

import LazyImage from "../components/LazyImage";
import img1 from "../assets/img1.JPG"
import img2 from "../assets/img2.JPG"
import img3 from "../assets/img3.JPG"
import quantumcode from "../assets/quantumcode.png"

import photo1 from "../assets/photo1.JPG"
import photo2 from "../assets/photo2.PNG"
import photo3 from "../assets/photo3.png"
import { motion } from "framer-motion"

const useIsMobile = (query = "(max-width : 639px)") => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.matchMedia(query).matches
  )
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);

    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);

  }, [query])
  return isMobile;
}

export default function Projects() {
  const isMobile = useIsMobile();
  const [currentProject, setCurrentProject] = useState(0);

  const projects = useMemo(
    () => [
      {
        title: "QuantumCode",
        tagline: "Competitive Coding",
        description: "A competitive coding platform with real-time execution.",
        link: "https://quantumcodes.netlify.app/",
        bgGradient: "from-[#0f2027] via-[#203a43] to-[#2c5364]",
        accentColor: "#1cd8d2",
        image: quantumcode,
      },
      {
        title: "nk studio",
        tagline: "Creative Excellence",
        description: "Empowering brands to inspire people with innovative design solutions",
        link: "https://www.nk.studio/",
        bgGradient: "from-[#001f3f] to-[#004d7a] via-[#00897b]",
        accentColor: "#1cd8d2",
        image: isMobile ? photo1 : img1,
      },
      {
        title: "Gamily",
        tagline: "Gaming Community",
        description: "Match with other gamers and build your gaming squad",
        link: "https://gamilyapp.com/",
        bgGradient: "from-[#1a0033] via-[#4a0080] to-[#0044cc]",
        accentColor: "#00ffff",
        image: isMobile ? photo2 : img2,
      },
      {
        title: "Hungry Tiger",
        tagline: "Food Experience",
        description: "Unwrap the adventure with premium food quality",
        link: "https://www.eathungrytiger.com/",
        bgGradient: "from-[#664422] to-[#ff9944] via-[#dd7722]",
        accentColor: "#ffcc00",
        image: isMobile ? photo3 : img3,
      },
    ],
    [isMobile]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [projects.length]);

  const project = projects[currentProject];

  return (
    <section id="projects" className="relative w-full bg-black text-white min-h-screen py-20 px-4 md:px-8 flex flex-col items-center justify-center overflow-hidden">
      
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          My Work
        </h2>
      </motion.div>

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <motion.div
          key={currentProject}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 300 }}
        >
          
          <div className={`relative w-full min-h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br ${project.bgGradient}`}>

            <div className="absolute inset-0 opacity-30">
              <motion.div 
                className="absolute -top-40 -left-40 w-80 h-80 rounded-full blur-3xl"
                style={{ backgroundColor: project.accentColor }}
                animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full blur-3xl"
                style={{ backgroundColor: project.accentColor, opacity: 0.2 }}
                animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 h-full p-8 md:p-16 items-center">

              <motion.div 
                className="flex flex-col justify-center space-y-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div>
                  <motion.span 
                    className="text-xs md:text-sm font-bold px-4 py-2 rounded-full border border-white/30 text-white/80 inline-block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {project.tagline}
                  </motion.span>
                  <motion.h3 
                    className="text-5xl md:text-7xl font-black mt-6 text-white drop-shadow-lg"
                    style={{ color: project.accentColor }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    {project.title}
                  </motion.h3>
                </div>
                
                <motion.p 
                  className="text-lg text-white/80 max-w-sm leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {project.description}
                </motion.p>

                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 w-fit"
                  style={{ 
                    backgroundColor: project.accentColor,
                    color: project.bgGradient.includes('664422') ? '#000' : '#000'
                  }}
                  whileHover={{ scale: 1.08, boxShadow: `0 0 40px ${project.accentColor}` }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  View Project
                </motion.a>
              </motion.div>

              <motion.div 
                className="flex justify-center items-center"
                initial={{ opacity: 0, x: 30, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 w-full max-w-sm"
                  style={{ backgroundColor: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(10px)' }}
                  whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="flex justify-center gap-4 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {projects.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => setCurrentProject(idx)}
              className={`rounded-full transition-all ${
                idx === currentProject 
                  ? "w-12 h-3 bg-white shadow-lg"
                  : "w-3 h-3 bg-white/40 hover:bg-white/60"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}