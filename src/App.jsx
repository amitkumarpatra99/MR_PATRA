import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";

// Components
import Navbar from "./components/Navbar/Navbar";
import PatraAI from "./components/PatraAI/PatraAI";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import About from './components/About/About';
import CustomCursor from "./components/CustomCursor/CustomCursor";
import StickyMiniNavbar from "./components/StickyMiniNavbar/StickyMiniNavbar";
import MobileTopBar from "./components/MobileTopBar/MobileTopBar";
import SectionDivider from "./components/SectionDivider";
import Testimonials from "./components/Testimonials/Testimonials";
import VisitingBanner from "./components/VisitingBanner/VisitingBanner";

// Pages
import ExperiencePage from "./pages/ExperiencePage";
import EducationPage from "./pages/EducationPage";
import ContactPage from "./pages/ContactPage";
import NavigationPage from "./pages/NavigationPage";

const pageMotion = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.35, ease: "easeIn" } },
};

const PageContainer = ({ children }) => (
  <motion.main
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageMotion}
    className="bg-transparent min-h-screen flex flex-col"
  >
    {children}
  </motion.main>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageContainer>
              <Navbar />
              <Home />
              <About />
              <SectionDivider />
              <Skills />
              <SectionDivider />
              <Projects />
              <SectionDivider />
              <Testimonials />
              <SectionDivider />
              <VisitingBanner />
              <Footer />
            </PageContainer>
          }
        />

        <Route
          path="/experience"
          element={
            <PageContainer>
              <ExperiencePage />
              <Footer />
            </PageContainer>
          }
        />

        <Route
          path="/education"
          element={
            <PageContainer>
              <EducationPage />
              <Footer />
            </PageContainer>
          }
        />

        <Route
          path="/contact"
          element={
            <PageContainer>
              <ContactPage />
              <Footer />
            </PageContainer>
          }
        />

        <Route
          path="/navigation"
          element={
            <PageContainer>
              <NavigationPage />
              <Footer />
            </PageContainer>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
    });

    window.lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
      window.lenis = null;
    };
  }, []);

  return (
    <>
      {/* 1. Global UI elements */}
      <CustomCursor />
      <PatraAI />

      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
        <div className="glow-mesh" />
        <div className="noise-overlay" />
      </div>

      <div className="App selection:bg-blue-600/30 selection:text-white bg-transparent min-h-screen relative z-10">
        <BrowserRouter>
          <ScrollToTop />
          <div className="bg-transparent text-white min-h-screen transition-colors duration-500">
            <StickyMiniNavbar />
            <MobileTopBar />

            <div className="relative">
              <AnimatedRoutes />
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;