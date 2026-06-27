import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Mail, Phone, MapPin, Coffee, ExternalLink, Send, CreditCard } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaWhatsapp, FaPaperPlane } from "react-icons/fa6";

const ContactPage = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm(
        "service_nybaakp",
        "template_iiffbgd",
        formRef.current,
        "qnUAcjHnJ95NecfDA"
      )
      .then(() => {
        formRef.current.reset();
        toast.success("Message sent.", { theme: "dark" });
      })
      .finally(() => setIsSending(false));
  };

  return (
    <div className="min-h-screen bg-transparent text-white flex flex-col items-center justify-center p-6 font-sans relative overflow-hidden">
      <ToastContainer position="bottom-center" theme="dark" />

      {/* Ambient OLED Background Glows */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/[0.04] rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/[0.03] rounded-full blur-[120px] mix-blend-screen" />
      </div>

      {/* --- CLOSE BUTTON --- */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05, rotate: 90 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/")}
        className="fixed top-4 right-4 md:top-6 md:right-6 z-50 w-11 h-11 md:w-12 md:h-12 premium-close-btn cursor-pointer shadow-lg"
      >
        <FaTimes size={20} />
      </motion.button>

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl px-4 py-12 md:py-20 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Column 1: Info and Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-10">
            <div>
              <div className="premium-header-badge mb-6">
                <span className="premium-header-badge-dot animate-pulse" />
                <span className="text-neutral-300 text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
                  CONTACT
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
                Let&apos;s Build <br className="hidden sm:inline" /> Something Great.
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base max-w-sm">
                I am open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!
              </p>
            </div>

            {/* Direct Contact info */}
            <div className="flex flex-col gap-4">
              {[
                { icon: <Mail size={18} />, label: "Email", value: "mrpatra.web@gmail.com", href: "mailto:mrpatra.web@gmail.com" },
                { icon: <Phone size={18} />, label: "Phone", value: "+91 81441 29955", href: "tel:+918144129955" },
                { icon: <MapPin size={18} />, label: "Location", value: "Bhubaneswar, Odisha, India", href: null }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.08] text-neutral-400 group-hover:bg-blue-500/[0.1] group-hover:border-blue-500/[0.2] group-hover:text-blue-400 transition-all duration-300 shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-neutral-500 font-bold tracking-widest uppercase">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a href={item.href} className="text-neutral-200 hover:text-white text-sm sm:text-base font-medium transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-neutral-200 text-sm sm:text-base font-medium">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social media & Coffee Container */}
            <div className="space-y-6 pt-2">
              {/* Socials */}
              <div>
                <span className="text-[10px] text-neutral-500 font-bold tracking-widest uppercase block mb-3">Connect With Me</span>
                <div className="flex flex-wrap items-center gap-3">
                  {[
                    { icon: <FaLinkedin size={18} />, link: "https://www.linkedin.com/in/amitkumarpatra99", color: "hover:text-blue-500 hover:border-blue-500 hover:bg-blue-500/5 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]" },
                    { icon: <FaGithub size={18} />, link: "https://github.com/amitkumarpatra99", color: "hover:text-white hover:border-white hover:bg-white/5 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]" },
                    { icon: <FaInstagram size={18} />, link: "https://www.instagram.com/mr_patraa_", color: "hover:text-pink-500 hover:border-pink-500 hover:bg-pink-500/5 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]" },
                    { icon: <FaTwitter size={18} />, link: "https://x.com/mr_patra_", color: "hover:text-white hover:border-white hover:bg-white/5 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]" },
                    { icon: <FaWhatsapp size={18} />, link: "https://wa.me/8144129955", color: "hover:text-green-500 hover:border-green-500 hover:bg-green-500/5 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]" },
                    {
                      icon: <CreditCard size={18} />,
                      link: "https://pages.razorpay.com/amitpatra",
                      color: "hover:text-purple-500 hover:border-purple-500 hover:bg-purple-500/5 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                    }

                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-11 h-11 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.08] text-neutral-400 transition-all duration-300 hover:-translate-y-1 ${social.color}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Warm Cup Integration */}
              <a
                href="https://warmcup.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between p-4 rounded-2xl bg-gradient-to-br from-amber-500/5 to-amber-600/[0.01] border border-amber-500/20 hover:border-amber-500/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.08)] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all duration-500" />

                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 group-hover:bg-amber-500/20 transition-all duration-300 shrink-0">
                    <Coffee size={18} className="animate-bounce animate-duration-1000" style={{ animationDuration: '3s' }} />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold flex items-center gap-1.5 mb-0.5 group-hover:text-amber-300 transition-colors">
                      Support on Warm Cup
                    </h4>
                  </div>
                </div>
                <ExternalLink size={16} className="text-neutral-500 group-hover:text-amber-400 transition-colors relative z-10 opacity-50 group-hover:opacity-100" />
              </a>
            </div>
          </div>

          {/* Column 2: Form */}
          <div className="lg:col-span-7 h-full flex flex-col justify-center">
            <div className="p-6 sm:p-10 rounded-[2rem] bg-white/[0.02] border border-white/[0.08] backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.3)] relative overflow-hidden group">

              {/* Premium top edge highlight */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />

              {/* Refined inner gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-indigo-500/[0.03] pointer-events-none" />

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-8 flex items-center gap-2 relative z-10">
                <FaPaperPlane size={20} className="text-blue-400" />
                <span>Send a Message</span>
              </h3>

              <form ref={formRef} onSubmit={sendEmail} className="space-y-5 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-400 pl-1 uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      name="user_name"
                      placeholder="John Doe"
                      required
                      className="w-full bg-white/[0.02] border border-white/[0.08] rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.04] focus:ring-1 focus:ring-blue-500/30 focus:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all placeholder:text-neutral-600 text-white"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-400 pl-1 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="john@example.com"
                      required
                      className="w-full bg-white/[0.02] border border-white/[0.08] rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.04] focus:ring-1 focus:ring-blue-500/30 focus:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all placeholder:text-neutral-600 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-400 pl-1 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="How can I help you?"
                    required
                    className="w-full bg-white/[0.02] border border-white/[0.08] rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.04] focus:ring-1 focus:ring-blue-500/30 focus:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all placeholder:text-neutral-600 text-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-400 pl-1 uppercase tracking-wider">Message</label>
                  <textarea
                    name="message"
                    placeholder="Write your message here..."
                    required
                    rows={4}
                    className="w-full bg-white/[0.02] border border-white/[0.08] rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.04] focus:ring-1 focus:ring-blue-500/30 focus:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all placeholder:text-neutral-600 resize-none text-white font-sans"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full group relative flex items-center justify-center gap-2 bg-white text-black font-semibold text-sm py-4 rounded-full hover:bg-neutral-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 active:scale-[0.98] disabled:opacity-50 mt-2"
                >
                  <span>{isSending ? "Sending..." : "Send Message"}</span>
                  {!isSending && <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
              </form>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;