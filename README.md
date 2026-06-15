# ⚡ MR PATRA

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black&style=flat-square)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&style=flat-square)](https://vite.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css&style=flat-square)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4-FF69B4?logo=framer&style=flat-square)](https://www.framer.com/motion/)
[![Gemini](https://img.shields.io/badge/Gemini_AI-1.5_Flash-8E75C2?logo=google-gemini&style=flat-square)](https://aistudio.google.com/)

A premium, interactive, and high-performance React portfolio designed as an immersive digital experience. Powered by smooth scroll mechanisms, GPU-accelerated micro-animations, glassmorphic UI components, and a dual-engine AI assistant chatbot.

> 🎨 *“Every animation, transition, and hover effect has a purpose — to make every scroll feel alive.”*

---

## 🚀 Key Features

### 🤖 Patra AI Assistant (Dual Engine Chatbot)
A highly sophisticated, custom-built virtual assistant representing Amit. Features include:
*   **⚡ Local Engine Mode (Offline-friendly):** An instant, rules-based keyword matcher (`aiEngine.js`) that scans predefined profiles for zero-latency answers regarding projects, skills, education, internships, and certifications.
*   **🧠 Gemini AI Engine Mode (Context-Aware):** Connects directly to the **Google Gemini 1.5 Flash API** using a secure user-provided API key. It feeds the chatbot a comprehensive, dynamic system prompt of Amit's profile for natural, context-aware dialogues.
*   **📝 Rich Markdown Rendering:** Features native rendering of Markdown output using `react-markdown` and `remark-gfm` with styled hyperlinks to projects and certificates.
*   **⚙️ Settings Panel:** An integrated slide-up settings card where users can swap engines and paste/hide their secure Gemini API key (persisted in `localStorage`).
*   **🎵 Interactive Sound Cues:** Subtle audio feedback triggers on message send/receive events.
*   **📱 Scroll-Linked Auto-Hide:** Automatically hides the chatbot launcher icon while scrolling and brings it back gently when scroll stops.

### 🎠 Featured Work Slider & Detailed Modals
*   **Interactive Snap Carousel:** Desktop/mobile-friendly horizontal swipe slider (`Projects.jsx`) built with custom navigation buttons, supporting snap-to-center alignments.
*   **Immersive Project Showcase Modals:** Displays rich details including project overview, target problem, defined goals, engineering challenges, impact metrics, live links, and GitHub repositories.
*   **Dynamic Tech Logos:** Displays clean, hoverable tech badge indicators for project stacks dynamically mapped from consolidated constants.

### 🖼️ Interactive Gallery (About Section)
*   **Deep-Dive Profile Bio:** Displays Amit's background, core competencies, and professional focus.
*   **Lightbox Photo Gallery:** Integrated `PhotoGalleryModal.jsx` component that displays profile pictures, certificates, and work environments in a beautiful fullscreen preview.

### 💬 Auto-Scrolling Testimonial Marquee
*   **Senior Testimonials Reel:** Seamless, infinitely looping horizontal testimonials ribbon featuring feedback from clients and mentors (e.g. Senior AIML Engineers, web developers).
*   **Hover-Sensitive Playback:** Automatically pauses marquee scrolls on desktop hover or mobile touch-hold to let readers focus, with micro-animations that float cards upward on mouse entry.

### 🧭 Page Navigation Hub
*   **Card-Based Navigation Portal:** `NavigationPage.jsx` provides a dedicated, clean directory using Lucide icons and Framer Motion transitions, helping users jump directly to Experience, Education, or Contact pages.

### 📱 Responsive Headers & Sidebars
*   **Animated Mobile Status Bar:** `MobileTopBar.jsx` features a modern header with animated burger toggles and real-time active status indicators.
*   **Desktop Mini Sticky Navbar:** Right-aligned mini vertical navigation hub (`StickyMiniNavbar.jsx`) allowing quick access/scrolling shortcuts to home, about, skills, and project sections.
*   **Glow Mesh Backdrop:** A fixed background dark-mesh gradient combined with a subtle noise overlay creates a high-end visual aesthetic.

### 🌊 GPU-Accelerated Motions & Cursor
*   **Lenis Smooth Scroll:** Delivers unified kinetic scrolling across all devices.
*   **Custom Interactive Cursor:** A mouse-linked follower cursor (`CustomCursor.jsx`) that scales up and tracks hover states on active links and buttons.
*   **Framer Motion & GSAP Reveals:** Fluid entries, exits, and scroll-triggered reveals as components enter the viewport.

---

## 🧠 Tech Stack

| Category | Technology | Version | Usage in Portfolio |
|---|---|---|---|
| **Core** | React.js | `^18.3.1` | Component-based UI Architecture |
| **Routing** | React Router DOM | `^7.9.5` | Dynamic page transitions and subpage routing |
| **Styling** | TailwindCSS + PostCSS | `^3.4.17` | Utility-first styling & layout configuration |
| **Animations** | Framer Motion | `^12.40.0` | Custom modal transitions & staggered listings |
| **Animations** | GSAP | `^3.13.0` | Viewport reveals and complex scroll trigger effects |
| **Scrolling** | Lenis | `^1.3.17` | Kinetic smooth scroll wrapper |
| **AI Integration** | Google Gemini API | `1.5 Flash` | AI Chatbot backend through direct REST integrations |
| **Markdown** | React Markdown + Remark GFM | `v10.1.0` / `v4.0.1` | Native rendering of AI text formats |
| **Analytics** | Vercel Speed Insights | `^1.3.1` | Automated site speed audits and core web vitals |
| **Forms** | EmailJS Browser | `^4.4.1` | Client-side email dispatching for the contact form |
| **Toasts** | React Toastify | `^11.0.3` | Beautiful toast notifications for contact forms and API actions |
| **Widgets** | React GitHub Calendar | `^5.0.6` | Visual contribution graph on subpages |
| **Build & Dev** | Vite | `^6.0.5` | Ultra-fast development server & asset bundler |

---

## 📂 Project Structure

The project has been structured logically with modular components, contexts, and page routers:

```bash
src/
├── assets/                  # Public assets, project photos, PDFs, and certificates
│   ├── Education Logo/      # University, school, and certification vendor logos
│   ├── Profile/             # Profile pictures and personal portfolio imagery
│   ├── Project Photo/       # Screenshot showcases for projects
│   ├── avatar/              # Avatars for client & mentor testimonial cards
│   ├── certificate/         # PDF copies of professional internship certificates
│   ├── tech_logo/           # Icons and SVG logos for the tech stack skills
│   └── Favicon.png          # Site favicon asset
├── components/              # Reusable UI component modules
│   ├── About/               # Bio summary and PhotoGalleryModal.jsx
│   ├── CustomCursor/        # Mouse tracker cursor with hover physics
│   ├── Footer/              # Multi-tier footer components
│   ├── Home/                # Hero banner with ReactTypingEffect animations
│   ├── Journey/             # Integrated milestone chronological graph
│   ├── MobileTopBar/        # Responsive header status and mobile burger menu
│   ├── Navbar/              # Main desktop glassmorphic navigation bar
│   ├── PatraAI/             # Dual-engine chatbot UI (PatraAI.jsx, aiEngine.js)
│   ├── Projects/            # Projects.jsx snap slider and detailed modal views
│   ├── Skills/              # Categorized skill metrics with progress bars
│   ├── StickyMiniNavbar/    # Vertical sticky dot-navigation hub
│   ├── Testimonials/        # Infinitely scrolling mentor feedback marquee
│   ├── VisitingBanner/      # Call-to-action banner thanking visitors
│   ├── ScrollButtons.jsx    # Quick floating scrolling shortcuts
│   └── SectionDivider.jsx   # Sleek border divider line
├── context/                 # Context Providers for global state management
│   └── ThemeContext.jsx     # Handles light & dark theme switches
├── pages/                   # Separate router page components
│   ├── ContactPage.jsx      # Form inputs with EmailJS and Toast notifications
│   ├── EducationPage.jsx    # Academic credentials timeline
│   ├── ExperiencePage.jsx   # Professional work history timeline
│   └── NavigationPage.jsx   # Fullscreen portal directory cards
├── App.css                  # Core global application CSS overrides
├── App.jsx                  # Main router configuration & layout assembly
├── constants.js             # Consolidated source of truth for all projects, skills, and data
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

### 5. Preview Production Build Locally
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