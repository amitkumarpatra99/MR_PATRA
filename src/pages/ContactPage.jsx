import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes, FaUser, FaEnvelope, FaTag, FaCommentDots } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaIndianRupeeSign } from "react-icons/fa6";

// Define input fields configuration outside component to clean up render logic
const INPUT_FIELDS = [
  { name: "user_email", type: "email", placeholder: "Your Email", autoComplete: "email", icon: <FaEnvelope className="text-xl" /> },
  { name: "user_name", type: "text", placeholder: "Your Name", autoComplete: "name", icon: <FaUser className="text-xl" /> },
  { name: "subject", type: "text", placeholder: "Subject", autoComplete: "off", icon: <FaTag className="text-xl" /> },
];

const ContactPage = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      .then(
        () => {
          formRef.current.reset();
          toast.success("Message sent successfully ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        () => {
          toast.error("Failed to send message ❌", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      )
      .finally(() => setIsSending(false));
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative min-h-screen flex items-start md:items-center justify-center bg-transparent text-white overflow-hidden py-5 pt-28 md:pt-5 pb-20 px-4">

      {/* Background decoration elements (Optional visual flair) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-72 h-72 bg-blue-600/[0.06] rounded-full blur-[80px]" />
        <div className="absolute bottom-[10%] right-[20%] w-72 h-72 bg-indigo-600/[0.04] rounded-full blur-[80px]" />
      </div>

      {/* Close Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate("/")}
        className="fixed top-6 right-6 z-50 p-3 rounded-full 
                   bg-white/[0.03] backdrop-blur-xl 
                   border border-white/[0.08] shadow-lg 
                   text-neutral-400 hover:text-white hover:bg-white/[0.1]
                   transition-all duration-300"
        aria-label="Close Contact Form"
      >
        <FaTimes size={24} />
      </motion.button>

      {/* Main Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-lg relative z-10"
      >
        <ToastContainer />

        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            CONT<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">ACT</span>
          </h2>

          <div className="flex justify-center mt-3">
            <div className="w-24 h-1 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400" />
          </div>

          <p className="mt-4 text-neutral-400 font-medium">
            Feel free to get in touch — I’m eager to explore 🚀
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          variants={itemVariants}
          className="glass-card rounded-3xl p-6 sm:p-8 md:p-10"
        >
          <h3 className="text-xl font-semibold text-center text-white mb-8">
            Send me a message 📞
          </h3>

          <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-5">
            {/* Input Fields Loop */}
            {INPUT_FIELDS.map((field, i) => (
              <motion.div key={field.name} variants={itemVariants} className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-400 transition-colors duration-300">
                  {field.icon}
                </div>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  autoComplete={field.autoComplete}
                  required
                  className="w-full pl-12 pr-5 py-4 rounded-xl 
                             bg-white/[0.02] 
                             text-white placeholder-gray-400
                             border border-white/[0.08]
                             focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                             transition-all duration-300"
                />
              </motion.div>
            ))}

            {/* Message Textarea */}
            <motion.div variants={itemVariants} className="relative group">
              <div className="absolute left-4 top-5 text-gray-400 group-focus-within:text-blue-400 transition-colors duration-300">
                <FaCommentDots className="text-xl" />
              </div>
              <textarea
                name="message"
                placeholder="Write your message here..."
                rows={4}
                required
                className="w-full pl-12 pr-5 py-4 rounded-xl 
                           bg-white/[0.02] 
                           text-white placeholder-gray-400
                           border border-white/[0.08]
                           focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                           transition-all duration-300 resize-none"
              />
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="space-y-4 pt-2">
              <button
                type="submit"
                disabled={isSending}
                className="w-full py-4 rounded-xl text-white font-bold text-lg tracking-wide
                           bg-gradient-to-r from-blue-500 to-indigo-700
                           hover:shadow-lg hover:shadow-blue-500/20 hover:scale-[1.02]
                           disabled:opacity-70 disabled:cursor-not-allowed
                           transform transition-all duration-300 active:scale-[0.98]"
              >
                {isSending ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>

              <a
                href="https://rzp.io/rzp/amitpatra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2
                           w-full py-4 rounded-xl text-white font-bold text-lg
                           bg-gradient-to-r from-emerald-500 to-green-700
                           hover:shadow-lg hover:shadow-green-500/20 hover:scale-[1.02]
                           transform transition-all duration-300 active:scale-[0.98]"
              >
                <FaIndianRupeeSign size={20} />
                <span>Support Me</span>
              </a>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactPage;