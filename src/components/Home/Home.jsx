import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import { ArrowRight } from "lucide-react"
import { FaCode, FaHandPeace } from 'react-icons/fa6'
import { Link } from "react-scroll"
// import ScrollButtons from '../ScrollButtons'

const ACCENT_COLOR = "#4FB7B3"

const Home = () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center text-center 
      px-6 sm:px-10 md:px-[10vw] lg:px-[18vw] overflow-hidden font-sans bg-transparent"
    >

      {/* � Light Mode Subtle Pattern (Dot Grid) */}
      <div className="absolute inset-0 z-0 pointer-events-none dark:hidden opacity-40"
        style={{
          backgroundImage: "radial-gradient(#4FB7B3 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}>
      </div>

      {/* �🌌 Animated Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,183,179,0.15),transparent_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(3,255,200,0.12),transparent_70%)] 
      animate-pulse-slow pointer-events-none"></div>

      {/* ✨ Floating Accent Glow Blob */}
      <div className="absolute w-[85vmin] h-[85vmin] md:w-[60vmin] md:h-[60vmin] 
      left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] opacity-60 dark:opacity-70
      animate-moveGlow pointer-events-none"
        style={{ background: `${ACCENT_COLOR}25` }}
      ></div>

      {/* 🌠 Soft Floating Particles */}
      {!reduceMotion && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {[...Array(35)].map((_, i) => (
            <span
              key={i}
              className="absolute bg-[#4FB7B3] rounded-full animate-particle dark:opacity-[0.8] opacity-60"
              style={{
                width: Math.random() * 4 + "px",
                height: Math.random() * 4 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                animationDelay: Math.random() * 6 + "s",
                animationDuration: 5 + Math.random() * 5 + "s",
              }}
            ></span>
          ))}
        </div>
      )}

      {/* 🧠 MAIN TEXT CONTENT */}
      <div className="z-20 flex flex-col items-center space-y-3 animate-fadeInUp
      -mt-24 sm:-mt-20 md:-mt-28 lg:-mt-32">

        {/* 💻 Icon */}
        <div className="mb-3 flex items-center justify-center">
          <FaCode
            className="animate-bounce-slow drop-shadow-[0_0_10px_rgba(79,183,179,0.8)]"
            style={{
              color: ACCENT_COLOR,
              width: "36px",
              height: "36px"
            }}
          />
        </div>

        <h1 className="text-sm sm:text-base md:text-lg font-medium text-gray-600 dark:text-gray-400 uppercase tracking-[0.25em] flex items-center gap-2">
          Hello World <FaHandPeace className="text-teal-500 hover:rotate-12 transition-transform duration-300" />, My name is
        </h1>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight leading-tight drop-shadow-[0_0_12px_rgba(79,183,179,0.25)]">
          AMIT KUMAR PATRA
        </h2>

        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight"
          style={{ color: ACCENT_COLOR }}>
          <span className="text-gray-600 dark:text-gray-300">I am a </span>
          <ReactTypingEffect
            text={['Student', 'Coder', 'Fullstack Developer']}
            speed={100}
            eraseSpeed={50}
            typingDelay={400}
            eraseDelay={1800}
            cursorRenderer={(cursor) => <span style={{ color: ACCENT_COLOR }}>{cursor}</span>}
          />
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-[0.95rem] sm:text-base leading-relaxed px-4 max-w-xl uppercase tracking-tight mt-3">
          Building fast, elegant, and immersive digital experiences with precision and passion.
        </p>

        {/* 🚀 Classy “Know More” Button */}
        <Link
          to="about"
          smooth={true}
          duration={600}
          offset={-80}
          className="relative cursor-pointer mt-8 inline-flex items-center gap-3 
          px-8 py-3.5 rounded-full text-base sm:text-lg font-bold tracking-wide
          transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]
          
          /* Light Mode Styles */
          text-teal-800 bg-white border border-teal-200 shadow-[0_10px_30px_-10px_rgba(79,183,179,0.4)]
          hover:shadow-[0_20px_40px_-10px_rgba(79,183,179,0.6)] hover:border-teal-400 hover:bg-teal-50
          
          /* Dark Mode Styles */
          dark:text-white dark:bg-teal-500/10 dark:border-teal-500/50 dark:shadow-[0_0_20px_#4FB7B340]
          dark:hover:bg-teal-500/20 dark:hover:border-teal-400 dark:hover:shadow-[0_0_35px_#4FB7B360]
          
          group overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            Know More About Me
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </span>

          {/* Ripple/Sheen Effect on Hover */}
          <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-0 pointer-events-none"></div>
        </Link>
      </div>

      {/* Scroll Indicator */}
      {/* <ScrollButtons next="about" /> */}

    </section>
  )
}

export default Home
