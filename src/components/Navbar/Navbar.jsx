import React, { useState, useEffect, useCallback, useRef } from "react";
import { 
  FiHome, 
  FiUser, 
  FiCpu, 
  FiLayers, 
  FiCompass,
  FiMoreVertical,
  FiSun,
  FiMoon,
  FiArrowUp
} from "react-icons/fi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: FiHome },
  { id: "about", label: "About", icon: FiUser },
  { id: "skills", label: "Skills", icon: FiCpu },
  { id: "projects", label: "Projects", icon: FiLayers },
];

export default function NavbarPremium() {
  const [activeTab, setActiveTab] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const menuRef = useRef(null);

  // Spotlight mouse tracking (Desktop only)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveTab(entry.target.id);
        });
      },
      { threshold: 0.38 }
    );
    [...NAV_ITEMS, { id: "Journey" }].forEach(item => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  // Smooth scroll
  const scrollToSection = useCallback((id) => {
    setIsMenuOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    const offset = el.getBoundingClientRect().top + window.scrollY - 85;
    window.scrollTo({ top: offset, behavior: "smooth" });
  }, []);

  const scrollToTop = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ========================================================
          DESKTOP TOP BAR
      ======================================================== */}
      <div className="hidden md:block fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 pointer-events-none">
        <motion.nav
          onMouseMove={handleMouseMove}
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 180, damping: 20 }}
          className="
            group pointer-events-auto relative py-3 px-7 rounded-full backdrop-blur-2xl
            bg-white/70 dark:bg-black/20 border border-black/5 dark:border-white/20
            shadow-xl shadow-black/5 dark:shadow-black/10 flex items-center justify-between
            overflow-hidden transition-colors duration-300
          "
        >
           {/* Spotlight Glow */}
           <motion.div className="absolute inset-0 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, ${theme === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.12)'}, transparent 75%)` }} />
           
           {/* Logo */}
           <div className="flex items-center gap-3 cursor-pointer relative z-20" onClick={() => scrollToSection("home")}>
             <div className="h-10 w-10 rounded-full border border-black/10 dark:border-white/20 overflow-hidden shadow-lg">
               <img src="DP.jpg" alt="Profile" className="w-full h-full object-cover" />
             </div>
           </div>

           {/* Nav Items */}
           <ul className="flex items-center gap-1 bg-black/5 dark:bg-white/5 rounded-full px-2 py-[6px] border border-black/5 dark:border-white/10 relative z-20 transition-colors duration-300">
            {[...NAV_ITEMS, { id: "Journey", label: "Journey" }].map((item) => (
              <li key={item.id} className="relative">
                <button onClick={() => scrollToSection(item.id)} className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all ${activeTab === item.id ? "text-white dark:text-black" : "text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"}`}>
                  {activeTab === item.id && <motion.div layoutId="active-pill-desktop" className="absolute inset-0 bg-black dark:bg-white/90 rounded-full" transition={{ type: "spring", stiffness: 250, damping: 28 }} />}
                  <span className="relative z-20">{item.label}</span>
                </button>
              </li>
            ))}
           </ul>

           {/* Right Side Actions */}
           <div className="flex items-center gap-5 relative z-20 ml-4">
             {/* Icons Group */}
             <div className="flex items-center gap-3 pr-5 border-r border-black/10 dark:border-white/20">
               
               {/* Theme Toggle */}
               <button onClick={toggleTheme} className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black/70 dark:text-gray-400 hover:scale-110 transition-all hover:bg-black/10 dark:hover:bg-white/10">
                  {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
               </button>

               {/* GitHub (Restored) */}
               <a href="https://github.com/amitkumarpatra99" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black/70 dark:text-gray-400 hover:scale-110 transition-all hover:bg-black/10 dark:hover:bg-white/10">
                 <FaGithub size={18} />
               </a>

               {/* LinkedIn (Restored) */}
               <a href="https://linkedin.com/in/amitkumarpatra99" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black/70 dark:text-gray-400 hover:scale-110 transition-all hover:bg-black/10 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400">
                 <FaLinkedin size={18} />
               </a>

             </div>
             
             {/* WhatsApp Button */}
             <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/8144129955?text=Hi%20Amit" 
                target="_blank" 
                className="px-5 py-2 rounded-full text-teal-600 dark:text-teal-300 bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/20 hover:bg-teal-100 dark:hover:bg-teal-500/20 flex items-center gap-2 font-medium transition"
             >
                <FaWhatsapp className="text-xl text-green-500" />
                Contact
             </motion.a>
           </div>
        </motion.nav>
      </div>

      {/* ========================================================
          MOBILE TOP BAR
      ======================================================== */}
      <div className="md:hidden fixed top-4 left-0 right-0 z-40 px-4 flex justify-between items-center pointer-events-none">
         <div onClick={() => scrollToSection("home")} className="pointer-events-auto h-10 w-10 rounded-full border border-white/20 dark:border-white/10 overflow-hidden shadow-lg">
             <img src="DP.jpg" alt="Profile" className="w-full h-full object-cover" />
         </div>
      </div>

      {/* ========================================================
          MOBILE BOTTOM FLOATING DOCK
      ======================================================== */}
      <div className="md:hidden fixed bottom-6 inset-x-0 mx-auto z-50 w-full max-w-[360px]">
        
        {/* --- POPUP MENU ("...") --- */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="
                absolute bottom-20 right-4 p-3 flex flex-col gap-2
                bg-white/80 dark:bg-[#0a0a0a]/90 backdrop-blur-2xl
                border border-white/20 dark:border-white/10
                rounded-2xl shadow-2xl z-50 min-w-[170px]
              "
            >
              {/* Menu Items */}
              <button onClick={() => scrollToSection("Journey")} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 text-black dark:text-white transition-colors">
                <FiCompass className="text-lg text-blue-500" />
                <span className="text-sm font-medium">My Journey</span>
              </button>

              <button onClick={toggleTheme} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 text-black dark:text-white transition-colors">
                {theme === "dark" ? <FiSun className="text-lg text-yellow-400" /> : <FiMoon className="text-lg text-violet-500" />}
                <span className="text-sm font-medium">{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
              </button>

              <button onClick={scrollToTop} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 text-black dark:text-white transition-colors">
                <FiArrowUp className="text-lg text-green-400" />
                <span className="text-sm font-medium">Scroll Top</span>
              </button>

              {/* Divider */}
              <div className="h-[1px] w-full bg-black/5 dark:bg-white/10 my-1"></div>

              {/* Social Icons (Inside Menu) */}
              <div className="flex items-center justify-evenly py-1">
                 <a href="https://github.com/amitkumarpatra99" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black/5 dark:bg-white/5 text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/20 transition-colors">
                    <FaGithub size={20} />
                 </a>
                 <a href="https://linkedin.com/in/amitkumarpatra99" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black/5 dark:bg-white/5 text-blue-600 dark:text-blue-400 hover:bg-black/10 dark:hover:bg-white/20 transition-colors">
                    <FaLinkedin size={20} />
                 </a>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

        {/* --- MAIN DOCK --- */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="
            flex items-center justify-evenly px-2 py-2
            bg-white/20 dark:bg-black/20       
            backdrop-blur-xl
            border border-white/30 dark:border-white/10
            shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]
            rounded-full 
          "
        >
          {/* Main Links */}
          {NAV_ITEMS.map((item) => {
             const Icon = item.icon;
             const isActive = activeTab === item.id;
             return (
               <button key={item.id} onClick={() => scrollToSection(item.id)} className="relative flex flex-col items-center justify-center h-12 w-12 rounded-full">
                 {isActive && (
                   <motion.div layoutId="mobile-active-pill" className="absolute inset-0 bg-white/40 dark:bg-white/10 rounded-full border border-white/20 dark:border-white/5 shadow-inner" transition={{ type: "spring", duration: 0.5 }} />
                 )}
                 <span className={`relative z-10 text-xl transition-all duration-300 ${isActive ? "text-black dark:text-white scale-110" : "text-black/50 dark:text-white/50"}`}>
                   <Icon />
                 </span>
               </button>
             );
          })}

          {/* More Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`
              relative flex flex-col items-center justify-center h-12 w-12 rounded-full
              transition-all duration-300
              ${isMenuOpen ? "bg-white/20 dark:bg-white/10 text-black dark:text-white" : "text-black/50 dark:text-white/50"}
            `}
          >
            <FiMoreVertical className="text-xl" />
          </button>

          {/* Divider */}
          <div className="w-[1px] h-6 bg-black/10 dark:bg-white/10 mx-1"></div>

          {/* WhatsApp */}
          <a href="https://wa.me/8144129955?text=Hi%20Amit" target="_blank" rel="noopener noreferrer" className="relative flex flex-col items-center justify-center h-12 w-12 rounded-full transition-transform active:scale-95">
             <span className="text-2xl text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)] filter hover:brightness-110">
               <FaWhatsapp />
             </span>
          </a>

        </motion.div>
      </div>
    </>
  );
}