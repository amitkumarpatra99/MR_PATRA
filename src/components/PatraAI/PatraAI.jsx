import React, { useState, useRef, useEffect } from "react";
import {
  FaPaperPlane,
  FaTimes,
  FaTrashAlt,
  FaVolumeUp,
  FaVolumeMute,
  FaUserTie,
  FaCode,
  FaBriefcase,
  FaEnvelope,
  FaChartArea,
  FaUser,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { projects, SkillsInfo, experiences, education, contactDetails, aboutMe } from "../../constants";
import { FaMessage } from "react-icons/fa6";


const sendSound = new Audio(
  "https://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3"
);
const receiveSound = new Audio(
  "https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav"
);

const PatraAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [showButton, setShowButton] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const messagesEndRef = useRef(null);
  const scrollTimer = useRef(null);

  // Suggested questions for Quick Chips
  const suggestions = [
    { label: "Projects", icon: <FaCode />, val: "Show me your projects" },
    { label: "Skills", icon: <FaUserTie />, val: "What are your skills?" },
    { label: "Experience", icon: <FaBriefcase />, val: "Tell me about your experience" },
    { label: "Contact", icon: <FaEnvelope />, val: "How can I contact you?" },
  ];

  /* ---------------- AUTO HIDE BUTTON ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(false);
      clearTimeout(scrollTimer.current);
      scrollTimer.current = setTimeout(() => setShowButton(true), 700);

      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- TIME BASED GREETING ---------------- */
  const getTimeGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning! ☀️";
    if (hour < 18) return "Good Afternoon! 🌤️";
    return "Good Evening! 🌙";
  };

  /* ---------------- MESSAGES STATE ---------------- */
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: `${getTimeGreeting()}<br/>I’m <b>Patra AI</b>. How can I help you today?`,
      sender: "bot",
    },
  ]);

  /* ---------------- UTILS ---------------- */
  const scrollRingRadius = 26;
  const circumference = 2 * Math.PI * scrollRingRadius;
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  const playSound = (type) => {
    if (!soundEnabled) return;
    const sound = type === "send" ? sendSound : receiveSound;
    sound.currentTime = 0;
    sound.play().catch(() => { });
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isOpen]);

  /* ---------------- AI BRAIN (LOGIC) ---------------- */
  const generateResponse = (input) => {
    const q = input.toLowerCase().trim();

    // 1. Greetings
    if (/^(hi|hii+|hello+|hey+|hola)$/.test(q)) {
      return "Hello! 👋<br/>I can tell you about my <b>Projects</b>, <b>Skills</b>, or <b>Contact</b> info.";
    }

    // 2. About Me (New Intent)
    if (q.includes("about") || q.includes("who is") || q.includes("bio") || q.includes("amit")) {
      return `👨‍💻 <b>${aboutMe.name}</b><br/><br/>
      ${aboutMe.bio}<br/><br/>
      <b>Core Focus:</b><br/>${aboutMe.skills.join(" • ")}`;
    }

    // 3. Projects
    if (q.includes("project") || q.includes("work") || q.includes("built")) {
      const projectList = projects
        .map((p) => `🔹 <b>${p.title}</b> <span style="opacity:0.7">(${p.tags.join(', ')})</span>`)
        .join("<br/>");
      return `Here are some of my recent projects:<br/><br/>${projectList}<br/><br/>Would you like to see more details?`;
    }

    // 3. Skills
    if (q.includes("skill") || q.includes("stack") || q.includes("tech")) {
      return SkillsInfo.map(
        (s) => `🚀 <b>${s.title}</b><br/>${s.skills.map((x) => x.name).join(", ")}`
      ).join("<br/><br/>");
    }

    // 4. Education
    if (q.includes("education") || q.includes("study") || q.includes("degree")) {
      return education
        .map((e) => `🎓 <b>${e.degree}</b><br/>${e.school}`)
        .join("<br/><br/>");
    }

    // 5. Experience
    if (q.includes("experience") || q.includes("job") || q.includes("internship")) {
      return experiences
        .map((e) => `💼 <b>${e.role}</b><br/>${e.company} (${e.date})`)
        .join("<br/><br/>");
    }

    // 6. Contact
    if (q.includes("contact") || q.includes("mail") || q.includes("hire") || q.includes("linkedin") || q.includes("github")) {
      return `Let's connect! 🤝<br/><br/>
      📧 <b>Email:</b> <a href="mailto:${contactDetails.email}" style="color:#8b5cf6; text-decoration:underline;">${contactDetails.email}</a><br/>
      📞 <b>Phone:</b> <a href="tel:${contactDetails.phone}" style="color:#8b5cf6; text-decoration:underline;">${contactDetails.phone}</a><br/>
      🔗 <b>LinkedIn:</b> <a href="${contactDetails.linkedin}" target="_blank" rel="noopener noreferrer" style="color:#8b5cf6; text-decoration:underline;">Profile</a><br/>
      🐙 <b>GitHub:</b> <a href="${contactDetails.github}" target="_blank" rel="noopener noreferrer" style="color:#8b5cf6; text-decoration:underline;">Profile</a>`;
    }

    // 7. Clear
    if (q.includes("clear")) {
      setMessages([{
        id: Date.now(),
        text: "Chat cleared! 🧹 How can I help?",
        sender: "bot"
      }]);
      return null; // Special case handled
    }

    // Default Fallback
    return "🤖 I'm still learning!<br/>Try asking about <b>Projects</b>, <b>Skills</b>, <b>Experience</b>, or simply say <b>Hi</b>.";
  };

  const handleSendMessage = (text = inputValue) => {
    if (!text.trim()) return;

    playSound("send");

    const userMsg = {
      id: Date.now(),
      text: text,
      sender: "user",
    };

    setMessages((p) => [...p, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI Delay
    setTimeout(() => {
      const responseText = generateResponse(userMsg.text);

      // Handle "Clear" command special case where we don't add a new bot message
      if (responseText) {
        setMessages((p) => [
          ...p,
          {
            id: Date.now() + 1,
            text: responseText,
            sender: "bot",
          },
        ]);
        playSound("receive");
      }
      setIsTyping(false);
    }, 1200);
  };

  return (
    <>
      {/* ================= FLOATING BUTTON ================= */}
      <AnimatePresence>
        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-[9999]"
          >
            <button
              onClick={() => setIsOpen(true)}
              className="
                group relative flex items-center justify-center
                w-16 h-16 rounded-full
                bg-[#0a0a0a]/90 backdrop-blur-xl
                shadow-[0_0_45px_rgba(139,92,246,0.45)]
                transition-all duration-300 hover:scale-110
                border border-white/10
              "
            >
              {/* Spinning Dashed Ring */}
              <div
                className="absolute inset-1 rounded-full border border-dashed border-violet-500/30"
                style={{ animation: "spin 10s linear infinite" }}
              />

              {/* Scroll Progress Ring */}
              <svg
                className="absolute inset-0 w-full h-full -rotate-90 p-1"
                viewBox="0 0 60 60"
              >
                <circle cx="30" cy="30" r={scrollRingRadius} fill="transparent" stroke="#1f2937" strokeWidth="4" />
                <circle
                  cx="30" cy="30" r={scrollRingRadius} fill="transparent" stroke="#8b5cf6" strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  className="drop-shadow-[0_0_15px_#8b5cf6]"
                />
              </svg>

              {/* Icon Container */}
              <div className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-violet-900/20 backdrop-blur-xl flex items-center justify-center overflow-hidden">
                <span className="text-[10px] font-bold font-mono text-violet-400 absolute transition-transform duration-300 group-hover:-translate-y-8">
                  AI
                </span>
                <FaMessage
                  size={18}
                  className="text-white absolute translate-y-8 transition-transform duration-300 group-hover:translate-y-0"
                />
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= CHAT WINDOW ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="
              fixed z-[9999]
              bottom-0 right-0 w-full h-[85vh] rounded-t-[20px] rounded-b-none
              sm:bottom-28 sm:right-8 sm:w-[360px] sm:h-[600px] sm:max-h-[70vh] sm:rounded-[32px]
              flex flex-col overflow-hidden
              bg-[#09090b]/95 backdrop-blur-2xl
              border border-white/10
              shadow-[0_0_60px_-15px_rgba(139,92,246,0.3)]
              font-sans
            "
          >
            {/* --- HEADER --- */}
            <div className="relative flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300">
                  <FaUser size={14} />
                  <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 border-2 border-[#09090b] rounded-full animate-pulse"></span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white tracking-wide">Patra AI</h3>
                  <p className="text-[10px] text-white/40 font-medium tracking-wider uppercase">Online</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button onClick={() => setSoundEnabled(!soundEnabled)} className="p-2 text-white/40 hover:text-white transition-colors">
                  {soundEnabled ? <FaVolumeUp size={14} /> : <FaVolumeMute size={14} />}
                </button>
                <button
                  onClick={() => setMessages([{ id: Date.now(), text: "Chat cleared.", sender: "bot" }])}
                  className="p-2 text-white/40 hover:text-red-400 transition-colors" title="Clear Chat"
                >
                  <FaTrashAlt size={14} />
                </button>
                <button onClick={() => setIsOpen(false)} className="p-2 text-white/40 hover:text-white transition-colors">
                  <FaTimes size={16} />
                </button>
              </div>
            </div>

            {/* --- MESSAGES AREA --- */}
            <div className="flex-1 px-5 py-6 overflow-y-auto space-y-4 cyber-scrollbar">
              {messages.map((m) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={m.id}
                  className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`
                      relative px-4 py-2.5 text-[13px] leading-relaxed max-w-[85%] shadow-sm
                      ${m.sender === "user"
                        ? "bg-gradient-to-br from-violet-600 to-indigo-600 text-white rounded-2xl rounded-tr-sm"
                        : "bg-[#1f1f22] text-gray-200 border border-white/5 rounded-2xl rounded-tl-sm"
                      }
                    `}
                  >
                    <div dangerouslySetInnerHTML={{ __html: m.text }} />
                  </div>
                </motion.div>
              ))}

              {/* Typing Animation */}
              {isTyping && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
                  <div className="bg-[#1f1f22] px-4 py-3 rounded-2xl rounded-tl-sm border border-white/5 flex gap-1 items-center">
                    {[0, 0.2, 0.4].map((delay) => (
                      <motion.div
                        key={delay}
                        className="w-1.5 h-1.5 bg-violet-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* --- QUICK SUGGESTIONS --- */}
            <div className="px-5 pb-2">
              <div className="flex gap-2 overflow-x-auto cyber-scrollbar pb-2">
                {suggestions.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMessage(s.val)}
                    className="
                                flex items-center gap-1.5 px-3 py-1.5 
                                bg-white/5 hover:bg-violet-600/20 hover:border-violet-500/50 
                                border border-white/10 rounded-full 
                                text-[11px] text-white/70 hover:text-white 
                                transition-all whitespace-nowrap
                            "
                  >
                    {s.icon} {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* --- INPUT AREA --- */}
            <div className="p-4 bg-transparent z-10 pt-0">
              <div className="
                relative flex items-center gap-2 p-1.5 pl-4
                bg-[#18181b] border border-white/10
                rounded-full focus-within:border-violet-500/50 
                focus-within:ring-1 focus-within:ring-violet-500/20
                transition-all duration-300
              ">
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-white/30 outline-none"
                />
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim()}
                  className={`
                    p-2.5 rounded-full flex-shrink-0 transition-all duration-200
                    ${inputValue.trim() ? 'bg-violet-600 text-white shadow-[0_0_15px_-3px_rgba(139,92,246,0.6)]' : 'bg-white/5 text-white/20'}
                  `}
                >
                  <FaPaperPlane size={14} className={inputValue.trim() ? "translate-x-0.5" : ""} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PatraAI;