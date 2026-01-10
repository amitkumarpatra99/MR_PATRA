import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { education } from "../constants";

const EducationPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="relative min-h-screen -mt-20 bg-[#F0F2F5] dark:bg-[#020617] transition-colors duration-300 overflow-x-hidden font-sans">

      {/* --- AMBIENT BACKGROUND ORBS --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-400/20 dark:bg-teal-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/20 dark:bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 dark:bg-purple-900/10 rounded-full blur-[120px]" />
      </div>

      {/* --- CLOSE BUTTON --- */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate("/")}
        className="fixed top-6 right-6 z-50 p-3 rounded-full 
                   bg-white/70 dark:bg-black/40 backdrop-blur-xl 
                   border border-white/60 dark:border-white/10 shadow-lg
                   text-gray-700 dark:text-gray-200 
                   hover:text-red-500 dark:hover:text-red-400 
                   transition-all duration-300"
      >
        <X size={24} />
      </motion.button>

      {/* --- CONTENT CONTAINER --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 max-w-7xl mx-auto pt-28 pb-20 px-4 sm:px-6 lg:px-8"
      >

        {/* HEADER */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-teal-500/10 dark:bg-teal-400/10 text-teal-600 dark:text-teal-400 text-xs font-bold tracking-widest uppercase mb-4 border border-teal-500/20">
              Academic Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Education</span>
            </h2>
            <div className="w-20 h-1.5 mx-auto rounded-full bg-gradient-to-r from-teal-400 to-blue-600" />
          </motion.div>
        </div>

        {/* --- GRID SECTION (Replaced Timeline) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full h-full"
            >
              {/* FROSTED GLASS CARD */}
              <div className="group relative h-full overflow-hidden
                              bg-white/60 dark:bg-[#111623]/60 
                              backdrop-blur-xl hover:backdrop-blur-2xl
                              border border-white/60 dark:border-white/10
                              rounded-2xl p-6 sm:p-8
                              shadow-xl dark:shadow-2xl
                              transition-all duration-300 hover:scale-[1.02] hover:shadow-teal-500/10 flex flex-col"
              >

                {/* Inner Gradient Flash on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                <div className="flex flex-col gap-5 h-full">

                  {/* Logo & Title Header */}
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white p-1 shadow-md shrink-0 flex items-center justify-center">
                      <img src={edu.img} alt={edu.school} className="w-full h-full object-contain rounded-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                        {edu.school}
                      </h3>
                      <p className="text-sm font-semibold text-teal-600 dark:text-teal-400 mt-1">
                        {edu.degree}
                      </p>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="flex flex-col gap-4 mt-auto">

                    {/* Meta Badges */}
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-blue-100/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-700/30">
                        <Calendar size={12} />
                        {edu.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-purple-100/50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200/50 dark:border-purple-700/30">
                        <MapPin size={12} />
                        {edu.add}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {edu.desc}
                    </p>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </div>
  );
};

export default EducationPage;