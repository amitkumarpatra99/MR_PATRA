import Education from "../components/Education/Education";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { useEffect } from "react";
import { motion } from "framer-motion";

const EducationPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <div className="relative min-h-screen bg-gray-100 dark:bg-[#010c1e] transition-colors duration-300">
            {/* Close Button - Floating Glassmorphism */}
            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => navigate("/")}
                className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 shadow-lg text-gray-700 dark:text-gray-200 hover:text-red-500 dark:hover:text-red-400 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 group"
            >
                <X size={24} strokeWidth={2.5} />
            </motion.button>

            {/* Content Container with Entry Animation */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="pt-20 px-4 md:px-8 pb-10"
            >
                <Education />
            </motion.div>
        </div>
    );
};

export default EducationPage;
