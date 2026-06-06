import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Coffee, 
  Zap, 
  Compass 
} from "lucide-react";

const Journey = () => {
  const navigate = useNavigate();
  
  // Subtle parallax for the ambient background glow
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: parallaxRef });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const navItems = [
    { label: "Experience", icon: Briefcase, path: "/experience", desc: "Professional timeline & roles" },
    { label: "Education", icon: GraduationCap, path: "/education", desc: "Academic background & certs" },
    { label: "Contact", icon: Mail, path: "/contact", desc: "Let's build something together" },
  ];

  return (
    <section
      id="Journey"
      ref={parallaxRef}
      // z-0 ensures it stays behind the Projects modal!
      className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-24 relative z-0 overflow-hidden bg-transparent font-sans selection:bg-blue-900/50 selection:text-white"
    >
      {/* Ambient OLED Glows */}
      <motion.div 
        style={{ y: parallaxY }} 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.05] rounded-[100%] blur-[120px] pointer-events-none" 
      />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1200px] w-full mx-auto relative z-10 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="mb-20 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/[0.05] border border-blue-500/[0.15] mb-5">
              <Compass size={14} className="text-blue-400" />
              <span className="text-blue-300 text-xs font-semibold tracking-widest uppercase">
                Explore
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tighter mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Journey.</span>
            </h2>
            <p className="text-blue-100/50 text-base md:text-lg font-medium tracking-tight max-w-lg">
              The path that shaped my engineering and design philosophy.
            </p>
          </motion.div>
        </div>

        {/* NAV CARDS (Premium 3D Glassmorphism) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full place-items-center perspective-[1000px]">
          {navItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
              onClick={() => navigate(item.path)}
              className="w-full max-w-[340px] h-[320px] cursor-pointer group"
            >
              <motion.div
                // Smoother, more realistic 3D tilt
                whileHover={{ rotateX: 6, rotateY: -6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-full h-full rounded-[2.5rem] bg-gradient-to-br from-[#0a0f1a] to-black border border-blue-500/[0.08] p-8 md:p-10 flex flex-col items-center justify-center gap-6 relative overflow-hidden hover:border-blue-500/[0.2] hover:shadow-[0_0_40px_rgba(59,130,246,0.08)]"
              >
                {/* Inner Ambient Sheen */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-400/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

                {/* ICON */}
                <div className="w-20 h-20 rounded-full bg-blue-500/[0.03] border border-blue-500/[0.08] flex items-center justify-center text-blue-300/80 group-hover:bg-blue-500/[0.1] group-hover:text-blue-400 group-hover:scale-110 transition-all duration-500 shadow-[inset_0_1px_1px_rgba(59,130,246,0.05)] relative z-20">
                  {React.createElement(item.icon, { size: 32, strokeWidth: 1.5 })}
                </div>

                {/* TEXT */}
                <div className="text-center relative z-20">
                  <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-blue-100/40 text-sm font-medium">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-20 relative z-10"
        >
          <a
            href="https://warmcup.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold rounded-full bg-white text-black hover:bg-blue-50 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-[1.02] active:scale-95"
          >
            <Coffee size={18} className="text-black group-hover:text-blue-600 transition-colors" />
            <span>Support via Warm Cup</span>
            <Zap size={16} className="text-black group-hover:text-blue-600 transition-colors" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Journey;