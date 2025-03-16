const projectsData = [
  {
    id: 1,
    title: "SuikaCore",
    category: "Backend as a Service (BaaS)",
    cover: "https://imagizer.imageshack.com/img924/4957/QOwMfs.png",
    type: "Back-End Development",
    summary: "A monolithic Backend as a Service (BaaS) providing API solutions for the Suika ecosystem.",
    description: "SuikaCore is a monolithic backend system that serves as the core API provider for all Suika products. "+
                 "It utilizes Node.js and Express.js to build a scalable REST API, with MySQL as its primary database managed via Sequelize.\n\n"+
                 "Authentication and additional features are supported through Firebase, while AI capabilities leverage OpenAI and Google Cloud Vertex AI. "+
                 "Other integrations include Midtrans for payment processing, ensuring robust and secure backend services.",
    tags: [
      "Node.js",
      "Express.js",
      "REST API",
      "MySQL",
      "Sequelize",
      "Firebase",
      "Google Cloud",
      "Microsoft Azure",
      "Generative AI",
      "Vertex AI",
      "Open AI",
      "Midtrans",
      "Payment Integration"
    ],
    gallery: [
      "https://imagizer.imageshack.com/img922/5273/dvaCTZ.jpg",
      "https://imagizer.imageshack.com/img924/3888/Alnnbh.jpg"
    ],
    additional: [
      {
        title: "Github (Private)",
        link: "https://github.com/SuikaBot",
      }
    ]
  },
  {
    id: 2,
    title: "SuikaBot",
    category: "Multipurpose Chatbot",
    cover: "https://imagizer.imageshack.com/img923/3047/BfDVs4.png",
    type: "Chatbot Development",
    summary: 
      "A WhatsApp chatbot designed to enhance various tasks with features such as GenAI, file downloader, file converter, text translator, and more.",
    description:
      "SuikaBot is built using Node.js and primarily utilizes whatsapp-web.js / baileys for WhatsApp automation.\n\n" + 
      "It heavily relies on SuikaCore for backend services, including database operations (MySQL) and almost all of its core features. " +
      "The chatbot is designed to be modular, allowing for easy addition of new features and services.\n\n" +
      "The main features of SuikaBot include:\n" +
      "- Generative AI (using Gemini-1.5, Imagen3, GPT-4, DALL-E3)\n" +
      "- Downloader (using Cobalt)\n" +
      "- Converter (using ConvertAPI)\n" +
      "- Translator (using DeepL)\n" +
      "- Donation (using Midtrans for payment gateway)\n" +
      "- Some entertainment features\n" +
      "- One-Time Messages Peeker\n" +
      "- Create sticker (img, video, gif)\n" +
      "- Convert sticker into media\n" +
      "- Tag some group participant. (@admin / @member / @everyone)\n\n" +
      "And more features will be added as needed.",
    tags: [
      "Node.js",
      "Whatsapp-web.js",
      "Baileys",
      "SuikaCore",
      "DeepL",
      "Generative AI",
      "Vertex AI",
      "Open AI",
      "Payment Integration",
      "Midtrans",
      "Firebase",
      "Google Cloud",
      "Microsoft Azure",
    ],
    gallery: [
      "https://imagizer.imageshack.com/img924/8596/5o5OQ1.jpg",
      "https://imagizer.imageshack.com/img923/244/5ZaDEa.jpg"
    ],
    additional: [
      {
        title: "Available Bots",
        link: "https://suika.pw"
      },
      {
        title: "Github (Private)",
        link: "https://github.com/SuikaBot",
      },
    ]
  },
  {
    id: 3,
    title: "SuikaBot-GeminiAI",
    category: "Generative AI Chatbot",
    cover: "https://imagizer.imageshack.com/img923/3047/BfDVs4.png",
    type: "Chatbot Development",
    summary: "An AI-powered WhatsApp chatbot utilizing Vertex AI for generative responses.",
    description: 
      "SuikaBot-Gemini is a subset of SuikaBot, designed specifically for AI-driven interactions. " +
      "It is an advanced WhatsApp chatbot built using Node.js and whatsapp-web.js.\n\n" +
      "Unlike SuikaBot, it doesn't rely on SuikaCore. Instead, it integrates Google Vertex AI to generate human-like responses " +
      "and uses Firebase Firestore as its primary database.\n\n" +
      "The bot also utilizes Awilix for dependency injection, ensuring scalability and maintainability.",
      tags: [
        "Node.js",
        "whatsapp-web.js",
        "Generative AI",
        "Vertex AI",
        "Firebase",
        "Awilix",
        "Object-Oriented Programming",
        "Clean Code",
    ],
    gallery: [],
    additional: [
      {
        title: "Host a Bot",
        link: "https://suika.pw",
        disabled: true
      },
      {
        title: "Github",
        link: "https://github.com/SuikaBot/SuikaBot-Gemini",
      },
    ]
  },
  {
    id: 4,
    title: "SuikaBot-WaIntip",
    category: "WhatsApp Chatbot",
    cover: "https://imagizer.imageshack.com/img923/3047/BfDVs4.png",
    type: "Chatbot Development",
    summary: "A WhatsApp chatbot that allows users to view one-time messages (photos, videos, and voice notes) without limitations.",
    description:
      "SuikaBot-WaIntip is a subset of SuikaBot, designed to bypass WhatsApp’s one-time view restriction and let users retrieve viewed media " +
      "It is an advanced WhatsApp chatbot built using Node.js and whatsapp-web.js.\n\n" +
      "Key features of Suika-WaIntip include:\n" +
      "- Bypass one-time view messages (photos, videos, and voice notes)\n" +
      "- Automatically retrieve and resend media to users\n" +
      "- Simple and user-friendly command system\n\n" +
      "Unlike SuikaBot, it doesn't rely on SuikaCore. Instead, Suika-WaIntip operates independently, processing media directly within the bot without requiring external backend services.\n\n" +
      "How it works:\n" +
      "- When a user receives a one-time view message, the bot intercepts and bypasses the restriction.\n" +
      "- The bot then retrieves the media and resends it to the user, allowing them to view and save it without limitations.\n\n",
    tags: [
      "Node.js",
      "whatsapp-web.js",
      "One-Time Message Viewer",
    ],
    gallery: [
      "https://imagizer.imageshack.com/img924/2233/Xy90NS.png",
      "https://imagizer.imageshack.com/img924/9659/KXYITh.png"
    ],
    additional: [
      {
        title: "Host a Bot",
        link: "https://suika.pw",
        disabled: true
      },
      {
        title: "Github",
        link: "https://github.com/muhismail015/WA-Intip",
      },
    ]
  },
  {
    id: 5,
    title: "SuikaBot (Website)",
    category: "Website",
    cover: "https://imagizer.imageshack.com/img924/938/Pfvx2T.jpg",
    type: "Front-End Development",
    summary: "A landing page and management interface for SuikaBot and SuikaCore.",
    description: 
      "SuikaWeb is a web-based platform designed to showcase information about SuikaBot while also providing tools to manage SuikaCore virtual machines.\n\n" +
      "Built with React and Vite, it integrates various modern front-end technologies such as Flowbite, Tailwind CSS, Redux Toolkit, etc." +
      "The platform offers a seamless experience for both users and administrators.",
    tags: [
      "React",
      "Vite",
      "Flowbite",
      "Tailwind CSS",
      "Redux Toolkit",
      "Firebase",
      "Vercel",
    ],
    gallery: [
      "https://imagizer.imageshack.com/img924/938/Pfvx2T.jpg",
      "https://imagizer.imageshack.com/img924/7889/vkLDLc.jpg",
      "https://imagizer.imageshack.com/img922/566/WDhrOS.jpg",
      "https://imagizer.imageshack.com/img923/7092/9accRm.jpg",
      "https://imagizer.imageshack.com/img922/4607/3oGPni.jpg",
      "https://imagizer.imageshack.com/img922/5273/dvaCTZ.jpg",
      "https://imagizer.imageshack.com/img924/3888/Alnnbh.jpg"
    ],
    additional: [
      {
        title: "Live View",
        link: "https://suika.pw",
      },
      {
        title: "Github",
        link: "https://github.com/SuikaBot/SuikaWeb",
      },
    ]
  },
  {
    id: 6,
    title: "BajoBliss (BaaS)",
    category: "Backend as a Service (BaaS)",
    cover:
      "https://imagizer.imageshack.com/img924/5400/M3eOOh.png",
    type: "Back-End Development",
    summary: "Capstone Project: BajoBliss - Baparekraf Digital Talent 2024",
    description: 
      "BajoBliss (BaaS) provides backend services for the BajoBliss platform, ensuring seamless data management and business logic execution. " +
      "It supports local businesses by offering API-based services to facilitate product listings, bookings, and user management.\n\n" +
      "The system is built using Hapi.js with MySQL as its database, ensuring efficient data processing and scalability. " +
      "Authentication is handled via JWT with Role-Based Access Control (RBAC) to differentiate user and admin roles. " +
      "Additionally, Midtrans is integrated for secure payment transactions.",
    tags: [
      "Node.js",
      "Hapi.js",
      "REST API",
      "MySQL",
      "Sequelize",
      "Authentication",
      "JWT",
      "Role-Based Access Control",
      "Midtrans",
      "Payment Integration"
    ],
    gallery: [],
    additional: [
      {
        title: "Github (old)",
        link: "https://github.com/lussyanast/bajobliss/tree/server",
      },
      {
        title: "Github (new)",
        link: "https://github.com/BajoBliss/back",
      },
    ]
  },
  {
    id: 7,
    title: "BajoBliss: Discover Labuan Bajo's Treasures",
    category: "Website",
    cover:
      "https://imagizer.imageshack.com/img924/5400/M3eOOh.png",
    type: "Front-End Development",
    summary: "Capstone Project: BajoBliss - Baparekraf Digital Talent 2024",
    description: 
      "BajoBliss is a digital platform designed to showcase and promote Labuan Bajo's local products to global tourists.\n\n" +
      "The front-end is built using a mobile-first approach, ensuring accessibility across devices. " +
      "Developed with HTML, CSS, and JavaScript, it follows Progressive Web App (PWA) principles to enhance user experience with offline capabilities. " +
      "The UI is designed to be intuitive, with automation testing implemented to maintain code quality and reliability.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Mobile-First Approach",
      "Progressive Web Apps",
      "Clean Code",
      "Automation Testing",
    ],
    gallery: [
      "https://imagizer.imageshack.com/img924/5400/M3eOOh.png",
      "https://imagizer.imageshack.com/img924/6395/ku1oVm.png",
      "https://imagizer.imageshack.com/img922/9628/uYp7PD.png",
      "https://imagizer.imageshack.com/img923/4379/g9JN9C.png",
      "https://imagizer.imageshack.com/img922/8421/a14QFI.png",
    ],
    additional: [
      {
        title: "Github (Old)",
        link: "https://github.com/lussyanast/bajobliss/tree/dev",
      },
      {
        title: "Github (New)",
        link: "https://github.com/BajoBliss/front",
      },
      {
        title: "Live View",
        link: "#",
        disabled: true,
      },
    ],
  },
  {
    id: 8,
    title: "Point!",
    category: "Website",
    cover: "https://imagizer.imageshack.com/img924/5430/xvgvmJ.png",
    type: "Front-End",
    summary:
      "Final Submission: Menjadi Front-End Web Developer Expert - Dicoding Indonesia",
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
      "https://imagizer.imageshack.com/img923/4110/EtmeVZ.png",
      "https://imagizer.imageshack.com/img923/1731/OfTCXU.png",
      "https://imagizer.imageshack.com/img923/6356/c83drO.png",
      "https://imagizer.imageshack.com/img924/6901/N7OU31.png",
      "https://imagizer.imageshack.com/img922/8899/ST64JW.png",
      "https://imagizer.imageshack.com/img922/1200/N5eQnK.png",
      "https://imagizer.imageshack.com/img922/3549/g8len7.png",
      "https://imagizer.imageshack.com/img922/6913/Kh8H1Q.png",
      "https://imagizer.imageshack.com/img923/834/gUsDEH.png",
      "https://imagizer.imageshack.com/img924/4223/OMK3gy.png",
      "https://imagizer.imageshack.com/img923/2947/Y9MzWB.png"
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
    id: 9,
    title: "Dicoding Forum",
    category: "Website",
    cover: "",
    type: "Front-End",
    summary: "",
    description: "",
    tags: [],
    gallery: [],
    additional: []
  },
  {
    id: 10,
    title: "Klinik Ridsu",
    category: "Backend as a Service (BaaS)",
    cover: "",
    type: "Back-End Development",
    summary: "",
    description: "",
    tags: [],
    gallery: [],
    additional: []
  },
  {
    id: 11,
    title: "Literify",
    category: "AI-Powered App",
    cover: "https://imagizer.imageshack.com/img923/5736/hZknYq.png",
    type: "Android Development",
    summary: "Capstone Project: Literify - Bangkit Academy 2024",
    description: 
      "Literify is an AI-powered mobile app designed to address Indonesia's literacy challenges by offering personalized book recommendations and incorporating gamification to engage users, especially younger audiences. \n\n" +
      "Built with Kotlin and Android Jetpack, Literify utilizes machine learning models powered by TensorFlow and Tesseract OCR for text recognition.\n\n" +
      "Key Features:\n" +
      "- **AI-Powered Book Recommendations**: Suggests books based on user preferences using ML models.\n" +
      "- **Genre Discovery**: Helps users explore books tailored to their interests and reading history.\n" +
      "- **Gamification & Achievement Tracking**: Includes achievements, quizzes, and leaderboards to enhance engagement.\n" +
      "- **Progress Monitoring**: Tracks users' reading progress and accomplishments.\n" +
      "- **Community Engagement**: Allows users to join reading challenges and share progress with others.\n" +
      "- **Cloud Integration**: Uses **Firebase** for authentication and real-time database, while **Google Cloud Platform (GCP)** powers backend services.\n\n" +
      "Following **MVVM architecture**, **SOLID principles**, and **clean architecture**, Literify maintains a well-structured and maintainable codebase for long-term development.\n\n",
    tags: [
      "Kotlin",
      "Android Jetpack",
      "MVVM Architecture",
      "User Experience (UX)",
      "Android Development",
      "SOLID Design Principles",
      "Clean Architecture",
      "Machine Learning",
      "TensorFlow",
      "Tesseract OCR",
      "Google Cloud Platform",
      "Firebase",
    ],
    gallery: [
      "https://imagizer.imageshack.com/img922/391/gvoSzE.jpg",
      "https://imagizer.imageshack.com/img923/3244/4jAr95.jpg",
      "https://imagizer.imageshack.com/img924/16/SkAyPq.jpg",
      "https://imagizer.imageshack.com/img922/9556/s95ow4.jpg",
      "https://imagizer.imageshack.com/img923/1104/QEnyKI.jpg",
      "https://imagizer.imageshack.com/img922/8971/jb7pDj.jpg",
      "https://imagizer.imageshack.com/img922/9361/7BAJ83.jpg",
      "https://imagizer.imageshack.com/img923/2463/erVb7W.jpg",
    ],
    additional: [
      {
        title: "Github",
        link: "https://github.com/Literify/MD",
      },
      {
        title: "APK",
        link: "https://github.com/Literify/MD/releases/tag/beta",
      },
    ]
  },
  {
    id: 12,
    title: "MRT Jakarta Emergency Awareness",
    category: "Android App",
    cover: "",
    type: "Android Development",
    summary: "Penulisan Ilmiah: Universitas Gunadarma",
    description: "",
    tags: [],
    gallery: [],
    additional: []
  },
];

export default projectsData;
