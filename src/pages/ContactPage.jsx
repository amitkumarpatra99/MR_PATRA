import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    emailjs.sendForm("service_nybaakp", "template_iiffbgd", formRef.current, "qnUAcjHnJ95NecfDA")
      .then(() => {
        formRef.current.reset();
        toast.success("Message sent.", { theme: "dark" });
      })
      .finally(() => setIsSending(false));
  };

  return (
    <div className="min-h-screen bg-transparent text-white flex flex-col items-center justify-center p-6 font-sans">
      <ToastContainer position="bottom-center" theme="dark" />

      {/* Minimalist Close Button */}
      <button 
        onClick={() => navigate("/")}
        className="fixed top-8 right-8 text-neutral-500 hover:text-white transition-colors"
      >
        <FaTimes size={20} />
      </button>

      {/* Content Container */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="mb-10 flex flex-col items-start w-full">
          <div className="premium-header-badge mb-6">
            <span className="premium-header-badge-dot animate-pulse" />
            <span className="text-neutral-300 text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
              CONTACT
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            Let's Connect
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            I am open to new opportunities.
          </p>
        </div>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          {[
            { name: "user_name", placeholder: "Name" },
            { name: "user_email", placeholder: "Email" },
            { name: "subject", placeholder: "Subject" }
          ].map((field) => (
            <input
              key={field.name}
              type="text"
              name={field.name}
              placeholder={field.placeholder}
              required
              className="w-full bg-[#111] border border-white/[0.08] rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-neutral-500 transition-all placeholder:text-neutral-600"
            />
          ))}
          
          <textarea
            name="message"
            placeholder="Message"
            required
            rows={4}
            className="w-full bg-[#111] border border-white/[0.08] rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-neutral-500 transition-all placeholder:text-neutral-600 resize-none"
          />

          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-white text-black font-medium text-sm py-4 rounded-xl hover:bg-neutral-200 transition-all active:scale-[0.98]"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactPage;