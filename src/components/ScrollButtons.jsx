import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const ScrollDownButton = ({ next = "about" }) => {
  const prefersReduced = useReducedMotion();

  const handleScroll = (e) => {
    e.preventDefault();
    const target = document.getElementById(next);
    if (target) {
      if (window.lenis) {
        window.lenis.scrollTo(target, { offset: -85, duration: 1.2 });
      } else {
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - 85;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <div className="absolute bottom-10 md:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 pointer-events-auto">
      <a
        href={`#${next}`}
        onClick={handleScroll}
        className="cursor-pointer"
      >
        <motion.button
          aria-label="Scroll down"
          className="relative flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-md shadow-lg hover:shadow-[0_0_20px_rgba(79,183,179,0.3)] hover:border-teal-400/50 transition-all duration-300 group"
          {...(!prefersReduced
            ? {
                animate: { y: [0, 8, 0] },
                transition: { duration: 1.4, repeat: Infinity, ease: "easeInOut" },
              }
            : {})}
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/10 to-cyan-300/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <ChevronDown className="relative text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" size={20} />
        </motion.button>
      </a>
    </div>
  );
};

export default ScrollDownButton;
