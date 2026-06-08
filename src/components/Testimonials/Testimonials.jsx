import React from "react";
import surajAvatar from "../../assets/suraj_avatar.png";
import ankitAvatar from "../../assets/ankit_avatar.png";
import satyamAvatar from "../../assets/satyam_avatar.png";
import sanketAvatar from "../../assets/sanket_avatar.png";

const TESTIMONIALS_DATA = [
  {
    id: 1,
    text: (
      <>
        "He is a <strong className="text-white font-semibold">rare blend of Intellect, resilience, and leadership</strong>. As my NCC junior, I've seen his <strong className="text-white font-semibold">discipline</strong> firsthand. A <strong className="text-white font-semibold">polymath in technology and mountaineering</strong>, he's focused, dependable, and <strong className="text-white font-semibold">built for long-term excellence</strong>."
      </>
    ),
    name: "AMIT KUMAR PATRA",
    role: "REC,WEB DEVELOPER,",
    avatar: surajAvatar,
  },
  {
    id: 2,
    text: (
      <>
        "I've known <strong className="text-white font-semibold">Amit</strong> as a junior, and what stands out most is his <strong className="text-white font-semibold">humility</strong>. No matter what he achieve or learn, he stays <strong className="text-white font-semibold">grounded and respectful</strong>, always open to feedback and <strong className="text-white font-semibold">genuinely striving to improve</strong>."
      </>
    ),
    name: "ANANYA",
    role: "CLIENT",
    avatar: ankitAvatar,
  },
  {
    id: 3,
    text: (
      <>
        "<strong className="text-white font-semibold">Dedicated, creative, and dependable</strong> — Amit brings <strong className="text-white font-semibold">leadership energy</strong> to everything he does. His positive attitude and <strong className="text-white font-semibold">commitment to excellence</strong> truly set him apart."
      </>
    ),
    name: "Satyam Kumar",
    role: "Software Engineer, British Petroleum",
    avatar: satyamAvatar,
  },
  {
    id: 4,
    text: (
      <>
        "Amit is a <strong className="text-white font-semibold">dedicated and enthusiastic learner</strong> with strong <strong className="text-white font-semibold">leadership qualities</strong>, dedication, and discipline. He is extremely <strong className="text-white font-semibold">hardworking, reliable</strong>, and inspires those around him by showing great promise for a <strong className="text-white font-semibold">bright future ahead</strong>."
      </>
    ),
    name: "Sanket",
    role: "Developer",
    avatar: sanketAvatar,
  },
];

const Testimonials = () => {
  // We duplicate the array to create a seamless, never-ending visual loop
  const marqueeItems = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA];

  return (
    <section
      id="testimonials"
      className="relative py-24 bg-transparent text-white font-sans overflow-hidden flex flex-col items-center z-10"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/[0.02] rounded-[100%] blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-[1200px] flex flex-col items-center">
        
        {/* Header Section */}
        <div className="mb-12 flex flex-col items-start w-full px-4 sm:px-6">
          <div className="premium-header-badge mb-6">
            <span className="premium-header-badge-dot animate-pulse" />
            <span className="text-neutral-300 text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
              TESTIMONIALS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
            Few kind words
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            Read what my seniors have to say about me.
          </p>
        </div>

        {/* Infinite Marquee Layout (No Scrollbars) */}
        <div className="w-full relative flex flex-col items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          
          <div className="flex w-max gap-6 py-4 animate-marquee hover:[animation-play-state:paused]">
            {marqueeItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="shrink-0 w-[290px] sm:w-[350px] min-h-[260px] rounded-[2rem] bg-[#0b0c10]/40 border border-white/[0.08] backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden hover:border-white/15 hover:shadow-[0_15px_30px_rgba(255,255,255,0.02)] transition-all duration-500 group/card cursor-default"
              >
                {/* Subtle Inner Highlight */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

                {/* Testimonial Text */}
                <p className="text-neutral-400 text-sm sm:text-[15px] leading-relaxed mb-6 font-medium selection:bg-neutral-800">
                  {item.text}
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center gap-3.5 mt-auto relative z-10">
                  {/* Avatar */}
                  <div className="w-11 h-11 rounded-full overflow-hidden border border-white/10 shrink-0 shadow-lg">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                    />
                  </div>
                  {/* Text details */}
                  <div className="flex flex-col text-left">
                    <span className="text-white font-bold text-sm tracking-tight leading-tight">
                      {item.name}
                    </span>
                    <span className="text-neutral-500 text-[11px] font-semibold tracking-wide mt-0.5 max-w-[180px] truncate" title={item.role}>
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Internal CSS for Infinite Marquee */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            /* -50% shifts it exactly halfway, minus 12px for half the flex gap to loop flawlessly */
            transform: translateX(calc(-50% - 12px));
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </section>
  );
};

export default Testimonials;