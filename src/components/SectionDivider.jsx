import React from "react";

const SectionDivider = () => {
  return (
    <div className="w-full flex justify-center items-center py-8 md:py-12 bg-black relative">
      {/* Subtle ambient glow behind the line to match the Midnight OLED theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 max-w-[200px] h-[4px] bg-blue-500/20 blur-lg pointer-events-none" />
      
      {/* The crisp, fading half-line */}
      <div className="w-1/2 md:w-1/3 max-w-md h-[1px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent pointer-events-none relative z-10" />
    </div>
  );
};

export default SectionDivider;