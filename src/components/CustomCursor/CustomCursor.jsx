import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const animationFrame = useRef(null);
  const cursor = useRef(null);
  const mouse = useRef({ x: 0, y: 0, px: 0, py: 0 });

  useEffect(() => {
    const isMobileDevice = () => window.innerWidth <= 768 || window.matchMedia("(pointer: coarse)").matches;
    if (isMobileDevice()) return;

    cursor.current = document.createElement("div");
    cursor.current.className = "magic-cursor";
    document.body.appendChild(cursor.current);

    const interactiveSelector = "button, a, input, textarea, select, [role='button'], [data-cursor]";

    const updatePosition = () => {
      mouse.current.px += (mouse.current.x - mouse.current.px) * 0.18;
      mouse.current.py += (mouse.current.y - mouse.current.py) * 0.18;
      cursor.current.style.transform = `translate3d(${mouse.current.px}px, ${mouse.current.py}px, 0)`;
      animationFrame.current = requestAnimationFrame(updatePosition);
    };

    const handleMouseMove = (event) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
      cursor.current.style.opacity = "1";
    };

    const handlePointerEnter = (event) => {
      if (event.target.closest(interactiveSelector)) {
        cursor.current.classList.add("magic-cursor-hover");
      }
    };

    const handlePointerLeave = (event) => {
      if (event.target.closest(interactiveSelector)) {
        cursor.current.classList.remove("magic-cursor-hover");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handlePointerEnter, true);
    window.addEventListener("mouseout", handlePointerLeave, true);

    updatePosition();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handlePointerEnter, true);
      window.removeEventListener("mouseout", handlePointerLeave, true);
      cancelAnimationFrame(animationFrame.current);
      cursor.current?.remove();
    };
  }, []);

  return (
    <style>{`
      @media (min-width: 769px) and (pointer: fine) {
        body {
          cursor: none !important;
          -webkit-tap-highlight-color: transparent;
        }

        .magic-cursor {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.75);
          box-shadow: 0 0 18px rgba(255, 255, 255, 0.35);
          transform: translate3d(-50%, -50%, 0);
          transition: width 180ms ease, height 180ms ease, background 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
          z-index: 999999;
          mix-blend-mode: screen;
          will-change: transform;
          opacity: 0;
        }

        .magic-cursor-hover {
          width: 36px;
          height: 36px;
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.95);
          box-shadow: 0 0 28px rgba(255, 255, 255, 0.28);
        }

        button, a, input, textarea, select, [role='button'], .modal, .toggle-menu {
          cursor: pointer !important;
        }
      }

      @media (max-width: 768px), (pointer: coarse) {
        .magic-cursor {
          display: none !important;
        }
      }
    `}</style>
  );
};

export default CustomCursor;
