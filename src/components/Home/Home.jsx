import { motion } from "framer-motion";
import ReactTypingEffect from 'react-typing-effect';
import {  FaArrowRight } from "react-icons/fa6";
import { ExternalLink } from "lucide-react";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen lg:h-screen w-full flex flex-col justify-center overflow-x-hidden lg:overflow-hidden font-sans bg-transparent selection:bg-blue-600/40 selection:text-white"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#020205] via-[#050b1a] to-[#000000]" />

        {/* Optimized Static Radial Glows with Compositor-only Animations */}
        <div className="absolute inset-0 overflow-hidden opacity-80 pointer-events-none z-0">
          {/* Blob 1 - Blue */}
          <div 
            className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.15)_0%,transparent_70%)] blur-[80px]"
            style={{
              animation: "float-blob-1 25s infinite alternate ease-in-out",
              willChange: "transform"
            }}
          />
          {/* Blob 2 - Indigo */}
          <div 
            className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.15)_0%,transparent_70%)] blur-[80px]"
            style={{
              animation: "float-blob-2 20s infinite alternate ease-in-out",
              willChange: "transform"
            }}
          />
          {/* Blob 3 - Emerald */}
          <div 
            className="absolute top-[40%] left-[30%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.08)_0%,transparent_70%)] blur-[90px]"
            style={{
              animation: "float-blob-3 22s infinite alternate ease-in-out",
              willChange: "transform"
            }}
          />
        </div>

        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse-slow" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between h-full pt-28 pb-16 lg:pt-16 lg:pb-16">

        <div className="w-full lg:w-[55%] flex flex-col items-start text-left z-20 ">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="premium-header-badge mb-5"
          >
            <span className="premium-header-badge-dot animate-pulse" />
            <span className="text-white text-sm md:text-base font-medium tracking-tight">
              Hi, I am Amit Kumar Patra
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.15] mb-5"
          >
            I like crafting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 block min-h-[3.8em] sm:min-h-[2.4em] pb-1">
              <ReactTypingEffect
                text={['Smart Solutions to\nSmart People.', 'Cutting Edge\nTechnology.', 'Modern UI/UX\nDesign.']}
                speed={50}
                eraseSpeed={30}
                typingDelay={500}
                eraseDelay={2500}
                cursorRenderer={(cursor) => <span className="text-blue-500 font-light">{cursor}</span>}
                displayTextRenderer={(text) => <span style={{ whiteSpace: 'pre-line', lineHeight: '1.15' }}>{text}</span>}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-neutral-400 text-sm md:text-base font-medium tracking-tight max-w-md mb-8 leading-relaxed"
          >
            If I cannot do great things, I can do small things in a great way.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-3 md:gap-4"
          >
            <a
              href="https://drive.google.com/file/d/1isT561I17ECXGPFFXhOiTJ11duS4IsIk/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button flex items-center gap-2 px-6 py-2.5 md:py-3 text-xs md:text-sm font-semibold rounded-full text-black hover:scale-[1.02]"
            >
              <span>View My CV</span>
              <ExternalLink size={12} />
            </a>
            <button
              onClick={() => {
                const target = document.getElementById("projects");
                if (target) {
                  if (window.lenis) {
                    window.lenis.scrollTo(target, { offset: -85, duration: 1.2 });
                  } else {
                    const targetPosition = target.getBoundingClientRect().top + window.scrollY - 85;
                    window.scrollTo({ top: targetPosition, behavior: "smooth" });
                  }
                }
              }}
              className="group flex items-center gap-2 px-6 py-2.5 md:py-3 text-xs md:text-sm font-semibold rounded-full bg-[#111] border border-white/10 text-white hover:bg-[#1a1a1a] transition-all duration-300 cursor-pointer"
            >
              <span>View My Work</span>
              <FaArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Minimalist Text Architecture */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="w-full lg:w-[45%] hidden lg:flex flex-col items-end justify-center relative z-10 select-none pointer-events-none"
        >
          <div className="flex flex-col items-end text-right">
            {/* TEXT UPDATED HERE TO MATCH YOUR SKILLSET */}
            {['DESIGN', 'ENGINEER', 'INNOVATE'].map((text, i) => (
              <h2 key={i} className="text-[65px] xl:text-[85px] font-bold tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-white/[0.07] to-transparent">
                {text}
              </h2>
            ))}
          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float-blob-1 {
            0% { transform: translate3d(0, 0, 0) scale(1); }
            50% { transform: translate3d(40px, 30px, 0) scale(1.1); }
            100% { transform: translate3d(-20px, -40px, 0) scale(0.95); }
          }
          @keyframes float-blob-2 {
            0% { transform: translate3d(0, 0, 0) scale(1); }
            50% { transform: translate3d(-50px, 20px, 0) scale(1.05); }
            100% { transform: translate3d(30px, -30px, 0) scale(0.9); }
          }
          @keyframes float-blob-3 {
            0% { transform: translate3d(0, 0, 0) scale(1); }
            50% { transform: translate3d(20px, -40px, 0) scale(1.15); }
            100% { transform: translate3d(-30px, 30px, 0) scale(0.95); }
          }
          
          /* Performance adjustment for mobile/low-end devices */
          @media (max-width: 768px) {
            .float-blob-1, .float-blob-2, .float-blob-3 {
              animation-duration: 40s !important;
            }
          }
        `
      }} />
    </section>
  );
};

export default Home;