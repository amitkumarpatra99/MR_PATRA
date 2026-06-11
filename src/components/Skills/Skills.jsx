import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { FaGithub } from "react-icons/fa6";
import { SkillsInfo } from "../../constants";
import personalMemoji from "../../assets/avatar/Samsung.png";
import warmCupImg from "../../assets/Project Photo/Warm Cup.png";
import connectXImg from "../../assets/Project Photo/ConnectX.png";

// Compacted Memoji component
const MemojiAvatar = ({ src, alt, className = "", zIndex }) => (
  <div
    className={`w-12 h-12 rounded-full overflow-hidden border border-white/10 bg-neutral-900 shrink-0 shadow-[inset_0_2px_10px_rgba(255,255,255,0.1),0_10px_20px_rgba(0,0,0,0.5)] ${className}`}
    style={{ zIndex }}
  >
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </div>
);

const Skills = () => {

  const allSkills = SkillsInfo.flatMap(cat => cat.skills);
  const midPoint = Math.ceil(allSkills.length / 2);
  const row1Skills = allSkills.slice(0, midPoint);
  const row2Skills = allSkills.slice(midPoint);

  const githubTheme = {
    light: [
      "rgba(255, 255, 255, 0.03)",
      "#115e59",
      "#0d9488",
      "#2dd4bf",
      "#99f6e4"
    ],
    dark: [
      "rgba(255, 255, 255, 0.03)",
      "#115e59",
      "#0d9488",
      "#2dd4bf",
      "#99f6e4"
    ]
  };

  return (
    // Reduced vertical padding (py-16 md:py-20)
    <section id="skills" className="py-16 md:py-20 bg-transparent relative overflow-hidden font-sans selection:bg-neutral-700 selection:text-white min-h-screen flex items-center">

      <style>
        {`
          @keyframes marquee-left {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          .animate-marquee-left { animation: marquee-left 30s linear infinite; }
          .animate-marquee-right { animation: marquee-right 30s linear infinite; }
          .group-marquee:hover .animate-marquee-left,
          .group-marquee:hover .animate-marquee-right { animation-play-state: paused; }
          
          /* Make GitHub contribution calendar responsive without horizontal scrolling */
          .react-activity-calendar {
            width: 100% !important;
            max-width: 100% !important;
          }
          .react-activity-calendar svg {
            width: 100% !important;
            height: auto !important;
          }
        `}
      </style>

      {/* Ambient OLED Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/[0.03] rounded-[100%] blur-[100px] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 relative z-10 w-full">

        {/* Header Section */}
        <div className="mb-12 flex flex-col items-start">
          <div className="premium-header-badge mb-6">
            <span className="premium-header-badge-dot animate-pulse" />
            <span className="text-neutral-300 text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
              SKILLS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
            Why Work <span className="text-neutral-400">With Me ?</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            Backed by experience, driven by purpose.
          </p>
        </div>

        {/* Bento Grid Container - Reduced gaps (gap-4) and shorter row min-height (220px) */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-3 md:gap-4 auto-rows-[minmax(220px,auto)]">

          {/* CARD 1: Engineering with Empathy */}
          <div className="col-span-1 md:col-span-3 lg:col-span-4 rounded-[2rem] bg-gradient-to-br from-neutral-900 to-black border border-white/[0.08] p-6 md:p-8 flex flex-col items-center text-center relative overflow-hidden transition-all duration-500 hover:border-white/[0.15] hover:shadow-[0_0_40px_rgba(255,255,255,0.03)] hover:-translate-y-2 group cursor-default">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight mb-4 tracking-tight z-10">
              Engineering with <br />
              <span className="text-neutral-500">Empathy.</span>
            </h3>

            {/* Reduced Memoji Size */}
            <div className="mt-auto relative z-10 w-70 h-70 transform transition-transform duration-700 ease-out group-hover:-translate-y-2">
              <img
                src={personalMemoji}
                alt="Engineering with Empathy"
                className="w-full h-full object-contain drop-shadow-[0_15px_20px_rgba(0,0,0,0.8)]"
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
              />
              <div className="hidden w-full h-full bg-neutral-900/50 backdrop-blur-sm rounded-full items-center justify-center text-neutral-600 border border-white/5 text-sm">Image</div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
          </div>

          {/* CARD 2: Tech Architecture (Infinite Marquee) */}
          <div className="col-span-1 md:col-span-3 lg:col-span-5 rounded-[2rem] bg-gradient-to-br from-neutral-900 to-black border border-white/[0.08] flex flex-col justify-between relative overflow-hidden transition-all duration-500 hover:border-white/[0.15] hover:shadow-[0_0_40px_rgba(255,255,255,0.03)] hover:-translate-y-2 group-marquee">

            <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />

            {/* Reduced gap and margin */}
            <div className="flex flex-col gap-3 mt-8 overflow-hidden relative z-10">
              <div className="flex w-[200%] animate-marquee-left">
                {[...row1Skills, ...row1Skills].map((skill, index) => (
                  // Reduced icon sizes
                  <div key={`row1-${index}`} className="w-12 h-12 md:w-14 md:h-14 shrink-0 mx-1.5 rounded-[1rem] bg-white/[0.02] border border-white/[0.05] flex items-center justify-center p-3 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-all duration-300 hover:bg-white/[0.08] hover:border-white/[0.1] hover:scale-[1.15] cursor-pointer" title={skill.name}>
                    <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain filter grayscale-[30%] hover:grayscale-0 transition-all duration-300" />
                  </div>
                ))}
              </div>
              <div className="flex w-[200%] animate-marquee-right">
                {[...row2Skills, ...row2Skills].map((skill, index) => (
                  <div key={`row2-${index}`} className="w-12 h-12 md:w-14 md:h-14 shrink-0 mx-1.5 rounded-[1rem] bg-white/[0.02] border border-white/[0.05] flex items-center justify-center p-3 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-all duration-300 hover:bg-white/[0.08] hover:border-white/[0.1] hover:scale-[1.15] cursor-pointer" title={skill.name}>
                    <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain filter grayscale-[30%] hover:grayscale-0 transition-all duration-300" />
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-auto p-6 md:p-8 pt-4 md:pt-4">
              <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight tracking-tight">
                Skilled in <span className="text-neutral-500">modern</span> <br />
                tech architecture.
              </h3>
            </div>
          </div>

          {/* CARD 3: */}
          <div className="col-span-1 md:col-span-6 lg:col-span-3 rounded-[2rem] bg-gradient-to-br from-neutral-900 to-black border border-white/[0.08] p-6 md:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-500 hover:border-white/[0.15] hover:shadow-[0_0_40px_rgba(255,255,255,0.03)] hover:-translate-y-2 group cursor-default">

            <div className="z-10 mb-5 ">
              <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight mb-2 tracking-tight">
                Relentless <br />
                <span className="text-neutral-500">Builder.</span>
              </h3>
              <p className="text-neutral-400 text-sm font-medium leading-snug">
                Maintained 30+ public GitHub repositories.
              </p>
            </div>

            <div className="mt-auto relative z-10 p-4 bg-white/5 border border-white/10 rounded-2xl w-full group-hover:bg-white/[0.07] transition-all duration-500 flex flex-col gap-2 shadow-inner">
              <div className="flex items-center gap-3 text-neutral-300 ">
                <FaGithub className="text-2xl" />
                <span className="text-sm font-semibold tracking-wide">30+ Repos</span>
              </div>
              <div className="flex gap-2 mt-2">
                <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold bg-teal-500/10 text-teal-400 rounded-md border border-teal-500/20">MERN</span>
                <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold bg-purple-500/10 text-purple-400 rounded-md border border-purple-500/20">Next.js</span>
              </div>
            </div>
          </div>

          {/* CARD 4: Consistent Builder (GitHub Grid Style) */}
          <div className="col-span-1 md:col-span-3 lg:col-span-7 rounded-[2rem] bg-gradient-to-br from-neutral-900 to-black border border-white/[0.08] p-6 md:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-500 hover:border-white/[0.15] hover:shadow-[0_0_40px_rgba(255,255,255,0.03)] hover:-translate-y-2 group cursor-default">

            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="mb-8 relative z-10 flex justify-between items-start">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight tracking-tight mb-1">
                  Consistent <span className="text-neutral-500">Builder.</span>
                </h3>
                <p className="text-neutral-400 text-sm font-medium flex flex-wrap items-center gap-1.5">
                  <span>Turning coffee into production-ready code.</span>
                  <span className="text-neutral-700 hidden sm:inline">|</span>
                  <a
                    href="https://github.com/amitkumarpatra99"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400/85 hover:text-teal-400 transition-colors font-semibold"
                  >
                    @amitkumarpatra99
                  </a>
                </p>
              </div>
              <a
                href="https://github.com/amitkumarpatra99"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 shrink-0"
                title="View GitHub Profile"
              >
                <FaGithub size={20} />
              </a>
            </div>

            {/* Real GitHub contribution calendar */}
            <div className="mt-auto w-full overflow-x-auto pb-2 scrollbar-thin" data-lenis-prevent>
              <div className="opacity-80 group-hover:opacity-100 transition-opacity duration-500 w-full min-w-[600px] md:min-w-0 text-white">
                <GitHubCalendar
                  username="amitkumarpatra99"
                  colorScheme="dark"
                  theme={githubTheme}
                  blockSize={11}
                  blockMargin={3}
                  blockRadius={2}
                  showTotalCount={true}
                  showColorLegend={true}
                  showWeekdayLabels={true}
                />
              </div>
            </div>
          </div>

          {/* CARD 5: Obsessive Details (UI Panes) */}
          <div className="col-span-1 md:col-span-3 lg:col-span-5 rounded-[2rem] bg-gradient-to-br from-neutral-900 to-black border border-white/[0.08] p-6 md:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-500 hover:border-white/[0.15] hover:shadow-[0_0_40px_rgba(255,255,255,0.03)] hover:-translate-y-2 group cursor-default">

            {/* Smaller Floating Glass Panes */}
            <div className="relative h-28 w-full flex items-center justify-center mb-6 z-10">
              {/* Left rotated pane showing Warm Cup project screenshot */}
              <div className="absolute w-24 h-16 border border-white/10 rounded-xl shadow-2xl transform -rotate-12 -translate-x-4 translate-y-3 group-hover:-rotate-6 group-hover:-translate-x-6 group-hover:translate-y-1 transition-all duration-700 ease-out overflow-hidden bg-neutral-900">
                <img src={warmCupImg} alt="Warm Cup Design" className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-85 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-white/5" />
              </div>
              {/* Right front pane showing ConnectX dashboard screenshot with design line overlays */}
              <div className="absolute w-28 h-20 border border-white/20 rounded-xl shadow-2xl z-10 backdrop-blur-md transform group-hover:scale-105 transition-all duration-700 ease-out overflow-hidden bg-neutral-800/80 flex flex-col justify-between p-2.5">
                <img src={connectXImg} alt="ConnectX UI" className="absolute inset-0 w-full h-full object-cover object-top opacity-70 group-hover:opacity-90 transition-opacity duration-500 z-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

                {/* Floating UI design lines overlaid on screenshot */}
                <div className="relative z-20 flex flex-col gap-1 w-full mt-auto">
                  <div className="w-1/2 h-1 bg-white/50 rounded-full shadow-sm" />
                  <div className="w-full h-1 bg-white/25 rounded-full" />
                  <div className="w-3/4 h-1 bg-white/25 rounded-full" />
                </div>
              </div>
              <div className="absolute w-20 h-20 bg-gradient-to-tr from-purple-500/20 to-teal-500/20 blur-xl z-0 group-hover:opacity-100 opacity-50 transition-all duration-700" />
            </div>

            <div className="mt-auto relative z-10">
              <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight tracking-tight mb-1">
                Obsessive <span className="text-neutral-500">Details.</span>
              </h3>
              <p className="text-neutral-400 text-sm font-medium">Bridging the gap between engineering and design.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;