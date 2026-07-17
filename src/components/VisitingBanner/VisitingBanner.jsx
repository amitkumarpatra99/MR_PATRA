import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const VisitingBanner = () => {
  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6 my-16 md:my-24 relative z-10 w-full">
      <div
        className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#050b1a] via-[#020510] to-[#000000] border border-white/[0.08] p-8 sm:p-12 md:p-16 flex flex-col items-start min-h-[280px] md:min-h-[320px] shadow-2xl justify-center group"
      >
        {/* Glow 1: Scaled for mobile and desktop */}
        <div
          className="absolute -left-10 md:-left-20 top-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[radial-gradient(circle_at_center,rgba(15,60,255,0.25),transparent_65%)] pointer-events-none z-0 mix-blend-screen"
          style={{ animation: "float-glow-1 12s ease-in-out infinite" }}
        />

        {/* Glow 2: Scaled for mobile and desktop */}
        <div
          className="absolute -right-10 md:-right-20 -bottom-10 md:-bottom-20 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[radial-gradient(circle_at_center,rgba(0,120,255,0.15),transparent_70%)] pointer-events-none z-0 mix-blend-screen"
          style={{ animation: "float-glow-2 16s ease-in-out infinite" }}
        />

        <div className="relative z-10 flex flex-col items-start text-left w-full">
          {/* Typography scaling for smoother mobile reading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.15] mb-8 md:mb-10 font-sans max-w-lg">
            Thank you for <br className="hidden sm:block" /> Visiting.
          </h2>

          {/* Button: Full width on mobile for better touch targets, inline on desktop */}
          <Link
            to="/contact"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-3 px-6 py-4 sm:py-3.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-white text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 hover:bg-white hover:text-black hover:scale-[1.02] active:scale-95 shadow-md group/btn"
          >
            Connect With Me
            <span className="inline-block transform transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 text-lg">
              <FaArrowRight size={14} className="text-blue-400 group-hover/btn:text-black transition-colors duration-300" />
            </span>
          </Link>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float-glow-1 {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-15px, 15px) scale(0.95);
          }
        }
        @keyframes float-glow-2 {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(-40px, -20px) scale(1.15);
          }
        }
      `}} />
    </div>
  );
};

export default VisitingBanner;