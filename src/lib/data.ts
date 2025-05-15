export const personalInfo = {
  name: "Víctor José Corral Guillot",
  location: "Valencia, España",
  email: "victorjosecorralguillot@gmail.com",
  github: "https://github.com/victorcg03",
  linkedin: "https://www.linkedin.com/in/victorcg03",
};

export const workExperience = [
  {
    company: "Gesvatec",
    location: "Valencia, España",
    position: "React Native Developer (FCT - DAW)",
    period: "Mar 2025 – Jun 2025",
    achievements: [
      "Desarrollo completo de una app móvil para la gestión y verificación de certificados agrícolas (Global IPCert) sobre variedades vegetales protegidas.",
      "Implementación de búsqueda con paginación, filtros dinámicos, navegación con `expo-router` y validación estricta con TypeScript.",
      "Gestión de sesión segura con JWT y refresh token, integración con APIs REST y manejo robusto de errores.",
      "Internacionalización con i18next, sistema de logs personalizado y trazabilidad completa con Sentry.",
      "Compilación y despliegue manual en Play Store y App Store, incluyendo firma local y pruebas beta con TestFlight.",
      "Flujo de release automatizado con scripts personalizados para prebuild, subida de source maps y gestión de versiones.",
    ],
  },
  {
    company: "Freelance — RODAAC",
    location: "Valencia, España",
    position: "Desarrollador Web",
    period: "2022",
    achievements: [
      "Diseño y desarrollo de la página web corporativa para una empresa de reformas, adaptada a sus necesidades y estilo.",
      "Maquetación responsive con HTML, CSS y JavaScript, desarrollada desde cero sin frameworks.",
      "Implementación de un formulario de contacto funcional con validación de campos y envío de correos mediante PHPMailer.",
      "Configuración completa del servidor Ubuntu, dominio con IONOS, Apache y base de datos MySQL.",
    ],
  },
  {
    company: "Freelance — DrakoCatering",
    location: "Valencia, España",
    position: "Desarrollador Web",
    period: "2022",
    achievements: [
      "Desarrollo de landing page para un negocio de catering y cachimbas, con enfoque visual y adaptado a dispositivos móviles.",
      "Estructura personalizada con HTML, CSS, JavaScript y PHP para mostrar información de servicios, galería de imágenes y contacto.",
      "Configuración de servidor Ubuntu, DNS en IONOS, despliegue con Apache y optimización de carga.",
      "Implementación de formulario de contacto funcional con gestión de correos y validación.",
    ],
  },
];

export const education = [
  {
    institution: "Escuelas Profesionales de Artesanos",
    location: "Valencia, España",
    degree:
      "Ciclo Formativo de Grado Medio en Sistemas Microinformáticos y Redes",
    period: "Sep 2020 – Jun 2022",
  },
  {
    institution: "Complejo Educativo de Cheste",
    location: "Cheste, España",
    degree:
      "Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Web",
    period: "Sep 2023 – Jun 2025",
  },
];

export const skills = {
  programmingLanguages: ["TypeScript", "JavaScript", "PHP", "Java"],
  frontendDevelopment: [
    "React.js",
    "React Native",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Astro (en proceso)",
    "Next.js (en proceso)",
  ],
  backendDevelopment: ["Node.js", "Express.js", "PHP"],
  databaseAndStorage: ["MySQL", "MongoDB"],
  cloudAndDevOps: [
    "Docker",
    "GitHub Actions",
    "Coolify",
    "Vercel",
    "Supabase",
    "AWS (básico)",
  ],
  toolsAndServices: [
    "Expo",
    "PHPMailer",
    "Figma",
    "i18next",
    "Sentry",
    "Postman",
  ],
};

export const projects = [
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
    github: "https://github.com/victorcg03/STOW", // pon el enlace correcto si lo tienes subido
    description: [
      "Tienda online de ropa desarrollada como proyecto académico con HTML, CSS, JavaScript y PHP.",
      "Catálogo de productos, panel de administración, carrito de compra y gestión de pedidos.",
      "Sistema de autenticación con registro, login y verificación por email (2FA básica).",
      "Formulario de contacto funcional con envío de correos usando PHPMailer.",
      "Base de datos relacional MySQL y alojamiento en servidor propio Ubuntu con Apache.",
    ],
  },
  {
    title: "RODAAC",
    github: "", // lo puedes subir o dejar vacío
    description: [
      "Sitio web corporativo para empresa de reformas, desarrollado desde cero con HTML, CSS, JavaScript y PHP.",
      "Estructura limpia y responsive, enfocada en presentar servicios y facilitar el contacto.",
      "Formulario de contacto funcional con envío de correos y validaciones.",
      "Alojamiento en servidor Ubuntu con Apache y dominio gestionado con IONOS.",
    ],
  },
  {
    title: "DrakoCatering",
    github: "", // igual, si lo subes luego lo añades
    description: [
      "Landing page para un negocio de cachimbas y catering, desarrollada con HTML, CSS, JavaScript y PHP.",
      "Diseño visual personalizado y adaptable a dispositivos móviles.",
      "Incluye información de servicios, galería de imágenes y formulario de contacto funcional.",
      "Alojamiento autogestionado en servidor Ubuntu y configuración de dominio en IONOS.",
    ],
  },
];

export const awards = [];
