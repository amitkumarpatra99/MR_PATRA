import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes, FaArrowRight } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { SiLeetcode, SiCodeforces, SiHackerrank, SiCodechef, SiGeeksforgeeks } from "react-icons/si";
import { motion } from "framer-motion";

const ProfilesPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, []);

  const socialAccounts = [
    {
      name: "LinkedIn",
      username: "@amitkumarpatra99",
      link: "https://www.linkedin.com/in/amitkumarpatra99",
      icon: <FaLinkedin size={28} />,
      color: "hover:text-blue-500 hover:border-blue-500/30 hover:bg-blue-500/5 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]",
      textColor: "text-blue-400"
    },
    {
      name: "GitHub",
      username: "@amitkumarpatra99",
      link: "https://github.com/amitkumarpatra99",
      icon: <FaGithub size={28} />,
      color: "hover:text-neutral-100 hover:border-white/20 hover:bg-white/5 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]",
      textColor: "text-neutral-300"
    },
    {
      name: "Instagram",
      username: "@mr_patraa_",
      link: "https://www.instagram.com/mr_patraa_",
      icon: <FaInstagram size={28} />,
      color: "hover:text-pink-500 hover:border-pink-500/30 hover:bg-pink-500/5 hover:shadow-[0_0_25px_rgba(236,72,153,0.25)]",
      textColor: "text-pink-400"
    },
    {
      name: "Twitter / X",
      username: "@mr_patra_",
      link: "https://x.com/mr_patra_",
      icon: <FaTwitter size={28} />,
      color: "hover:text-sky-400 hover:border-sky-400/30 hover:bg-sky-400/5 hover:shadow-[0_0_25px_rgba(56,189,248,0.25)]",
      textColor: "text-sky-400"
    },
    {
      name: "WhatsApp",
      username: "+91 8144129955",
      link: "https://wa.me/8144129955",
      icon: <FaWhatsapp size={28} />,
      color: "hover:text-green-500 hover:border-green-500/30 hover:bg-green-500/5 hover:shadow-[0_0_25px_rgba(34,197,94,0.25)]",
      textColor: "text-green-400"
    },
    {
      name: "Email",
      username: "mrpatra.web@gmail.com",
      link: "mailto:mrpatra.web@gmail.com",
      icon: <FiMail size={28} />,
      color: "hover:text-red-400 hover:border-red-400/30 hover:bg-red-400/5 hover:shadow-[0_0_25px_rgba(248,113,113,0.25)]",
      textColor: "text-red-400"
    }
  ];

  const codingAccounts = [
    {
      name: "LeetCode",
      username: "amitkumarpatra99",
      link: "https://leetcode.com/u/amitkumarpatra99/",
      icon: <SiLeetcode size={28} />,
      color: "hover:text-amber-500 hover:border-amber-500/30 hover:bg-amber-500/5 hover:shadow-[0_0_25px_rgba(245,158,11,0.25)]",
      textColor: "text-amber-400"
    },
    {
      name: "Codeforces",
      username: "amitkumarpatra99",
      link: "https://codeforces.com/profile/amitkumarpatra99",
      icon: <SiCodeforces size={28} />,
      color: "hover:text-red-500 hover:border-red-500/30 hover:bg-red-500/5 hover:shadow-[0_0_25px_rgba(239,68,68,0.25)]",
      textColor: "text-red-400"
    },
    {
      name: "HackerRank",
      username: "amitkumarpatra99",
      link: "https://www.hackerrank.com/profile/amitkumarpatra99",
      icon: <SiHackerrank size={28} />,
      color: "hover:text-emerald-500 hover:border-emerald-500/30 hover:bg-emerald-500/5 hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]",
      textColor: "text-emerald-400"
    },
    {
      name: "CodeChef",
      username: "amitkumarpatra99",
      link: "https://www.codechef.com/users/amitkumarpatra99",
      icon: <SiCodechef size={28} />,
      color: "hover:text-amber-700 hover:border-amber-700/30 hover:bg-amber-700/5 hover:shadow-[0_0_25px_rgba(180,83,9,0.25)]",
      textColor: "text-amber-600"
    },
    {
      name: "GeeksforGeeks",
      username: "amitkumarpatra99",
      link: "https://www.geeksforgeeks.org/user/amitkumarpatra99/",
      icon: <SiGeeksforgeeks size={28} />,
      color: "hover:text-green-600 hover:border-green-600/30 hover:bg-green-600/5 hover:shadow-[0_0_25px_rgba(22,163,74,0.25)]",
      textColor: "text-green-500"
    }
  ];

  return (
    <div className="relative min-h-screen bg-transparent text-white overflow-x-hidden font-sans">
      {/* Ambient background glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/[0.06] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/[0.04] rounded-full blur-[120px]" />
      </div>

      {/* Close Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate("/")}
        className="fixed top-4 right-4 md:top-6 md:right-6 z-50 p-2 md:p-3 rounded-full 
                   bg-black/40 backdrop-blur-md 
                   border border-white/10 shadow-lg
                   text-neutral-400 hover:text-white hover:bg-white/[0.1]
                   transition-all duration-300"
      >
        <FaTimes size={20} className="md:hidden" />
        <FaTimes size={24} className="hidden md:block" />
      </motion.button>

      {/* Main Content Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 max-w-7xl mx-auto pt-28 pb-20 px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <div className="mb-16 relative">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            <div className="premium-header-badge mb-6">
              <span className="premium-header-badge-dot animate-pulse" />
              <span className="text-neutral-300 text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
                PROFILES
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
              Socials & Coding Accounts
            </h2>
            <p className="text-neutral-400 text-sm md:text-base">
              My online presence, connection channels, and programming profiles.
            </p>
          </motion.div>
        </div>

        {/* Section 1: Coding Platforms */}
        <div className="mb-14">
          <motion.h3 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl font-bold text-white/90 mb-6 border-l-2 border-blue-500 pl-3 uppercase tracking-wider"
          >
            Coding Accounts
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {codingAccounts.map((platform, idx) => (
              <motion.a
                key={platform.name}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`glass-card group relative p-6 rounded-2xl border border-white/[0.06] transition-all duration-300 flex items-center justify-between overflow-hidden cursor-pointer ${platform.color}`}
              >
                {/* Inner Gradient Flash on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] transition-all duration-300 group-hover:scale-105 group-hover:bg-white/[0.05] ${platform.textColor}`}>
                    {platform.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-white transition-colors">{platform.name}</h4>
                    <p className="text-neutral-400 text-xs font-mono mt-0.5">{platform.username}</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/[0.02] border border-white/[0.05] text-neutral-400 group-hover:text-white group-hover:bg-white/[0.05] group-hover:translate-x-1 transition-all">
                  <FaArrowRight size={14} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Section 2: Social Platforms */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl font-bold text-white/90 mb-6 border-l-2 border-indigo-500 pl-3 uppercase tracking-wider"
          >
            Social Accounts
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {socialAccounts.map((platform, idx) => (
              <motion.a
                key={platform.name}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 + 0.1 }}
                className={`glass-card group relative p-6 rounded-2xl border border-white/[0.06] transition-all duration-300 flex items-center justify-between overflow-hidden cursor-pointer ${platform.color}`}
              >
                {/* Inner Gradient Flash on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] transition-all duration-300 group-hover:scale-105 group-hover:bg-white/[0.05] ${platform.textColor}`}>
                    {platform.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white transition-colors">{platform.name}</h4>
                    <p className="text-neutral-400 text-xs font-mono mt-0.5">{platform.username}</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/[0.02] border border-white/[0.05] text-neutral-400 group-hover:text-white group-hover:bg-white/[0.05] group-hover:translate-x-1 transition-all">
                  <FaArrowRight size={14} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 active:scale-95 cursor-pointer"
          >
            Back to Home
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfilesPage;
