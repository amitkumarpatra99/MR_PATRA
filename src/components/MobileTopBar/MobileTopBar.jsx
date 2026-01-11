import React from "react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

const MobileTopBar = () => {
    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.8,
                    type: "spring",
                    stiffness: 120,
                    damping: 20
                }}
                className="pointer-events-auto relative group"
            >
                {/* GLOW EFFECT - Ambient light behind the glass */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* MAIN GLASS CAPSULE */}
                <div className="relative flex items-center gap-4 px-5 py-2.5 
                                bg-white/5 backdrop-blur-xl 
                                border border-white/20 
                                rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
                                overflow-hidden">
                    
                    {/* Top Reflection/Sheen (Makes it look 3D) */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />

                    {/* LEFT: Live Status Indicator */}
                    <div className="flex items-center gap-2">
                        <div className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_10px_#10b981]"></span>
                        </div>
                        <span className="text-[10px] font-bold text-white/90 uppercase tracking-widest drop-shadow-sm">Live</span>
                    </div>

                    {/* VERTICAL DIVIDER (More subtle now) */}
                    <div className="w-[1px] h-3 bg-white/20" />

                    {/* RIGHT: Terminal Path */}
                    <div className="flex items-center gap-2">
                        <FaCode className="text-blue-300 text-xs drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                        <span className="font-mono text-xs text-white tracking-tight flex items-center drop-shadow-sm">
                            MR PATRA
                            {/* Blinking Cursor */}
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="w-1.5 h-3 bg-blue-300 ml-1 block shadow-[0_0_8px_rgba(147,197,253,0.8)]"
                            />
                        </span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default MobileTopBar;