import { motion } from "framer-motion";
import React from "react";
import boy from "../assets/boy.png";

export default function About() {
  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]"
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#00bf8f] ${c}`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-16">

        <motion.div
          className="flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Image */}
          <motion.div 
            className="w-48 h-48 md:w-56 md:h-56 flex-shrink-0 rounded-3xl overflow-hidden ring-2 ring-[#1cd8d2] ring-offset-2 ring-offset-black"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(28,216,210,0.5)" }}
            transition={{type : "spring", stiffness:200,damping:10}}
          >
            <img src={boy} alt="Profile" className="w-full h-full object-cover" />
          </motion.div>

          {/* Content */}
          <motion.div className="flex-1 flex flex-col gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Vinarm Kumar</h2>
              <p className="text-xl text-[#00bf8f] font-semibold mb-4">Full Stack Developer</p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I build scalable, modern applications with a strong focus on clean architecture, 
                delightful UX, and performance. My toolkit spans Java, React, TypeScript, 
                Tailwind CSS, and RestfulAPI— bringing ideas to life from concept to production with 
                robust APIs and smooth interfaces.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 my-6">
              <motion.div 
                className="border border-[#00bf8f] rounded-xl p-4 text-center bg-[#00bf8f]/5 hover:bg-[#00bf8f]/10 transition"
                whileHover={{ y: -4 }}
              >
                <p className="text-gray-400 text-sm">Specialty</p>
                <p className="text-[#00bf8f] font-bold text-xl">Full</p>
                <p className="text-gray-400 text-xs mt-1">Stack</p>
              </motion.div>
              <motion.div 
                className="border border-[#302b63] rounded-xl p-4 text-center bg-[#302b63]/5 hover:bg-[#302b63]/10 transition"
                whileHover={{ y: -4 }}
              >
                <p className="text-gray-400 text-sm">Focus</p>
                <p className="text-purple-400 font-bold text-lg">Quality</p>
                <p className="text-gray-400 text-xs mt-1">& UX</p>
              </motion.div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap">
              <motion.a 
                href="#projects" 
                className="bg-linear-to-r from-[#1cd8d2] to-[#00bf8f] text-black px-8 py-3 rounded-xl font-bold hover:shadow-lg shadow-[0_0_20px_rgba(28,216,210,0.4)] transition inline-block"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a 
                href="#contact" 
                className="border-2 border-[#1cd8d2] text-[#1cd8d2] px-8 py-3 rounded-xl font-bold hover:bg-[#1cd8d2]/10 transition inline-block"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* About Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">About Me</h3>
          <div className="space-y-4">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm Vinarm Kumar, a B.Tech CSE student from Lovely Professional University with expertise in full-stack development using MERN stack, Generative AI, and modern web technologies.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I've built projects like <span className="text-[#1cd8d2] font-semibold">QuantumCode</span> (competitive coding platform with real-time execution) and <span className="text-[#00bf8f] font-semibold">HappyMeal</span> (AI-powered recipe generator). Passionate about performance optimization, secure authentication, and creating seamless user experiences.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              MongoDB Certified, Generative AI trained, and Top 20 in a 24-hour hackathon among 153+ teams. I believe in building scalable products with clean code and attention to detail.
            </p>
          </div>
        </motion.div>

        

      </div>
    </section>
  );
}