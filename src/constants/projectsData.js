const CDN_URL = "https://porto-r2.xhaeffer.my.id";

const projectsData = [
  {
    id: "Majka-OR",
    title: "Majka: Operational & Report",
    category: "Culinary Operations & ERP",
    cover: `${CDN_URL}/projects/majka-or/cover.png`,
    type: "Product Engineering",
    summary:
      "In-progress culinary ERP built with Bun, React 19, and Kotlin Compose.",
    description:
      "Majka: Operational & Report is an in-progress culinary operational management platform engineered for Majka Recipe. Commissioned through SuikaStudio, it replaces fragmented Excel spreadsheets with a centralized system designed to handle peak seasonal surges of over 500 orders.\n\n" +
      "- **Product Engineering Leadership:**\n" +
      "  - Driving the project end-to-end: scoping formal business requirements (URS), architecting SAP-inspired supply chain modules, managing development phases, and contributing hands-on across the full-stack codebase.\n\n" +
      "- **SAP-Inspired Business Architecture:**\n" +
      "  - **Material Management (MM):** Master data, dynamic multi-unit conversions, purchase price history, stock alerts, and physical stock opname reconciliation.\n" +
      "  - **Production Planning (PP):** Multi-level Bill of Materials (BoM), recursive theoretical COGS with moving average pricing, batch production execution with QC, and recipe guides.\n" +
      "  - **Sales & Distribution (SD):** Selling price management with gross margin safeguards, customer database, and full order lifecycle tracking from DP to delivery.\n" +
      "  - **Finance (FI):** Automated double-entry General Journal posting material purchases, production runs, and sales into real-time financial statements.\n\n" +
      "- **Technical Stack:**\n" +
      "  - **Back-End:** Bun runtime, Elysia REST API, PostgreSQL with Prisma 7, JWT auth, Cloudflare R2 storage, and Croner scheduled jobs.\n" +
      "  - **Front-End:** React 19 SPA with React Compiler, Vite, Tailwind CSS v4, shadcn/ui, and TanStack suite (Router, Query, Table, Form).\n" +
      "  - **Mobile:** Android companion app built with Kotlin and Jetpack Compose for fast kitchen floor operational logging.",
    tags: [
      "Product Engineering",
      "In Progress",
      "Bun",
      "Elysia",
      "TypeScript",
      "React 19",
      "TanStack",
      "Tailwind CSS",
      "shadcn/ui",
      "Prisma",
      "PostgreSQL",
      "Kotlin",
      "Jetpack Compose",
      "ERP System",
      "SuikaStudio",
    ],
    gallery: [
      `${CDN_URL}/projects/majka-or/gallery-1.png`,
      `${CDN_URL}/projects/majka-or/gallery-2.png`,
      `${CDN_URL}/projects/majka-or/gallery-3.png`,
      `${CDN_URL}/projects/majka-or/gallery-4.png`,
      `${CDN_URL}/projects/majka-or/gallery-5.png`,
      `${CDN_URL}/projects/majka-or/gallery-6.png`,
      `${CDN_URL}/projects/majka-or/gallery-7.png`,
    ],
    additional: [
      {
        title: "Github (Private)",
        link: "https://github.com/MajkaRecipe",
      },
    ],
  },
  {
    id: "SuikaBot",
    title: "SuikaBot",
    category: "Multipurpose WhatsApp Bot",
    cover: `${CDN_URL}/projects/suikabot/cover.webp`,
    type: "Chatbot Development",
    summary:
      "Multipurpose WhatsApp bot with custom stickers, media tools, AI chat, and a Bun backend.",
    description:
      "SuikaBot is a multipurpose WhatsApp bot built for active group chats. It provides group members with daily utility and entertainment commands directly in the conversation, running on top of the SuikaBot Starter framework.\n\n" +
      "- **Commands & Features:**\n" +
      "  - **Sticker & meme tools:** Creates stickers from images, videos, and text, converts stickers back into media, and applies animated meme filters (such as triggered and distort) using Sharp and static FFmpeg.\n" +
      "  - **Media downloader:** Downloads video and audio from supported social media platforms.\n" +
      "  - **Media converter:** Converts audio, video, image, and document files between common formats.\n" +
      "  - **Text translator:** Translates messages across languages directly in chat.\n" +
      "  - **View-once peeker:** Intercepts and reveals one-time view photos and videos.\n" +
      "  - **AI chat:** Handles conversations, questions, and generative responses using LLM APIs.\n" +
      "  - **Group mentions:** Mentions all participants (@everyone) or administrators (@admin) or custom tags (e.g. @dev).\n" +
      "  - **Community utilities:** Collects tips through `.traktir`, receives user input via `.feedback`, and delivers contextual broadcast notices (`SuikaAds`) between responses.\n\n" +
      "- **Architecture & Reliability (SuikaBot Starter):**\n" +
      "  - **Anti-ban rate limiting:** Uses a Keyed Generic Cell Rate Algorithm (GCRA) queue. It introduces human-like typing delays per chat so active groups do not trigger WhatsApp spam detection.\n" +
      "  - **Session persistence:** Stores authentication credentials and conversation states in Redis, reconnecting automatically without requiring a QR code scan after server restarts.\n" +
      "  - **Bun runtime & TypeScript:** Runs on Bun for fast cold starts and low memory usage under concurrent command loads.\n" +
      "  - **Directory-based plugins:** New commands auto-bind from their folders, with built-in support for cron jobs and HTTP webhooks.\n" +
      "  - **Telemetry & monitoring:** Tracks command usage, errors, and system status using PostHog and structured Pino logging.",
    tags: [
      "Bun",
      "TypeScript",
      "Baileys",
      "WhatsApp Bot",
      "SuikaBot Starter",
      "Redis",
      "GCRA Algorithm",
      "Anti-Ban Engine",
      "Generative AI",
      "Media Processing",
      "Sharp",
      "FFmpeg",
      "PostHog",
      "Modular Architecture",
      "Entertainment",
    ],
    gallery: [
      `${CDN_URL}/projects/suikabot/gallery-1.webp`,
      `${CDN_URL}/projects/suikabot/gallery-2.webp`,
    ],
    additional: [
      {
        title: "Visit Website",
        link: "https://bot.suikastd.dev",
      },
      {
        title: "Github (Private)",
        link: "https://github.com/SuikaStudio",
      },
    ],
  },
  {
    id: "DigitalDiaryku",
    title: "DigitalDiary.ku",
    category: "Social Emotional Learning Platform",
    cover: `${CDN_URL}/projects/digitaldiaryku/cover.jpg`,
    type: "Full-Stack Engineering",
    summary:
      "Full-stack SEL journaling platform for BINUS University research, published in IEEE.",
    description:
      "DigitalDiary.ku is a full-stack Social Emotional Learning (SEL) platform developed for a research team at Bina Nusantara (BINUS) University. Built to support student self-reflection, the platform enables students to write daily reflective journals, monitor emotional states, and build positive habits, while providing educators with a dashboard to observe student progress.\n\n" +
      "- **Ownership & Technical Implementation:**\n" +
      "  - Led end-to-end engineering delivery, working directly with research stakeholders to author requirements and build the platform from scratch.\n" +
      "  - Built with Next.js, Firebase Authentication, and Cloud Firestore for real-time data persistence and role-based access for students and educators.\n" +
      "  - Designed an accessible, responsive user interface using Tailwind CSS and shadcn/ui components.\n\n" +
      "- **Research Validation & Academic Outcomes:**\n" +
      "  - Evaluated by 6 subject-matter experts, achieving a 4.53/5 content validity score.\n" +
      "  - Platform findings and methodology published across three academic papers, including IEEE ITIS 2025.\n" +
      "  - Currently live in production, with a platform rebuild planned for next year.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Firebase",
      "Cloud Firestore",
      "Full-Stack Development",
      "EdTech",
      "Social Emotional Learning",
      "BINUS University",
      "IEEE Published",
    ],
    gallery: [
      `${CDN_URL}/projects/digitaldiaryku/gallery-1.jpg`,
      `${CDN_URL}/projects/digitaldiaryku/gallery-2.jpg`,
      `${CDN_URL}/projects/digitaldiaryku/gallery-3.jpg`,
      `${CDN_URL}/projects/digitaldiaryku/gallery-4.jpg`,
      `${CDN_URL}/projects/digitaldiaryku/gallery-5.jpg`,
      `${CDN_URL}/projects/digitaldiaryku/gallery-6.jpg`,
      `${CDN_URL}/projects/digitaldiaryku/gallery-7.jpg`,
      `${CDN_URL}/projects/digitaldiaryku/gallery-8.jpg`,
      `${CDN_URL}/projects/digitaldiaryku/gallery-9.jpg`,
      `${CDN_URL}/projects/digitaldiaryku/gallery-10.jpg`,
      `${CDN_URL}/projects/digitaldiaryku/gallery-11.jpg`,
    ],
    additional: [
      {
        title: "Visit Website",
        link: "https://digitaldiaryku.com/",
      },
      {
        title: "Github (Private)",
        link: "https://github.com/xhaeffer/DigitalDiaryku-App",
      },
    ],
  },
  {
    id: "Coretax-Sentiment-Analysis",
    title: "Coretax Sentiment Analysis Pipeline",
    category: "Academic Research & NLP",
    cover: `${CDN_URL}/projects/coretax-sentiment-analysis/cover.png`,
    type: "Machine Learning Research",
    summary:
      "End-to-end NLP pipeline evaluating ML models for Coretax, published in MJI 2025.",
    description:
      "This project implements an end-to-end Natural Language Processing (NLP) and Machine Learning pipeline to analyze public sentiment toward the Indonesian Directorate General of Taxes (DJP) Coretax system. The empirical findings were formally peer-reviewed and published in Media Jurnal Informatika (Vol. 17 No. 2, 2025) with registered DOI 10.35194/mji.v17i2.5968.\n\n" +
      "- **4-Stage Pipeline Architecture:**\n" +
      "  - **Data Ingestion (Twikit):** Automated asynchronous scraping engine collecting public discourse tweets on X/Twitter without API rate limitations.\n" +
      "  - **NLP Preprocessing & Normalization:** Text cleaning, informal slang word expansion, stopword removal, and Indonesian stemming with Sastrawi accelerated using Swifter for parallel batch processing.\n" +
      "  - **Weak Supervision Auto-Labelling:** Utilized a pre-trained IndoBERT transformer model for ground-truth pseudo-annotation across the raw dataset.\n" +
      "  - **Comparative ML Benchmarking:** Evaluated Naive Bayes, Support Vector Machine (SVM), and Logistic Regression across TF-IDF feature extractions and SMOTE data balancing scenarios, evaluated using K-Fold Cross Validation and confusion matrix metrics.",
    tags: [
      "Machine Learning",
      "Natural Language Processing",
      "Python",
      "IndoBERT",
      "Scikit-Learn",
      "TF-IDF",
      "SMOTE",
      "Transformers",
      "Academic Research",
      "DOI Published",
      "Universitas Gunadarma",
    ],
    gallery: [],
    additional: [
      {
        title: "Source Code",
        link: "https://drive.google.com/drive/folders/13pfwqCFQr-Q2Tk64WQonBlShQN5XX9Op?usp=sharing"
      },
      {
        title: "Read Paper (DOI)",
        link: "https://doi.org/10.35194/mji.v17i2.5968",
      },
    ],
  },
  {
    id: "KafeKita-Management-System",
    title: "KafeKita Management System",
    category: "Café Management Platform",
    cover: `${CDN_URL}/projects/kafekita-management-system/cover.jpg`,
    type: "Full-Stack Development",
    summary:
      "Café self-order kiosk and staff dashboard for BNSP LSP certification.",
    description:
      "KafeKita Management System is a full-stack web application designed to simulate a modern café self-order kiosk, inspired by McDonald's digital ordering experience. Built and assessed as the final practical project for BNSP LSP Professional Certification, it pairs customer self-ordering with real-time operational dashboards for café staff.\n\n" +
      "- **System Features & User Roles:**\n" +
      "  - **Customer Self-Order Kiosk:** McDonald's-style interactive digital menu allowing customers to independently browse categories, customize orders, and place checkout requests.\n" +
      "  - **Role-Based Operational Dashboards:** Dedicated interfaces for cashiers (payment verification), kitchen staff (live order queue and prep tracking), and waitstaff (table service status).\n\n" +
      "- **Technical Implementation:**\n" +
      "  - Front-end built with Next.js, React, TypeScript, and Tailwind CSS using shadcn/ui components for a responsive kiosk layout.\n" +
      "  - Real-time order state synchronization and database persistence powered by Cloud Firestore.\n" +
      "  - Secure role-based authorization and session management implemented with Firebase Authentication.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Firebase Firestore",
      "Firebase Authentication",
      "Role-Based Access Control",
      "Full-Stack Development",
      "BNSP Certified",
    ],
    gallery: [
      `${CDN_URL}/projects/kafekita-management-system/cover.jpg`,
      `${CDN_URL}/projects/kafekita-management-system/gallery-2.jpg`,
      `${CDN_URL}/projects/kafekita-management-system/gallery-3.jpg`,
      `${CDN_URL}/projects/kafekita-management-system/gallery-4.jpg`,
      `${CDN_URL}/projects/kafekita-management-system/gallery-5.jpg`,
      `${CDN_URL}/projects/kafekita-management-system/gallery-6.jpg`,
      `${CDN_URL}/projects/kafekita-management-system/gallery-7.jpg`,
      `${CDN_URL}/projects/kafekita-management-system/gallery-8.jpg`,
      `${CDN_URL}/projects/kafekita-management-system/gallery-9.jpg`,
      `${CDN_URL}/projects/kafekita-management-system/gallery-10.jpg`,
      `${CDN_URL}/projects/kafekita-management-system/gallery-11.jpg`,
    ],
    additional: [
      {
        title: "Github",
        link: "https://github.com/xhaeffer/LSP-KafeKita",
      },
      {
        title: "Visit Website (Kiosk)",
        link: "https://lsp-kafe-kita.vercel.app/",
      },
      {
        title: "Visit Website (Dashboard)",
        link: "https://lsp-kafe-kita.vercel.app/dashboard",
      },
    ],
  },
  {
    id: "BajoBliss",
    title: "BajoBliss: Discover Labuan Bajo's Treasures",
    category: "Tourism & Local Commerce Platform",
    cover: `${CDN_URL}/projects/bajobliss/cover.webp`,
    type: "Full-Stack Development",
    summary:
      "Best Capstone Project in Baparekraf Digital Talent 2024 for Labuan Bajo MSMEs commerce.",
    description:
      "BajoBliss is a digital platform developed to support local micro, small, and medium enterprises (UMKM) in Labuan Bajo, one of Indonesia's super-priority tourism destinations. Built by a cross-functional team during the Baparekraf Digital Talent (BDT) Web Development Bootcamp 2024, the project was awarded the Best Capstone Project distinction by Kemenparekraf and Dicoding Indonesia.\n\n" +
      "- **Role & Back-End Implementation:**\n" +
      "  - Served as the Back-End Developer (Team BDT24-FS003), leading database schema design and API architecture.\n" +
      "  - Engineered a standalone RESTful API from scratch using Node.js and Hapi.js, backed by MySQL and Sequelize ORM.\n" +
      "  - Implemented JWT authentication and Role-Based Access Control (RBAC) to differentiate standard user and administrator capabilities.\n" +
      "  - Designed endpoints for local product catalog listings (culinary, weaving, handicrafts), inventory, and booking management.\n\n" +
      "- **Project Recognition & Status:**\n" +
      "  - Selected as the Best Capstone Project out of the bootcamp cohort.\n" +
      "  - Completed and evaluated as a functional MVP; the project is currently archived with live demo services offline.",
    tags: [
      "Node.js",
      "Hapi.js",
      "MySQL",
      "Sequelize",
      "REST API",
      "JWT",
      "Role-Based Access Control",
      "Baparekraf Digital Talent",
      "Best Capstone Project",
      "Dicoding Indonesia",
      "Clean Architecture",
      "Back-End Development",
      "Archived",
    ],
    gallery: [
      `${CDN_URL}/projects/bajobliss/cover.webp`,
      `${CDN_URL}/projects/bajobliss/gallery-2.webp`,
      `${CDN_URL}/projects/bajobliss/gallery-3.webp`,
      `${CDN_URL}/projects/bajobliss/gallery-4.webp`,
      `${CDN_URL}/projects/bajobliss/gallery-5.webp`,
    ],
    additional: [
      {
        title: "Github (Backend)",
        link: "https://github.com/lussyanast/bajobliss/tree/server",
      },
      {
        title: "Github (Frontend)",
        link: "https://github.com/lussyanast/bajobliss/tree/dev",
      },
    ],
  },
  {
    id: "Dicoding-Forum",
    title: "Dicoding Forum",
    category: "Forum Web App",
    cover: `${CDN_URL}/projects/dicoding-forum/cover.jpg`,
    type: "Front-End Development",
    summary:
      "Reddit-inspired discussion forum with Vitest, Cypress, and CI/CD automation.",
    description:
      "The application simulates a modern discussion ecosystem where users can register, log in, create threads, post comments, and interact through a voting system. It integrates with the official **Dicoding Forum API**, ensuring real-time synchronization and secure data handling.\n\n" +
      "- **Front-End:** Developed with React, Redux Toolkit, and Material UI to deliver a responsive, accessible, and modular user interface. The design takes inspiration from Reddit’s minimalist card-based layout, providing a familiar and engaging discussion experience.\n\n" +
      "- **Automation & CI/CD:** Comprehensive testing implemented using Vitest, Testing Library, and Cypress for unit, integration, and end-to-end testing. The project also features continuous integration and deployment through GitHub Actions and Vercel with branch protection.\n\n" +
      "This project emphasizes maintainable state management, reliable CI/CD pipelines, and production-grade testing coverage, showcasing full front-end engineering capabilities aligned with professional standards.",
    tags: [
      "React",
      "Redux Toolkit",
      "React Router",
      "Material UI",
      "Vite",
      "Vitest",
      "Cypress",
      "Testing Library",
      "CI/CD",
      "GitHub Actions",
      "Vercel",
      "State Management",
      "Automation Testing",
    ],
    gallery: [
      `${CDN_URL}/projects/dicoding-forum/gallery-1.jpg`,
      `${CDN_URL}/projects/dicoding-forum/gallery-2.jpg`,
      `${CDN_URL}/projects/dicoding-forum/cover.jpg`,
      `${CDN_URL}/projects/dicoding-forum/gallery-4.jpg`,
      `${CDN_URL}/projects/dicoding-forum/gallery-5.jpg`,
      `${CDN_URL}/projects/dicoding-forum/gallery-6.jpg`,
      `${CDN_URL}/projects/dicoding-forum/gallery-7.jpg`,
    ],
    additional: [
      {
        title: "Github",
        link: "https://github.com/xhaeffer/dicoding-forum",
      },
      {
        title: "Visit Website",
        link: "https://dicoding-forum-pi.vercel.app/",
      },
    ],
  },
  {
    id: "Point-Web",
    title: "Point!",
    category: "Restaurant Review Web App",
    cover: `${CDN_URL}/projects/point-web/cover.webp`,
    type: "Front-End Development",
    summary:
      "PWA restaurant review web app for Dicoding Front-End Expert certification.",
    description:
      "https://raw.githubusercontent.com/xhaeffer/Dicoding-Point-Web/master/README.md",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Mobile-First Approach",
      "Progressive Web Apps",
      "Accessibility",
      "IndexedDB",
      "Lazy Loading",
      "Clean Code",
      "Automation Testing",
      "Web Vitals Optimization",
    ],
    gallery: [
      `${CDN_URL}/projects/point-web/gallery-1.webp`,
      `${CDN_URL}/projects/point-web/gallery-2.webp`,
      `${CDN_URL}/projects/point-web/gallery-3.webp`,
      `${CDN_URL}/projects/point-web/gallery-4.webp`,
      `${CDN_URL}/projects/point-web/gallery-5.webp`,
      `${CDN_URL}/projects/point-web/gallery-6.webp`,
      `${CDN_URL}/projects/point-web/gallery-7.webp`,
      `${CDN_URL}/projects/point-web/gallery-8.webp`,
      `${CDN_URL}/projects/point-web/gallery-9.webp`,
      `${CDN_URL}/projects/point-web/gallery-10.webp`,
      `${CDN_URL}/projects/point-web/gallery-11.webp`,
    ],
    additional: [
      {
        title: "Github",
        link: "https://github.com/xhaeffer/Dicoding-Point-Web",
      },
      {
        title: "Live View",
        link: "https://dicoding-point-restaurant.vercel.app/",
      },
    ],
  },
  {
    id: "Literify",
    title: "Literify",
    category: "Gamified AI Literacy App",
    cover: `${CDN_URL}/projects/literify/cover.webp`,
    type: "Android Development",
    summary:
      "Gamified Android literacy app with AI recommendations for Bangkit Academy 2024.",
    description:
      "Literify is an AI-powered mobile application designed to foster reading interest through personalized book recommendations and interactive gamification. The application was built as the capstone project for Bangkit Academy 2024 (led by Google, GoTo, and Traveloka).\n\n" +
      "- **Key Features:**\n" +
      "  - **AI Book Recommendations:** Generates tailored reading recommendations based on user preferences and reading history using machine learning models.\n" +
      "  - **Text Recognition (OCR):** Integrates Tesseract OCR to scan physical book pages and text snippets.\n" +
      "  - **Gamification & Habit Tracking:** Features reading progress metrics, interactive quizzes, achievement badges, and community challenges to encourage consistent reading habits.\n\n" +
      "- **Architecture & Cloud Backend:**\n" +
      "  - Built with Kotlin and Android Jetpack following MVVM clean architecture.\n" +
      "  - Integrated with Firebase for authentication and real-time data persistence, alongside Google Cloud Platform (GCP) for backend services.",
    tags: [
      "Kotlin",
      "Android Jetpack",
      "MVVM Architecture",
      "Machine Learning",
      "TensorFlow",
      "Tesseract OCR",
      "Google Cloud Platform",
      "Firebase",
      "Bangkit Academy",
      "Clean Architecture",
    ],
    gallery: [
      `${CDN_URL}/projects/literify/gallery-1.webp`,
      `${CDN_URL}/projects/literify/gallery-2.webp`,
      `${CDN_URL}/projects/literify/gallery-3.webp`,
      `${CDN_URL}/projects/literify/gallery-4.webp`,
      `${CDN_URL}/projects/literify/gallery-5.webp`,
      `${CDN_URL}/projects/literify/gallery-6.webp`,
      `${CDN_URL}/projects/literify/gallery-7.webp`,
      `${CDN_URL}/projects/literify/gallery-8.webp`,
    ],
    additional: [
      {
        title: "Github",
        link: "https://github.com/Literify/MD",
      },
      {
        title: "Download APK",
        link: "https://github.com/Literify/MD/releases/tag/beta",
      },
    ],
  },
  {
    id: "MRT-Jakarta-Emergency-Awareness",
    title: "MRT Jakarta Emergency Awareness",
    category: "Public Safety Educational AR App",
    cover: `${CDN_URL}/projects/mrt-jakarta-emergency-awareness/cover.jpg`,
    type: "Android & AR Development",
    summary:
      "Augmented Reality safety education app for Universitas Gunadarma scientific writing.",
    description:
      "MRT Jakarta Emergency Awareness is an Augmented Reality (AR) mobile application built to enhance passenger preparedness and safety education in MRT Jakarta carriages. Developed as a formal scientific writing project (Penulisan Ilmiah) for the Informatics degree at Universitas Gunadarma (2024).\n\n" +
      "- **Key Features & Implementation:**\n" +
      "  - **AR Facility Tracking:** Utilizes Unity 3D and Vuforia Engine to detect in-carriage emergency equipment (fire extinguishers, emergency door releases, intercoms) and superimpose interactive 3D guides.\n" +
      "  - **Visual Evacuation Protocols:** Provides step-by-step interactive procedures for train emergencies, replacing static text posters with intuitive visual guidance.",
    tags: [
      "Unity 3D",
      "Vuforia Engine",
      "C#",
      "Augmented Reality",
      "Android",
      "Universitas Gunadarma",
      "Academic Research",
      "Public Safety",
    ],
    gallery: [
      `${CDN_URL}/projects/mrt-jakarta-emergency-awareness/cover.jpg`,
    ],
    additional: [
      {
        title: "Github (Private)",
        link: "#",
        disabled: true,
      },
    ],
  },
  {
    id: "SuikaBot-Halu",
    title: "SuikaBot: Halu",
    category: "AI Roleplay Chatbot",
    cover: `${CDN_URL}/projects/suikabot/cover.webp`,
    type: "Chatbot Development",
    summary:
      "AI roleplay WhatsApp chatbot with Character.ai personas, currently archived.",
    description:
      "SuikaBot-Halu was a WhatsApp chatbot designed for interactive roleplay conversations with custom AI personas. Built with Node.js and Baileys, it bridged WhatsApp message streams with Character.ai to deliver dynamic, character-driven dialogues.\n\n" +
      "- **Overview & Implementation:**\n" +
      "  - Connected WhatsApp chats to Character.ai backend endpoints for real-time persona responses.\n" +
      "  - Managed character session context and message formatting between WhatsApp and the AI service.\n" +
      "  - Deployed and operated as a public bot before being discontinued and archived.",
    tags: [
      "Node.js",
      "Baileys",
      "Character.ai",
      "AI Roleplay",
      "Chatbot",
      "Entertainment",
      "Archived",
    ],
    gallery: [],
    additional: [
      {
        title: "Live Demo (Offline)",
        link: "https://bot.suikastd.dev",
        disabled: true,
      },
      {
        title: "Github (Private)",
        link: "https://github.com/SuikaStudio",
      },
    ],
  },
  {
    id: "SuikaBot-Gemini",
    title: "SuikaBot: GeminiAI",
    category: "Generative AI Chatbot",
    cover: `${CDN_URL}/projects/suikabot/cover.webp`,
    type: "Chatbot Development",
    summary:
      "Early generative AI WhatsApp bot using Google Gemini and Firestore, currently archived.",
    description:
      "SuikaBot: GeminiAI was an early exploration into bringing large language models into WhatsApp. Built with Node.js and whatsapp-web.js, it connected chat users with the Google Gemini API (Google AI Studio) for automated conversations and contextual query resolution.\n\n" +
      "- **Overview & Implementation:**\n" +
      "  - Automated conversational replies and question answering using Google Gemini API.\n" +
      "  - Persisted user chat history and session data using Firebase Firestore.\n" +
      "  - Structured with object-oriented service classes and Awilix for dependency injection.\n" +
      "  - Deployed publicly as a proof-of-concept before being archived in favor of WebSocket-based architectures.",
    tags: [
      "Node.js",
      "whatsapp-web.js",
      "Google Gemini",
      "Firebase Firestore",
      "Awilix",
      "Generative AI",
      "Archived",
    ],
    gallery: [
      `${CDN_URL}/projects/suikabot-gemini/gallery-1.jpg`,
      `${CDN_URL}/projects/suikabot-gemini/gallery-2.jpg`,
      `${CDN_URL}/projects/suikabot-gemini/gallery-3.jpg`,
      `${CDN_URL}/projects/suikabot-gemini/gallery-4.jpg`,
    ],
    additional: [
      {
        title: "Live Demo (Offline)",
        link: "https://bot.suikastd.dev",
        disabled: true,
      },
      {
        title: "Github",
        link: "https://github.com/SuikaStudio/SuikaBot-Gemini",
      },
    ],
  },
];

export default projectsData;
