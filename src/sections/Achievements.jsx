import { motion } from "framer-motion";
import { FaTrophy, FaStar } from "react-icons/fa";

const achievements = [
  {
    title: "Top 20 Rank - 24-Hour Hackathon",
    organization: "University-Level Competition",
    date: "Mar 2024",
    description: "Secured Top 20 Rank among 153+ teams in an intensive 24-hour university-level hackathon",
    achievement: "Top 20 / 153+ Teams",
    icon: FaTrophy,
    color: "from-[#ffd700] to-[#ffed4e]"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative w-full bg-black text-white py-24 px-4 md:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/3 right-20 w-80 h-80 bg-gradient-to-l from-[#ffd700]/10 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity }}
        />
      </div>

      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#ffd700] via-[#ffed4e] to-[#1cd8d2] bg-clip-text text-transparent">
          Achievements & Awards
        </h2>
        <div className="h-1 w-32 mx-auto bg-gradient-to-r from-[#ffd700] to-[#ffed4e] rounded-full"></div>
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10">
        {achievements.map((achievement, idx) => {
          const IconComponent = achievement.icon;
          return (
            <motion.div
              key={idx}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#ffd700]/20 to-[#ffed4e]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              {/* Card */}
              <div className="relative p-8 md:p-10 rounded-2xl border-2 border-[#ffd700]/30 group-hover:border-[#ffd700]/80 bg-gradient-to-r from-[#1a1a1a] to-black backdrop-blur-sm transition-all duration-500">
                {/* Icon badge */}
                <motion.div
                  className="absolute -top-6 right-8 w-14 h-14 rounded-xl bg-gradient-to-br from-[#ffd700] to-[#ffed4e] flex items-center justify-center text-black text-2xl shadow-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <IconComponent />
                </motion.div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-[#ffd700] transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-lg text-[#ffed4e] font-semibold">{achievement.organization}</p>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-base mb-6 leading-relaxed">
                  {achievement.description}
                </p>

                {/* Achievement highlight */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <FaStar className="text-[#ffd700]" />
                    <span className="text-[#ffd700] font-bold">{achievement.achievement}</span>
                  </div>
                  <p className="text-sm text-gray-400 font-semibold">{achievement.date}</p>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
