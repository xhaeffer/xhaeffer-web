let id = 1;

const projectsData = [
  {
    id: id++,
    title: "SuikaAPI",
    category: "Backend as a Service (BaaS)",
    cover: "https://imagizer.imageshack.com/img924/4957/QOwMfs.png",
    type: "Back-End Development",
    summary:
      "A private Backend as a Service (BaaS) powering the entire SuikaStudio ecosystem.",
    description:
      "SuikaAPI is the central backend system that provides RESTful APIs for all SuikaStudio products. " +
      "It is built with Node.js and Express.js, with several endpoints implemented in Go for high-performance workloads, " +
      "and Elysia.js for modern, lightweight API handling.\n\n" +
      "The API uses MySQL as its primary database with Sequelize as the ORM, and Redis for caching and performance improvements. " +
      "Firebase is currently used for authentication and token handling, with future plans to leverage more of its services such as Firestore. " +
      "SuikaAPI powers multiple services including FakeSaldo, LokerKerja, SuikaBot, and more.\n\n" +
      "API documentation is generated automatically via OpenAPI/Swagger. Planned enhancements include RabbitMQ for message queuing " +
      "and a potential migration from MySQL to PostgreSQL.\n\n" +
      "Third-party integrations such as Midtrans enable reliable and secure payment processing throughout the ecosystem.",
    tags: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Elysia.js",
      "Go",
      "Gin",
      "Python",
      "FastAPI",
      "REST API",
      "MySQL",
      "PostgreSQL",
      "Sequelize",
      "Redis",
      "Firebase",
      "Swagger",
      "OpenAPI",
      "RabbitMQ",
      "Backend Development",
      "Payment Integration",
      "Midtrans",
    ],
    gallery: [
      "https://imagizer.imageshack.com/img922/5273/dvaCTZ.jpg",
      "https://imagizer.imageshack.com/img924/3888/Alnnbh.jpg",
    ],
    additional: [
      {
        title: "GitHub (Private)",
        link: "https://github.com/SuikaStudio",
      },
    ],
  },
  {
    id: id++,
    title: "SuikaBot",
    category: "Multipurpose Chatbot",
    cover: "https://imagizer.imageshack.com/img923/3047/BfDVs4.png",
    type: "Chatbot Development",
    summary:
      "A WhatsApp chatbot designed to enhance various tasks with features such as GenAI, file downloader, file converter, text translator, and more.",
    description:
      "SuikaBot is built using Node.js and primarily utilizes Baileys for WhatsApp automation.\n\n" +
      "It heavily relies on SuikaAPI for backend services, including database operations (MySQL) and almost all of its core features. " +
      "The chatbot is designed to be modular, allowing for easy addition of new features and services.\n\n" +
      "The main features of SuikaBot include:\n" +
      "- Generative AI (using Google Gemini, Imagen3, GPT, DALL-E3)\n" +
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
      "Baileys",
      "SuikaAPI",
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
      "https://imagizer.imageshack.com/img923/244/5ZaDEa.jpg",
    ],
    additional: [
      {
        title: "Available Bots",
        link: "https://bot.suikastd.dev",
      },
      {
        title: "Github (Private)",
        link: "https://github.com/SuikaStudio",
      },
    ],
  },
  {
    id: id++,
    title: "SuikaBot-GeminiAI",
    category: "Generative AI Chatbot",
    cover: "https://imagizer.imageshack.com/img923/3047/BfDVs4.png",
    type: "Chatbot Development",
    summary:
      "An AI-powered WhatsApp chatbot utilizing Google Gemini for generative responses.",
    description:
      "SuikaBot-Gemini is a subset of SuikaBot, designed specifically for AI-driven interactions. " +
      "It is an advanced WhatsApp chatbot built using Node.js and whatsapp-web.js.\n\n" +
      "Unlike SuikaBot, it doesn't rely on SuikaCore. Instead, it integrates Google Gemini API to generate human-like responses " +
      "and uses Firebase Firestore as its primary database.\n\n" +
      "The bot also utilizes Awilix for dependency injection, ensuring scalability and maintainability.",
    tags: [
      "Node.js",
      "whatsapp-web.js",
      "Generative AI",
      "Google AI Studio",
      "Firebase",
      "Awilix",
      "Object-Oriented Programming",
      "Clean Code",
    ],
    gallery: [
      "https://lh3.googleusercontent.com/pw/AP1GczMLlZVL5pOIj5NvZ88LmhOqTG1PSrZX-vDXphApOzgMOBUOH6effY43O5HqiCCTB8DjOWAuAuTRFAtcrULsYi3SCtmqjncQQki3sOtCgiD31Az4UIWCN64fa26HF3MGdse58_6-xZHMPDBYnRgqSO1b=w715-h538-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczOS-qP9Fv9LiyzrDiTtZ3Q8delVbVM3n3wrDuPVY7q4brTdo6Kn1dF_zSajJyGNK66moF6GKmem4Upth4ToyxSOCI8Z8dRdPZ0ucNB7S35J09_yYmnBDwl7LXBXs0KgL8_hSQA_kmV4wU5lVaCAFC82=w781-h555-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczNpH_mISi754V7shYKqYjKofT3nAAq0HTMnMYg3RgMnKT2qfZbXBxMn_05oSswICsi5bHDDVUkq1GgSDkm2jY2OE1piCJEYBeXl1GFfMj7J69IMqanMCrySiuaxmqOFG9f-dHyJ3iX29te-H78q_3FA=w727-h516-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczP5P2gozPVyXQgqlb1taURmLIP7O0Zh4kgYHK0rsYywLMvUwL6BSs0MP8W-cx3ReAQvpqq9jqT2-VoO-Gi2rZNb7_8pyE296OboAH1bve4S81lJGm3Yg7EdxS7xOELcrpY79VRh2khjMjnK3DaMH7PD=w770-h548-s-no-gm?authuser=0"
    ],
    additional: [
      {
        title: "Host a Bot",
        link: "https://bot.suikastd.dev",
        disabled: true,
      },
      {
        title: "Github",
        link: "https://github.com/SuikaStudio/SuikaBot-Gemini",
      },
    ],
  },
  {
    id: id++,
    title: "SuikaBot-Halu",
    category: "AI Roleplay Chatbot",
    cover: "https://imagizer.imageshack.com/img923/3047/BfDVs4.png",
    type: "Chatbot Development",
    summary:
      "A WhatsApp chatbot connected to Character.ai for immersive AI roleplay conversations.",
    description:
      "SuikaBot-Halu is a variant of SuikaBot, created to deliver engaging and personalized roleplay chat experiences. " +
      "It is built with Node.js and Baileys, and integrates with Character.ai to enable interactive conversations " +
      "with custom AI personas.",
    tags: [
      "Node.js",
      "Baileys",
      "Character.ai",
      "AI Roleplay",
      "Entertainment",
      "Clean Code",
      "Modular Architecture",
    ],
    gallery: [],
    additional: [
      {
        title: "Available Bots",
        link: "https://bot.suikastd.dev",
      },
      {
        title: "Github (Private)",
        link: "https://github.com/SuikaStudio",
      },
    ],
  },
  {
    id: id++,
    title: "DigitalDiary.ku",
    category: "Social Emotional Learning Platform",
    cover:
      "https://lh3.googleusercontent.com/pw/AP1GczPNlADKXD1uguzrR37tYXUTEJkElnoXlHKxCWMiFLXGvQjKkeCcUw1BvYf778KX-1oeRC-CelvEfOrFX0ac8H8y5sVJcAH5ACHdrSCIkPL-R6iSW59qrQK8_alT-kHnyBskskpOTPMPQzN8xLuGRtOA=w800-h400-s-no-gm?authuser=0",
    type: "Full-Stack Development",
    summary:
      "A journaling platform that fosters Social Emotional Learning (SEL) through daily reflections, mood tracking, and habit building — designed for students and usable independently or with teacher support.",
    description:
      "DigitalDiary.ku is a full-stack web application that supports Social Emotional Learning (SEL) for students of various levels. " +
      "The platform enables students to write daily journals, track moods, monitor habits, and participate in reflective challenges. " +
      "It is school-agnostic — meaning students can use it independently, while teachers have the option to provide guidance and feedback through a dedicated dashboard.\n\n" +
      "The application is built using Next.js with Firestore as the primary database and Firebase Authentication for secure access. " +
      "For the front-end experience, shadcn is integrated to provide a modern and accessible UI component system.\n\n" +
      "DigitalDiary.ku creates a safe space for students to express themselves, build emotional awareness, and develop positive habits, " +
      "while giving educators optional tools to observe and support their students’ growth.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "React",
      "Next.js",
      "Firestore",
      "Firebase Authentication",
      "shadcn",
      "Education Technology",
      "Social Emotional Learning",
      "Journaling",
      "Mood Tracking",
      "Habit Tracking",
      "Action Reflection",
    ],
    gallery: [
      "https://lh3.googleusercontent.com/pw/AP1GczNUrH9U5W1lfYmIeAWV_7UHhwbxRWZwiDUC2UQPxNIEcMRbDFz1FuLDgqcO2ov3_pD0R3JdgOqFxhlasD9n7a95tb5Fcaf4Yi7GkWRWeumGNzibv_59ulbMrjIoNFzvnMWJAPBHhSzmv9nmpyrZoaVe=w1920-h887-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczNosGBWJLx-M7n2eAThPlLYHgICEUXsLkaRWs4MbgLCUXiv-iNs92HIZhlWrMGadm3EbhQOXYLSPGTs4cHrLqdDxdIRNWS7kUA1KxUi7NNI7KvsYPsj0pfX0JFB2VqZURnMkre0PhOZBbe-3onIyGPF=w957-h515-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczNDUAe9S5Q2NLingwrCYON8SSMPVm_5IsqNgVQjqOPdKMFiiW0p4-YSjD1xf1WzorHRYsApQaA7GW8TP1nwgoVA6ZMw4jVR-tEGqyHYDMaJb5utzAnBCKGsT7_sNOLOega0jC1OXmUsUuPwwUyKw2jV=w1900-h888-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczMuvxcX-dYKxwiBeap3RASsdznpKXLeNe3E55JCMx8DbZbRq8k7x8T14CO7H9rN09wxRmgJ3GnWs90EtOUTVvoP5R9DbPtPmRbcuzgkcemA4DCP2LOgUi--zB6W62C3K9_12XhpBQ17V4Lst6cBbtCq=w952-h687-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczMN7quM5OVFURbG_l2F02fCjFHUGPlGL8Drp3IVXknNL5N9mqtUv0iCyLP6R_b2x2cFkZA7arrjofcBbRdBbhxzi9VbQgBRs69ZfgzrKluzv7E-iLb41bns2xuwq1lGg4dSR5atz-8BrA8zf92oBc4G=w953-h509-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczPv7a0ojPzdQ7txMFEeTHmGusRlwJjGTrh50A5Rk-QVefreeqfUj1VP66qMiEWn-3BLuV6Ub7bkw6xSDkVTgCelLybHUtq6aa3UgmgXVXPUG5aJ5kR_HSnn9aCHXOL6ZpCPv0D660s9D8IWcDHSVybu=w1898-h885-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczPtBng_dDvnuMtOd6upXruZzzJ_mcDSWeOBKuvsEPpglmAE-epfCm_0lUz8s-ynHvxdTvBjZsbzCpjHmdfUWjbVGQoawYi93ATuaxvCxaUNkEjsXSHUYMJyL3zBHBLNNORSrbkgQKmTzVqYfBA3XOvi=w952-h669-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczMBpPOnym0Q2IaywmWyBKu65XegSXupcavZIRnvCUZBeK6htdoF3Y_pJy6-JezjktJitj3Cjke_SGK39S4_d9uFp5C8bpM25iXFRVMJQuv5XhjcWd2240e1pS5TS4a31yLIhbH_84A7QeeRogqFGFqz=w952-h587-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczPE_4zLHvOfguB4nPi_uHvx2XPmoZB0a9Nk4EwJNmym57yrVC9Zbc6Tx9FXh5XxYreCTqLw1FhgZ3OBNx-tfoohtev-gV6r9ZOsjgLQFv6ZtbWrPMFmmiLv7sbeVlhycdGC1fT6mby-ctRKMlfXL4KD=w1920-h891-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczPU75zkzCs-ZtyeiHnST6cc9D__bXZXpqbQnN-r5FYyHIIIZnqXgUqj0JWnLNzSrYa2c8XSSgTbqNOhmTlPLZ8wX4Cc0pl1IxCSklWzdaRhDdDBGKQLfIi-AbCtQ1WNxu3bcPgURN0Uwb3zbrOpVAkR=w1901-h881-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczOqpb0Jni3cIqcOyRFaEvTZDECeVV6LFOxFz1VAxYxoB7UbYZDlB21scqAXADM6xmbqeitWqaoHIky-KxCHKCMBywuMKCsYYNqunBq6s8rJssNHHdiDQlRC9zS7ibdJnj2AaZbnVSoY-I-x5uc_msSd=w1900-h885-s-no-gm?authuser=0",
    ],
    additional: [
      {
        title: "Landing Page",
        link: "https://sites.google.com/view/digitaldiary-ku/home",
      },
      {
        title: "Live View",
        link: "https://digitaldiaryku.com/",
      },
      {
        title: "Github (Private)",
        link: "https://github.com/xhaeffer/DigitalDiaryku-App",
      },
    ],
  },
  {
    id: id++,
    title: "BajoBliss (BaaS)",
    category: "Backend as a Service (BaaS)",
    cover: "https://imagizer.imageshack.com/img924/5400/M3eOOh.png",
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
      "Payment Integration",
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
    ],
  },
  {
    id: id++,
    title: "BajoBliss: Discover Labuan Bajo's Treasures",
    category: "Website",
    cover: "https://imagizer.imageshack.com/img924/5400/M3eOOh.png",
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
    id: id++,
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
      "https://imagizer.imageshack.com/img923/2947/Y9MzWB.png",
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
    id: id++,
    title: "Dicoding Forum",
    category: "Website",
    cover: "",
    type: "Front-End",
    summary: "",
    description: "",
    tags: [],
    gallery: [],
    additional: [],
  },
  {
    id: id++,
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
    ],
  },
  {
    id: id++,
    title: "MRT Jakarta Emergency Awareness",
    category: "Android App",
    cover: "",
    type: "Android Development",
    summary: "Penulisan Ilmiah: Universitas Gunadarma",
    description: "",
    tags: [],
    gallery: [],
    additional: [],
  },
];

export default projectsData;
