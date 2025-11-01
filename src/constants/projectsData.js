const projectsData = [
  {
    id: "SuikaAPI",
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
      "OpenAI API",
      "Google AI Studio",
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
    id: "SuikaBot",
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
      "Generative AI",
      "Open AI",
      "Google AI Studio",
      "Payment Integration",
      "Midtrans",
      "DeepL",
      "Firebase",
      "Clean Code",
      "Modular Architecture",
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
    id: "SuikaBot-Gemini",
    title: "SuikaBot: GeminiAI",
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
      "https://lh3.googleusercontent.com/pw/AP1GczP5P2gozPVyXQgqlb1taURmLIP7O0Zh4kgYHK0rsYywLMvUwL6BSs0MP8W-cx3ReAQvpqq9jqT2-VoO-Gi2rZNb7_8pyE296OboAH1bve4S81lJGm3Yg7EdxS7xOELcrpY79VRh2khjMjnK3DaMH7PD=w770-h548-s-no-gm?authuser=0",
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
    id: "SuikaBot-Halu",
    title: "SuikaBot: Halu",
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
    id: "DigitalDiaryku",
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
      "For the front-end experience, Tailwind and shadcn is integrated to provide a modern and accessible UI component system.\n\n" +
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
      "Tailwind CSS",
      "shadcn",
      "Education Technology",
      "Social Emotional Learning",
      "Digital Journaling",
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
    id: "BajoBliss",
    title: "BajoBliss: Discover Labuan Bajo's Treasures",
    category: "Tourism & Local Commerce Platform",
    cover: "https://imagizer.imageshack.com/img924/5400/M3eOOh.png",
    type: "Full-Stack Development",
    summary: "Capstone Project: Baparekraf Digital Talent 2024",
    description:
      "BajoBliss is a full-stack digital platform developed to support local businesses (UMKM) in Labuan Bajo by promoting regional products to global tourists.\n\n" +
      "As a Minimum Viable Product (MVP), BajoBliss integrates front-end and back-end systems to demonstrate the platform's potential for e-commerce and local business empowerment while maintaining scalability for future development.\n\n" +
      "- **Front-End:**\n" +
      "  - Built using HTML, CSS, and vanilla JavaScript with Webpack for modularization and performance optimization.\n" +
      "  - Designed with a mobile-first and PWA approach for accessibility and reliability across devices.\n" +
      "  - Planned refactor to Next.js to enhance maintainability, scalability, and developer experience.\n\n" +
      "- **Back-End:**\n" +
      "  - Developed with Hapi.js and MySQL, providing RESTful API services for user management, product listings, and bookings.\n" +
      "  - Implements JWT-based authentication and Role-Based Access Control (RBAC) for secure and differentiated access.\n" +
      "  - Planned migration to Elysia.js and PostgreSQL to improve performance, scalability, and adopt a more modern architecture.\n\n" +
      "- **Key Features:**\n" +
      "  - User registration and profile management\n" +
      "  - Content and product management\n" +
      "  - Booking and transaction handling\n" +
      "  - Search, filter, and review systems for better user experience\n" +
      "  - Wishlist functionality for saving products for future purchases\n\n" +
      "This project emphasizes clean architecture, secure API design, and a meaningful impact by connecting Labuan Bajo’s local enterprises with a wider audience through technology.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Webpack",
      "Node.js",
      "Hapi.js",
      "REST API",
      "MySQL",
      "Sequelize",
      "JWT",
      "Role-Based Access Control",
      "Progressive Web Apps",
      "Clean Architecture",
      "Mobile-First Design",
      "Service Workers",
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
        title: "Github (Frontend: Old)",
        link: "https://github.com/lussyanast/bajobliss/tree/dev",
      },
      {
        title: "Github (Frontend: New)",
        link: "https://github.com/BajoBliss/front",
      },
      {
        title: "Github (Backend: Old)",
        link: "https://github.com/lussyanast/bajobliss/tree/server",
      },
      {
        title: "Github (Backend: New)",
        link: "https://github.com/BajoBliss/back",
      },
      {
        title: "Live View",
        link: "#",
        disabled: true,
      },
    ],
  },
  {
    id: "KafeKita-Management-System",
    title: "KafeKita Management System",
    category: "Café Management Platform",
    cover:
      "https://lh3.googleusercontent.com/pw/AP1GczObcoVJ3YFjAWGwaOT71kdDn6j9gUgBor8C9EzIxgqlB9YpC2R2um_hronNDiDV1GzkozOgWOK-dSDT2udW-OQrdm_rUf_lSS11NA0q46Zv1Hu6Dd2vXEKqUR64UeKk1fbkx-Sqk70zmwyHoD9E0hgg=w1920-h868-s-no-gm?authuser=0",
    type: "Full-Stack Development",
    summary: "Final Project: BNSP Professional Certification (LSP)",
    description:
      "KafeKita Management System is a full-stack web application designed to simulate a modern self-order kiosk system for cafés, inspired by McDonald’s digital ordering experience.\n\n" +
      "The system allows customers to browse menus and place orders independently through a responsive self-order interface. It also includes a comprehensive dashboard with role-based access for cashier, kitchen, and waitress users, each with tailored features to support daily operations.\n\n" +
      "Developed using Next.js, React, TypeScript, and Tailwind CSS (with shadcn components) for the front-end, while Firebase handles real-time data management and authentication using Firestore and Firebase Authentication. This project demonstrates an end-to-end implementation of a scalable, real-time management system built for production-ready performance.",
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
      "Tailwind CSS",
      "shadcn",
      "Café Management System",
      "Self-Order Kiosk",
      "Role-Based Access Control",
    ],
    gallery: [
      "https://lh3.googleusercontent.com/pw/AP1GczObcoVJ3YFjAWGwaOT71kdDn6j9gUgBor8C9EzIxgqlB9YpC2R2um_hronNDiDV1GzkozOgWOK-dSDT2udW-OQrdm_rUf_lSS11NA0q46Zv1Hu6Dd2vXEKqUR64UeKk1fbkx-Sqk70zmwyHoD9E0hgg=w1920-h868-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczMMTJJ0r--wUTiiCl3ngJoArBJ6LCtaXlH5WkAZmIgdntwR7jk3YKkHRKG3IW_fSHNdbn2LQe55lZ_tjatDLFwzMzaZdpRjbI4enbE9VkFhLCJNJuhLLk06sMCDiit-zdwqR01_bCzSdjfLI2f4QxvN=w1920-h862-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczMj4GKphtKduNzjLwlXTiLi88H1_kOhtSbCSLexW0mpm3DyHn-8UcFCNhvf3CTxgeVmX6aFtEToAACMBktpIBxEPs0cB6TYxUfKBPkNvJsOobLZY3o68c_ihKXjO2aG4WvI-ioDgnhnmH0uHVMKtNEu=w1920-h865-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczNqjQtavJF1L-bZsGoWCtrGyJILw5V1axsk_qulm0of3CvxweASAQ_k6dkhphGdbyD4WKxKJxxMXxzciQeOLu-Dopk5jsRnsDZcMlRRRBiwdwJlOHm5wKACOMonG5DRH_x17k_q2eFK0a6zc2T9ovAN=w1920-h865-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczOLbQ2Fzx9hmaXoxg5NyrKn-CcjcmQHNjgUy2iXcg0Oqjj-ZXI7Z15Ng8pY5JJGi5y14U9lZyA8oJt8kXMPoIa9r7jKI4sEJT30AZ0XX-zvvxEOTaHTVxReAT3Xdcnbw6ddWgWL6RJ6DD574Ip3IgCJ=w1915-h869-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczNyFUZghwoMkITmnXj358J1nFaN2ExIMTYd2l-v6hyhtRZjdQJbRRADtvXXV-QY43U2xPkS4MOfvxNAsUajkN4_qRFVvCCSelX09RowV0ojM3ju8A9makQdkyEHlZaQpd0zJs8hFRvZTe7ifku6R9km=w1920-h867-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczNZJpTHxCFQJQSig53T21yGNGhKUhGV3QJIBUyggxq4odkEw8EjpfI-02Q1V2TSd0roes7lad11AthE2hnZJJJVl2AmWcd_5kIQP2hHYiD4d21cbxj7rL8UL-HtwjpD7fI8DGBNMzVfY2JU5AT5TQm3=w1920-h862-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczOcgB6LkCuRsCX305LjHYOHAyaKg7xXA076zNAWGWU9gkZnHY3w0yXC3WSzYCAYN-5UNpDyRXMFLR5v-joU9TFQRdvGg_ZpwITbhm94i5Eozz_S6pBK5M2Pisq5KawZKujbg1tjfcU9nXanwx73YIc2=w1920-h867-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczOYkc-DXHtBMrAMm7FMZWQrr5RCw4kt4pN2cZeWo5Qwl1hUOdv9ubyYuEJ1Po1blAy_uGnpnx0l1fzGO9Kj87RPLWgJUUIMUpGvuidVo1cVXUVrwlLBaqUL-iaMMOsfxfrE9IbnpsYA7ZD4sYjOOdBE=w1920-h863-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczPohufMFgDdIdzZdXXHHEuvL3qEb8hM10ICz9_xB7pYZ5Zh7kRdEK58TwpcGUQc_yacUsekM5II_6XJGhaAoRVGkok-LTozKeHpaTO-yWWKis9m5zPmkm13zv2rfOHlg_B4SrhEdTkeenDmrXWxTbb9=w1920-h865-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczPh2szBhGz_ce_pdz4TgWyucBJB_BFIqWrIZmEN3_GD38fofpZNQm1ZCH1h3V4hgwP9YVTGgwIlpoxQmDqvLkSUG7Hu1oUbXpe3g3AdDZQnUvPJP8ouZRWbidCjpmFuX2GB-zLGkMfD1pmZnQdivfCI=w1918-h869-s-no-gm?authuser=0",
    ],
    additional: [
      {
        title: "Github",
        link: "https://github.com/xhaeffer/LSP-KafeKita",
      },
      {
        title: "Live View",
        link: "https://lsp-kafe-kita.vercel.app/",
      },
      {
        title: "Live View - Dashboard",
        link: "https://lsp-kafe-kita.vercel.app/dashboard",
      },
    ],
  },
  {
    id: "Dicoding-Forum",
    title: "Dicoding Forum",
    category: "Forum Web App",
    cover:
      "https://lh3.googleusercontent.com/pw/AP1GczMLTyV86Y5ATSqFXu0w0WuLJYln0o9IzbyLPEudfISuJnmMNf_dGIWmJZKQB29fBrn63VATraBConlPiOa722dmcU3lHWbKdT2fJXM-rDJ7U09ODHRchUL9x9yrUM6f6wX0P6JW9E7s7y5aSuLln1B0=w1920-h868-s-no-gm?authuser=0",
    type: "Front-End Development",
    summary:
      "Final Submission: Menjadi React Web Developer Expert (Dicoding Indonesia)",
    description:
      "The application simulates a modern discussion ecosystem where users can register, log in, create threads, post comments, and interact through a voting system. It integrates with the official **Dicoding Forum API**, ensuring real-time synchronization and secure data handling.\n\n" +
      "- **Front-End:** Developed with React, Redux Toolkit, and Material UI to deliver a responsive, accessible, and modular user interface. The design takes inspiration from Reddit’s minimalist card-based layout, providing a familiar and engaging discussion experience.\n\n" +
      "- **Automation & CI/CD:** Comprehensive testing implemented using Vitest, Testing Library, and Cypress for unit, integration, and end-to-end testing. The project also features continuous integration and deployment through GitHub Actions and Vercel with branch protection.\n\n" +
      "This project emphasizes maintainable state management, reliable CI/CD pipelines, and production-grade testing coverage—showcasing full front-end engineering capabilities aligned with professional standards.",
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
      "https://lh3.googleusercontent.com/pw/AP1GczPxoPqJf3NrL05eC3U2mMEPLObu85p-_P_dvenT3ResZYVCmolMI37tCaEU7dvuhDQ34T-mjmqf-exmS18AeUb0ekXjjPbXqNiuaRV7a1vqj4vy3vnINwuSDrEwx0FNUuIyzXaPg4KI2OnERoJ4IrKr=w1920-h863-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczNfQ7FuHL5XhVxJZ_DSYrg_G2btrLdNOuzN302soN5IbxXlrMOWurBiz61KtdT9HyB3qbYD0zseqsz4jyY5a9eufhgYc-VeiGpWV42-RhSW_OoMhRMK2jgaeOEITJbaLAmCvbzVxOMW-KhQp7kJNuHM=w1920-h866-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczMLTyV86Y5ATSqFXu0w0WuLJYln0o9IzbyLPEudfISuJnmMNf_dGIWmJZKQB29fBrn63VATraBConlPiOa722dmcU3lHWbKdT2fJXM-rDJ7U09ODHRchUL9x9yrUM6f6wX0P6JW9E7s7y5aSuLln1B0=w1920-h868-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczMvH7Vg38am6lnEvOEkNrwHRBblg-140yYaSxiNPJtm3a7yIX2dmonvfemgMGt7kZFxyExyzXngcw2HaNwMl3_7-3DtShzIomnyZ_Ev4de2JB--Ihp0C3OZ6lmuOwiVL1hpLd2XHyp0FY0OFzRbqwiw=w1920-h860-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczMyG3cSN1gpU8yGiSwp_nZIFrdxo1CqXADHGOz5z9MAyAT57ezXs_k_hATYDctLyEKVnVKj1CN3Xhb4FfxQrm2iEHgVW_ORHsR166YSIKf9LmdJhvjzf6qxOICjpD_5AjJ88ssD0ikiyhfpLiK_-NoV=w1920-h868-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczPfmzG1Tmsg84z_jELppOp_W8WAfZRtQDVh0SdSsDG-bTJJEVEdIlAiDitrzMheE23rwFXqfBLu_ZBpDyWpmiQpjMtSA6dmb-7LwAo3SIEGlnGa987tso6ZlOcQt74FKMBiWnC_P2oRQC7QGM2f0mvd=w1918-h869-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczPY2hMp5xb-xNEjXDQC6C2cZj9uHEldro8Gr0Go6VCGgDoG-5IC3qjkvCbGCUArfnCBE4AsgBTrfzotFiNiH3w9O9wIyqZcjuXbgpODyeu1Nr7Lbw1H6nlI8xtXFu6ZhV-3jClJ0OpDaiLfxIeGTiAW=w1920-h865-s-no-gm?authuser=0",
    ],
    additional: [
      {
        title: "Github",
        link: "https://github.com/xhaeffer/dicoding-forum",
      },
      {
        title: "Live View",
        link: "https://dicoding-forum-pi.vercel.app/",
      },
    ],
  },
  {
    id: "Point-Web",
    title: "Point!",
    category: "Restaurant Review Web App",
    cover: "https://imagizer.imageshack.com/img924/5430/xvgvmJ.png",
    type: "Front-End Development",
    summary:
      "Final Submission: Menjadi Front-End Web Developer Expert (Dicoding Indonesia)",
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
    id: "Literify",
    title: "Literify",
    category: "Gamified AI Literacy App",
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
    id: "MRT-Jakarta-Emergency-Awareness",
    title: "MRT Jakarta Emergency Awareness",
    category: "Public Safety Educational AR App",
    cover:
      "https://lh3.googleusercontent.com/pw/AP1GczPv8uF3RkmOPzvM5Huc-_Y-bSEkOs1-vAsjG4kSgacR9VPX-hBa9Uu2O-jq8LGp0mhHFub82eTvn-tfN_hczDV4-VCSEwnPZcap1wUniEpk9Bjvf_K0Qd3PP-3vnSseSOtkzRVU-kMl7fPgMUEsxPJj=w1920-h654-s-no-gm?authuser=0",
    type: "Android Development",
    summary: "Penulisan Ilmiah: Universitas Gunadarma",
    description:
      "MRT Jakarta Emergency Awareness is an Augmented Reality (AR) mobile application developed using Unity3D and Vuforia, aimed at improving passenger awareness and preparedness during emergency situations on the MRT Jakarta system.\n\n" +
      "This project, conducted as part of a scientific writing requirement at Universitas Gunadarma, leverages AR technology to provide interactive and engaging educational experiences. The app utilizes **object recognition** to identify components within the MRT carriage and display relevant safety information and evacuation procedures.\n\n" +
      "This project showcases the practical integration of Augmented Reality into public safety education, combining technology and social awareness for impactful learning experiences.",
    tags: [
      "Unity3D",
      "Vuforia SDK",
      "C#",
      "Augmented Reality",
      "Object Recognition",
      "3D Visualization",
      "Android Development",
      "Public Safety",
      "Educational Technology",
    ],
    gallery: [
      "https://lh3.googleusercontent.com/pw/AP1GczPv8uF3RkmOPzvM5Huc-_Y-bSEkOs1-vAsjG4kSgacR9VPX-hBa9Uu2O-jq8LGp0mhHFub82eTvn-tfN_hczDV4-VCSEwnPZcap1wUniEpk9Bjvf_K0Qd3PP-3vnSseSOtkzRVU-kMl7fPgMUEsxPJj=w1920-h654-s-no-gm?authuser=0",
    ],
    additional: [
      {
        title: "Github",
        link: "#",
        disabled: true,
      },
    ],
  },
];

export default projectsData;
