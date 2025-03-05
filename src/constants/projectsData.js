const projectsData = [
  {
    id: 1,
    title: "SuikaCore",
    category: "Backend as a Service (BaaS)",
    cover: "https://i.ibb.co.com/S8PY7Vm/Untitled-Presentation-43.png",
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
      "https://i.ibb.co.com/8nvy6vzm/5-suikaweb-Def-J5-WOM.jpg",
      "https://i.ibb.co.com/35xcpN2c/6-suikaweb-vj9gds-Pa.jpg"
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
    cover: "https://i.ibb.co.com/j9Lk4FVC/Untitled-Presentation-43-1.png",
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
      "https://i.ibb.co.com/zhx1fRCW/1-suikabot-pm-n-Z0i-Z.jpg",
      "https://i.ibb.co.com/tPvq3Nv6/2-suikabot-qfp-Cu-Xat.jpg"
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
    title: "SuikaBot-Gemini",
    category: "Generative AI Chatbot",
    cover: "https://i.ibb.co.com/j9Lk4FVC/Untitled-Presentation-43-1.png",
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
    title: "Suika-WaIntip",
    category: "WhatsApp Chatbot",
    cover: "https://i.ibb.co.com/j9Lk4FVC/Untitled-Presentation-43-1.png",
    type: "Chatbot Development",
    summary: "A WhatsApp chatbot that allows users to view one-time messages (photos, videos, and voice notes) without limitations.",
    description:
      "Suika-WaIntip is a specialized WhatsApp chatbot designed to bypass the one-time view restriction on messages, enabling users to retrieve and save one seen media. " +
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
      "https://i.ibb.co.com/My5DhwkW/private-msg.png",
      "https://i.ibb.co.com/r21LCywk/only-admin-can-send-msg-group.png"
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
    title: "SuikaWeb",
    category: "Website",
    cover: "https://i.ibb.co.com/bjv0Hz4B/Screenshot-2025-03-05-222450.jpg",
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
      "https://i.ibb.co.com/bjv0Hz4B/Screenshot-2025-03-05-222450.jpg",
      "https://i.ibb.co.com/8n8nDX3z/Screenshot-2025-03-05-222555.jpg",
      "https://i.ibb.co.com/jkZYZfsm/Screenshot-2025-03-05-222636.jpg",
      "https://i.ibb.co.com/bRGDL2Vk/Screenshot-2025-03-05-222723.jpg",
      "https://i.ibb.co.com/8DJrczVt/Screenshot-2025-03-05-222753.jpg",
      "https://i.ibb.co.com/8nvy6vzm/5-suikaweb-Def-J5-WOM.jpg",
      "https://i.ibb.co.com/35xcpN2c/6-suikaweb-vj9gds-Pa.jpg"
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
      "https://i.ibb.co.com/6JHZxVT2/349894153-adb5110b-efdd-4058-86ba-8bb160f35cdf.png",
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
      "https://i.ibb.co.com/6JHZxVT2/349894153-adb5110b-efdd-4058-86ba-8bb160f35cdf.png",
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
      "https://i.ibb.co.com/6JHZxVT2/349894153-adb5110b-efdd-4058-86ba-8bb160f35cdf.png",
      "https://i.ibb.co.com/ccZ8hhSC/349894823-25501398-4b61-4ceb-9757-3c58f9829ffe.png",
      "https://i.ibb.co.com/vC6XGfxZ/349894932-ae11a9be-a801-4303-9dda-28e7cadd7d13.png",
      "https://i.ibb.co.com/1fN8Kp1V/349894693-dc088202-6cd6-41c7-854a-f36f13946541.png",
      "https://i.ibb.co.com/JRbp647L/349895069-78202db1-9412-482f-9be1-cdf0ac1ec0e6.png",
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
    cover: "https://i.ibb.co.com/6RbLtHXc/bbbbbbb.png",
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
      "https://i.ibb.co.com/yJGQhYK/2025-02-28-17-01-dicoding-point-restaurant-vercel-app.png",
      "https://i.ibb.co.com/SwpkSNqc/2025-02-28-16-59-dicoding-point-restaurant-vercel-app.png",
      "https://i.ibb.co.com/Ld4Dpz8F/2025-02-28-19-15-dicoding-point-restaurant-vercel-app.png",
      "https://i.ibb.co.com/2GbqNjd/download-1.png",
      "https://i.ibb.co.com/LzZvLC5V/aaaaa.png",
      "https://i.ibb.co.com/fGMwmPJC/readfile.png",
      "https://i.ibb.co.com/F4Wr85JY/readfile-1.png",
      "https://i.ibb.co.com/ksC6dTJw/readfile-2.png",
      "https://i.ibb.co.com/rKvwfBGt/readfile-3.png",
      "https://i.ibb.co.com/CK3SFfvW/readfile-4.png",
      "https://i.ibb.co.com/GvpktN66/readfile-5.png"
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
    cover: "https://i.ibb.co.com/rftSb9Gs/Untitled-Presentation-43.png",
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
      "https://i.ibb.co.com/wh7PN0Jc/Screenshot-2024-12-12-23-09-52-995-com-literify.jpg",
      "https://i.ibb.co.com/fYp1V6hj/Screenshot-2024-12-12-23-10-01-271-com-google-android-gms.jpg",
      "https://i.ibb.co.com/vvHL3vyW/Screenshot-2024-12-12-23-10-03-314-com-google-android-gms.jpg",
      "https://i.ibb.co.com/4gfC3bC0/Screenshot-2024-12-12-23-10-06-686-com-literify.jpg",
      "https://i.ibb.co.com/q3w0s8fb/Screenshot-2024-12-12-23-07-51-419-com-literify.jpg",
      "https://i.ibb.co.com/LdkJ8RBH/Screenshot-2024-12-12-23-07-54-273-com-literify.jpg",
      "https://i.ibb.co.com/xd3Mtr3/image0.jpg",
      "https://i.ibb.co.com/6JX9ttZS/Screenshot-2024-12-12-23-07-56-439-com-literify.jpg",
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
