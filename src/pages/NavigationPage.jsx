import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Mail } from "lucide-react";

const navCards = [
  {
    title: "Experience",
    description: "Explore my work history, projects, and roles.",
    icon: Briefcase,
    path: "/experience",
  },
  {
    title: "Education",
    description: "See the degrees, certifications, and coursework I completed.",
    icon: GraduationCap,
    path: "/education",
  },
  {
    title: "Contact",
    description: "Reach out for collaboration, consulting, or new opportunities.",
    icon: Mail,
    path: "/contact",
  },
];

const NavigationPage = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-transparent text-white overflow-hidden font-sans">
      <div className="absolute inset-0 bg-[#020205]" />
      <div className="absolute top-[-10%] left-[-10%] w-[520px] h-[520px] rounded-full bg-blue-600/[0.08] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[520px] h-[520px] rounded-full bg-indigo-600/[0.06] blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-blue-300/80 mb-4 mx-auto">
            <span className="w-2 h-2 rounded-full bg-blue-300/60" />
            Navigation Hub
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Choose the next page
          </h1>
          <p className="mt-4 text-sm md:text-base text-neutral-400 max-w-2xl mx-auto">
            Jump directly to the page you need: experience, education, or contact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {navCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                whileHover={{ y: -6 }}
                className="glass-card border border-white/10 rounded-[2rem] p-8 flex flex-col justify-between shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-300 cursor-pointer"
                onClick={() => navigate(card.path)}
              >
                <div>
                  <div className="w-14 h-14 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-300 mb-6">
                    <Icon size={24} />
                  </div>
                  <h2 className="text-2xl font-semibold text-white mb-3">{card.title}</h2>
                  <p className="text-sm leading-relaxed text-neutral-300">{card.description}</p>
                </div>
                <div className="mt-8">
                  <button className="glass-button w-full py-3 text-sm font-semibold rounded-full text-black">
                    Open {card.title}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default NavigationPage;
