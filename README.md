# ⚡ MR PATRA

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black&style=flat-square)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&style=flat-square)](https://vite.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css&style=flat-square)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.2-FF69B4?logo=framer&style=flat-square)](https://www.framer.com/motion/)
[![Gemini](https://img.shields.io/badge/Gemini_AI-1.5_Flash-8E75C2?logo=google-gemini&style=flat-square)](https://aistudio.google.com/)

A modern, high-performance, and interactive React portfolio website designed to feel like an **experience**, not just a static webpage. Powered by smooth scroll mechanisms, GPU-accelerated animations, glassmorphic UI components, and a dual-engine AI assistant chatbot.

> 🎨 *“Every animation, transition, and hover effect has a purpose — to make every scroll feel alive.”*

---

## 🚀 Key Features

### 🤖 Patra AI Assistant (Dual Engine Chatbot)
A highly sophisticated, custom-built virtual assistant representing Amit. Features include:
*   **⚡ Local Engine Mode (Offline-friendly):** An instant, rules-based keyword matcher that scans predefined lists for immediate, zero-latency answers regarding projects, skills, education, internships, and certifications.
*   **🧠 Gemini AI Engine Mode (Context-Aware):** Connects to the **Google Gemini 1.5 Flash API** using a key supplied by the user. It feeds the chatbot a comprehensive, dynamic system prompt of Amit's full profile to engage in natural, human-like dialogue.
*   **📝 Markdown Rendering:** Features native rendering of Markdown output using `react-markdown` and `remark-gfm` with styled hyperlinks to projects and certificates.
*   **⚙️ Settings Panel:** An integrated slide-up settings card where users can swap engines, toggling between local and Gemini, and paste/hide their secure Gemini API key (persisted in `localStorage`).
*   **🎵 Interactive Sound cues:** Subtle audio feedback triggers on send/receive events.
*   **📱 Scroll-Linked auto-hide:** Automatically hides the chatbot launcher icon while scrolling and brings it back gently when scroll stops.

### 🌊 Advanced Motions & Animations
*   **Lenis Smooth Scroll:** Delivers unified kinetic scrolling across all devices.
*   **Framer Motion Page Transitions:** Fluid entries, exists, and custom staggered lists.
*   **GSAP Reveals:** Scroll-triggered triggers that reveal components dynamically as you navigate.
*   **Tilt Effects:** 3D hover response on cards using `react-parallax-tilt`.

### 🎨 Visual & Theme Design
*   **Glassmorphic UI Elements:** High-end glass blurs, subtle borders, and multi-layered shadows.
*   **ThemeProvider:** Seamless transition between dark-first colors (`#010c1e`) and light mode colors.
*   **Custom Interactive Cursor:** Mouse-linked follower cursor that scales up on hover elements.
*   **Mobile-First Design:** A clean custom top-bar and navigation drawer optimized for small viewports.

---

## 🧠 Tech Stack

| Category | Technology | Usage in Portfolio |
|---|---|---|
| **Core** | React.js (v18.3) | Component-based UI Architecture |
| **Styling** | TailwindCSS + PostCSS | Utility-first styling & styling configurations |
| **Animations** | Framer Motion (v12.2) | Interface transitions & interactive micro-animations |
| **Scrolling** | Lenis | Smooth kinetic scrolling wrapper |
| **AI Integration** | Google Gemini API (1.5 Flash) | AI Chatbot backend through direct REST requests |
| **Markdown** | React Markdown + Remark GFM | Native rendering of AI text formats |
| **Forms** | EmailJS Browser | Client-side email dispatching for the contact form |
| **Build & Dev** | Vite | Ultra-fast development server & asset bundler |

---

## 📂 Project Structure

The project has been structured logically with modular components, contexts, and page routers:

```bash
src/
├── assets/                  # Public assets, project photos, PDFs, and certificates
│   ├── Project Photo/       # Screenshot showcases for projects
│   └── certificate/         # PDF copies of professional internship certificates
├── components/              # Reusable UI component modules
│   ├── About/               # About section containing background and bio summary
│   ├── CustomCursor/        # Mouse tracker cursor with hover physics
│   ├── Footer/              # Multi-tier footer components
│   ├── Home/                # Hero banner with typewriter animations
│   ├── Journey/             # Integrated milestone chronological graph
│   ├── MobileTopBar/        # Specialized mobile responsive navbar
│   ├── Navbar/              # Main desktop glassmorphic nav bar
│   ├── PatraAI/             # Dual-engine chatbot UI (PatraAI.jsx, aiEngine.js, aiData.js)
│   ├── Projects/            # Showcase cards with tilt effect and GitHub/Live links
│   ├── Skills/              # Categories of technical skills with animated percentages
│   ├── StickyMiniNavbar/    # Right-side desktop fast-navigation hub
│   └── ScrollButtons.jsx    # Quick floating scrolling shortcuts
├── context/                 # Context Providers for global state management
│   └── ThemeContext.jsx     # Handles light & dark theme switches and local state
├── pages/                   # Separate router pages
│   ├── ContactPage.jsx      # Form inputs with EmailJS handler
│   ├── EducationPage.jsx    # Education timeline component
│   ├── ExperiencePage.jsx   # Professional work experience timeline
│   └── ProjectsPage.jsx     # Full directory of all projects built
├── App.css                  # Core global application CSS overrides
├── App.jsx                  # Main router configuration & layout assembly
├── constants.js             # Consolidated source of truth for projects, skills, education, and contact data
├── index.css                # Tailwind import directives & custom root style configurations
└── main.jsx                 # Vite application entry mount point
```

---

## ⚙️ Local Development

Follow these steps to run the portfolio website on your local machine:

### Prerequisites
*   Node.js (v18 or higher recommended)
*   npm or yarn

### 1. Clone the repository
```bash
git clone https://github.com/amitkumarpatra99/MR_PATRA.git
cd MR_PATRA
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
Start the local server with hot module reloading:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
Create an optimized production build in the `dist` folder:
```bash
npm run build
```

### 5. Preview Production Build locally
Run a local server to test the production build:
```bash
npm run preview
```

---

## 💬 How to use Patra AI Chatbot
1.  Launch the app and look at the bottom-right corner.
2.  Click the floating circular badge to open the Chatbot.
3.  **Local Engine (Default):** Ask standard questions like "What are your skills?", "Tell me about project Warm Cup", or "Show all certificates".
4.  **Gemini AI Engine (Advanced):**
    *   Click the **Gear Icon** (`⚙️`) in the chatbot header.
    *   Change the Engine to **Gemini LLM**.
    *   Generate a free API Key from [Google AI Studio](https://aistudio.google.com/).
    *   Paste the key into the input slot and click **Save & Close**.
    *   You can now chat with Patra AI on any topic, receiving custom-tailored, conversational answers!

---

## 🌍 Browser Support
*   ✅ Chrome
*   ✅ Firefox
*   ✅ Edge
*   ✅ Safari
*   ✅ Mobile Browsers
*   ❌ Internet Explorer (Legacy)

---

## 🧪 Future Roadmap
*   🌗 Expanded Dark / Light theme custom theme sets.
*   🌍 Multi-language support (English / Hindi / Odia).
*   🧠 Headless CMS content pipeline (sanity.io or Strapi).
*   📊 Live visitor analytics dashboard.
*   📩 Automated newsletter service.