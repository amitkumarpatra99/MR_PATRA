import React, { useEffect, useRef, useState } from "react";

const IntroLoader = ({ onComplete }) => {
  const pathRef = useRef(null);
  const [strokeLength, setStrokeLength] = useState(0);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isGlowing, setIsGlowing] = useState(false);
  const [isTextFading, setIsTextFading] = useState(false);
  const [isBgFading, setIsBgFading] = useState(false);

  useEffect(() => {
    // Prevent scrolling while intro is active
    document.body.style.overflow = "hidden";

    // Set SVG path length dynamically
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setStrokeLength(length);
    }

    // 1. Start drawing the signature
    const drawTimeout = setTimeout(() => {
      setIsDrawing(true);
    }, 100);

    // 2. Trigger the premium glow effect once drawing completes
    const glowTimeout = setTimeout(() => {
      setIsGlowing(true);
    }, 2600); // 100ms delay + 2500ms drawing time

    // 3. Fade out the text first (scales down slightly and fades away)
    const textFadeTimeout = setTimeout(() => {
      setIsTextFading(true);
    }, 3300);

    // 4. Fade out the black background overlay to reveal the website
    const bgFadeTimeout = setTimeout(() => {
      setIsBgFading(true);
    }, 3700);

    // 5. Unmount the loader and restore scroll
    const completeTimeout = setTimeout(() => {
      onComplete();
    }, 4500);

    return () => {
      document.body.style.overflow = "";
      clearTimeout(drawTimeout);
      clearTimeout(glowTimeout);
      clearTimeout(textFadeTimeout);
      clearTimeout(bgFadeTimeout);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  // Scaled coordinates from Apple Hello SwiftUI Shape
  // ViewBox: 150 200 700 520
  const pathData = `
    M 189.42, 649.16
    C 274.18, 516.69 238.09, 593.94 274.18, 516.69
    C 301.96, 457.22 316.51, 377.24 305.36, 342.81
    C 264.79, 217.53 240.62, 674.07 246.51, 674.14
    C 252.4,  674.2  252.06, 541.25 281.92, 511.1
    C 311.78, 480.94 322.3,  521.11 323.67, 539.84
    C 325.89, 570.11 316.87, 618.04 318.39, 635.5
    C 324.73, 708.54 427.87, 636.82 435.99, 553.98
    C 444.71, 464.92 368.3,  469.17 383.4,  611.47
    C 388.95, 663.77 423.46, 677.24 441.8,  669.42
    C 508.13, 641.15 553.63, 496.71 552,    385.75
    C 549.88, 242.03 478.56, 387.29 495.71, 608.64
    C 502.32, 693.93 558.41, 666.19 574.99, 643.51
    C 605.64, 601.57 659.66, 480.59 649.78, 363.14
    C 639.47, 240.62 561.81, 442.49 597.45, 626.07
    C 609.34, 687.33 645.02, 666.6  654.8,  657.17
    C 678.02, 634.8  685.5,  553.6  704.74, 518.17
    C 729.06, 473.4  767.38, 506.86 768.96, 560.1
    C 772.46, 677.42 721.59, 677.49 702.63, 651.05
    C 686.27, 628.23 682.44, 560.22 704.48, 518.17
    C 719.54, 489.42 743.63, 488.71 775.3,  520.99
    C 788.25, 534.19 799.35, 531.83 808.07, 510.63
  `;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999999,
        opacity: isBgFading ? 0 : 1,
        transition: "opacity 800ms cubic-bezier(0.16, 1, 0.3, 1)",
        pointerEvents: isBgFading ? "none" : "auto",
      }}
    >
      <div
        style={{
          opacity: isTextFading ? 0 : 1,
          transform: isTextFading ? "scale(0.96)" : "scale(1)",
          transition: "opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          viewBox="150 200 700 520"
          style={{
            width: "55vw",
            maxWidth: "280px",
            height: "auto",
            overflow: "visible",
          }}
        >
          <path
            ref={pathRef}
            d={pathData}
            fill="none"
            stroke="#ffffff"
            strokeWidth="15"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: strokeLength || 9999,
              strokeDashoffset: isDrawing ? 0 : strokeLength || 9999,
              transition: "stroke-dashoffset 2500ms cubic-bezier(0.65, 0, 0.35, 1)",
              filter: isGlowing
                ? "drop-shadow(0 0 12px rgba(255, 255, 255, 0.5)) drop-shadow(0 0 30px rgba(255, 255, 255, 0.25))"
                : "drop-shadow(0 0 5px rgba(255, 255, 255, 0.2))",
              animation: isGlowing ? "hello-pulse 2.4s infinite ease-in-out" : "none",
            }}
          />
        </svg>
      </div>
      <style>{`
        @keyframes hello-pulse {
          0%, 100% {
            filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.5)) drop-shadow(0 0 30px rgba(255, 255, 255, 0.25));
            opacity: 1;
          }
          50% {
            filter: drop-shadow(0 0 18px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 45px rgba(255, 255, 255, 0.35));
            opacity: 0.95;
          }
        }
      `}</style>
    </div>
  );
};

export default IntroLoader;
