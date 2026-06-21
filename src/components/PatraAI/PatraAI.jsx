import { useState, useRef, useEffect } from "react";
import {
  FaTimes,
  FaVolumeUp,
  FaVolumeMute,
  FaPaperPlane
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { generateLocalResponse } from "./aiEngine";
import mrpatra from "/DP.jpg";

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
  const [showButton, setShowButton] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [inputText, setInputText] = useState("");

  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  const scrollTimer = useRef(null);

  // Suggested questions
  const [activeSuggestions, setActiveSuggestions] = useState([
    { label: "Projects 💻", val: "Show me your projects" },
    { label: "Skills 🚀", val: "What are your skills?" },
    { label: "Experience 💼", val: "Tell me about your experience" },
    { label: "Contact 📞", val: "How can I contact you?" },
  ]);

  /* ---------------- SCROLL & AUTO HIDE ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      if (!isOpen) {
        setShowButton(false);
        clearTimeout(scrollTimer.current);
        scrollTimer.current = setTimeout(() => setShowButton(true), 700);
      }

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  /* ---------------- CLICK OUTSIDE & ESC KEY ---------------- */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatContainerRef.current && !chatContainerRef.current.contains(event.target) && isOpen) {
        setIsOpen(false);
      }
    };

    const handleEscKey = (event) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen]);

  /* ---------------- TIME GREETING ---------------- */
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
      isMarkdown: false,
    },
  ]);

  /* ---------------- SOUND & UTILS ---------------- */
  const scrollRingRadius = 26;
  const circumference = 2 * Math.PI * scrollRingRadius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  const playSound = (type) => {
    if (!soundEnabled) return;
    const sound = type === "send" ? sendSound : receiveSound;
    sound.currentTime = 0;
    sound.play().catch(() => { });
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isOpen]);

  /* ---------------- AI LOGIC ---------------- */
  const handleSendMessage = (text) => {
    if (!text || !text.trim()) return;
    playSound("send");
    
    // Add user message
    const userMsg = { id: Date.now(), text: text, sender: "user", isMarkdown: false };
    setMessages((p) => [...p, userMsg]);
    setIsTyping(true);

    // Check for clear chat
    const normalizedText = text.toLowerCase().trim();
    if (normalizedText === "clear" || normalizedText.includes("clear chat") || normalizedText.includes("clear history")) {
      setTimeout(() => {
        setMessages([{ id: Date.now(), text: "Chat cleared! 🧹 How can I help?", sender: "bot", isMarkdown: false }]);
        setActiveSuggestions([
          { label: "Projects 💻", val: "Show me your projects" },
          { label: "Skills 🚀", val: "What are your skills?" },
          { label: "Experience 💼", val: "Tell me about your experience" },
          { label: "Contact 📞", val: "How can I contact you?" },
        ]);
        playSound("receive");
        setIsTyping(false);
      }, 600);
      return;
    }

    // Small delay to simulate thinking feel
    setTimeout(() => {
      try {
        // Local engine response
        const localResult = generateLocalResponse(text);
        setMessages((p) => [
          ...p,
          { id: Date.now() + 1, text: localResult.text, sender: "bot", isMarkdown: false }
        ]);
        playSound("receive");
        
        if (localResult.chips) {
          setActiveSuggestions(localResult.chips);
        }
      } catch (err) {
        console.error("Chat Error:", err);
        setMessages((p) => [
          ...p,
          { 
            id: Date.now() + 1, 
            text: `⚠️ **Error generating response.** ${err.message || "Please try again."}`, 
            sender: "bot", 
            isMarkdown: true 
          }
        ]);
        playSound("receive");
      } finally {
        setIsTyping(false);
      }
    }, 600);
  };

  const isNavChip = (chip) => {
    const label = chip.label.toLowerCase();
    const val = chip.val.toLowerCase();
    return (
      val === "main menu" ||
      val === "show me your projects" ||
      val === "tell me about other projects" ||
      label.includes("back") ||
      label.includes("menu") ||
      label.includes("other projects")
    );
  };

  const navOptions = activeSuggestions.filter(isNavChip);
  const contentOptions = activeSuggestions.filter(c => !isNavChip(c));

  return (
    <>
      {/* ================= FLOATING BUTTON ================= */}
      <AnimatePresence>
        {showButton && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed z-[50] bottom-24 right-4 md:bottom-8 md:right-8"
          >
            <button
              onClick={() => setIsOpen(true)}
              className="
                group relative flex items-center justify-center
                w-14 h-14 md:w-16 md:h-16 rounded-full
                bg-[#050b1a]/90 backdrop-blur-xl
                shadow-[0_0_30px_rgba(59,130,246,0.25)]
                hover:shadow-[0_0_50px_rgba(59,130,246,0.45)]
                transition-all duration-300 hover:scale-105
                border border-white/[0.08]
              "
            >
              <span className="absolute top-0 right-0 w-3 h-3 bg-blue-500 rounded-full border-2 border-[#020205] z-20 animate-pulse"></span>
 
              <div
                className="absolute inset-1 rounded-full border border-dashed border-blue-500/30"
                style={{ animation: "spin 10s linear infinite" }}
              />
 
              <svg className="absolute inset-0 w-full h-full -rotate-90 p-1" viewBox="0 0 60 60">
                <circle cx="30" cy="30" r={scrollRingRadius} fill="transparent" stroke="currentColor" className="text-white/[0.05]" strokeWidth="3" />
                <circle
                  cx="30" cy="30" r={scrollRingRadius} fill="transparent" stroke="#3b82f6" strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-200"
                />
              </svg>
 
              <div className="absolute inset-0 m-auto w-9 h-9 md:w-10 md:h-10 rounded-full bg-blue-950/20 backdrop-blur-md flex items-center justify-center text-blue-400 overflow-hidden p-[2px] border border-blue-500/20">
                <img src={mrpatra} alt="Patra AI" className="w-full h-full object-cover rounded-full" />
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= CHAT WINDOW ================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsOpen(false);
              }}
              className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-[2px] z-[9998]"
            />

            <motion.div
              ref={chatContainerRef}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="
                fixed z-[9999] flex flex-col overflow-hidden shadow-2xl
                bg-[#050b1a]/95 backdrop-blur-2xl text-white
                border border-white/[0.08]
                bottom-0 left-0 right-0 w-full h-[85dvh] rounded-t-[24px]
                md:bottom-24 md:right-8 md:w-[380px] md:h-[600px] md:rounded-2xl md:left-auto
              "
            >
              {/* --- HEADER --- */}
              <div className="relative flex items-center justify-between px-5 py-4 border-b border-white/[0.05] bg-gradient-to-r from-blue-950/20 via-transparent to-transparent">
                <div className="flex items-center gap-3">
                  <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 p-[2px]">
                    <img src={mrpatra} alt="Patra AI" className="w-full h-full object-cover rounded-full" />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-blue-400 border-2 border-[#050b1a] rounded-full animate-pulse"></span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-sm font-bold text-white tracking-wide">
                      Patra AI
                    </h3>
                    <span className="text-[10px] text-blue-400 font-bold tracking-wider uppercase flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></span> 
                      Local Assistant
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button onClick={() => setSoundEnabled(!soundEnabled)} className="p-2 rounded-full hover:bg-white/5 text-white/40 hover:text-white transition-colors">
                    {soundEnabled ? <FaVolumeUp size={14} /> : <FaVolumeMute size={14} />}
                  </button>
                  <button 
                    onClick={() => {
                      setIsOpen(false);
                    }} 
                    className="p-2 rounded-full hover:bg-white/5 text-white/40 hover:text-white transition-colors"
                  >
                    <FaTimes size={16} />
                  </button>
                </div>
              </div>

              <div className="flex-1 px-5 py-6 overflow-y-auto space-y-4 cyber-scrollbar scroll-smooth bg-transparent" data-lenis-prevent>
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
                          ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl rounded-tr-sm"
                          : "bg-[#111625]/90 text-neutral-200 border border-white/[0.05] rounded-2xl rounded-tl-sm"
                        }
                      `}
                    >
                      {m.isMarkdown ? (
                        <ReactMarkdown 
                          remarkPlugins={[remarkGfm]}
                          className="prose prose-sm dark:prose-invert max-w-none text-xs leading-relaxed text-gray-200 break-words"
                          components={{
                            a: ({ href, children }) => (
                              <a 
                                href={href} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                style={{ color: '#60a5fa', fontWeight: 'bold', textDecoration: 'underline' }}
                              >
                                {children}
                              </a>
                            )
                          }}
                        >
                          {m.text}
                        </ReactMarkdown>
                      ) : (
                        <div dangerouslySetInnerHTML={{ __html: m.text }} className="break-words font-medium text-xs leading-relaxed" />
                      )}
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                    <div className="bg-[#111625]/90 px-3 py-3 rounded-2xl rounded-tl-sm border border-white/[0.05] flex gap-1 items-center ml-1 shadow-sm">
                      {[0, 0.2, 0.4].map((delay) => (
                        <motion.div
                          key={delay}
                          className="w-1.5 h-1.5 bg-blue-500/50 rounded-full"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="bg-[#050b1a]/95 border-t border-white/[0.05] p-3 pb-4">
                {/* Fixed Navigation / Back Buttons at the top of the footer */}
                {navOptions.length > 0 && (
                  <div className="flex flex-wrap gap-2 justify-center mb-3">
                    {navOptions.map((s, i) => (
                      <button
                        key={i}
                        onClick={() => handleSendMessage(s.val)}
                        className="
                          flex items-center gap-1.5 px-4 py-1.5 
                          bg-blue-600 hover:bg-blue-700
                          text-white font-semibold rounded-full text-[11px] 
                          transition-all shadow-md active:scale-95 transform duration-150
                        "
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                )}
                
                {contentOptions.length > 0 && (
                  <>
                    <div className="text-[10px] font-bold text-white/30 uppercase tracking-wider mb-2 text-center select-none">
                      Select a topic to explore
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center max-h-[140px] overflow-y-auto cyber-scrollbar p-1" data-lenis-prevent>
                      {contentOptions.map((s, i) => (
                        <button
                          key={i}
                          onClick={() => handleSendMessage(s.val)}
                          className="
                            flex items-center gap-1.5 px-3.5 py-2 
                            bg-white/[0.03] hover:bg-blue-500/15 
                            border border-white/[0.05] hover:border-blue-500/30 
                            rounded-full text-[11px] font-medium text-neutral-300 hover:text-white 
                            transition-all shadow-sm active:scale-95 transform duration-150
                          "
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {/* Custom Chat Input Box */}
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!inputText.trim()) return;
                    handleSendMessage(inputText);
                    setInputText("");
                  }}
                  className="flex items-center gap-2 mt-3 pt-2 border-t border-white/[0.05]"
                >
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Ask Patra AI or type 'clear'..."
                    className="flex-1 bg-white/[0.03] text-white placeholder-white/30 text-xs px-4 py-2.5 rounded-full border border-white/[0.08] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all"
                  />
                  <button
                    type="submit"
                    className="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors shadow-md active:scale-95"
                  >
                    <FaPaperPlane size={12} />
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default PatraAI;