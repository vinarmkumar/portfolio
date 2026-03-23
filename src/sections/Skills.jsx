import { useEffect, useRef } from "react";
import { FaJava, FaReact, FaGitAlt, FaBootstrap, FaHtml5, FaCss3Alt, FaPhp } from "react-icons/fa";
import { SiNextdotjs, SiPython, SiMongodb, SiMysql, SiRedis, SiExpress, SiLaravel, SiPostman, SiLangchain } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import { motion } from 'framer-motion';

export default function Skills() {
  const carouselRef = useRef(null);
  const xRef = useRef(0);
  const lastFrameRef = useRef(0);
  const SPEED = 50;
  
  const skills = [

    { icon: <SiPython />, name: "Python" },
    { icon: <FaJava />, name: "Java" },
    { icon: <FaReact />, name: "JavaScript" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },

    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <DiNodejsSmall />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiLaravel />, name: "Laravel" },

    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiRedis />, name: "Redis" },

    { icon: <FaGitAlt />, name: "Git" },
    { icon: <SiPostman />, name: "Postman" },

    { icon: <SiLangchain />, name: "LangChain" },
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const tick = (now) => {
      const dt = (now - lastFrameRef.current) / 1000;
      lastFrameRef.current = now;
      
      let next = xRef.current - SPEED * dt;
      const scrollWidth = carousel.scrollWidth / 2;
      
      if (next <= -scrollWidth) {
        next += scrollWidth;
      }
      
      xRef.current = next;
      carousel.style.transform = `translateX(${next}px)`;
      
      requestAnimationFrame(tick);
    };
    
    const id = requestAnimationFrame(tick);
    lastFrameRef.current = performance.now();
    
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      id="skills"
      className="w-full py-12 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden min-h-fit"
    >
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-10 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-10 blur-[120px] animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          My Skills
        </motion.h2>

        <motion.p
          className="mt-2 text-white/90 text-base sm:text-lg"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Modern Applications | Modern Technologies
        </motion.p>

        <div className="mt-16 w-full overflow-hidden">
          <div
            ref={carouselRef}
            className="flex gap-6 sm:gap-8 justify-start"
            style={{ willChange: "transform" }}
          >
            
            {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center gap-2 p-4 transition-all duration-300 cursor-pointer group min-w-max"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="text-5xl sm:text-6xl text-[#1cd8d2] group-hover:text-[#00bf8f] transition-colors">
                  {skill.icon}
                </div>
                <p className="text-sm sm:text-base text-white/80 group-hover:text-white transition-colors text-center">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
