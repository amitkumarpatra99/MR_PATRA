import React, { useEffect, useState, useRef } from "react";

const StickyMiniNavbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const totalHeight =
            document.documentElement.scrollHeight - window.innerHeight;

          if (totalHeight <= 0) {
            setScrollProgress(0);
            ticking.current = false;
            return;
          }

          const currentScroll = window.scrollY;
          const progress = (currentScroll / totalHeight) * 100;

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
    <>
      {/* ================= GLOBAL ANIMATION ================= */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>

      {/* ================= TOP NANO PROGRESS BAR ================= */}
      <div className="fixed top-0 left-0 right-0 z-[10000] h-[3px] bg-black/10 dark:bg-white/10">
        <div
          className="h-full relative transition-[width] duration-100"
          style={{ width: `${scrollProgress}%` }}
        >
          {/* Gradient Fill */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-teal-400 to-green-400" />

          {/* Glow */}
          <div className="absolute right-0 top-0 bottom-0 w-[80px] shadow-[0_0_18px_#4FB7B3]" />

          {/* Spark */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[8px] h-[8px] bg-white rounded-full shadow-[0_0_10px_#fff,0_0_20px_#4FB7B3]" />

          {/* Shimmer */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-30"
            style={{ animation: "shimmer 2s linear infinite" }}
          />
        </div>
      </div>
    </>
  );
};

export default StickyMiniNavbar;
