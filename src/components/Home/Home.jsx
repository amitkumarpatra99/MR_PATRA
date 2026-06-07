import { Link } from "react-scroll";
import { motion } from "framer-motion";
import ReactTypingEffect from 'react-typing-effect';

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen lg:h-screen w-full flex flex-col justify-center overflow-x-hidden lg:overflow-hidden font-sans bg-transparent selection:bg-blue-600/40 selection:text-white"
    >
      {/* 🌟 ANIMATED MESH BACKGROUND 🌟 */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Layer 1: Base Dark */}
        <div className="absolute inset-0 bg-transparent" />

        {/* Layer 2: Animated Glows */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15), transparent 50%)",
              "radial-gradient(circle at 80% 70%, rgba(79, 70, 229, 0.15), transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.1), transparent 50%)",
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 animate-mesh blur-[100px]"
        />

        {/* Layer 3: Subtle floating light */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />
      </div>

      {/* 🧠 MAIN CONTENT CONTAINER */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between h-full pt-28 pb-16 lg:pt-16 lg:pb-16">

        {/* LEFT COLUMN: Clean, Minimalist Text */}
        <div className="w-full lg:w-[55%] flex flex-col items-start text-left z-20 ">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-3 px-7 py-3 mb-5 rounded-full glass-panel border border-blue-500/20 relative overflow-hidden"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5" />

            {/* Dot */}
            <div className="relative flex items-center justify-center">
              <span className="absolute w-4 h-4 rounded-full bg-white blur-md opacity-40" />
              <span className="relative w-2.5 h-2.5 rounded-full bg-white" />
            </div>

            {/* Text */}
            <span className="text-white text-base md:text-[17px] font-medium tracking-tight">
              Hi, I am Amit Kumar Patra
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.15] mb-5"
          >
            I like crafting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 block min-h-[2.3em] pb-1">
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
              className="glass-button px-6 py-2.5 md:py-3 text-xs md:text-sm font-semibold rounded-full text-black hover:scale-[1.02]"
            >
              Download CV
            </a>
            <Link
              to="projects"
              smooth={true}
              duration={800}
              className="px-6 py-2.5 md:py-3 text-xs md:text-sm font-semibold rounded-full bg-[#111] border border-white/10 text-white hover:bg-[#1a1a1a] transition-all duration-300 cursor-pointer"
            >
              View My Work
            </Link>
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
            {['CODE', 'BUILD', 'SCALE'].map((text, i) => (
              <h2 key={i} className="text-[70px] xl:text-[90px] font-bold tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-white/[0.07] to-transparent">
                {text}
              </h2>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;