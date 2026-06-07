import { Briefcase, Code, Coffee, Database, ExternalLink, User } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profileImage from '../../assets/A.jpg';
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] } },
};

const About = () => {
  const pageLinks = [
    {
      title: "Experience",
      desc: "See my roles, projects, and professional timeline.",
      path: "/experience",
    },
    {
      title: "Education",
      desc: "Explore my academic background and certifications.",
      path: "/education",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-16 md:py-20 bg-black text-white overflow-hidden font-sans selection:bg-neutral-700 selection:text-white min-h-screen flex items-center"
    >
      {/* Ambient OLED Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/[0.03] rounded-[100%] blur-[100px] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 relative z-10 w-full">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 flex flex-col items-center justify-center text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tighter mb-3">
            Get to <span className="text-neutral-500">Know Me.</span>
          </h2>
          <p className="text-neutral-400 text-base md:text-lg font-medium tracking-tight max-w-lg">
            Bridging the gap between design and engineering.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-3 md:gap-4 auto-rows-auto"
        >

          {/* CARD 1: Profile Image (Spans 4 columns, 2 rows on large screens) */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-6 lg:col-span-4 lg:row-span-2 rounded-[2rem] glass-card overflow-hidden transition-all duration-500 hover:border-white/[0.15] hover:shadow-[0_0_40px_rgba(255,255,255,0.03)] hover:-translate-y-2 group min-h-[300px] lg:min-h-full"
          >
            {/* Inner Sheen */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

            {/* Image */}
            <img
              src={profileImage}
              alt="Profile"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[15%] group-hover:grayscale-0"
            />

            {/* Bottom Gradient Overlay for Text Visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 z-10" />

            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20">
              <h3 className="text-2xl font-semibold text-white tracking-tight mb-1">Amit Kumar Patra</h3>
              <p className="text-neutral-400 font-medium text-sm">Full Stack Developer</p>
            </div>
          </motion.div>

          {/* CARD 2: Bio & Action Area (Spans 8 columns) */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-6 lg:col-span-8 rounded-[2rem] glass-card p-6 md:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-500 hover:border-white/[0.15] hover:shadow-[0_0_40px_rgba(255,255,255,0.03)] hover:-translate-y-2 group cursor-default"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight tracking-tight mb-4">
                I am a passionate developer building performant web applications with a focus on <span className="text-neutral-400">clean code</span> and <span className="text-neutral-400">pixel-perfect designs.</span>
              </h3>
              <p className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-2xl">
                My journey is driven by a relentless curiosity and a desire to create intuitive, impactful user experiences. I thrive at the intersection of aesthetics and robust backend functionality.
              </p>
            </div>

            {/* Action Area: CV & Socials */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 relative z-10">

              {/* Primary CV Button (OLED Style) */}
              <a
                href="https://drive.google.com/file/d/1isT561I17ECXGPFFXhOiTJ11duS4IsIk/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center justify-center gap-2 px-6 py-3 font-medium rounded-full text-sm text-black bg-white hover:bg-neutral-200 transition-all duration-300 w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-[1.02] active:scale-95"
              >
                View My CV
                <ExternalLink size={16} className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
              </a>

              <Link
                to="/contact"
                className="glass-button inline-flex items-center justify-center gap-2 px-6 py-3 font-medium rounded-full text-sm text-black hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto"
              >
                Contact Me
              </Link>

              {/* Minimalist Social Icons */}
              <div className="flex items-center justify-center gap-3 w-full sm:w-auto">
                {[
                  { id: 1, icon: <FaGithub size={18} />, link: "https://github.com/amitkumarpatra99" },
                  { id: 2, icon: <FaLinkedin size={18} />, link: "https://www.linkedin.com/in/amitkumarpatra99" },
                  { id: 3, icon: <FaWhatsapp size={18} />, link: "https://wa.me/8144129955" },
                  { id: 4, icon: <Coffee size={18} />, link: "https://warmcup.vercel.app/" },
                ].map((social) => (
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center rounded-full bg-white/[0.02] border border-white/[0.08] text-neutral-400 transition-all duration-300 hover:bg-white hover:border-white hover:text-black hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CARDS 3-6: Focus Areas (Span 2 columns each on large screens to fill the remaining 8 columns under the Bio) */}
          {[
            { icon: <Code size={20} />, title: "Web Dev", desc: "React & Tailwind apps." },
            { icon: <User size={20} />, title: "UI / UX", desc: "Intuitive experiences." },
            { icon: <Database size={20} />, title: "Backend", desc: "Robust APIs & databases." },
            { icon: <Briefcase size={20} />, title: "Management", desc: "Agile project execution." },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="col-span-1 sm:col-span-3 lg:col-span-2 rounded-[2rem] glass-card p-5 md:p-6 flex flex-col relative overflow-hidden transition-all duration-500 hover:border-white/[0.15] hover:shadow-[0_0_40px_rgba(255,255,255,0.03)] hover:-translate-y-2 group cursor-default"
            >
              {/* Frosted Icon Wrapper */}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-[1rem] bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-neutral-300 mb-4 group-hover:bg-white/[0.08] group-hover:scale-110 transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                {item.icon}
              </div>
              <div className="mt-auto">
                <h3 className="text-white font-semibold text-base tracking-tight mb-1">{item.title}</h3>
                <p className="text-neutral-500 text-xs md:text-sm font-medium leading-snug">{item.desc}</p>
              </div>
            </motion.div>
          ))}

        </motion.div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {pageLinks.map((page) => (
            <Link
              key={page.title}
              to={page.path}
              className="glass-card flex flex-col justify-between rounded-[2rem] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-white/[0.15] hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]"
            >
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">{page.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{page.desc}</p>
              </div>
              <span className="mt-6 inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
                Go to {page.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;