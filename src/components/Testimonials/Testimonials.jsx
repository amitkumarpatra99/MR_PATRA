import { useRef, useEffect, useState } from "react";
import virat from "/src/assets/avatar/Virat.png";
import rohit from "/src/assets/avatar/Rohit.png";
import abd from "/src/assets/avatar/ABD.jpeg";
import a from "/src/assets/avatar/ANANYA.jpg";
import nirmal from "/src/assets/avatar/nirmal.jpg"
import geetanjali from "/src/assets/avatar/geetanjali.jpeg"

const TESTIMONIALS_DATA = [

   {
    id: 1,
    text: (
      <>
        &quot;Working with <strong className="text-white font-semibold">Amit</strong> as a freelancer was seamless. He brings <strong className="text-white font-semibold">technical depth and empathy</strong> to his projects. From database design to responsive interfaces, he stays focused on delivering a <strong className="text-white font-semibold">premium user experience</strong>.&quot;
      </>
    ),
    name: "ANANYA",
    role: "CLIENT",
    avatar: a,
  },

  {
    id: 2,
    text: (
      <>
        &quot;I mentored <strong className="text-white font-semibold">Amit</strong> during his backend internship, and what stands out most is his <strong className="text-white font-semibold">humility and problem-solving speed</strong>. No matter how complex the core logic gets, he stays <strong className="text-white font-semibold">grounded and respectful</strong>, always open to code reviews and <strong className="text-white font-semibold">genuinely striving to optimize performance</strong>.&quot;
      </>
    ),
    name: "Prof. Nirmal Kumar Sahoo",
    role: "Senior AIML Engineer, CTTC",
    avatar:nirmal,
  },
  {
    id: 3,
    text: (
      <>
        &quot;Amit shows <strong className="text-white font-semibold">exceptional analytical thinking</strong>. While building out our real-time computer vision models, his grasp of <strong className="text-white font-semibold">Python and OpenCV</strong> was impressive. He is a fast learner, a disciplined engineer, and a <strong className="text-white font-semibold">consistent builder</strong>.&quot;
      </>
    ),
    name: "Prof. Geetanjali Das",
    role: "Senior Web Developer,CTTC",
    avatar:geetanjali,
  },
 
  {
    id: 4,
    text: (
      <>
        &quot;<strong className="text-white font-semibold">Dedicated, creative, and highly dependable</strong> — Amit brings <strong className="text-white font-semibold">unmatched energy</strong> to full-stack development. His positive attitude and <strong className="text-white font-semibold">commitment to writing clean, scalable Next.js code</strong> truly set him apart in high-pressure deployments.&quot;
      </>
    ),
    name: "VIRAT KOHLI",
    role: "Indian Cricketer",
    avatar: virat,
  },
  {
    id: 5,
    text: (
      <>
        &quot;Amit is a <strong className="text-white font-semibold">disciplined and enthusiastic learner</strong>. He handles complex MERN stack integrations with ease. He is extremely <strong className="text-white font-semibold">hardworking</strong>, and his dedication to maintaining 30+ open-source repositories shows great promise for a <strong className="text-white font-semibold">bright future in tech</strong>.&quot;
      </>
    ),
    name: "ROHIT SHARMA",
    role: "Indian Cricketer",
    avatar: rohit,
  },
  {
    id: 6,
    text: (
      <>
        &quot;A true <strong className="text-white font-semibold">360-degree developer</strong>. Amit easily transitions between React frontend interfaces and robust Node.js backends. His ability to <strong className="text-white font-semibold">adapt to modern architectures</strong> and his obsessive attention to UI details are remarkable.&quot;
      </>
    ),
    name: "AB DE VILLIERS",
    role: "RCB PLAYER",
    avatar: abd,
  }
];

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Triplicate the array to ensure we never run out of scrolling runway 
  // before the JS seamlessly resets it back to the middle.
  const scrollItems = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;

    const autoScroll = () => {
      if (!isPaused) {
        scrollContainer.scrollLeft += 1; // Adjust this number for speed (higher = faster)

        const scrollWidth = scrollContainer.scrollWidth;
        const maxScroll = scrollWidth / 3; 

        if (scrollContainer.scrollLeft >= maxScroll) {
          scrollContainer.scrollLeft -= maxScroll;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

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
            Few Kind <span className="text-neutral-400">Words</span> 
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            Read what my seniors have to say about me.
          </p>
        </div>

        {/* Native JS Scroll Layout */}
        <div className="w-full relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          
          <div 
            ref={scrollRef}
            // Pause scrolling on both mouse hover and touch drag
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            // 'py-8' added to give the cards vertical room to float up without getting clipped
            className="flex w-full gap-6 py-8 overflow-x-auto hide-scrollbar px-10 cursor-grab active:cursor-grabbing"
          >
            {scrollItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                // hover:-translate-y-4 added for the rise up effect!
                className="shrink-0 w-[290px] sm:w-[350px] min-h-[260px] rounded-[2rem] bg-[#0b0c10]/40 border border-white/[0.08] backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between relative hover:bg-[#12141c]/60 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(255,255,255,0.04)] hover:-translate-y-4 transition-all duration-500 ease-out group/card"
              >
                {/* Subtle Inner Highlight */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none rounded-[2rem]" />

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
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
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

      {/* Internal CSS for Hiding Scrollbar */}
      <style dangerouslySetInnerHTML={{
        __html: `
        /* Hide scrollbar for Chrome, Safari and Opera */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}} />
    </section>
  );
};

export default Testimonials;