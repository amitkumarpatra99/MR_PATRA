
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Instagram,
  ArrowUp,
  Twitter,
  CreditCard,
} from "lucide-react";
import {
  FaLinkedin,
  FaHome,
  FaUser,
  FaTools,
  FaBriefcase,
  FaCompass,
  FaRegEye
} from "react-icons/fa";

const Footer = () => {
  const icons = [
    {
      id: 1,
      icon: <Github size={18} />,
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
      icon: <Instagram size={18} />,
      link: "https://www.instagram.com/mr_patraa_",
      color: "hover:text-pink-500 hover:border-pink-500 hover:bg-pink-500/5 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]",
    },
    {
      id: 4,
      icon: <Twitter size={18} />,
      link: "https://x.com/mr_patra_",
      color: "hover:text-white hover:border-white hover:bg-white/5 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]",
    },
    {
      id: 5,
      icon: <CreditCard size={18} />,
      link: "https://rzp.io/rzp/amitpatra",
      color: "hover:text-indigo-400 hover:border-indigo-400 hover:bg-indigo-400/5 hover:shadow-[0_0_15px_rgba(129,140,248,0.3)]",
    },
  ];

  const links = [
    { name: "Home", to: "home", icon: <FaHome size={14} /> },
    { name: "About", to: "about", icon: <FaUser size={14} /> },
    { name: "Skill Set", to: "skills", icon: <FaTools size={14} /> },
    { name: "Project Hub", to: "projects", icon: <FaBriefcase size={14} /> },
    { name: "My Journey", to: "Journey", icon: <FaCompass size={14} /> },
  ];

  const handleScroll = (to) => {
    const target = document.getElementById(to);
    if (target) {
      if (window.lenis) {
        window.lenis.scrollTo(target, { offset: -85, duration: 1.2 });
      } else {
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - 85;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  const handleScrollTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#020205] via-[#020205] to-[#000000] text-white pt-24 pb-8 px-6 overflow-hidden font-sans selection:bg-blue-900/50 selection:text-white">

      {/* 🌟 Top Subtle Divider 🌟 */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />

      {/* 🌟 Ambient OLED Background Glows 🌟 */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/[0.04] rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/[0.03] rounded-full blur-[120px] mix-blend-screen" />

        {/* Deep mesh gradient fade at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020205]/80 via-[#020205]/40 to-transparent" />
      </div>

      {/* 🌟 MAIN CONTENT 🌟 */}
      <div className="relative z-10 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

        {/* 1. ABOUT & PROFILE */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 group cursor-pointer w-fit">
            <div className="relative p-[2px] rounded-full bg-gradient-to-br from-blue-500/50 to-indigo-500/50 transition-transform duration-700 group-hover:scale-105 group-hover:rotate-6">
              <div className="absolute inset-0 bg-blue-500/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="DP.jpg"
                alt="Logo"
                className="relative h-12 w-12 object-cover rounded-full border-2 border-black"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>

            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                Amit Kumar{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  Patra
                </span>
              </h2>
              <span className="text-xs font-semibold text-blue-100/40 tracking-widest uppercase">
                Web Developer
              </span>
            </div>
          </div>

          <p className="text-sm text-neutral-400 leading-relaxed max-w-xs">
            A passionate developer bridging the gap between sophisticated engineering and intuitive digital experiences.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-3 pt-2">
            {icons.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.08] text-neutral-400 transition-all duration-300 hover:-translate-y-1 ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* 2. QUICK LINKS */}
        <div className="lg:pl-8">
          <h3 className="text-lg font-semibold text-white mb-6 tracking-tight">Navigation</h3>
          <ul className="space-y-3.5 text-sm">
            {links.map((link, index) => (
              <li key={index}>
                <button
                  onClick={() => handleScroll(link.to)}
                  className="flex items-center gap-3 group cursor-pointer text-neutral-400 hover:text-white transition-all duration-300 w-fit text-left"
                >
                  <span className="text-blue-500/50 group-hover:text-blue-400 transition-colors duration-300 flex items-center justify-center w-5">
                    {link.icon}
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    {link.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. HIGHLIGHTS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6 tracking-tight">Highlights</h3>
          <ul className="space-y-3 text-sm">
            {[
              "🚀 MERN Stack Developer",
              "🎨 Frontend Architecture",
              "⚡ Performant Web Apps",
              "💡 UI/UX Enthusiast",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center text-neutral-400 cursor-default group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mr-3 group-hover:bg-blue-400 group-hover:shadow-[0_0_8px_rgba(96,165,250,0.8)] transition-all duration-300" />
                <span className="group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                  {item}
                </span>
              </li>
            ))}

            {/* REAL WEBSITE VISITS */}
            <li className="flex items-center pt-2 text-neutral-400 cursor-default group">
              <FaRegEye size={16} className="mr-3 text-blue-500/60 group-hover:text-blue-400 transition-colors" />
              <span className="font-medium group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                5985+ <span className="font-normal opacity-60">Total Visits</span>
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-6 tracking-tight">Get in Touch</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-4 group p-2 -ml-2 rounded-xl hover:bg-white/[0.02] transition-colors duration-300">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.08] text-neutral-400 group-hover:bg-blue-500/[0.1] group-hover:border-blue-500/[0.2] group-hover:text-blue-400 transition-all duration-300">
                <Mail size={16} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-neutral-500 font-bold tracking-widest uppercase mb-0.5">Email</span>
                <a href="mailto:mrpatra.web@gmail.com" className="text-neutral-300 hover:text-white transition-colors">
                  mrpatra.web@gmail.com
                </a>
              </div>
            </li>

            {/* Phone */}
            <li className="flex items-center gap-4 group p-2 -ml-2 rounded-xl hover:bg-white/[0.02] transition-colors duration-300">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.08] text-neutral-400 group-hover:bg-blue-500/[0.1] group-hover:border-blue-500/[0.2] group-hover:text-blue-400 transition-all duration-300">
                <Phone size={16} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-neutral-500 font-bold tracking-widest uppercase mb-0.5">Phone</span>
                <a href="tel:+918144129955" className="text-neutral-300 hover:text-white transition-colors">
                  +91 81441 29955
                </a>
              </div>
            </li>

            {/* Location */}
            <li className="flex items-center gap-4 group p-2 -ml-2 rounded-xl hover:bg-white/[0.02] transition-colors duration-300">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.08] text-neutral-400 group-hover:bg-blue-500/[0.1] group-hover:border-blue-500/[0.2] group-hover:text-blue-400 transition-all duration-300">
                <MapPin size={16} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-neutral-500 font-bold tracking-widest uppercase mb-0.5">Location</span>
                <span className="text-neutral-300">
                  Bhubaneswar, Odisha
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* 🌟 BOTTOM BAR 🌟 */}
      <div className="relative z-10 max-w-[1200px] mx-auto mt-20 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-neutral-500 font-medium">
          © {new Date().getFullYear()}{" "}
          <span className="text-white">Mr Patra</span>. All Rights Reserved.
        </p>

        <button
          onClick={handleScrollTop}
          className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300 active:scale-95"
        >
          <span className="text-xs font-semibold text-neutral-400 group-hover:text-white tracking-wider uppercase transition-colors">
            Back to top
          </span>
          <ArrowUp
            size={14}
            className="text-neutral-500 group-hover:text-white group-hover:-translate-y-0.5 transition-all duration-300"
          />
        </button>
      </div>
    </footer>
  );
};

export default Footer;