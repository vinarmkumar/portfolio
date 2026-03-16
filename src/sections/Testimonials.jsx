import React, { useState } from 'react'
import { motion } from 'framer-motion'

const initialTestimonials = [
  {
    name: "Yash Sahu",
    title: "Software Engineer at HCL Technologies",
    image: "https://via.placeholder.com/100/1cd8d2/000000?text=YS",
    quote: "Vinarm is a visionary developer. His attention to detail and creativity blew us away. Our project was a massive success because of him."
  },
  {
    name: "Heather Forster",
    title: "UI/UX Designer at PixelWorks",
    image: "https://via.placeholder.com/100/00bf8f/000000?text=HF",
    quote: "Working with Vinarm was an absolute pleasure. He brings design and code together like magic. Highly recommend him!"
  },
  {
    name: "Amy Jacobson",
    title: "Tech Manager at CodeRush Labs",
    image: "https://via.placeholder.com/100/302b63/ffffff?text=AJ",
    quote: "From concept to execution, Vinarm handled everything flawlessly. His work ethic and innovation are unmatched."
  },
  {
    name: "Carry Smith",
    title: "CTO at InnovateLabs",
    image: "https://via.placeholder.com/100/1cd8d2/000000?text=CS",
    quote: "Vinarm transformed our outdated platform into something modern and powerful. His skills are world-class."
  }
];

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      className="group relative p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] hover:border-[#1cd8d2]/50 backdrop-blur-md transition-all duration-300 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: false, amount: 0.3 }}
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(28,216,210,0.1)" }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1cd8d2]/5 to-[#00bf8f]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
      
      <div className="relative z-10">
        {/* Star Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <motion.span
              key={i}
              className="text-[#1cd8d2] text-lg"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: i * 0.05 }}
            >
              ★
            </motion.span>
          ))}
        </div>

        {/* Quote */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-light">
          {testimonial.quote}
        </p>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#1cd8d2]/30 to-transparent mb-6" />

        {/* Profile Section */}
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <motion.div
            className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] flex items-center justify-center text-black/80 font-bold text-sm shrink-0"
            whileHover={{ scale: 1.1 }}
          >
            {testimonial.name.charAt(0)}{testimonial.name.split(' ')[1]?.charAt(0) || ''}
          </motion.div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-white">{testimonial.name}</h3>
            <p className="text-xs text-[#1cd8d2] font-medium truncate">{testimonial.title}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(() => {
    const saved = localStorage.getItem('userTestimonials');
    return saved ? [...initialTestimonials, ...JSON.parse(saved)] : initialTestimonials;
  });
  const [formData, setFormData] = useState({ name: '', title: '', quote: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.title.trim() || !formData.quote.trim()) {
      alert('Please fill in all fields');
      return;
    }

    const newTestimonial = {
      name: formData.name,
      title: formData.title,
      quote: formData.quote,
      image: `https://via.placeholder.com/100/${Math.floor(Math.random()*16777215).toString(16)}/FFFFFF?text=${formData.name.charAt(0)}`
    };

    // Update state
    setTestimonials(prev => [...prev, newTestimonial]);

    // Save to localStorage
    const saved = localStorage.getItem('userTestimonials') || '[]';
    const parsed = JSON.parse(saved);
    localStorage.setItem('userTestimonials', JSON.stringify([...parsed, newTestimonial]));

    // Reset form
    setFormData({ name: '', title: '', quote: '' });
    setSubmitted(true);

    // Reset success message
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="testimonials" className="relative bg-black text-white py-20 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-l from-[#1cd8d2]/10 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-[#00bf8f]/10 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            What People Say
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] rounded-full"></div>
        </motion.div>

        {/* Feedback Form */}
        <motion.div
          className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-[#1cd8d2]/20 rounded-2xl p-8 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-2 text-center text-white">Share Your Feedback</h3>
          <p className="text-sm text-gray-400 text-center mb-6">Your testimonial helps others learn about my work</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <motion.div whileHover={{ scale: 1.01 }}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 hover:border-[#1cd8d2]/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#1cd8d2]/60 focus:bg-white/8 transition-all duration-300"
              />
            </motion.div>

            {/* Title Input */}
            <motion.div whileHover={{ scale: 1.01 }}>
              <input
                type="text"
                name="title"
                placeholder="Your Title/Company (e.g., Developer at XYZ Corp)"
                value={formData.title}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 hover:border-[#1cd8d2]/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#1cd8d2]/60 focus:bg-white/8 transition-all duration-300"
              />
            </motion.div>

            {/* Feedback Textarea */}
            <motion.div whileHover={{ scale: 1.01 }}>
              <textarea
                name="quote"
                placeholder="Your feedback/testimonial..."
                value={formData.quote}
                onChange={handleChange}
                rows="4"
                className="w-full bg-white/5 border border-white/10 hover:border-[#1cd8d2]/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#1cd8d2]/60 focus:bg-white/8 transition-all duration-300 resize-none"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] hover:from-[#1cd8d2]/90 hover:to-[#00bf8f]/90 text-black font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl active:shadow-md"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Post Testimonial
            </motion.button>

            {/* Success Message */}
            {submitted && (
              <motion.div
                className="bg-gradient-to-r from-[#1cd8d2]/10 to-[#00bf8f]/10 border border-[#1cd8d2]/50 text-[#1cd8d2] p-3 rounded-lg text-center text-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                ✓ Thank you! Your feedback has been posted.
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              testimonial={testimonial} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials