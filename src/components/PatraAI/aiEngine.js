import { projects, SkillsInfo, contactDetails, aboutMe } from "../../constants";

// Helper to calculate keyword overlap score
const getScore = (query, keywords) => {
  let pts = 0;
  keywords.forEach(kw => {
    const escapedKw = kw.replace(/[-\\^$*+?.()|[\]{}/]/g, '\\$&');
    // Boundary check matching start/end of string or non-alphanumeric surrounds
    const regex = new RegExp(`(?:^|[^a-zA-Z0-9_])${escapedKw}(?:$|[^a-zA-Z0-9_])`, 'i');
    if (regex.test(query)) {
      pts += 2.5;
    } else if (kw.length > 3 && query.includes(kw)) {
      pts += 1.0;
    }
  });
  return pts;
};

// 1. Local rules-based response generator
export const generateLocalResponse = (query) => {
  const q = query.toLowerCase().trim();

  // Custom Navigation Handlers
  if (q === "main menu" || q === "menu" || q.includes("back to main")) {
    return {
      text: "🏠 <b>Main Menu</b><br/>What would you like to explore next? Click any option below:",
      chips: [
        { label: "Projects 💻", val: "Show me your projects" },
        { label: "Skills 🚀", val: "What are your skills?" },
        { label: "Experience 💼", val: "Tell me about your experience" },
        { label: "Contact 📞", val: "How can I contact you?" }
      ]
    };
  }

  if (q.includes("other projects") || q.includes("all projects") || q.includes("show all projects") || q === "tell me about other projects") {
    return {
      text: "💻 <b>More Projects</b><br/>Here are some of the other projects designed and built by Amit. Click on any to explore details:",
      chips: [
        { label: "Link Compressor 🔗", val: "Tell me about Link Compressor" },
        { label: "Action Plan 📋", val: "Tell me about Action Plan" },
        { label: "Password Keeper 🔑", val: "Tell me about Password Keeper" },
        { label: "Job Flow 💼", val: "Tell me about Job Flow" },
        { label: "Fin Man 📊", val: "Tell me about Fin Man" },
        { label: "Jaap Seva 🕉️", val: "Tell me about Jaap Seva" },
        { label: "ValuneX 💱", val: "Tell me about ValuneX" },
        { label: "Battery Report 🔋", val: "Tell me about Battery Report" },
        { label: "ConnectX 💬", val: "Tell me about ConnectX" },
        { label: "BDMS 🩸", val: "Tell me about BDMS" },
        { label: "AI Portfolio 📈", val: "Tell me about AI Portfolio Analytics" },
        { label: "Web Store 🛒", val: "Tell me about Web Store" },
        { label: "Face Detection 👤", val: "Tell me about Face Detection" },
        { label: "Twitter Clone 🐦", val: "Tell me about Twitter Clone" },
        { label: "Netflix Clone 🎥", val: "Tell me about Netflix Clone" },
        { label: "Back to Projects Menu 🔙", val: "Show me your projects" },
        { label: "Main Menu 🏠", val: "Main Menu" }
      ]
    };
  }

  // A. Check for specific project matches first
  const projectMapping = [
    { keys: ["warm cup", "warmcup"], id: 0 },
    { keys: ["link compressor", "compressor", "url shortener", "urlshortener"], id: 1 },
    { keys: ["action plan", "todo", "to-do", "task manager"], id: 2 },
    { keys: ["password keeper", "keeper", "passwordkeeper"], id: 3 },
    { keys: ["job flow", "jobflow", "job portal"], id: 8 },
    { keys: ["fin man", "finman", "finance manager", "financial"], id: 29 },
    { keys: ["jaap seva", "jaapseva"], id: 6 },
    { keys: ["mindforge", "mind forge"], id: 10 },
    { keys: ["random pass", "password generator", "randompg"], id: 22 },
    { keys: ["remover ai", "bg remover", "background remover", "remover.ai"], id: 4 },
    { keys: ["valunex", "currency converter"], id: 5 },
    { keys: ["tic tac toe", "tictactoe"], id: 25 },
    { keys: ["battery report", "battery telemetry"], id: 7 },
    { keys: ["connectx", "connect x", "social media"], id: 9 },
    { keys: ["bdms", "blood donation", "blood bank"], id: 23 },
    { keys: ["portfolio analytics", "portfolioanalyzer", "portfolio analyzer"], id: 26 },
    { keys: ["web store", "webstore", "e-commerce", "ecommerce", "online store"], id: 11 },
    { keys: ["linktree", "link tree"], id: 12 },
    { keys: ["mr patra web", "mrpatra"], id: 13 },
    { keys: ["portfolio 99", "portfolio99"], id: 14 },
    { keys: ["face detection", "facedetection", "computer vision"], id: 15 },
    { keys: ["stone paper", "rock paper", "scissors"], id: 16 },
    { keys: ["pic finder", "picture finder", "picfinder"], id: 17 },
    { keys: ["twitter clone", "twitter"], id: 18 },
    { keys: ["amazon clone", "amazon"], id: 19 },
    { keys: ["flipkart clone", "flipkart"], id: 20 },
    { keys: ["netflix clone", "netflix"], id: 21 }
  ];

  for (const mapping of projectMapping) {
    if (mapping.keys.some(k => q.includes(k))) {
      // Find the project in constant list
      const project = projects.find(p => p.id === mapping.id || p.title.toLowerCase().includes(mapping.keys[0]));
      if (project) {
        return {
          text: `🚀 <b>Project Highlight: ${project.title}</b><br/><br/>
          ${project.description}<br/><br/>
          <b>🛠️ Tech Stack:</b> ${project.tags.join(" • ")}<br/><br/>
          ${project.github ? `📁 <b>GitHub Repo:</b> <a href="${project.github}" target="_blank" style="color:#60a5fa; font-weight:bold; text-decoration:underline;">View Source Code</a><br/>` : ""}
          ${project.live ? `🌐 <b>Live Website:</b> <a href="${project.live}" target="_blank" style="color:#60a5fa; font-weight:bold; text-decoration:underline;">Launch Application ↗</a>` : ""}`,
          chips: [
            { label: "Other Projects 💻", val: "Tell me about other projects" },
            { label: "Skills 🚀", val: "What are your skills?" },
            { label: "Contact 📞", val: "How can I contact you?" },
            { label: "Main Menu 🏠", val: "Main Menu" }
          ]
        };
      }
    }
  }

  // Dynamic project title matching fallback
  const matchedProject = projects.find(p => {
    const title = p.title.toLowerCase().trim();
    return q.includes(title) || (title.length > 3 && title.split(/\s+/).every(word => q.includes(word)));
  });
  if (matchedProject) {
    return {
      text: `🚀 <b>Project Highlight: ${matchedProject.title}</b><br/><br/>
      ${matchedProject.description}<br/><br/>
      <b>🛠️ Tech Stack:</b> ${matchedProject.tags.join(" • ")}<br/><br/>
      ${matchedProject.github ? `📁 <b>GitHub Repo:</b> <a href="${matchedProject.github}" target="_blank" style="color:#60a5fa; font-weight:bold; text-decoration:underline;">View Source Code</a><br/>` : ""}
      ${matchedProject.live ? `🌐 <b>Live Website:</b> <a href="${matchedProject.live}" target="_blank" style="color:#60a5fa; font-weight:bold; text-decoration:underline;">Launch Application ↗</a>` : ""}`,
      chips: [
        { label: "Other Projects 💻", val: "Tell me about other projects" },
        { label: "Skills 🚀", val: "What are your skills?" },
        { label: "Contact 📞", val: "How can I contact you?" },
        { label: "Main Menu 🏠", val: "Main Menu" }
      ]
    };
  }

  // B. Check for specific certificates matches
  if (q.includes("aiml certificate") || q.includes("ai/ml certificate") || q.includes("ai ml certificate")) {
    return {
      text: `🤖 <b>AI & Machine Learning Internship Certificate</b><br/>
      Issued by <b>Central Tool and Training Center (CTTC)</b> in Sept 2025.
      <br/><br/>
      This certificate validates Amit's training in AI, Machine Learning, NLP, and Computer Vision, where he built projects like Face Detection and Netflix Dashboards.
      <br/><br/>
      👉 <a href="/src/assets/certificate/AIML.pdf" target="_blank" style="display:inline-block; padding:8px 16px; background:#2563eb; color:#fff; border-radius:30px; font-weight:bold; font-size:12px; transition:all 0.2s;">Open Certificate PDF ↗</a>`,
      chips: [
        { label: "Data Analytics Cert 📊", val: "Show Data Analytics Certificate" },
        { label: "Python Cert 🐍", val: "Show Python Certificate" },
        { label: "Java Cert ☕", val: "Show Java Certificate" },
        { label: "All Certifications 📜", val: "Show all certificates" }
      ]
    };
  }

  if (q.includes("data analytics certificate") || q.includes("data certificate")) {
    return {
      text: `📊 <b>Data Analytics Internship Certificate</b><br/>
      Issued by <b>Central Tool and Training Center (CTTC)</b> in Sept 2025.
      <br/><br/>
      This certificate validates Amit's training in Data Analytics, Excel, Tableau, PowerBI, and SQL, where he worked with complex datasets and dashboard designs.
      <br/><br/>
      👉 <a href="/src/assets/certificate/Data Analytics.pdf" target="_blank" style="display:inline-block; padding:8px 16px; background:#2563eb; color:#fff; border-radius:30px; font-weight:bold; font-size:12px; transition:all 0.2s;">Open Certificate PDF ↗</a>`,
      chips: [
        { label: "AIML Cert 🤖", val: "Show AIML Certificate" },
        { label: "Python Cert 🐍", val: "Show Python Certificate" },
        { label: "All Certifications 📜", val: "Show all certificates" }
      ]
    };
  }

  if (q.includes("python certificate") || q.includes("python intern")) {
    return {
      text: `🐍 <b>Python Developer Internship Certificate</b><br/>
      Issued by <b>Abacus System and Solution</b> in Aug 2024.
      <br/><br/>
      This certificate validates Amit's training in Python Programming, SQL databases, and web design, where he built a full Wedding Planner application.
      <br/><br/>
      👉 <a href="/src/assets/certificate/Python.pdf" target="_blank" style="display:inline-block; padding:8px 16px; background:#2563eb; color:#fff; border-radius:30px; font-weight:bold; font-size:12px; transition:all 0.2s;">Open Certificate PDF ↗</a>`,
      chips: [
        { label: "Java Cert ☕", val: "Show Java Certificate" },
        { label: "AIML Cert 🤖", val: "Show AIML Certificate" },
        { label: "All Certifications 📜", val: "Show all certificates" }
      ]
    };
  }

  if (q.includes("java certificate") || q.includes("java intern")) {
    return {
      text: `☕ <b>Java Developer Internship Certificate</b><br/>
      Issued by <b>Java Tecnocart</b> in Feb 2024.
      <br/><br/>
      This certificate validates Amit's expertise in Core Java, Advanced Java, databases, and UI construction, where he built a Hospital Management System.
      <br/><br/>
      👉 <a href="/src/assets/certificate/JAVA CERTIFICATE.pdf" target="_blank" style="display:inline-block; padding:8px 16px; background:#2563eb; color:#fff; border-radius:30px; font-weight:bold; font-size:12px; transition:all 0.2s;">Open Certificate PDF ↗</a>`,
      chips: [
        { label: "Python Cert 🐍", val: "Show Python Certificate" },
        { label: "AIML Cert 🤖", val: "Show AIML Certificate" },
        { label: "All Certifications 📜", val: "Show all certificates" }
      ]
    };
  }

  // C. General Intent Scoring
  const intents = [
    {
      id: "greet",
      keywords: ["hi", "hello", "hey", "hola", "greetings", "good morning", "good afternoon", "good evening", "whats up", "yo"],
      response: {
        text: `Hello! 👋 I'm <b>Patra AI</b>, Amit's virtual representative. How can I help you today?<br/><br/>You can ask me questions about Amit's skills, projects, internships, or contact details. Click any quick action below to get started!`,
        chips: [
          { label: "Projects 💻", val: "Show me your projects" },
          { label: "Skills 🚀", val: "What are your skills?" },
          { label: "Experience 💼", val: "Tell me about your experience" },
          { label: "Certifications 📜", val: "Show certifications" }
        ]
      }
    },
    {
      id: "skills",
      keywords: ["skills", "skill", "stack", "tech", "language", "frontend", "backend", "tool", "framework", "database", "libraries", "mongodb", "react", "node", "python", "java", "css", "html", "javascript", "typescript", "c++", "angular", "redux", "gsap", "nextjs", "mysql", "sql", "git", "github", "tailwind", "what are your skills?"],
      response: {
        text: `🚀 <b>Amit's Skills & Tech Stack</b><br/><br/>
        • <b>Languages:</b> ${SkillsInfo.find(s => s.title === 'Languages')?.skills.map(x => x.name).join(", ") || "Java, Python, C, JavaScript, TypeScript, Matlab"}<br/>
        • <b>Frontend:</b> ${SkillsInfo.find(s => s.title === 'Frontend')?.skills.map(x => x.name).join(", ") || "React, Next.js, Redux, Tailwind CSS, Bootstrap, Material UI, Angular, GSAP"}<br/>
        • <b>Backend:</b> ${SkillsInfo.find(s => s.title === 'Backend')?.skills.map(x => x.name).join(", ") || "Node.js, Express, MongoDB, Mongoose, MySQL, SQL"}<br/>
        • <b>Tools & Utilities:</b> ${SkillsInfo.find(s => s.title === 'Tools')?.skills.map(x => x.name).join(", ") || "VS Code, Git, GitHub, Postman, Anaconda, Jupyter, Tableau, PowerBI, Vercel"}`,
        chips: [
          { label: "Projects 💻", val: "Show me your projects" },
          { label: "Certifications 📜", val: "Show technical certifications" },
          { label: "Experience 💼", val: "Tell me about your experience" }
        ]
      }
    },
    {
      id: "experience",
      keywords: ["experience", "job", "internship", "internships", "work history", "where did you work", "career", "employment", "company", "cttc", "abacus", "java tecnocart", "technocart", "tell me about your experience"],
      response: {
        text: `💼 <b>Amit's Internship Experience</b><br/><br/>
        1. 🤖 <b>AIML and Data Analytics Intern</b> at Central Tool and Training Center (CTTC)<br/>
        <span style="opacity:0.7; font-size:12px;">July 2025 - Sept 2025</span><br/>
        Built Face Detection models and Netflix Dashboards using Python, AI/ML, NLP, and Computer Vision.<br/><br/>
        2. 🐍 <b>Python Intern</b> at Abacus System and Solution<br/>
        <span style="opacity:0.7; font-size:12px;">July 2024 - Aug 2024</span><br/>
        Designed a Wedding Planner application using Python, HTML, CSS, and SQL.<br/><br/>
        3. ☕ <b>Java Intern</b> at Java Tecnocart<br/>
        <span style="opacity:0.7; font-size:12px;">Nov 2023 - Feb 2024</span><br/>
        Developed a Hospital Management System utilizing Core & Advanced Java.`,
        chips: [
          { label: "CTTC (AI/ML) Details 🤖", val: "Tell me about your CTTC internship" },
          { label: "Abacus (Python) Details 🐍", val: "Tell me about your Abacus internship" },
          { label: "Show Certificates 📜", val: "Show all certificates" }
        ]
      }
    },
    {
      id: "education",
      keywords: ["education", "study", "degree", "college", "school", "btech", "university", "academic", "intermediate", "raajdhani", "omm shanti", "vivekananda", "gpa", "grade", "hsc", "10th", "12th", "tell me about your education"],
      response: {
        text: `🎓 <b>Academic Background</b><br/><br/>
        • <b>Raajdhani Engineering College, Bhubaneswar</b><br/>
        <span style="opacity:0.7;">Bachelor of Technology (B.Tech) • July 2022 - July 2026</span><br/><br/>
        • <b>Omm Shanti +2 Science College, Pipili, Puri</b><br/>
        <span style="opacity:0.7;">Intermediate Science • June 2020 - May 2022</span><br/><br/>
        • <b>Vivekananda Shiksha Kendra, Delang, Puri</b><br/>
        <span style="opacity:0.7;">High School Certificate (10th) • Mar 2016 - Feb 2020</span>`,
        chips: [
          { label: "Internships 💼", val: "Tell me about your experience" },
          { label: "Projects 💻", val: "Show me your projects" }
        ]
      }
    },
    {
      id: "certificates",
      keywords: ["certificate", "certification", "credential", "license", "pdf", "diploma", "aiml certificate", "python certificate", "java certificate", "data analytics certificate"],
      response: {
        text: `📜 <b>Professional Certifications</b><br/>
        Amit has earned official certifications from his internships:<br/><br/>
        • 🤖 <b>AI & ML Certificate</b> (CTTC) - <a href="/src/assets/certificate/AIML.pdf" target="_blank" style="color:#60a5fa; text-decoration:underline;">View PDF</a><br/>
        • 📊 <b>Data Analytics Certificate</b> (CTTC) - <a href="/src/assets/certificate/Data Analytics.pdf" target="_blank" style="color:#60a5fa; text-decoration:underline;">View PDF</a><br/>
        • 🐍 <b>Python programming Certificate</b> (Abacus) - <a href="/src/assets/certificate/Python.pdf" target="_blank" style="color:#60a5fa; text-decoration:underline;">View PDF</a><br/>
        • ☕ <b>Java programming Certificate</b> (Java Tecnocart) - <a href="/src/assets/certificate/JAVA CERTIFICATE.pdf" target="_blank" style="color:#60a5fa; text-decoration:underline;">View PDF</a>`,
        chips: [
          { label: "AIML Cert 🤖", val: "Tell me about your AIML certificate" },
          { label: "Data Analytics Cert 📊", val: "Tell me about your Data Analytics certificate" },
          { label: "Python Cert 🐍", val: "Tell me about your Python certificate" }
        ]
      }
    },
    {
      id: "contact",
      keywords: ["contact", "mail", "email", "phone", "number", "hire", "linkedin", "github", "social", "instagram", "twitter", "reach out", "connect", "call", "how can i contact you?"],
      response: {
        text: `📞 <b>Get in Touch with Amit</b><br/>
        Amit is open to software development positions, internships, and collaborative opportunities.<br/><br/>
        📧 <b>Email:</b> <a href="mailto:${contactDetails.email}" style="color:#60a5fa; text-decoration:underline; font-weight:bold;">${contactDetails.email}</a><br/>
        📞 <b>Phone:</b> <a href="tel:${contactDetails.phone}" style="color:#60a5fa; text-decoration:underline; font-weight:bold;">${contactDetails.phone}</a><br/>
        🔗 <b>LinkedIn:</b> <a href="${contactDetails.linkedin}" target="_blank" style="color:#60a5fa; text-decoration:underline;">linkedin.com/in/amitkumarpatra99</a><br/>
        📁 <b>GitHub:</b> <a href="${contactDetails.github}" target="_blank" style="color:#60a5fa; text-decoration:underline;">github.com/amitkumarpatra99</a><br/>
        📸 <b>Instagram:</b> <a href="${contactDetails.instagram}" target="_blank" style="color:#60a5fa; text-decoration:underline;">@mr_patraa_</a><br/>
        🐦 <b>Twitter / X:</b> <a href="${contactDetails.twitter}" target="_blank" style="color:#60a5fa; text-decoration:underline;">@mr_patra_</a>`,
        chips: [
          { label: "Projects 💻", val: "Show me your projects" },
          { label: "Skills 🚀", val: "What are your skills?" }
        ]
      }
    },
    {
      id: "about",
      keywords: ["about", "who is", "bio", "amit", "patra", "introduce", "resume", "cv", "profile", "summary"],
      response: {
        text: `👨‍💻 <b>About ${aboutMe.name}</b><br/>
        ${aboutMe.title} based in India.<br/><br/>
        "${aboutMe.bio}"<br/><br/>
        <b>Core Competencies:</b> ${aboutMe.skills.join(" • ")}`,
        chips: [
          { label: "Projects 💻", val: "Show me your projects" },
          { label: "Skills 🚀", val: "What are your skills?" },
          { label: "Experience 💼", val: "Tell me about your experience" }
        ]
      }
    },
    {
      id: "projects",
      keywords: ["project", "projects", "work", "built", "portfolio", "development", "show me your projects", "show all projects", "all projects"],
      response: {
        text: `💻 <b>Which project do you want to explore?</b><br/><br/>Amit has built 20+ web applications. Select a highlighted project below or click <b>All Projects 📁</b> to see more:`,
        chips: [
          { label: "Warm Cup ☕", val: "Tell me about Warm Cup" },
          { label: "ConnectX 💬", val: "Tell me about ConnectX" },
          { label: "MindForge 🧠", val: "Tell me about MindForge" },
          { label: "Remover AI 🖼️", val: "Tell me about Remover AI" },
          { label: "All Projects 📁", val: "Show all projects" },
          { label: "Main Menu 🏠", val: "Main Menu" }
        ]
      }
    },
    {
      id: "location",
      keywords: ["location", "live", "address", "city", "where are you", "where is", "stay", "resident", "bhubaneswar", "puri", "odisha", "india", "hometown", "place", "from"],
      response: {
        text: `📍 <b>Amit's Location</b><br/><br/>Amit Kumar Patra is located in <b>Bhubaneswar / Puri, Odisha, India</b>.<br/><br/>• <b>Hometown:</b> Delang / Pipili, Puri District, Odisha, India.<br/>• <b>Current Location:</b> Bhubaneswar, Odisha, India (where he is pursuing his B.Tech studies at Raajdhani Engineering College).`,
        chips: [
          { label: "Contact Details 📞", val: "How can I contact you?" },
          { label: "Education 🎓", val: "Tell me about your education" },
          { label: "Main Menu 🏠", val: "Main Menu" }
        ]
      }
    }
  ];

  // Evaluate scores for each intent
  let bestIntent = null;
  let maxScore = 0;

  intents.forEach(intent => {
    const score = getScore(q, intent.keywords);
    if (score > maxScore) {
      maxScore = score;
      bestIntent = intent;
    }
  });

  // Threshold score to prevent false positives
  if (bestIntent && maxScore >= 1) {
    return bestIntent.response;
  }

  // Fallback response
  return {
    text: `🤖 <b>Patra AI (Local Assistant)</b>: I couldn't find a direct match for that query in my local database.<br/><br/>
    Try asking about:
    <br/>• 💻 <b>Projects</b> (e.g. "Warm Cup", "Remover AI", "ConnectX")
    <br/>• 🚀 <b>Skills & Tech Stack</b> (e.g. "languages", "frontend skills")
    <br/>• 📜 <b>Certifications</b> (e.g. "Python certificate", "AIML")
    <br/>• 📞 <b>Contact details</b>
    <br/>• 📍 <b>Location</b> (e.g. "where do you live?")`,
    chips: [
      { label: "Projects 💻", val: "Show me your projects" },
      { label: "Skills 🚀", val: "What are your skills?" },
      { label: "Experience 💼", val: "Tell me about your experience" },
      { label: "Certifications 📜", val: "Show certifications" }
    ]
  };
};

