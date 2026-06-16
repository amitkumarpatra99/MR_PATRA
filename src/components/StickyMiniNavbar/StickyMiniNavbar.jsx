import { useEffect, useState, useRef } from "react";

const StickyMiniNavbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
          setScrollProgress(Math.min(100, Math.max(0, progress)));
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    <div className="fixed top-0 left-0 w-full z-[10000] h-[1px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 transition-[width] duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default StickyMiniNavbar;