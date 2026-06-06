import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, Folder, Github, X, Search } from "lucide-react";

const ProjectsPage = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);
  const handleSearchChange = (event) => setSearchTerm(event.target.value);

  const filteredProjects = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return projects;
    return projects.filter((project) => {
      const title = project.title.toLowerCase();
      const description = (project.description || "").toLowerCase();
      const tags = project.tags.join(" ").toLowerCase();
      return title.includes(query) || description.includes(query) || tags.includes(query);
    });
  }, [searchTerm]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }
    },
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-blue-900/50 selection:text-white overflow-x-hidden flex flex-col items-center">
      
      {/* Ambient Midnight Blue Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.06] rounded-[100%] blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-[-10%] w-[500px] h-[500px] bg-indigo-600/[0.03] rounded-full blur-[150px] pointer-events-none" />

      {/* Floating Close Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate("/")}
        className="fixed top-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.08] text-neutral-400 hover:text-white hover:bg-white/[0.1] hover:border-white/[0.15] backdrop-blur-md transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
      >
        <X size={20} strokeWidth={2.5} />
      </motion.button>

      {/* Main Content Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 w-full max-w-[1200px] pt-24 pb-20 px-4 sm:px-6 md:px-8"
      >
        {/* Header Section */}
        <div className="mb-10 flex flex-col gap-6 lg:gap-10">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/[0.05] border border-blue-500/[0.15] mb-5">
              <Folder size={14} className="text-blue-400" />
              <span className="text-blue-300 text-xs font-semibold tracking-widest uppercase">
                My Portfolio
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tighter mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Projects.</span>
            </h2>
            <p className="text-blue-100/50 text-base md:text-lg font-medium tracking-tight max-w-2xl">
              A collection of things I have built, focusing on intuitive design and robust engineering.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-[1fr_auto] items-center">
            <div className="space-y-2">
              <p className="text-sm text-blue-100/70">
                Showing <span className="text-blue-200 font-semibold">{filteredProjects.length}</span> of <span className="text-blue-200 font-semibold">{projects.length}</span> projects.
              </p>
              <p className="text-sm text-blue-100/40 max-w-2xl">
                Search by project name, description, or technology to quickly find the work you want to explore.
              </p>
            </div>

            <div className="relative w-full sm:w-[340px]">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300/70" />
              <input
                type="search"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search projects..."
                className="w-full rounded-3xl border border-white/[0.08] bg-slate-950/80 py-3 pl-12 pr-5 text-sm text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)] outline-none transition focus:border-blue-400/70 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </div>
        </div>

        {/* Projects Grid Layout */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.length === 0 ? (
              <motion.div
                variants={itemVariants}
                layout
                className="col-span-full rounded-[2rem] border border-blue-500/[0.08] bg-[#081026]/80 p-10 text-center"
              >
                <p className="text-lg font-semibold text-white mb-2">No matching projects found.</p>
                <p className="text-sm text-blue-100/60">Try a different search term or explore the full collection by clearing the search.</p>
              </motion.div>
            ) : (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  onClick={() => handleOpenModal(project)}
                  className="group relative rounded-[2rem] bg-gradient-to-br from-[#0a0f1a] to-black border border-blue-500/[0.08] overflow-hidden transition-all duration-500 hover:border-blue-500/[0.2] hover:shadow-[0_0_40px_rgba(59,130,246,0.05)] cursor-pointer flex flex-col"
                >
                  {/* Inner Ambient Sheen */}
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-400/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

                  {/* Image Section */}
                  <div className="relative h-48 w-full overflow-hidden bg-[#050914]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    {/* Bottom fade into card body */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/20 to-transparent z-10" />
                  </div>

                  {/* Text Content */}
                  <div className="p-6 pt-4 relative z-20 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-white tracking-tight mb-2 group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-[10px] font-medium rounded-md text-blue-200/70 bg-blue-500/[0.05] border border-blue-500/[0.1]"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 text-[10px] font-medium rounded-md text-blue-200/50 bg-white/[0.02] border border-white/[0.05]">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Minimal Details Button */}
                    <div className="mt-auto flex items-center justify-between border-t border-white/[0.05] pt-4">
                      <span className="text-sm font-medium text-blue-100/40 group-hover:text-blue-400 transition-colors">
                        View Details
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:bg-blue-500/[0.1] group-hover:border-blue-500/[0.2] transition-all duration-300">
                        <ArrowRight size={14} className="text-neutral-400 group-hover:text-blue-400 transition-colors group-hover:-rotate-45" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </motion.div>

        {/* OLED Frost Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/60 backdrop-blur-xl"
              onClick={handleCloseModal}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-4xl rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#0a0f1a] to-black border border-blue-500/[0.15] shadow-[0_0_80px_rgba(59,130,246,0.1)] flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh] overflow-y-auto md:overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Close Button */}
                <button
                  onClick={handleCloseModal}
                  className="absolute top-5 right-5 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 backdrop-blur-md transition-all duration-300"
                >
                  <X size={18} />
                </button>

                {/* Modal Image Side */}
                <div className="w-full md:w-[45%] relative bg-[#050914] flex items-center justify-center p-6 md:p-8 min-h-0 md:min-h-[250px] h-48 md:h-auto border-b md:border-b-0 md:border-r border-white/[0.05] shrink-0">
                  <div className="absolute inset-0 bg-blue-500/[0.02] pointer-events-none" />
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="relative z-10 w-full h-auto object-contain rounded-2xl shadow-2xl drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
                  />
                </div>

                {/* Modal Content Side */}
                <div className="w-full md:w-[55%] p-6 md:p-10 flex flex-col md:overflow-y-auto custom-scrollbar">
                  <div className="mb-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-500/[0.1] border border-blue-500/[0.2] text-blue-300 text-[10px] font-bold uppercase tracking-widest w-fit">
                    Project Overview
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4">
                    {selectedProject.title}
                  </h3>
                  
                  <p className="text-blue-100/50 text-sm leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 text-xs font-medium rounded-lg text-blue-200/80 bg-white/[0.03] border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto flex flex-col sm:flex-row gap-3">
                    {selectedProject.live && (
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 group flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-black bg-white hover:bg-blue-50 shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 active:scale-95"
                      >
                        Visit Live Site
                        <ExternalLink size={16} className="text-blue-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    )}
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-blue-100/70 bg-blue-500/[0.05] border border-blue-500/[0.1] hover:bg-blue-500/[0.1] hover:text-white transition-all duration-300 active:scale-95"
                    >
                      <Github size={16} /> 
                      Source Code
                    </a>
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