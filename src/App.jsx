import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
import IntroLoader from "./components/IntroLoader/IntroLoader";
import SectionDivider from "./components/SectionDivider";

// Pages
import ExperiencePage from "./pages/ExperiencePage";
import EducationPage from "./pages/EducationPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {/* 1. Intro and global UI elements */}
      {showIntro && <IntroLoader onComplete={() => setShowIntro(false)} />}
      {!showIntro && (
        <>
          <CustomCursor />
          <PatraAI />
        </>
      )}

      {/* 2. Global container with OLED Black background */}
      <div className="App selection:bg-blue-600/30 selection:text-white bg-black min-h-screen">
        <BrowserRouter>
          <div className="bg-black text-white min-h-screen transition-colors duration-500">
            <StickyMiniNavbar />
            <MobileTopBar />
            
            <div className="relative">
              <Routes>
                
                {/* HOME PAGE */}
                <Route
                  path="/"
                  element={
                    <main className="bg-black min-h-screen flex flex-col">
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
                    <main className="bg-black min-h-screen flex flex-col">
                      <ExperiencePage />
                      <Footer />
                    </main>
                  }
                />

                {/* EDUCATION PAGE */}
                <Route
                  path="/education"
                  element={
                    <main className="bg-black min-h-screen flex flex-col">
                      <EducationPage />
                      <Footer />
                    </main>
                  }
                />

                {/* CONTACT PAGE */}
                <Route
                  path="/Contact"
                  element={
                    <main className="bg-black min-h-screen flex flex-col">
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