import React from "react";
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


import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExperiencePage from "./pages/ExperiencePage";
import EducationPage from "./pages/EducationPage";
import ContactPage from "./pages/ContactPage";


import { ThemeProvider } from "./context/ThemeContext";

const App = () => {

  return (
    <ThemeProvider>
      <CustomCursor />
      <PatraAI />

      <div className="App">
        <BrowserRouter>
          <div className="bg-gray-100 dark:bg-[#010c1e] transition-colors duration-300">

            <StickyMiniNavbar />
            <MobileTopBar />
            <div className="relative pt-20">

              {/* Routing logic */}
              <Routes>

                <Route
                  path="/"
                  element={
                    <div className="bg-gray-100 dark:bg-[#010c1e] min-h-screen transition-colors duration-300">
                      <Navbar />
                      <Home />
                      <About />
                      <Skills />
                      <Projects />
                      <Journey />
                      <Footer />
                    </div>
                  }
                />

                {/* EXPERIENCE PAGE */}
                <Route
                  path="/experience"
                  element={
                    <div className="bg-gray-100 dark:bg-[#011028] min-h-screen transition-colors duration-300">
                      <ExperiencePage />
                      <Footer />
                    </div>
                  }
                />

                {/* EDUCATION PAGE */}
                <Route
                  path="/education"
                  element={
                    <div className="bg-gray-100 dark:bg-[#011028] min-h-screen transition-colors duration-300">
                      <EducationPage />
                      <Footer />
                    </div>
                  }
                />



                {/* contact page  */}
                <Route
                  path="/Contact"
                  element={
                    <div className="bg-gray-100 dark:bg-[#011028] min-h-screen transition-colors duration-300">
                      <ContactPage />
                      <Footer />
                    </div>
                  }
                />
                <Route path="/navigation" element={<Journey />} />

              </Routes>
            </div>
          </div>
        </BrowserRouter >
      </div >
    </ThemeProvider>
  );
};

export default App;
