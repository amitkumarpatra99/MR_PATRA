import { useState } from "react";
import { Briefcase, Code, Coffee, Database, ExternalLink, User, Camera } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import profileImage from '../../assets/A.jpg';
import PhotoGalleryModal from "./PhotoGalleryModal";
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
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
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

  const socialIcons = [
    {
      id: 1,
      icon: <FaGithub size={18} />,
      link: "https://github.com/amitkumarpatra99",
      color: "hover:text-white hover:border-white hover:bg-white/5 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]",
    },
    {
      id: 2,
      icon: <FaLinkedin size={18} />,
      link: "https://www.linkedin.com/in/amitkumarpatra99",
      color: "hover:text-blue-500 hover:border-blue-500 hover:bg-blue-500/5 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]",
    },
    {
      id: 3,
      icon: <FaWhatsapp size={18} />,
      link: "https://wa.me/8144129955",
      color: "hover:text-green-500 hover:border-green-500 hover:bg-green-500/5 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]",
    },
    {
      id: 4,
      icon: <Coffee size={18} />,
      link: "https://warmcup.vercel.app/",
      color: "hover:text-yellow-400 hover:border-yellow-400 hover:bg-yellow-400/5 hover:shadow-[0_0_15px_rgba(250,204,21,0.3)]",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-8 lg:py-10 bg-transparent text-white overflow-hidden font-sans selection:bg-blue-900/50 selection:text-white min-h-screen flex items-center"
    >
      {/* 🌟 Ambient OLED Background Glows (Matching Footer) 🌟 */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/[0.04] rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/[0.03] rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 relative z-10 w-full">

        {/* Header Section */}
           <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-6 flex flex-col items-start"
        >
          <div className="premium-header-badge mb-3">
            <span className="premium-header-badge-dot animate-pulse" />
            <span className="text-neutral-300 text-[10px] font-semibold tracking-widest uppercase">
              ABOUT
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
            Get to Know Me
          </h2>
          <p className="text-neutral-400 text-xs md:text-sm">
            Bridging the gap between design and engineering.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 gap-3 auto-rows-auto"
        >

          {/* CARD 1: Profile Image */}
          <motion.div
            variants={itemVariants}
            onClick={() => setIsGalleryOpen(true)}
            className="col-span-1 sm:col-span-6 lg:col-span-4 lg:row-span-2 rounded-[1.5rem] bg-white/[0.02] border border-white/[0.05] overflow-hidden transition-all duration-500 hover:border-blue-500/20 hover:shadow-[0_0_40px_rgba(59,130,246,0.05)] hover:-translate-y-1 group h-[320px] sm:h-[400px] lg:h-auto lg:min-h-[380px] relative cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

            {/* Gallery Hint Indicator */}
            <div className="absolute top-4 right-4 z-20 px-2.5 py-1 rounded-full bg-black/60 border border-white/5 backdrop-blur-md text-[9px] text-neutral-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
              <Camera size={10} className="text-blue-400" />
              <span>View Gallery</span>
            </div>

            <img
              src={profileImage}
              alt="Profile"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[15%] group-hover:grayscale-0"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-[#020205]/60 to-transparent opacity-90 z-10" />

            <div className="absolute bottom-0 left-0 w-full p-5 z-20">
              <h3 className="text-xl font-bold text-white tracking-tight mb-0.5">Amit Kumar <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Patra</span></h3>
              <span className="text-[10px] font-semibold text-blue-100/40 tracking-widest uppercase">Full Stack Developer</span>
            </div>
          </motion.div>

          {/* CARD 2: Bio & Action Area */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 sm:col-span-6 lg:col-span-8 rounded-[1.5rem] bg-white/[0.02] border border-white/[0.05] p-5 md:p-6 flex flex-col justify-between relative overflow-hidden transition-all duration-500 hover:border-blue-500/20 hover:shadow-[0_0_40px_rgba(59,130,246,0.05)] hover:-translate-y-1 group cursor-default"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-lg md:text-xl font-semibold text-white leading-tight tracking-tight mb-2">
                I am a passionate developer building performant web applications with a focus on <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">clean code</span> and pixel-perfect designs.
              </h3>
              <p className="text-neutral-400 text-xs md:text-sm leading-relaxed max-w-2xl">
                My journey is driven by a relentless curiosity and a desire to create intuitive, impactful user experiences. I thrive at the intersection of aesthetics and robust backend functionality.
              </p>
            </div>

            {/* Action Area: CV & Socials */}
            <div className="mt-4 flex flex-col sm:flex-row items-center gap-4 relative z-10">

              {/* Primary CV Button */}
              <a
                href="https://drive.google.com/file/d/1isT561I17ECXGPFFXhOiTJ11duS4IsIk/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center justify-center gap-2 px-5 py-2.5 font-semibold rounded-full text-xs md:text-sm text-black bg-white hover:bg-neutral-200 transition-all duration-300 w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] active:scale-95"
              >
                View My CV
                <ExternalLink size={14} className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
              </a>

              {/* Contact Button (Styled like Footer "Back to top") */}
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300 active:scale-95 w-full sm:w-auto"
              >
                <span className="text-xs md:text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">
                  Contact Me
                </span>
              </Link>

              {/* Minimalist Social Icons (Matching Footer) */}
              <div className="flex items-center justify-center gap-2 w-full sm:w-auto ml-auto">
                {socialIcons.map((social) => (
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-9 h-9 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.08] text-neutral-400 transition-all duration-300 hover:-translate-y-1 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CARDS 3-6: Focus Areas (Matching Footer Icons) */}
          {[
            { icon: <Code size={16} />, title: "Web Dev", desc: "React & Tailwind apps." },
            { icon: <User size={16} />, title: "UI / UX", desc: "Intuitive experiences." },
            { icon: <Database size={16} />, title: "Backend", desc: "Robust APIs & databases." },
            { icon: <Briefcase size={16} />, title: "Management", desc: "Agile project execution." },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="col-span-1 sm:col-span-3 lg:col-span-2 rounded-[1.25rem] bg-white/[0.02] border border-white/[0.05] p-3 md:p-4 flex flex-col relative overflow-hidden transition-all duration-500 hover:bg-white/[0.03] hover:border-blue-500/20 hover:shadow-[0_0_40px_rgba(59,130,246,0.05)] hover:-translate-y-1 group cursor-default min-h-[110px]"
            >
              {/* Icon Wrapper (Matching Footer Contacts) */}
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.08] text-neutral-400 group-hover:bg-blue-500/[0.1] group-hover:border-blue-500/[0.2] group-hover:text-blue-400 transition-all duration-300 mb-2">
                {item.icon}
              </div>
              <div className="mt-auto">
                <h3 className="text-white font-medium text-sm tracking-tight mb-0.5">{item.title}</h3>
                <p className="text-neutral-500 text-[10px] md:text-xs font-medium leading-snug">{item.desc}</p>
              </div>
            </motion.div>
          ))}

        </motion.div>

        {/* Bottom Page Links */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
          {pageLinks.map((page) => (
            <Link
              key={page.title}
              to={page.path}
              className="group bg-white/[0.02] border border-white/[0.05] flex flex-col justify-between rounded-[1.25rem] p-4 transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_0_40px_rgba(59,130,246,0.05)]"
            >
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-1.5">{page.title}</h3>
                <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">{page.desc}</p>
              </div>
              <span className="mt-3 self-start inline-flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.08] group-hover:border-blue-500/[0.3] group-hover:bg-blue-500/[0.1] group-hover:text-blue-400 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-neutral-400 transition-all duration-300">
                Go to {page.title}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isGalleryOpen && (
          <PhotoGalleryModal
            isOpen={isGalleryOpen}
            onClose={() => setIsGalleryOpen(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;