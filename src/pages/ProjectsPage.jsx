import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, Folder, Github, X } from "lucide-react";
import { RiExternalLinkLine } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";

const ProjectsPage = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, type: "spring" }
    },
  };

  return (
    <div className="relative min-h-screen -mt-20 bg-[#F0F2F5] dark:bg-[#020617] transition-colors duration-300 overflow-x-hidden font-sans">
      
      {/* AMBIENT BACKGROUND ORBS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-400/20 dark:bg-teal-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/20 dark:bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 dark:bg-purple-900/10 rounded-full blur-[120px]" />
      </div>

      {/* CLOSE BUTTON */}
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
        <FaTimes size={24} />
      </motion.button>

      {/* CONTENT CONTAINER */}
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
            <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-teal-500/10 dark:bg-teal-400/10 text-teal-600 dark:text-teal-400 text-xs font-bold tracking-widest uppercase mb-4 border border-teal-500/20">
              <Folder size={14} className="text-[#4FB7B3] animate-spin-slow" />
              My Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6">
              All <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Projects</span>
            </h2>
            <div className="w-20 h-1.5 mx-auto rounded-full bg-gradient-to-r from-teal-400 to-blue-600" />
          </motion.div>
        </div>

        {/* PROJECTS GRID */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-gray-800 dark:text-white"
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                className="group relative rounded-3xl border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-[#111623]/60 backdrop-blur-xl shadow-lg dark:shadow-2xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(79,183,179,0.3)] hover:border-teal-500/30 overflow-hidden cursor-pointer"
                onClick={() => handleOpenModal(project)}
              >
                <div className="p-4 pb-0 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#071e22]/90 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                </div>

                <div className="p-6 relative z-20">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-6 line-clamp-2">
                    Click for details.
                  </p>

                  <div className="flex items-center gap-3">
                    <button
                      className="flex-1 flex items-center justify-center gap-1 px-4 py-2.5 
                      rounded-full text-sm font-semibold 
                      text-gray-700 dark:text-white bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 
                      hover:bg-teal-500/20 hover:border-teal-500/50 
                      transition-all duration-300"
                    >
                      Details <ArrowRight size={16} className="text-teal-500 dark:text-teal-400" />
                    </button>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 
                        rounded-full text-sm font-semibold 
                        text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/20 
                        hover:bg-teal-100 dark:hover:bg-teal-500/20 hover:text-teal-700 dark:hover:text-white 
                        transition-all duration-300"
                      >
                        Live <RiExternalLinkLine size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* MODAL */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-3 bg-black/60 backdrop-blur-md"
              onClick={handleCloseModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="
                  relative w-full max-w-3xl rounded-2xl overflow-hidden 
                  bg-white dark:bg-[#0B1215] border border-gray-200 dark:border-teal-500/30 shadow-2xl
                  max-h-[90vh] flex flex-col
                "
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={handleCloseModal}
                  className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/40 text-white/70 hover:text-white hover:bg-red-500/80 transition"
                >
                  <X size={18} />
                </button>

                <div className="flex flex-col md:flex-row w-full h-full">
                  <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 dark:bg-transparent dark:bg-gradient-to-br dark:from-teal-900/20 dark:to-black p-4">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="rounded-xl shadow-lg border border-white/5 object-contain max-h-[180px] sm:max-h-[240px] md:max-h-[320px] w-full"
                    />
                  </div>

                  <div className="w-full md:w-1/2 flex flex-col justify-between p-5 sm:p-6 md:p-8 overflow-y-auto md:overflow-hidden custom-scrollbar">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedProject.title}
                    </h3>
                    <p className="text-gray-600 dark:text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-4">
                      {selectedProject.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {selectedProject.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-[10px] sm:text-xs font-medium rounded-full text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 w-full">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-5 py-3 
                        rounded-full text-sm sm:text-base font-semibold 
                        text-gray-700 dark:text-white bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 
                        hover:bg-gray-200 dark:hover:bg-white/10 transition"
                      >
                        <Github size={16} /> Code
                      </a>

                      {selectedProject.live && (
                        <a
                          href={selectedProject.live}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-5 py-3 
                          rounded-full text-sm sm:text-base font-semibold 
                          text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/20 
                          hover:bg-teal-100 dark:hover:bg-teal-500/20 hover:text-teal-700 dark:hover:text-white 
                          transition-all duration-300"
                        >
                          <ExternalLink size={16} /> Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
