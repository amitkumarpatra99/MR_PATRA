import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Instagram,
  ArrowUp,
  Twitter,
  CreditCard,
  Send,
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
  const [openSections, setOpenSections] = useState({
    navigation: false,
    highlights: false,
    contact: false,
  });

  const toggleSection = (sectionKey) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

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
    <footer className="relative bg-[#020205] text-white pt-16 pb-8 px-6 overflow-hidden font-sans selection:bg-blue-900/50 selection:text-white text-left">
      {/* 🌟 Top Subtle Divider 🌟 */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      {/* 🌟 Ambient OLED Background Glows 🌟 */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[5%] w-[600px] h-[600px] bg-blue-600/[0.03] rounded-full blur-[140px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[5%] w-[600px] h-[600px] bg-indigo-600/[0.03] rounded-full blur-[140px] mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        
        {/* 🌟 MOBILE ONLY LOGO 🌟 */}
        <div className="md:hidden flex justify-start mb-8">
          <div className="relative p-[1.5px] rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500">
            <img
              src="DP.jpg"
              alt="Logo"
              className="h-10 w-10 object-cover rounded-full border border-black"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        </div>

        {/* 🌟 CTA BANNER 🌟 */}
        <div className="mb-12 p-8 md:p-10 rounded-[2rem] bg-gradient-to-r from-white/[0.01] to-white/[0.03] border border-white/[0.06] backdrop-blur-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden group">
          {/* Subtle hover background highlight */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/[0.02] to-purple-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-bold text-emerald-400/90 tracking-widest uppercase">
                Available for select projects
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white max-w-xl leading-tight">
              Let's collaborate to build something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-extrabold">
                extraordinary
              </span>
            </h3>
          </div>

          <Link 
            to="/contact" 
            onClick={() => {
              if (window.location.pathname === "/contact") {
                if (window.lenis) {
                  window.lenis.scrollTo(0, { duration: 1.2 });
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }
            }}
            className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-semibold text-sm transition-all duration-300 hover:bg-neutral-200 active:scale-95 shadow-[0_4px_20px_rgba(255,255,255,0.1)] cursor-pointer animate-pulse hover:animate-none"
          >
            <span>Start a Conversation</span>
            <Send size={14} />
          </Link>
        </div>

        {/* 🌟 RESPONSIVE COLUMNS (Accordions on Mobile, Columns on Desktop) 🌟 */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-0 md:gap-12 lg:gap-16 pb-8 md:pb-16">
          
          {/* 1. NAVIGATION */}
          <div className="border-b border-white/[0.06] md:border-b-0 py-4 md:py-0">
            <button
              onClick={() => toggleSection("navigation")}
              className="w-full flex items-center justify-between text-left focus:outline-none pointer-events-auto md:pointer-events-none"
            >
              <h4 className="text-sm font-bold text-white tracking-widest uppercase opacity-85 md:opacity-40">
                Navigation
              </h4>
              <span className="text-neutral-400 md:hidden text-lg font-light transition-transform duration-300">
                {openSections.navigation ? "−" : "+"}
              </span>
            </button>
            
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden md:max-h-none md:opacity-100 ${
                openSections.navigation ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0 md:mt-0"
              }`}
            >
              <ul className="space-y-4 pt-2 pb-4 md:py-0">
                {links.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleScroll(link.to)}
                      className="flex items-center gap-3.5 group cursor-pointer text-neutral-400 hover:text-white transition-all duration-300 w-fit text-left text-sm"
                    >
                      <span className="text-blue-500/50 group-hover:text-blue-400 transition-colors duration-300">
                        {link.icon}
                      </span>
                      <span className="group-hover:translate-x-1.5 transition-transform duration-300 font-medium">
                        {link.name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2. HIGHLIGHTS */}
          <div className="border-b border-white/[0.06] md:border-b-0 py-4 md:py-0">
            <button
              onClick={() => toggleSection("highlights")}
              className="w-full flex items-center justify-between text-left focus:outline-none pointer-events-auto md:pointer-events-none"
            >
              <h4 className="text-sm font-bold text-white tracking-widest uppercase opacity-85 md:opacity-40">
                Highlights
              </h4>
              <span className="text-neutral-400 md:hidden text-lg font-light transition-transform duration-300">
                {openSections.highlights ? "−" : "+"}
              </span>
            </button>
            
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden md:max-h-none md:opacity-100 ${
                openSections.highlights ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0 md:mt-0"
              }`}
            >
              <ul className="space-y-4 pt-2 pb-4 md:py-0">
                {[
                  "🚀 MERN Stack Development",
                  "🎨 Frontend Architecture",
                  "⚡ Performance-Driven Apps",
                  "💡 High-Fidelity UI/UX Design",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center text-neutral-400 text-sm cursor-default group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mr-3.5 group-hover:bg-blue-400 group-hover:shadow-[0_0_8px_rgba(96,165,250,0.8)] transition-all duration-300" />
                    <span className="group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300 font-medium">
                      {item}
                    </span>
                  </li>
                ))}
                <li className="flex items-center pt-2 text-neutral-400 text-sm cursor-default group">
                  <FaRegEye size={16} className="mr-3.5 text-blue-500/50 group-hover:text-blue-400 transition-colors" />
                  <span className="font-semibold group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300">
                    5985+ <span className="font-normal opacity-50">Site Visits</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* 3. CONTACT & INFO */}
          <div className="border-b border-white/[0.06] md:border-b-0 py-4 md:py-0">
            <button
              onClick={() => toggleSection("contact")}
              className="w-full flex items-center justify-between text-left focus:outline-none pointer-events-auto md:pointer-events-none"
            >
              <h4 className="text-sm font-bold text-white tracking-widest uppercase opacity-85 md:opacity-40">
                Get in Touch
              </h4>
              <span className="text-neutral-400 md:hidden text-lg font-light transition-transform duration-300">
                {openSections.contact ? "−" : "+"}
              </span>
            </button>
            
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden md:max-h-none md:opacity-100 ${
                openSections.contact ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0 md:mt-0"
              }`}
            >
              <ul className="space-y-4 text-sm pt-2 pb-4 md:py-0">
                <li className="flex items-center gap-4 group p-1 -ml-1 rounded-xl transition-colors duration-300">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.02] border border-white/[0.06] text-neutral-400 group-hover:bg-blue-500/[0.08] group-hover:border-blue-500/[0.15] group-hover:text-blue-400 transition-all duration-300">
                    <Mail size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-neutral-500 font-bold tracking-widest uppercase mb-0.5">Email</span>
                    <a href="mailto:mrpatra.web@gmail.com" className="text-neutral-300 hover:text-white transition-colors font-medium">
                      mrpatra.web@gmail.com
                    </a>
                  </div>
                </li>

                <li className="flex items-center gap-4 group p-1 -ml-1 rounded-xl transition-colors duration-300">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.02] border border-white/[0.06] text-neutral-400 group-hover:bg-blue-500/[0.08] group-hover:border-blue-500/[0.15] group-hover:text-blue-400 transition-all duration-300">
                    <Phone size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-neutral-500 font-bold tracking-widest uppercase mb-0.5">Phone</span>
                    <a href="tel:+918144129955" className="text-neutral-300 hover:text-white transition-colors font-medium">
                      +91 81441 29955
                    </a>
                  </div>
                </li>

                <li className="flex items-center gap-4 group p-1 -ml-1 rounded-xl transition-colors duration-300">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.02] border border-white/[0.06] text-neutral-400 group-hover:bg-blue-500/[0.08] group-hover:border-blue-500/[0.15] group-hover:text-blue-400 transition-all duration-300">
                    <MapPin size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-neutral-500 font-bold tracking-widest uppercase mb-0.5">Location</span>
                    <span className="text-neutral-300 font-medium font-sans">
                      Bhubaneswar, Odisha
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* 🌟 MOBILE SOCIAL / FOLLOW SECTION (MATCHING SCREENSHOT) 🌟 */}
        <div className="md:hidden py-6 border-b border-white/[0.06] my-2">
          <h4 className="text-sm font-bold text-white uppercase tracking-widest opacity-85 mb-2">Follow</h4>
          <p className="text-xs text-neutral-400 mb-6">Connect with us on our social channels</p>
          <div className="flex items-center gap-3">
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

        {/* 🌟 Desktop Divider 🌟 */}
        <div className="hidden md:block h-[1px] bg-white/[0.06] w-full mb-8" />

        {/* 🌟 DESKTOP BOTTOM BAR 🌟 */}
        <div className="hidden md:flex flex-col md:flex-row justify-between items-center gap-8 pb-4">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <div className="flex items-center gap-3">
                <div className="relative p-[1.5px] rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 transition-transform duration-500 hover:scale-110">
                  <img
                    src="DP.jpg"
                    alt="Logo"
                    className="h-8 w-8 object-cover rounded-full border border-black"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <p className="text-xs text-neutral-500 font-medium font-sans">
                  © mr patra {new Date().getFullYear()}
                </p>
              </div>

              {/* Payment Badges */}
              <div className="flex items-center gap-2">
                <div className="h-5 w-8 rounded-[3px] bg-[#0177b2] flex items-center justify-center border border-white/10 shadow-sm transition-transform duration-300 hover:scale-110" title="American Express">
                  <span className="text-[6px] font-bold text-white tracking-wider select-none">AMEX</span>
                </div>
                <div className="h-5 w-8 rounded-[3px] bg-[#141416] flex items-center justify-center border border-white/10 shadow-sm relative overflow-hidden transition-transform duration-300 hover:scale-110" title="Maestro">
                  <div className="flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#eb001b] -mr-1 opacity-90" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00a6ff] opacity-90" />
                  </div>
                </div>
                <div className="h-5 w-8 rounded-[3px] bg-[#141416] flex items-center justify-center border border-white/10 shadow-sm relative overflow-hidden transition-transform duration-300 hover:scale-110" title="Mastercard">
                  <div className="flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#eb001b] -mr-1 opacity-90" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#f79e1b] opacity-90" />
                  </div>
                </div>
                <div className="h-5 w-8 rounded-[3px] bg-[#003087] flex items-center justify-center border border-white/10 shadow-sm transition-transform duration-300 hover:scale-110" title="PayPal">
                  <span className="text-[7px] font-extrabold italic text-white tracking-tighter select-none">
                    <span className="text-[#0079c1]">Pay</span>Pal
                  </span>
                </div>
                <div className="h-5 w-8 rounded-[3px] bg-[#0f1b5f] flex items-center justify-center border border-white/10 shadow-sm transition-transform duration-300 hover:scale-110" title="Visa">
                  <span className="text-[7px] font-black italic text-[#f7a918] tracking-widest select-none">VISA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center gap-2.5">
              {icons.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 flex items-center justify-center rounded-full bg-white/[0.02] border border-white/[0.06] text-neutral-400 transition-all duration-300 hover:-translate-y-1 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <button
              onClick={handleScrollTop}
              className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <span className="text-[10px] font-semibold text-neutral-400 group-hover:text-white tracking-wider uppercase transition-colors">
                Back to top
              </span>
              <ArrowUp
                size={12}
                className="text-neutral-500 group-hover:text-white group-hover:-translate-y-0.5 transition-all duration-300"
              />
            </button>
          </div>
        </div>

        {/* 🌟 MOBILE ONLY BOTTOM BAR (MATCHING SCREENSHOT) 🌟 */}
        <div className="md:hidden flex flex-col items-center gap-4 py-8">
          <p className="text-xs text-neutral-500 font-sans select-none">
            © mr patra {new Date().getFullYear()}
          </p>
          
          {/* Payment Badges */}
          <div className="flex items-center justify-center gap-2">
            <div className="h-5 w-8 rounded-[3px] bg-[#0177b2] flex items-center justify-center border border-white/10 shadow-sm" title="American Express">
              <span className="text-[6px] font-bold text-white tracking-wider select-none">AMEX</span>
            </div>
            <div className="h-5 w-8 rounded-[3px] bg-[#141416] flex items-center justify-center border border-white/10 shadow-sm relative overflow-hidden" title="Maestro">
              <div className="flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#eb001b] -mr-1 opacity-90" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#00a6ff] opacity-90" />
              </div>
            </div>
            <div className="h-5 w-8 rounded-[3px] bg-[#141416] flex items-center justify-center border border-white/10 shadow-sm relative overflow-hidden" title="Mastercard">
              <div className="flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#eb001b] -mr-1 opacity-90" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#f79e1b] opacity-90" />
              </div>
            </div>
            <div className="h-5 w-8 rounded-[3px] bg-[#003087] flex items-center justify-center border border-white/10 shadow-sm" title="PayPal">
              <span className="text-[7px] font-extrabold italic text-white tracking-tighter select-none">
                <span className="text-[#0079c1]">Pay</span>Pal
              </span>
            </div>
            <div className="h-5 w-8 rounded-[3px] bg-[#0f1b5f] flex items-center justify-center border border-white/10 shadow-sm" title="Visa">
              <span className="text-[7px] font-black italic text-[#f7a918] tracking-widest select-none">VISA</span>
            </div>
          </div>
        </div>

      </div>

      {/* Massive Background Text "mr patra" */}
      <div className="w-full text-center mt-12 select-none pointer-events-none overflow-hidden relative z-0">
        <span className="inline-block text-[15vw] md:text-[18vw] lg:text-[20vw] font-black leading-none tracking-tighter text-white/[0.03] transition-colors duration-1000 select-none lowercase">
          mr patra
        </span>
      </div>
    </footer>
  );
};

export default Footer;