import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes, FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { experiences } from "../constants";

const ExperiencePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-transparent text-white overflow-x-hidden font-sans">

      {/* --- AMBIENT BACKGROUND ORBS --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/[0.06] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/[0.04] rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[600px] h-[600px] bg-blue-900/[0.03] rounded-full blur-[120px]" />
      </div>

      {/* --- CLOSE BUTTON --- */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05, rotate: 90 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/")}
        className="fixed top-4 right-4 md:top-6 md:right-6 z-50 w-11 h-11 md:w-12 md:h-12 premium-close-btn cursor-pointer shadow-lg"
      >
        <FaTimes size={20} />
      </motion.button>

      {/* --- CONTENT CONTAINER --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 max-w-7xl mx-auto pt-28 pb-20 px-4 sm:px-6 lg:px-8"
      >

        {/* HEADER */}
        <div className="mb-12 relative">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            <div className="premium-header-badge mb-6">
              <span className="premium-header-badge-dot animate-pulse" />
              <span className="text-neutral-300 text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
                EXPERIENCE
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
              Professional Experience
            </h2>
            <p className="text-neutral-400 text-sm md:text-base">
              A timeline of my professional roles and contributions.
            </p>
          </motion.div>
        </div>

        {/* --- GRID SECTION --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full h-full"
            >
              {/* FROSTED GLASS CARD */}
              <div className="glass-card group relative h-full overflow-hidden rounded-2xl p-5 sm:p-8 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 flex flex-col">

                {/* Inner Gradient Flash on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                <div className="flex flex-col gap-5 h-full">

                  {/* Logo & Title Header */}
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white p-1 shadow-md shrink-0 flex items-center justify-center overflow-hidden">
                      <img src={exp.img} alt={exp.company} className="w-full h-full object-contain rounded-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white leading-tight">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-blue-400 mt-1">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="flex flex-col gap-4 mt-auto">

                    {/* Meta Badges */}
                    <div className="flex flex-wrap gap-2">
                      {/* Date */}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-blue-500/[0.05] text-blue-300 border border-blue-500/[0.1]">
                        <FaCalendarAlt size={12} />
                        {exp.date}
                      </span>
                    </div>

                    {/* Project Description */}
                    <div className="text-sm text-neutral-400 leading-relaxed">
                      <span className="font-semibold text-neutral-200 block mb-1">
                        Project:
                      </span>
                      {exp.project}
                    </div>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {exp.skills.map((skill, idx) => (
                        <span key={idx} className="inline-flex items-center px-2 py-1 rounded text-[10px] font-medium bg-blue-500/[0.05] text-blue-300/80 border border-blue-500/[0.1]">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Certificate Link(s) */}
                    {exp.certificates ? (
                      <div className="mt-2 flex flex-col gap-2">
                        {exp.certificates.map((cert, ci) => (
                          <a
                            key={ci}
                            href={cert.file}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg
                                                  bg-white/[0.03] 
                                                  hover:bg-blue-500/[0.1]
                                                  border border-white/[0.08] hover:border-blue-500/30
                                                  text-xs font-semibold text-neutral-400 hover:text-blue-300
                                                  transition-all duration-300 group/btn"
                            >
                              {cert.label}
                              <FaArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                          </a>
                        ))}
                      </div>
                    ) : exp.certificate ? (
                      <a
                        href={exp.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2"
                      >
                        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg
                                              bg-white/[0.03] 
                                              hover:bg-blue-500/[0.1]
                                              border border-white/[0.08] hover:border-blue-500/30
                                              text-xs font-semibold text-neutral-400 hover:text-blue-300
                                              transition-all duration-300 group/btn"
                        >
                          View Certificate
                          <FaArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </a>
                    ) : null}

                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- BACK TO HOME BUTTON --- */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 active:scale-95"
          >
            Back to Home
          </button>
        </div>

      </motion.div>
    </div>
  );
};

export default ExperiencePage;