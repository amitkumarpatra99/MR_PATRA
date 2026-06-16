import { GitHubCalendar } from "react-github-calendar";
import { FaGithub } from "react-icons/fa6";
import { SkillsInfo } from "../../constants";
import personalMemoji from "../../assets/avatar/Samsung.png";
import warmCupImg from "../../assets/Project Photo/Warm Cup.png";
import connectXImg from "../../assets/Project Photo/ConnectX.png";



const Skills = () => {
  const allSkills = SkillsInfo.flatMap(cat => cat.skills);
  const midPoint = Math.ceil(allSkills.length / 2);
  const row1Skills = allSkills.slice(0, midPoint);
  const row2Skills = allSkills.slice(midPoint);

  const githubTheme = {
    light: ["rgba(255, 255, 255, 0.02)", "#0f766e", "#0d9488", "#14b8a6", "#5eead4"],
    dark: ["rgba(255, 255, 255, 0.02)", "#0f766e", "#0d9488", "#14b8a6", "#5eead4"]
  };

  return (
    // Restored original background (bg-transparent) and selection styles
    <section id="skills" className="py-12 lg:py-0 bg-transparent relative overflow-hidden font-sans selection:bg-neutral-700 selection:text-white min-h-screen lg:h-screen flex items-center justify-center">

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
          .animate-marquee-left { animation: marquee-left 35s linear infinite; }
          .animate-marquee-right { animation: marquee-right 35s linear infinite; }
          .group-marquee:hover .animate-marquee-left,
          .group-marquee:hover .animate-marquee-right { animation-play-state: paused; }
          
          .react-activity-calendar { width: 100% !important; max-width: 100% !important; }
          .react-activity-calendar svg { width: 100% !important; height: auto !important; }
        `}
      </style>

      {/* Ambient Light Glows (kept for the premium feel, but transparent) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.02] rounded-[100%] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-white/[0.01] rounded-[100%] blur-[100px] pointer-events-none" />


      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10 w-full flex flex-col lg:h-[calc(100vh-4rem)] lg:max-h-[850px] justify-center">

        {/* Header Section */}
        <div className="mb-12 flex flex-col items-start">
          <div className="premium-header-badge mb-4">
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

        {/* Bento Grid Container - Exact 2-row allocation for large screens */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 lg:gap-4 flex-1 lg:min-h-0 lg:grid-rows-2">

          {/* CARD 1: Engineering with Empathy - Transparent Glass */}
          <div className="col-span-1 md:col-span-3 lg:col-span-4 rounded-[2rem] bg-white/[0.02] backdrop-blur-lg border border-white/10 p-5 lg:p-6 xl:p-8 flex flex-col items-center justify-between text-center relative overflow-hidden transition-all duration-700 ease-out hover:border-white/20 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:-translate-y-1.5 group cursor-default shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-white leading-tight tracking-tight z-10 drop-shadow-md">
              Engineering with <br />
              <span className="text-neutral-400 group-hover:text-white transition-colors duration-500">Empathy.</span>
            </h3>

            <div className="mt-auto relative z-10 w-32 h-32 lg:w-36 lg:h-36 xl:w-44 xl:h-44 transform transition-all duration-700 ease-out group-hover:-translate-y-3 group-hover:scale-105">
              <img
                src={personalMemoji}
                alt="Engineering with Empathy"
                className="w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>

          {/* CARD 2: Tech Architecture (Infinite Marquee) - Transparent Glass */}
          <div className="col-span-1 md:col-span-3 lg:col-span-5 rounded-[2rem] bg-white/[0.02] backdrop-blur-lg border border-white/10 flex flex-col justify-between relative overflow-hidden transition-all duration-700 ease-out hover:border-white/20 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:-translate-y-1.5 group-marquee shadow-xl">
            {/* Soft fade edges for marquee using transparent black */}
            <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-black/40 to-transparent z-20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-black/40 to-transparent z-20 pointer-events-none" />

            <div className="flex flex-col gap-3 mt-6 lg:mt-8 overflow-hidden relative z-10">
              <div className="flex w-[200%] animate-marquee-left items-center">
                {[...row1Skills, ...row1Skills].map((skill, index) => (
                  <div key={`row1-${index}`} className="w-12 h-12 lg:w-14 lg:h-14 shrink-0 mx-1.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center p-2.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_4px_10px_rgba(0,0,0,0.2)] transition-all duration-500 hover:bg-white/[0.1] hover:border-white/30 hover:scale-110 cursor-pointer backdrop-blur-sm" title={skill.name}>
                    <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain filter grayscale-[30%] hover:grayscale-0 transition-all duration-500 drop-shadow-md" />
                  </div>
                ))}
              </div>
              <div className="flex w-[200%] animate-marquee-right items-center">
                {[...row2Skills, ...row2Skills].map((skill, index) => (
                  <div key={`row2-${index}`} className="w-12 h-12 lg:w-14 lg:h-14 shrink-0 mx-1.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center p-2.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_4px_10px_rgba(0,0,0,0.2)] transition-all duration-500 hover:bg-white/[0.1] hover:border-white/30 hover:scale-110 cursor-pointer backdrop-blur-sm" title={skill.name}>
                    <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain filter grayscale-[30%] hover:grayscale-0 transition-all duration-500 drop-shadow-md" />
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-auto p-5 lg:p-6 pt-3 lg:pt-4">
              <h3 className="text-lg lg:text-xl font-bold text-white leading-tight tracking-tight drop-shadow-md">
                Skilled with Modern Tech <span className="text-neutral-400 text-2xl space-x-10">Architectures. </span>
              </h3>
            </div>
          </div>

          {/* CARD 3: Relentless Builder - Transparent Glass */}
          <div className="col-span-1 md:col-span-6 lg:col-span-3 rounded-[2rem] bg-white/[0.02] backdrop-blur-lg border border-white/10 p-5 lg:p-6 xl:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-700 ease-out hover:border-white/20 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:-translate-y-1.5 group cursor-default shadow-xl">
            <div className="absolute top-0 right-0 p-6 opacity-[0.05] group-hover:opacity-[0.15] transition-opacity duration-700 pointer-events-none transform group-hover:scale-110 group-hover:rotate-12">
              <FaGithub size={100} />
            </div>

            <div className="z-10 mb-4 relative">
              <h3 className="text-lg lg:text-xl font-bold text-white leading-tight mb-1 lg:mb-2 tracking-tight drop-shadow-md">
                Relentless <br />
                <span className="text-neutral-400">Builder.</span>
              </h3>
              <p className="text-neutral-400 text-xs lg:text-sm font-medium leading-snug">
                Maintained 30+ public repositories.
              </p>
            </div>

            {/* Transparent inner box */}
            <div className="mt-auto relative z-10 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl w-full group-hover:bg-white/10 transition-all duration-500 flex flex-col gap-2 shadow-inner">
              <div className="flex items-center gap-2 text-white">
                <div className="p-1.5 bg-white/10 rounded-md border border-white/20 shadow-sm">
                  <FaGithub className="text-lg lg:text-xl" />
                </div>
                <span className="text-xs lg:text-sm font-bold tracking-wide drop-shadow-sm">30+ Repos</span>
              </div>
              <div className="flex gap-2 mt-1">
                <span className="px-2 py-0.5 text-[9px] lg:text-[10px] uppercase tracking-widest font-bold bg-blue-600/10 text-blue-600 rounded border border-blue-600/20 backdrop-blur-sm">MERN</span>
                <span className="px-2 py-0.5 text-[9px] lg:text-[10px] uppercase tracking-widest font-bold bg-blue-600/10 text-blue-600 rounded border border-blue-600/20 backdrop-blur-sm">Next.js</span>
              </div>
            </div>
          </div>

          {/* CARD 4: Consistent Builder - Transparent Glass */}
          <div className="col-span-1 md:col-span-3 lg:col-span-7 rounded-[2rem] bg-white/[0.02] backdrop-blur-lg border border-white/10 p-5 lg:p-6 xl:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-700 ease-out hover:border-white/20 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:-translate-y-1.5 group cursor-default shadow-xl">
            <div className="mb-4 lg:mb-6 relative z-10 flex justify-between items-start">
              <div>
                <h3 className="text-lg lg:text-xl font-bold text-white leading-tight tracking-tight mb-1 drop-shadow-md">
                  Consistent <span className="text-neutral-400">Builder.</span>
                </h3>
                <p className="text-neutral-400 text-xs lg:text-sm font-medium flex flex-wrap items-center gap-1.5">
                  <span>Turning coffee into code.</span>
                  <span className="text-neutral-600 hidden sm:inline">•</span>
                  <a href="https://github.com/amitkumarpatra99" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white transition-colors font-semibold flex items-center gap-1 group/link drop-shadow-sm">
                    @amitkumarpatra99
                    <span className="inline-block transform transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1">↗</span>
                  </a>
                </p>
              </div>
              <a href="https://github.com/amitkumarpatra99" target="_blank" rel="noopener noreferrer" className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-500 hover:scale-110 shrink-0 backdrop-blur-md shadow-lg">
                <FaGithub size={20} />
              </a>
            </div>

            <div className="mt-auto w-full overflow-x-auto pb-1 scrollbar-thin relative z-10" data-lenis-prevent>
              <div className="opacity-80 group-hover:opacity-100 transition-opacity duration-700 w-full min-w-[550px] md:min-w-0 text-white drop-shadow-md">
                <GitHubCalendar
                  username="amitkumarpatra99"
                  colorScheme="dark"
                  theme={githubTheme}
                  blockSize={9}
                  blockMargin={3}
                  blockRadius={2}
                  showTotalCount={false}
                  showColorLegend={false}
                  showWeekdayLabels={false}
                />
              </div>
            </div>
          </div>

          {/* CARD 5: Obsessive Details - Transparent Glass */}
          <div className="col-span-1 md:col-span-3 lg:col-span-5 rounded-[2rem] bg-white/[0.02] backdrop-blur-lg border border-white/10 p-5 lg:p-6 xl:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-700 ease-out hover:border-white/20 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:-translate-y-1.5 group cursor-default shadow-xl">

            <div className="relative h-24 lg:h-28 w-full flex items-center justify-center mb-4 lg:mb-6 z-10">
              {/* Left rotated pane - strictly transparent glass */}
              <div className="absolute w-24 h-16 lg:w-28 lg:h-20 border border-white/20 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform -rotate-12 -translate-x-6 translate-y-2 group-hover:-rotate-6 group-hover:-translate-x-8 group-hover:translate-y-0 transition-all duration-700 ease-out overflow-hidden bg-black/30 backdrop-blur-md">
                <img src={warmCupImg} alt="Warm Cup Design" className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-100 transition-opacity duration-700 scale-110 group-hover:scale-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Right front pane - strictly transparent glass */}
              <div className="absolute w-28 h-20 lg:w-32 lg:h-24 border border-white/30 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] z-10 backdrop-blur-xl transform group-hover:scale-110 transition-all duration-700 ease-out overflow-hidden bg-black/40 flex flex-col justify-between p-2 lg:p-3">
                <img src={connectXImg} alt="ConnectX UI" className="absolute inset-0 w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-700 z-0 scale-105 group-hover:scale-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <div className="relative z-20 flex flex-col gap-1 w-full mt-auto">
                  <div className="w-1/2 h-1 bg-white/80 rounded-full shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
                  <div className="w-full h-1 bg-white/40 rounded-full" />
                  <div className="w-3/4 h-1 bg-white/40 rounded-full" />
                </div>
              </div>
            </div>

            <div className="mt-auto relative z-10">
              <h3 className="text-lg lg:text-xl font-bold text-white leading-tight tracking-tight mb-1 drop-shadow-md">
                Obsessive <span className="text-neutral-400">Details.</span>
              </h3>
              <p className="text-neutral-400 text-xs lg:text-sm font-medium">Bridging the gap between engineering & design.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;