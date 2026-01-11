import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Instagram,
  ArrowUp,
  Twitter,
  CreditCard,
  Eye,
} from "lucide-react";
import { FaLinkedin, FaHome, FaUser, FaTools, FaBriefcase, FaCompass, FaReact, FaMagic, FaMobileAlt, FaGithubAlt, FaRegEye } from "react-icons/fa";


const Footer = () => {

  const icons = [
    {
      id: 1,
      icon: <Github size={18} />,
      link: "https://github.com/amitkumarpatra99",
      color:
        "hover:text-gray-600 dark:hover:text-gray-400 hover:border-gray-600 dark:hover:border-gray-400 hover:shadow-gray-600/30 dark:hover:shadow-gray-400/30",
    },
    {
      id: 2,
      icon: <FaLinkedin size={18} />,
      link: "https://www.linkedin.com/in/amitkumarpatra99",
      color:
        "hover:text-blue-600 dark:hover:text-blue-500 hover:border-blue-600 dark:hover:border-blue-500 hover:shadow-blue-600/30 dark:hover:shadow-blue-500/30",
    },
    {
      id: 3,
      icon: <Instagram size={18} />,
      link: "https://www.instagram.com/mr_patraa_",
      color:
        "hover:text-pink-600 dark:hover:text-pink-500 hover:border-pink-600 dark:hover:border-pink-500 hover:shadow-pink-600/30 dark:hover:shadow-pink-500/30",
    },
    {
      id: 4,
      icon: <Twitter size={18} />,
      link: "https://x.com/mr_patra_",
      color:
        "hover:text-blue-400 dark:hover:text-blue-300 hover:border-blue-400 dark:hover:border-blue-300 hover:shadow-blue-400/30 dark:hover:shadow-blue-300/30",
    },
    {
      id: 5,
      icon: <CreditCard size={18} />,
      link: "https://rzp.io/rzp/amitpatra",
      color:
        "hover:text-amber-600 dark:hover:text-amber-500 hover:border-amber-600 dark:hover:border-amber-500 hover:shadow-amber-600/30 dark:hover:shadow-amber-500/30",
    },
  ];

  const links = [
    { name: "Home", to: "home", icon: <FaHome size={14} /> },
    { name: "About", to: "about", icon: <FaUser size={14} /> },
    { name: "Skill Set", to: "skills", icon: <FaTools size={14} /> },
    { name: "Project Hub", to: "work", icon: <FaBriefcase size={14} /> },
    { name: "My Journey", to: "Journey", icon: <FaCompass size={14} /> },
  ];

  return (
    <footer className="relative bg-[#f9fafb] dark:bg-[#0a0f1c] text-gray-700 dark:text-gray-300 py-16 px-6 overflow-hidden border-t border-black/10 dark:border-white/10">

      {/* 🌟 ANIMATED BACKGROUND LIGHT + DARK 🌟 */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 
          bg-blue-400/20 dark:bg-blue-500/20 
          rounded-full blur-[100px] animate-blob mix-blend-screen"></div>

        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 
          bg-teal-400/20 dark:bg-teal-600/20 
          rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen"></div>

        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 
          bg-blue-300/20 dark:bg-blue-600/20 
          rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen"></div>

        {/* Grid Lines */}
        <div className="absolute inset-0 
          bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] 
          dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:40px_40px] opacity-30"></div>

        {/* Top gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#f9fafb] dark:from-[#0a0f1c] via-transparent to-transparent"></div>
      </div>

      {/* 🌟 MAIN CONTENT 🌟 */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* ABOUT & PROFILE */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative p-[2px] rounded-full bg-gradient-to-r from-teal-500 to-blue-500 transition-transform duration-500 group-hover:scale-105">
              <img
                src="DP.jpg"
                alt="Logo"
                className="h-10 w-10 object-contain rounded-full border-2 border-white dark:border-[#0a0f1c] transition-transform duration-500 group-hover:rotate-12"
              />
            </div>

            <div>
              <h2 className="text-xl font-bold text-black dark:text-white tracking-wide transition-colors duration-300 group-hover:text-teal-500">
                AMIT KUMAR{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">
                  PATRA
                </span>
              </h2>
              <span className="text-xs text-gray-500 dark:text-gray-400 tracking-wider">
                WEB DEVELOPER
              </span>
            </div>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            A passionate web developer building interactive and aesthetic digital experiences.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4">
            {icons.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 flex items-center justify-center rounded-full 
                  bg-black/5 dark:bg-white/5 
                  border border-black/10 dark:border-white/10 
                  text-gray-600 dark:text-gray-400 
                  transition-all duration-300 
                  hover:-translate-y-1 hover:scale-110 hover:shadow-lg backdrop-blur-md 
                  hover:bg-black/10 dark:hover:bg-white/10 ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="lg:ml-10">
          <h3 className="text-lg font-semibold text-black dark:text-white">Quick Links</h3>
          <div className="w-16 h-1 rounded-full mb-6 mt-2 bg-gradient-to-r from-blue-600 via-teal-500 to-green-500" />

          <ul className="space-y-3 text-sm">
            {links.map((link, index) => (
              <li key={index}>
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  duration={600}
                  spy={true}
                  className="flex items-center gap-2 group cursor-pointer text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 hover:translate-x-2"
                >
                  <span className="text-teal-500 group-hover:text-teal-600 transition-colors duration-300">
                    {link.icon}
                  </span>
                  {link.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        {/* HIGHLIGHTS */}
        <div>
          <h3 className="text-lg font-semibold text-black dark:text-white cursor-default">Highlights</h3>
          <div className="w-16 h-1 rounded-full mb-6 mt-2 bg-gradient-to-r from-blue-600 via-teal-500 to-green-500" />

          <ul className="space-y-2 text-sm">
            {[
              "🚀 MERN Stack Developer",
              "🎨 Frontend Animations",
              "⚡ Responsive Web Apps",
              "💡 Open Source Enthusiast",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center p-2 rounded-lg text-gray-600 dark:text-gray-400 
                hover:text-teal-600 dark:hover:text-teal-300 
                hover:bg-teal-500/5 dark:hover:bg-teal-500/10
                transition-all duration-300 cursor-default hover:pl-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mr-3 animate-pulse"></span>
                {item}
              </li>
            ))}

            {/* 🌟 REAL WEBSITE VISITS 🌟 */}
            <li className="flex items-center p-2 rounded-lg text-gray-600 dark:text-gray-400 
              hover:text-teal-600 dark:hover:text-teal-300 
              hover:bg-teal-500/5 dark:hover:bg-teal-500/10
              transition-all duration-300 cursor-default hover:pl-3"
            >
              <FaRegEye size={16} className="mr-3 text-teal-500" />
              <span className="font-medium">2591+ <span className="font-normal opacity-80">Views</span>
              </span>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold text-black dark:text-white">Contact</h3>
          <div className="w-16 h-1 rounded-full mb-6 mt-2 bg-gradient-to-r from-blue-600 via-teal-500 to-green-500" />

          <ul className="space-y-4 text-sm">
            {/* Email */}
            <li className="flex items-center gap-3 group p-3 -ml-3 rounded-xl border border-transparent hover:border-black/5 dark:hover:border-white/5 hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-10 h-10 flex items-center justify-center rounded-full 
                bg-black/5 dark:bg-white/5 
                border border-black/10 dark:border-white/10 
                group-hover:bg-teal-500/20 
                group-hover:border-teal-500 
                text-gray-600 dark:text-gray-400 group-hover:text-teal-500 
                transition-all duration-300 group-hover:scale-110">
                <Mail size={18} />
              </div>

              <div className="flex flex-col">
                <span className="text-xs text-gray-500 dark:text-gray-400 font-bold mb-1 group-hover:text-teal-500 transition-colors">EMAIL</span>
                <a className="text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors cursor-pointer">
                  mrpatra.web@gmail.com
                </a>
              </div>
            </li>

            {/* Phone */}
            <li className="flex items-center gap-3 group p-3 -ml-3 rounded-xl border border-transparent hover:border-black/5 dark:hover:border-white/5 hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-10 h-10 flex items-center justify-center rounded-full 
                bg-black/5 dark:bg-white/5 
                border border-black/10 dark:border-white/10 
                group-hover:bg-teal-500/20 
                group-hover:border-teal-500 
                text-gray-600 dark:text-gray-400 group-hover:text-teal-500 
                transition-all duration-300 group-hover:scale-110">
                <Phone size={18} />
              </div>

              <div className="flex flex-col">
                <span className="text-xs text-gray-500 dark:text-gray-400 font-bold mb-1 group-hover:text-teal-500 transition-colors">PHONE</span>
                <a className="text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors cursor-pointer">
                  +91 8144129955
                </a>
              </div>
            </li>

            {/* Location */}
            <li className="flex items-center gap-3 group p-3 -ml-3 rounded-xl border border-transparent hover:border-black/5 dark:hover:border-white/5 hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-10 h-10 flex items-center justify-center rounded-full 
                bg-black/5 dark:bg-white/5 
                border border-black/10 dark:border-white/10 
                group-hover:bg-teal-500/20 
                group-hover:border-teal-500 
                text-gray-600 dark:text-gray-400 group-hover:text-teal-500 
                transition-all duration-300 group-hover:scale-110">
                <MapPin size={18} />
              </div>

              <div className="flex flex-col">
                <span className="text-xs text-gray-500 dark:text-gray-400 font-bold mb-1 group-hover:text-teal-500 transition-colors">LOCATION</span>
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors cursor-default">
                  Bhubaneswar, Odisha
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative z-10 max-w-7xl mx-auto mt-16 pt-8 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-600 dark:text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="text-teal-600 dark:text-teal-500 font-medium uppercase">Mr Patra</span>.
          All Rights Reserved.
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-2 px-4 py-2 rounded-full  
            bg-black/5 dark:bg-white/5 
            hover:bg-teal-500/20 
            border border-black/10 dark:border-white/10 
            hover:border-teal-500/50 
            transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-500/20"
        >
          <span className="text-sm  text-gray-600 dark:text-gray-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 font-medium transition-colors">
            Back to top
          </span>
          <ArrowUp
            size={16}
            className="text-teal-500 group-hover:-translate-y-1 transition-transform duration-300"
          />
        </button>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </footer>
  );
};

export default Footer;