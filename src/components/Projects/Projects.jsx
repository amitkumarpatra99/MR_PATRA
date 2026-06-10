import { useState, useEffect, useRef } from "react";
import { projects, techLogos } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Github, ExternalLink, Clock, Target, Cpu, Zap, HelpCircle, Code2, Globe } from "lucide-react";


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const sliderRef = useRef(null);

  const lockBodyScroll = () => {
    window.lenis?.stop();
    if (!window.lenis) {
      const scrollY = window.scrollY;
      setScrollPosition(scrollY);
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      document.body.style.width = "100%";
    }
  };

  const unlockBodyScroll = () => {
    window.lenis?.start();
    if (!window.lenis) {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "auto";
      document.body.style.width = "";
      window.scrollTo(0, scrollPosition);
    }
  };

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    lockBodyScroll();
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    unlockBodyScroll();
  };

  useEffect(() => {
    return () => {
      window.lenis?.start();
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "auto";
      document.body.style.width = "";
    };
  }, []);

  // Horizontal Scroll Function
  const scroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      sliderRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="projects"
      // 🔥 FIX: Added a dynamic z-index here. When a project is selected, the ENTIRE section jumps above the navbar.
      className={`relative min-h-screen py-24 bg-transparent text-white font-sans overflow-hidden flex flex-col items-center ${selectedProject ? "z-[99999]" : "z-10"
        }`}
    >

      {/* Background Ambient Gradient */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/10 via-transparent to-transparent" />

      <div className="relative z-10 w-full max-w-[1400px] px-6 lg:px-12">

        {/* Header Section */}
        <div className="mb-12 flex flex-col items-start">
          <div className="premium-header-badge mb-6">
            <span className="premium-header-badge-dot animate-pulse" />
            <span className="text-neutral-300 text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
              WORK
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
            Featured Work
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            My past projects showcasing my expertise.
          </p>
        </div>

        {/* Horizontal Scrolling Cards Layout */}
        <div className="relative group/slider w-full">

          {/* Navigation Arrows (Visible on Hover/Desktop) */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 rounded-full bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 items-center justify-center text-white opacity-0 group-hover/slider:opacity-100 transition-opacity hidden md:flex hover:bg-[#2a2a2a] shadow-xl"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 rounded-full bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 items-center justify-center text-white opacity-0 group-hover/slider:opacity-100 transition-opacity hidden md:flex hover:bg-[#2a2a2a] shadow-xl"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slider Track */}
          <div
            ref={sliderRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 px-4 -mx-4 hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            data-lenis-prevent
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                onClick={() => handleOpenModal(project)}
                className="snap-center shrink-0 w-[280px] md:w-[340px] h-[420px] rounded-[2rem] glass-card border border-white/10 flex flex-col relative overflow-hidden cursor-pointer hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:-translate-y-2 transition-all duration-500 group"
              >
                {/* Card Text Content */}
                <div className="p-8 z-10">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Card Image (Anchored to bottom like the reference) */}
                <div className="absolute bottom-0 left-0 w-full h-[60%] flex items-end justify-center px-6 transition-transform duration-500 group-hover:translate-y-[-8px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[90%] object-cover object-top rounded-t-xl shadow-[0_-10px_30px_rgba(0,0,0,0.5)] border-t border-l border-r border-white/10"
                  />
                  {/* Bottom fade out to blend with card */}
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#111111] to-transparent pointer-events-none group-hover:from-[#161616] transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Detailed Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              // 🔥 FIX: Changed z-50 to z-[9999] to sit above nav and footer cards
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
              onClick={handleCloseModal}
            >
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="glass-card relative w-full max-w-[1100px] h-[90vh] rounded-[2rem] flex flex-col overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Close Button */}
                <button
                  onClick={handleCloseModal}
                  // 🔥 FIX: Added z-[10000] here just to be safe
                  className="absolute top-6 right-6 z-[10000] w-10 h-10 flex items-center justify-center rounded-full bg-[#1a1a1a] text-neutral-400 hover:text-white hover:bg-[#2a2a2a] transition-colors border border-white/10"
                >
                  <X size={20} />
                </button>

                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-y-auto custom-scrollbar pb-20" data-lenis-prevent>

                  {/* Hero Section */}
                  <div className="flex flex-col items-center text-center pt-20 pb-12 px-6">
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                      {selectedProject.title}
                    </h2>
                    <p className="text-neutral-400 text-sm md:text-base max-w-2xl">
                      {selectedProject.description}
                    </p>

                    {/* Hero Image */}
                    <div className="mt-12 w-full max-w-3xl h-[180px] sm:h-[250px] md:h-[400px] relative rounded-t-3xl overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.5)] border-t border-l border-r border-white/10 bg-[#111]">
                      <img
                        src={selectedProject.image}
                        alt="Hero"
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
                    </div>
                  </div>

                  {/* Two Column Details Section */}
                  <div className="px-6 md:px-12 max-w-5xl mx-auto flex flex-col lg:flex-row gap-10">

                    {/* Left Sticky Sidebar */}
                    <div className="w-full lg:w-[30%] flex flex-col md:grid md:grid-cols-3 lg:flex lg:flex-col gap-4 order-2 lg:order-1">

                      {/* Duration Block */}
                      <div className="glass-card rounded-2xl p-6 flex flex-col items-center text-center">
                        <Clock className="text-blue-500 mb-2" size={20} />
                        <h4 className="text-white font-bold mb-1 text-sm">Duration</h4>
                        <span className="text-neutral-400 text-xs font-medium">
                          {selectedProject.duration || "4 Months"}
                        </span>
                      </div>

                      {/* Action Links Block (Live Preview) */}
                      <div className="glass-card rounded-2xl p-6 flex flex-col items-center text-center w-full">
                        <Globe className="text-blue-500 mb-2" size={20} />
                        <h4 className="text-white font-bold mb-3 text-sm">Live Preview</h4>
                        <div className="flex flex-col gap-2.5 w-full">
                          {selectedProject.live && (
                            <a
                              href={selectedProject.live}
                              target="_blank"
                              rel="noreferrer"
                              className="w-full py-2.5 rounded-full bg-[#007AFF] text-white font-semibold text-xs hover:bg-[#0066d6] transition-colors flex items-center justify-center gap-1.5"
                            >
                              <ExternalLink size={14} /> View Project
                            </a>
                          )}

                          {selectedProject.github && (
                            <a
                              href={selectedProject.github}
                              target="_blank"
                              rel="noreferrer"
                              className="w-full py-2.5 rounded-full bg-[#1a1a1a] text-white font-semibold text-xs hover:bg-[#2a2a2a] border border-white/10 transition-colors flex items-center justify-center gap-1.5"
                            >
                              <Github size={14} /> Source Code
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Tech Stack Block */}
                      <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center">
                        <Code2 className="text-blue-500 mb-2" size={20} />
                        <h4 className="text-white font-bold mb-4 text-sm">Tech Stack</h4>
                        <div className="flex flex-wrap justify-center gap-2">
                          {selectedProject.tags?.map((tag, index) => {
                            const logo = techLogos[tag.trim()];
                            if (logo) {
                              return (
                                <div 
                                  key={index} 
                                  className="w-10 h-10 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center justify-center p-2 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:bg-white/[0.08] hover:scale-105 transition-all duration-300"
                                  title={tag}
                                >
                                  <img src={logo} alt={tag} className="w-full h-full object-contain" />
                                </div>
                              );
                            }
                            return (
                              <span
                                key={index}
                                className="px-2.5 py-1.5 rounded-lg bg-[#1a1a1a] border border-white/5 text-[10px] font-medium text-neutral-300"
                              >
                                {tag}
                              </span>
                            );
                          })}
                        </div>
                      </div>

                    </div>

                    {/* Right Main Content */}
                    <div className="w-full lg:w-[70%] flex flex-col gap-10 pb-10 order-1 lg:order-2">

                      {/* Overview (The Problem) */}
                      <section>
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                          <HelpCircle className="text-blue-500" size={24} />
                          The Problem
                        </h3>
                        <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                          {selectedProject.description}
                        </p>
                      </section>

                      {/* Goals */}
                      <section>
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                          <Target className="text-blue-500" size={24} />
                          Goals
                        </h3>
                        <ul className="space-y-3">
                          {(selectedProject.goals || [
                            "Deliver a premium user experience with responsive controls",
                            "Optimize asset preloading and frontend caching states",
                            "Adhere to strict clean code standards and SEO guidelines",
                            "Improve user conversion and navigation speed by 30%"
                          ]).map((goal, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-neutral-400 text-sm md:text-base leading-relaxed">
                              <span className="text-blue-500 mt-1.5 shrink-0 text-[10px]">●</span>
                              <span>{goal}</span>
                            </li>
                          ))}
                        </ul>
                      </section>

                      {/* Engineering */}
                      <section>
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                          <Cpu className="text-blue-500" size={24} />
                          Engineering
                        </h3>
                        <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                          {selectedProject.engineering || "Developed utilizing a modern tech stack focused on modularity and separation of concerns. Optimized client bundle size, assets loading paths, and database query executions to deliver lightning-fast latency."}
                        </p>
                      </section>

                      {/* Impact */}
                      <section>
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                          <Zap className="text-blue-500" size={24} />
                          Impact
                        </h3>
                        <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                          {selectedProject.impact || "Elevates user productivity and provides a robust, fail-safe environment. Drastically reduces manual workflows by introducing smart, automated operations."}
                        </p>
                      </section>

                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Internal CSS for scrollbar hiding/styling */}
      <style dangerouslySetInnerHTML={{
        __html: `
        /* Hide scrollbar for slider track */
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        /* Custom scrollbar for the modal */
        .custom-scrollbar::-webkit-scrollbar {
          display: block;
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #2a2a2a;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #444;
        }
      `}} />
    </section>
  );
};

export default Projects;