export const personalInfo = {
  es: {
    name: "Víctor José Corral Guillot",
    location: "Valencia, España",
    email: "victorjosecorralguillot@gmail.com",
    github: "https://github.com/victorcg03",
    linkedin: "https://www.linkedin.com/in/victorcg03",
  },
  en: {
    name: "Víctor José Corral Guillot",
    location: "Valencia, Spain",
    email: "victorjosecorralguillot@gmail.com",
    github: "https://github.com/victorcg03",
    linkedin: "https://www.linkedin.com/in/victorcg03",
  },
};

export const workExperience = {
  es: [
    {
      company: "Gesvatec Sistemas S.L.",
      location: "Valencia, España",
      position: "Desarrollador React Native",
      period: "Mar 2025 – Actualidad",
      achievements: [
        "Desarrollo completo de una app móvil empresarial desde cero con React Native y TypeScript, publicada en App Store y Google Play.",
        "Implementación de login, 2FA, control de sesión, navegación avanzada con `expo-router` (stack, tabs, linking) y soporte para iPad.",
        "Refactorización continua enfocada en escalabilidad, arquitectura mantenible y diseño responsive.",
        "Automatización del flujo de release: compilación, subida OTA, publicación en tiendas y subida de source maps a Sentry mediante scripts personalizados.",
        "Integración con API REST segura (JWT + refresh), manejo de errores robusto y sistema de logs contextualizados.",
        "Trabajo diario bajo metodología SCRUM, en colaboración con backend, diseño y QA.",
      ],
    },
    {
      company: "Freelance — RODAAC",
      location: "Valencia, España",
      position: "Desarrollador Web",
      period: "2022",
      achievements: [
        "Diseño y desarrollo de la página corporativa de una empresa de reformas con HTML, CSS, JavaScript y PHP.",
        "Formulario funcional con validación y envío de correos con PHPMailer.",
        "Despliegue en Ubuntu Server autogestionado con Apache y dominio en IONOS.",
      ],
    },
    {
      company: "Freelance — DrakoCatering",
      location: "Valencia, España",
      position: "Desarrollador Web",
      period: "2022",
      achievements: [
        "Landing page visual para negocio de catering con estructura responsive en HTML, CSS, JS y PHP.",
        "Formulario funcional y galería, alojado en servidor Ubuntu con Apache y dominio IONOS.",
      ],
    },
  ],
  en: [
    {
      company: "Gesvatec Sistemas S.L.",
      location: "Valencia, Spain",
      position: "React Native Developer",
      period: "Mar 2025 – Present",
      achievements: [
        "End-to-end development of a mobile business app built with React Native and TypeScript, live on App Store and Google Play.",
        "Implemented login, 2FA, session control, advanced navigation with `expo-router` (stack, tabs, linking), and support for iPad.",
        "Ongoing refactor focused on scalability, maintainable architecture, and responsive design.",
        "Custom automated release flow: build, OTA publishing, store uploads and source maps pushed to Sentry.",
        "Secure REST API integration (JWT + refresh), robust error handling and contextual logging system.",
        "Daily work in a SCRUM team with backend, UI/UX and product stakeholders.",
      ],
    },
    {
      company: "Freelance — RODAAC",
      location: "Valencia, Spain",
      position: "Web Developer",
      period: "2022",
      achievements: [
        "Designed and built a corporate website for a construction company using HTML, CSS, JavaScript and PHP.",
        "Implemented a working contact form with validation and PHPMailer email delivery.",
        "Deployed on self-managed Ubuntu Server with Apache and domain via IONOS.",
      ],
    },
    {
      company: "Freelance — DrakoCatering",
      location: "Valencia, Spain",
      position: "Web Developer",
      period: "2022",
      achievements: [
        "Created a visually-oriented landing page for a catering business with responsive layout (HTML/CSS/JS/PHP).",
        "Implemented gallery, service sections and contact form hosted on Ubuntu with Apache + IONOS domain.",
      ],
    },
  ],
};

export const education = {
  es: [
    {
      institution: "Escuelas Profesionales de Artesanos",
      location: "Valencia, España",
      degree: "CFGM en Sistemas Microinformáticos y Redes",
      period: "Sep 2020 – Jun 2022",
    },
    {
      institution: "CIPFP Complejo Educativo de Cheste",
      location: "Cheste, España",
      degree: "CFGS en Desarrollo de Aplicaciones Web (DAW)",
      period: "Sep 2023 – Jun 2025",
    },
  ],
  en: [
    {
      institution: "Escuelas Profesionales de Artesanos",
      location: "Valencia, Spain",
      degree: "Intermediate VET in Microcomputer Systems and Networks",
      period: "Sep 2020 – Jun 2022",
    },
    {
      institution: "CIPFP Complejo Educativo de Cheste",
      location: "Cheste, Spain",
      degree: "Advanced VET in Web Application Development (DAW)",
      period: "Sep 2023 – Jun 2025",
    },
  ],
};

export const skills = {
  es: {
    programmingLanguages: ["TypeScript", "JavaScript", "PHP", "Java"],
    frontendDevelopment: [
      "React.js",
      "React Native",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Astro",
      "Next.js (básico)",
    ],
    backendDevelopment: ["Node.js", "Express.js", "PHP"],
    databaseAndStorage: ["MySQL", "MongoDB", "Supabase"],
    cloudAndDevOps: [
      "Docker",
      "GitHub Actions",
      "Coolify",
      "Vercel",
      "Ubuntu Server",
      "Nixpacks",
      "AWS (básico)",
    ],
    toolsAndServices: [
      "Expo",
      "Sentry",
      "i18next",
      "Postman",
      "PHPMailer",
      "Figma",
    ],
  },
  en: {
    programmingLanguages: ["TypeScript", "JavaScript", "PHP", "Java"],
    frontendDevelopment: [
      "React.js",
      "React Native",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Astro",
      "Next.js (basic)",
    ],
    backendDevelopment: ["Node.js", "Express.js", "PHP"],
    databaseAndStorage: ["MySQL", "MongoDB", "Supabase"],
    cloudAndDevOps: [
      "Docker",
      "GitHub Actions",
      "Coolify",
      "Vercel",
      "Ubuntu Server",
      "Nixpacks",
      "AWS (basic)",
    ],
    toolsAndServices: [
      "Expo",
      "Sentry",
      "i18next",
      "Postman",
      "PHPMailer",
      "Figma",
    ],
  },
};

export const projects = {
  es: [
    {
      title: "Global IPCert",
      github: "",
      description: [
        "App móvil para verificación de certificados agrícolas, desarrollada con React Native y Expo.",
        "Incluye búsqueda con paginación, filtros dinámicos, navegación con `expo-router` y validación estricta con TypeScript.",
        "Autenticación segura con JWT y refresh token, integración con APIs protegidas y gestión robusta de errores.",
        "Multilenguaje con i18next, logs personalizados y trazabilidad con Sentry.",
        "Despliegue manual en Play Store y App Store, con firma local avanzada y TestFlight.",
      ],
    },
    {
      title: "STOW (eCommerce)",
      github: "https://github.com/victorcg03/STOW",
      link: "https://stow.victorcorral.com",
      description: [
        "Tienda online de ropa desarrollada como proyecto académico con HTML, CSS, JavaScript y PHP.",
        "Catálogo de productos, panel de administración, carrito de compra y gestión de pedidos.",
        "Sistema de autenticación con registro, login y verificación por email (2FA básica).",
        "Formulario de contacto funcional con envío de correos usando PHPMailer.",
        "Base de datos relacional MySQL y alojamiento en servidor propio Ubuntu con Apache.",
      ],
    },
    {
      title: "Habitia Agency",
      github: "https://github.com/victorcg03/Habitia-Agency",
      link: "https://habitiagency.com",
      description: [
        "Landing page desarrollada para una agencia de marketing inmobiliario, enfocada en captar leads mediante diseño visual y storytelling estratégico.",
        "Construida con Astro, React y Tailwind CSS, implementando animaciones avanzadas con Framer Motion y efectos visuales personalizados.",
        "Integración completa con Supabase para insertar mensajes del formulario de contacto en tiempo real, incluyendo validaciones con Zod y control de errores UI-friendly.",
        "Sistema de testimonios animados con Swiper.js, sección FAQ dinámica, CTA visuales y FAB expandible con acceso directo a WhatsApp y formulario.",
        "Despliegue automatizado en Coolify con Nixpacks y configuración SSR con @astrojs/node standalone, incluyendo rutas protegidas para el panel de administración.",
        "Autenticación segura en el área `/admin` con cookies httpOnly gestionadas desde Supabase y validación de tokens en el servidor Astro.",
        "Panel privado con sistema de eliminación de mensajes vía modal personalizada y lógica CRUD segura con políticas RLS y APIs Astro.",
      ],
    },
    {
      title: "RODAAC",
      github: "",
      description: [
        "Sitio web corporativo para empresa de reformas, desarrollado desde cero con HTML, CSS, JavaScript y PHP.",
        "Estructura limpia y responsive, enfocada en presentar servicios y facilitar el contacto.",
        "Formulario de contacto funcional con envío de correos y validaciones.",
        "Alojamiento en servidor Ubuntu con Apache y dominio gestionado con IONOS.",
      ],
    },
    {
      title: "DrakoCatering",
      github: "",
      description: [
        "Landing page para un negocio de cachimbas y catering, desarrollada con HTML, CSS, JavaScript y PHP.",
        "Diseño visual personalizado y adaptable a dispositivos móviles.",
        "Incluye información de servicios, galería de imágenes y formulario de contacto funcional.",
        "Alojamiento autogestionado en servidor Ubuntu y configuración de dominio en IONOS.",
      ],
    },
  ],
  en: [
    {
      title: "Global IPCert",
      github: "",
      description: [
        "Mobile app for verifying agricultural certificates, built with React Native and Expo.",
        "Includes search with pagination, dynamic filters, navigation with `expo-router`, and strict TypeScript validation.",
        "Secure authentication using JWT and refresh token, protected API integration, and robust error handling.",
        "Multilingual support with i18next, custom logs, and Sentry for full traceability.",
        "Manual deployment to Play Store and App Store, with advanced local signing and TestFlight testing.",
      ],
    },
    {
      title: "STOW (eCommerce)",
      github: "https://github.com/victorcg03/STOW",
      link: "https://stow.victorcorral.com",
      description: [
        "Online clothing store built as an academic project using HTML, CSS, JavaScript, and PHP.",
        "Product catalog, admin dashboard, shopping cart, and order management.",
        "Authentication system with registration, login, and email verification (basic 2FA).",
        "Functional contact form with email sending via PHPMailer.",
        "Relational database with MySQL and hosting on a self-managed Ubuntu server with Apache.",
      ],
    },
    {
      title: "Habitia Agency",
      github: "https://github.com/victorcg03/Habitia-Agency",
      link: "https://habitiagency.com",
      description: [
        "Landing page developed for a real estate marketing agency, focused on lead generation through strategic design and storytelling.",
        "Built with Astro, React, and Tailwind CSS, featuring advanced animations using Framer Motion and customized visual effects.",
        "Fully integrated with Supabase to insert contact form messages in real-time, including field validation using Zod and user-friendly error handling.",
        "Animated testimonials using Swiper.js, dynamic FAQ section, visual CTAs, and an expandable FAB with direct access to WhatsApp and contact form.",
        "Automated deployment with Coolify using Nixpacks, SSR enabled via @astrojs/node standalone, and protected routes for the admin panel.",
        "Secure authentication in `/admin` area with httpOnly cookies managed through Supabase and server-side token validation in Astro.",
        "Private dashboard with modal-based message deletion and safe CRUD logic using RLS policies and Astro API routes.",
      ],
    },
    {
      title: "RODAAC",
      github: "",
      description: [
        "Corporate website for a renovation company, developed from scratch with HTML, CSS, JavaScript, and PHP.",
        "Clean and responsive structure focused on presenting services and facilitating contact.",
        "Functional contact form with email delivery and validation.",
        "Hosted on an Ubuntu server with Apache and domain managed via IONOS.",
      ],
    },
    {
      title: "DrakoCatering",
      github: "",
      description: [
        "Landing page for a hookah and catering business, developed with HTML, CSS, JavaScript, and PHP.",
        "Custom visual design optimized for mobile devices.",
        "Includes service details, image gallery, and a working contact form.",
        "Self-managed hosting on Ubuntu server and domain configured with IONOS.",
      ],
    },
  ],
};

export const awards = {
  es: [],
  en: [],
};
