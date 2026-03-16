import { useState, useMemo } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Astra from "../assets/Astra.png";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

// Generate stars outside component to avoid impure function errors
const generateStars = () => {
  return [...Array(30)].map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 3 + 2,
  }));
};

export default function Contact() {
  const stars = useMemo(() => generateStars(), []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    idea: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "budget" && value && !/^\d+$/.test(value)) return;
    setFormData((p) => ({ ...p, [name]: value }));

    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const validateForm = () => {
    const required = ["name", "email", "service", "idea"];
    const newErrors = {};
    required.forEach((f) => !formData[f].trim() && (newErrors[f] = "Fill This Field"));
    if (formData.service === "other" && !formData.budget.trim()) {
      newErrors.budget = "Fill this Field";
    }
    setErrors(newErrors);
    return !Object.keys(newErrors).length;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          ...formData,
          from_name: formData.name,
          reply_to: formData.email,
        },
        PUBLIC_KEY
      );
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        service: "",
        budget: "",
        idea: "",
      });
    } catch (err) {
      console.error("Email sending error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="w-full min-h-screen relative bg-black overflow-hidden text-white px-4 md:px-20 py-20 md:py-0 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
      {/* Stars Background */}
      <div className="absolute inset-0 overflow-hidden bg-black">
        {stars.map((star) => (
          <motion.div
            key={`star-${star.id}`}
            className="absolute w-1 h-1 md:w-1.5 md:h-1.5 bg-white rounded-full"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
            }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: star.duration, repeat: Infinity }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
        <motion.div
          className="w-full md:w-1/2 flex justify-center perspective order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          animate={{ 
            y: [0, -30, 0],
            rotateX: [0, 10, 0],
            rotateY: [0, -15, 0],
            rotateZ: [0, 5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            times: [0, 0.5, 1]
          }}
          style={{ perspective: "1000px" }}
        >
          <motion.img
            src={Astra}
            alt="Contact"
            className="w-48 md:w-72 lg:w-96 rounded-2xl shadow-2xl object-cover filter drop-shadow-[0_0_30px_rgba(28,216,210,0.3)]"
            whileHover={{ scale: 1.1 }}
          />
        </motion.div>

        <motion.form
          className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6 order-1 md:order-2"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">Get In Touch</h2>

          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/10 border border-white/20 rounded-lg text-sm md:text-base text-white placeholder-white/50 focus:outline-none focus:border-[#1cd8d2]"
            />
            {errors.name && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/10 border border-white/20 rounded-lg text-sm md:text-base text-white placeholder-white/50 focus:outline-none focus:border-[#1cd8d2]"
            />
            {errors.email && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/10 border border-white/20 rounded-lg text-sm md:text-base text-white focus:outline-none focus:border-[#1cd8d2]"
            >
              <option value="" className="bg-black">
                Select Service
              </option>
              <option value="web-development" className="bg-black">
                Web Development
              </option>
              <option value="app-development" className="bg-black">
                App Development
              </option>
              <option value="consulting" className="bg-black">
                Consulting
              </option>
              <option value="other" className="bg-black">
                Other
              </option>
            </select>
            {errors.service && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.service}</p>}
          </div>

          {formData.service === "other" && (
            <div>
              <input
                type="text"
                name="budget"
                placeholder="Budget (numbers only)"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/10 border border-white/20 rounded-lg text-sm md:text-base text-white placeholder-white/50 focus:outline-none focus:border-[#1cd8d2]"
              />
              {errors.budget && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.budget}</p>}
            </div>
          )}

          <div>
            <textarea
              name="idea"
              placeholder="Your Project Idea"
              value={formData.idea}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/10 border border-white/20 rounded-lg text-sm md:text-base text-white placeholder-white/50 focus:outline-none focus:border-[#1cd8d2] resize-none"
            />
            {errors.idea && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.idea}</p>}
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full px-4 md:px-6 py-2 md:py-3 bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] text-white text-sm md:text-base font-bold rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
          >
            {status === "sending"
              ? "Sending..."
              : status === "success"
              ? "Message Sent!"
              : status === "error"
              ? "Failed! Try Again"
              : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}