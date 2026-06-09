import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const VisitingBanner = () => {
  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6 my-16 md:my-24 relative z-10 w-full">
      {/* Container with dark blue gradient background */}
      <div
        className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#00051a] via-[#000822] to-[#00020a] border border-blue-900/30 p-10 sm:p-14 md:p-16 flex flex-col items-start min-h-[300px] shadow-2xl justify-center group"
      >
        {/* ANIMATED BACKGROUND GLOWS */}
        {/* Glow Orb 1 - Floating and morphing on the left side */}
        <div
          className="absolute -left-20 top-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(15,60,255,0.25),transparent_65%)] pointer-events-none z-0 mix-blend-screen"
          style={{ animation: "float-glow-1 12s ease-in-out infinite" }}
        />

        {/* Glow Orb 2 - Counter-floating on the right side */}
        <div
          className="absolute -right-20 -bottom-20 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(0,120,255,0.15),transparent_70%)] pointer-events-none z-0 mix-blend-screen"
          style={{ animation: "float-glow-2 16s ease-in-out infinite" }}
        />

        {/* Subtle grid or grain overlay can be added here if needed, but smooth gradients keep it clean */}

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-start text-left">
          <h2 className="text-[2.75rem] sm:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-10 font-sans">
            Thank you for Visiting.
          </h2>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white text-sm sm:text-base font-medium tracking-wide transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 active:scale-95 shadow-md group/btn"
          >
            Connect With Me
            <span className="inline-block transform transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 text-lg font-light">
              <FaArrowRight size={14} className="ml-1" />
            </span>
          </Link>
        </div>
      </div>

      {/* Internal CSS for the smooth mesh-glow moving animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float-glow-1 {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(40px, -40px) scale(1.15);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        @keyframes float-glow-2 {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(-60px, -30px) scale(1.2);
          }
        }
      `}} />
    </div>
  );
};

export default VisitingBanner;