import { useState, useEffect, useCallback, useRef } from "react";
import { Link, scroller, animateScroll as scroll } from "react-scroll";
import {
  FiHome,
  FiUser,
  FiCpu,
  FiLayers,
  FiMoreVertical,
  FiArrowUp,
  FiX
} from "react-icons/fi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";


const NAV_ITEMS = [
  { id: "home", label: "Home", icon: FiHome },
  { id: "about", label: "About", icon: FiUser },
  { id: "skills", label: "Skills", icon: FiCpu },
  { id: "projects", label: "Projects", icon: FiLayers },
];

export default function NavbarPremium() {
  const [activeTab, setActiveTab] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // NEW: State to track navbar visibility
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const lastScrollY = useRef(0);
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
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // If menu is open, ALWAYS keep navbar visible
      if (isMenuOpen) {
        setIsNavbarVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Threshold to prevent jitter (only hide after scrolling 10px)
      if (Math.abs(currentScrollY - lastScrollY.current) > 10) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          // Scrolling DOWN -> Hide
          setIsNavbarVisible(false);
        } else {
          // Scrolling UP -> Show
          setIsNavbarVisible(true);
        }
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]); // Re-run effect if menu state changes

  // Smooth scroll using react-scroll
  const scrollToSection = useCallback((id) => {
    setIsMenuOpen(false);
    scroller.scrollTo(id, {
      duration: 600,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -85,
    });
  }, []);

  const scrollToTop = () => {
    setIsMenuOpen(false);
    scroll.scrollToTop({
      duration: 600,
      smooth: "easeInOutQuart",
    });
  };

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* DESKTOP */}
      <div className="hidden md:block fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 pointer-events-none">
        <motion.nav
          onMouseMove={handleMouseMove}
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 180, damping: 20 }}
          className="group pointer-events-auto relative py-3 px-7 rounded-full glass-panel flex items-center justify-between overflow-hidden transition-colors duration-300"
        >
          <motion.div className="absolute inset-0 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.12), transparent 75%)` }} />

          <div className="flex items-center gap-3 cursor-pointer relative z-20" onClick={() => scrollToSection("home")}>
            <div className="h-10 w-10 rounded-full border border-white/10 overflow-hidden shadow-lg">
              <img src="DP.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>

          <ul className="flex items-center gap-1 bg-white/5 rounded-full px-2 py-[6px] border border-white/10 relative z-20 transition-colors duration-300">
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className="relative">
                <Link
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-85}
                  duration={600}
                  onSetActive={() => setActiveTab(item.id)}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all block cursor-pointer relative z-20 ${activeTab === item.id ? "text-white" : "text-slate-300 hover:text-white"}`}
                >
                  {activeTab === item.id && (
                    <motion.div
                      layoutId="active-pill-desktop"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      transition={{ type: "spring", stiffness: 250, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5 relative z-20 ml-4">
            <div className="flex items-center gap-3 pr-5 border-r border-white/10">
              <a href="https://github.com/amitkumarpatra99" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 transition-all hover:scale-110">
                <FaGithub size={18} />
              </a>
              <a href="https://linkedin.com/in/amitkumarpatra99" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 transition-all hover:scale-110">
                <FaLinkedin size={18} />
              </a>
            </div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/8144129955?text=Hi%20Amit"
              target="_blank"
              className="w-10 h-10 justify-center rounded-full text-teal-300 bg-teal-500/10 border border-teal-400/20 hover:bg-teal-500/20 flex items-center gap-2 font-medium transition"
            >
              <FaWhatsapp className="text-xl text-green-500" />
            </motion.a>
          </div>
        </motion.nav>
      </div>

      {/* 
          MOBILE TOP BAR (Always Visible)
      */}


      {/* 
          MOBILE BOTTOM FLOATING DOCK (Hides on Scroll)
     */}
      <div className="md:hidden fixed bottom-6 inset-x-0 mx-auto z-50 w-[90%] max-w-[350px]">

        {/* --- POPUP MENU ("...") --- */}
        <AnimatePresence>
          {isMenuOpen && isNavbarVisible && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute bottom-16 right-12 p-3 flex flex-col gap-2 glass-panel-soft rounded-2xl shadow-2xl z-50 min-w-[170px] origin-bottom-right"
            >
              <div className="px-2 pb-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Menu
                </span>
              </div>

              <button onClick={scrollToTop} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/10 text-slate-200 transition-colors">
                <FiArrowUp className="text-lg text-green-400" />
                <span className="text-sm font-medium">Scroll Top</span>
              </button>

              <div className="h-[1px] w-full bg-white/10 my-1"></div>

              <div className="flex items-center justify-evenly py-1">
                <a href="https://github.com/amitkumarpatra99" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 transition-colors">
                  <FaGithub size={20} />
                </a>
                <a href="https://linkedin.com/in/amitkumarpatra99" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 transition-colors">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- MAIN DOCK --- */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          // 🌟 ANIMATE based on isNavbarVisible state
          animate={{
            y: isNavbarVisible ? 0 : 120,
            opacity: isNavbarVisible ? 1 : 0
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="
              flex items-center justify-evenly px-2 py-2
            bg-[#04050b]/85       
            backdrop-blur-xl
            border border-white/10
            shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]
            rounded-full 
          "
        >
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <Link
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-85}
                duration={600}
                onSetActive={() => setActiveTab(item.id)}
                className="relative flex flex-col items-center justify-center h-12 w-12 rounded-full cursor-pointer"
              >
                {isActive && (
                  <motion.div layoutId="mobile-active-pill" className="absolute inset-0 bg-white/20 rounded-full border border-white/20 shadow-inner" transition={{ type: "spring", duration: 0.5 }} />
                )}
                  <span className={`relative z-10 text-xl transition-all duration-300 ${isActive ? "text-white scale-110" : "text-slate-400"}`}>
                  <Icon />
                </span>
              </Link>
            );
          })}

          <button
            onClick={toggleMenu}
            className={`
              relative flex flex-col items-center justify-center h-12 w-12 rounded-full
              transition-all duration-300
              ${isMenuOpen
                ? "bg-white/10 text-white scale-110 shadow-lg rotate-90"
                : "text-slate-400 hover:bg-white/10"}
            `}
          >
            {isMenuOpen ? <FiX className="text-xl" /> : <FiMoreVertical className="text-xl" />}
          </button>

          <div className="w-[1px] h-6 bg-white/10 mx-1"></div>

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