import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { X, Camera } from "lucide-react";
import profileImage1 from "../../assets/A.jpg";
import profileImage2 from "../../assets/Profile.png";

// Direct path to public image
const publicImage = "/DP.jpg";

const galleryPhotos = [
  {
    id: 1,
    url: profileImage1,
    title: "Primary Profile",
    caption: "Representing core focus and engineering mindset.",
    isLocal: true,
  },
  {
    id: 2,
    url: publicImage,
    title: "Casual Capture",
    caption: "A relaxed, everyday look at my developer persona.",
    isLocal: true,
  },
  {
    id: 3,
    url: profileImage2,
    title: "Signature Portrait",
    caption: "Official portrait showcasing dedication and focus.",
    isLocal: true,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    title: "Deep Work Environment",
    caption: "Where complex logic becomes elegant user solutions.",
    isLocal: false,
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800",
    title: "Interface Crafting",
    caption: "Iterating on modern UI designs and user experience flows.",
    isLocal: false,
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800",
    title: "Clean Code Philosophy",
    caption: "Writing scalable, readable, and performant architectures.",
    isLocal: false,
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    title: "Continuous Learning",
    caption: "Constantly expanding knowledge boundaries and stack limits.",
    isLocal: false,
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    title: "Logic & Execution",
    caption: "From conceptual mockups to complete digital platforms.",
    isLocal: false,
  }
];

const PhotoGalleryModal = ({ isOpen, onClose }) => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Triplicate the array for seamless infinite looping scroll effect
  const scrollItems = [...galleryPhotos, ...galleryPhotos, ...galleryPhotos];

  useEffect(() => {
    if (!isOpen) return;

    // Pause main page scrolling (e.g. Lenis) when modal is open
    if (window.lenis) {
      window.lenis.stop();
    }
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      if (window.lenis) {
        window.lenis.start();
      }
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Handle horizontal auto-scrolling
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || !isOpen) return;

    let animationFrameId;

    const autoScroll = () => {
      if (!isPaused) {
        scrollContainer.scrollLeft += 0.8; // Controlled scrolling speed

        const scrollWidth = scrollContainer.scrollWidth;
        const maxScroll = scrollWidth / 3;

        // Reset scroll position seamlessly when the first group completes
        if (scrollContainer.scrollLeft >= maxScroll) {
          scrollContainer.scrollLeft -= maxScroll;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isOpen, isPaused]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[4px] p-4 sm:p-6 cursor-zoom-out"
    >
      {/* Centered Modal Card - Changed width to 60vw on desktop */}
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative z-10 w-[95%] lg:w-[60vw] max-h-[95vh] sm:max-h-[90vh] bg-[#09090e]/90 border border-white/[0.08] backdrop-blur-2xl rounded-[2.5rem] p-6 sm:p-8 flex flex-col shadow-[0_30px_70px_rgba(0,0,0,0.85)] cursor-default overflow-y-auto"
      >
        {/* Ambient OLED Glows inside modal card */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-20%] w-[350px] h-[350px] bg-blue-600/[0.04] rounded-full blur-[90px]" />
          <div className="absolute bottom-[-20%] right-[-20%] w-[350px] h-[350px] bg-indigo-600/[0.04] rounded-full blur-[90px]" />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] text-neutral-400 hover:text-white transition-all duration-300 active:scale-95 cursor-pointer shadow-md"
          title="Close (Esc)"
        >
          <X size={16} />
        </button>

        {/* Header */}
        <div className="mb-6 text-left flex flex-col items-start px-2 relative z-10 pr-12">
          <div className="premium-header-badge mb-2">
            <Camera size={10} className="text-blue-400 mr-1.5 animate-pulse" />
            <span className="text-neutral-300 text-[9px] font-semibold tracking-widest uppercase">
              PHOTO GALLERY
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Moments & Workspace
          </h3>
          <p className="text-neutral-400 text-xs mt-1">
            Hover or touch drag to pause scrolling.
          </p>
        </div>

        {/* Horizontal Infinite Auto-Scroll List */}
        <div className="relative w-full overflow-hidden z-10 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="flex gap-4 overflow-x-auto hide-scrollbar select-none cursor-grab active:cursor-grabbing py-2 scroll-smooth"
          >
            {scrollItems.map((photo, index) => (
              <div
                key={`${photo.id}-${index}`}
                className="flex-shrink-0 w-[160px] sm:w-[220px] md:w-[250px] aspect-[3/4] rounded-2xl overflow-hidden relative group border border-white/[0.05] hover:border-blue-500/30 hover:shadow-[0_10px_25px_rgba(59,130,246,0.1)] transition-all duration-500"
              >
                {/* Image Cover */}
                <img
                  src={photo.url}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-85 z-10" />

                {/* Local vs Web Tag */}
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/60 border border-white/5 backdrop-blur-md text-[8px] text-neutral-400 uppercase tracking-wider z-20">
                  {photo.isLocal ? "Local" : "Concept"}
                </div>

                {/* Info Text Overlay (Inside Card Bottom) */}
                <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col justify-end text-left z-20">
                  <h4 className="text-white font-semibold text-xs sm:text-sm tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                    {photo.title}
                  </h4>
                  <p className="text-neutral-400 text-[10px] leading-relaxed mt-1 line-clamp-2">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Small Close Hint at bottom */}
        <div className="mt-6 text-center text-[10px] font-medium tracking-wide uppercase text-neutral-500 z-10">
          Click outside to close
        </div>
      </motion.div>

      {/* Internal CSS for Hiding Scrollbars */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
};

export default PhotoGalleryModal;