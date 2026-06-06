import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

// Components
import Navbar from "./components/Navbar/Navbar";
import PatraAI from "./components/PatraAI/PatraAI";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import About from './components/About/About';
import Journey from "./components/Journey/Journey";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import StickyMiniNavbar from "./components/StickyMiniNavbar/StickyMiniNavbar";
import MobileTopBar from "./components/MobileTopBar/MobileTopBar";
import SectionDivider from "./components/SectionDivider";

// Pages
import ExperiencePage from "./pages/ExperiencePage";
import EducationPage from "./pages/EducationPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <>
      {/* 1. Global UI elements */}
      <CustomCursor />
      <PatraAI />

      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#020205]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#020205] via-[#050b1a] to-[#000000] opacity-90" />
        
        <motion.div 
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 60, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-900/15 blur-[150px]"
        />
        <motion.div 
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 50, -40, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full bg-indigo-900/20 blur-[150px]"
        />
        <motion.div 
          animate={{
            x: [0, 40, -50, 0],
            y: [0, 60, -30, 0],
            scale: [1, 1.05, 0.9, 1],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[35%] left-[40%] w-[500px] h-[500px] rounded-full bg-blue-950/15 blur-[120px]"
        />
      </div>

      <div className="App selection:bg-blue-600/30 selection:text-white bg-transparent min-h-screen relative z-10">
        <BrowserRouter>
          <div className="bg-transparent text-white min-h-screen transition-colors duration-500">
            <StickyMiniNavbar />
            <MobileTopBar />
            
            <div className="relative">
              <Routes>
                
                {/* HOME PAGE */}
                <Route
                  path="/"
                  element={
                    <main className="bg-transparent min-h-screen flex flex-col">
                      <Navbar />
                      <Home />
                      <About />
                      <SectionDivider />
                      <Skills />
                      <Projects />
                      <Journey />
                      <Footer />
                    </main>
                  }
                />

                {/* EXPERIENCE PAGE */}
                <Route
                  path="/experience"
                  element={
                    <main className="bg-transparent min-h-screen flex flex-col">
                      <ExperiencePage />
                      <Footer />
                    </main>
                  }
                />

                {/* EDUCATION PAGE */}
                <Route
                  path="/education"
                  element={
                    <main className="bg-transparent min-h-screen flex flex-col">
                      <EducationPage />
                      <Footer />
                    </main>
                  }
                />

                {/* CONTACT PAGE */}
                <Route
                  path="/Contact"
                  element={
                    <main className="bg-transparent min-h-screen flex flex-col">
                      <ContactPage />
                      <Footer />
                    </main>
                  }
                />
                
                <Route path="/navigation" element={<Journey />} />

              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;