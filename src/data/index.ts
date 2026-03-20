// ============================================================
// PORTFOLIO DATA
// ============================================================

export const personalInfo = {
  name: "Cesar Alejandro Jaramillo Ramirez",
  role: "Full Stack Web Developer",
  location: "Irapuato, Guanajuato, México",
  email: "cesarjaramillormz@gmail.com",
  github: "https://github.com/ngMigthy-astro",
  linkedin: "https://www.linkedin.com/in/c-jaramillo-dev",
  twitter: "https://twitter.com/C_jaramz",
  cv: "/cv.pdf",
  bio: `Soy un Full Stack Developer especializado en crear sistemas web robustos y modernos para el sector público. Me apasiona el código limpio, la arquitectura modular y dominar tecnologías como Angular, Astro y Laravel para resolver problemas complejos de manera eficiente.`,
  shortBio: `Transformo ideas en sistemas web funcionales, escalables y con buena experiencia de usuario. Especializado en el sector público con enfoque en código limpio y arquitectura sólida.`,
};

export const navLinks = [
  { name: "Inicio", href: "#intro" },
  { name: "Sobre mí", href: "#about" },
  { name: "Experiencia", href: "#experience" },
  { name: "Proyectos", href: "#projects" },
  { name: "Habilidades", href: "#skills" },
  { name: "Contacto", href: "#contact" },
];

export const contactServices = [
  "Desarrollo de aplicaciones web",
  "Consultoría técnica",
  "Code review y mentoring",
  "Proyectos freelance",
  "Oportunidades de trabajo",
];

export const typingWords = [
  "Full Stack Developer",
  "Frontend Engineer",
  "UI/UX Enthusiast",
  "Open Source Lover",
];

export const aboutStats = [
  { label: "Años de experiencia", value: "2+" },
  { label: "Proyectos completados", value: "10+" },
  { label: "Clientes satisfechos", value: "200+" },
  { label: "Tecnologías dominadas", value: "5+" },
];

export const experiences = [
  {
    title: "Programador no SAP",
    company: "Secretaría de Finanzas, Inversión y Administración",
    location: "Guanajuato, México",
    period: "Feb 2025 — Presente",
    description: [
      "Desarrollo sistemas web completos con enfoque frontend utilizando Angular 17+ con Signals y Astro.",
      "Implemento autenticación OAuth, consumo de APIs REST y arquitecturas modulares.",
      "Diseño interfaces responsivas con Tailwind CSS y NgZorro.",
    ],
    icon: "Laptop",
  },
  {
    title: "Soporte Técnico / Full Stack Developer",
    company: "Secretaría de Desarrollo Social y Humano",
    location: "Guanajuato, México",
    period: "Sep 2023 — Ene 2025",
    description: [
      "Construí un sistema de asignación de vehículos desde cero usando Laravel, Livewire y Alpine.js.",
      "Di mantenimiento correctivo y evolutivo a sistemas legacy en PHP 5 y Laravel 7.",
      "Desarrollé módulos personalizados en WordPress e integraciones con MySQL.",
    ],
    icon: "Rocket",
  },
  {
    title: "Especialista IT",
    company: "Schnellecke Logistics",
    location: "Guanajuato, México",
    period: "Nov 2021 — Sep 2023",
    description: [
      "Gestioné usuarios, redes y servicios mediante Active Directory.",
      "Brindé soporte técnico y mantenimiento a infraestructura en 7 sitios a nivel nacional.",
      "Realicé consultas y gestión de bases de datos en SQL Server.",
    ],
    icon: "Settings",
  },
];

export const projects = [
  {
    title: "Generador de Códigos QR",
    description:
      "Aplicación web interactiva para generar y personalizar códigos QR con persistencia de temas y descarga en canvas HTML5.",
    tags: ["Astro", "TypeScript", "Tailwind CSS"],
    github: "",
    demo: "https://qr-finanzas.guanajuato.gob.mx/",
    image: "/projects/generador-qr.jpg",
  },
  {
    title: "Sistema Administrativo Institucional",
    description:
      "Plataforma multi-módulo para instituciones públicas: control de inventario y papelería, gestión de usuarios con roles, dashboards con métricas en tiempo real y generación de reportes PDF/Excel.",
    tags: ["Angular 17+", "TypeScript", "Firebase", "NgZorro", "Tailwind CSS"],
    github: "",
    demo: "",
    image: "/projects/holidayinn-usuarios.jpg",
  },
  {
    title: "Procuraduría Fiscal al Día",
    description:
      "Plataforma de suscripción a boletines con login administrativo OAuth, roles de usuario, gráficas y tracking con Google Analytics.",
    tags: ["Angular", "TypeScript", "Firebase"],
    github: "",
    demo: "https://procuraduriafiscalaldia.guanajuato.gob.mx/#/landing",
    image: "/projects/portal-finanzas.jpg",
  },
  {
    title: "El Archivo Simpsons",
    description:
      "Explorador de personajes de Los Simpson consumiendo la API oficial con validación de datos mediante Zod y diseño oscuro estilo fan-site.",
    tags: ["Astro", "TypeScript", "Zod", "Tailwind CSS"],
    github: "",
    demo: "",
    image: "/projects/simpsons-api.jpg",
  },
  {
    title: "Sistema de Tickets — Holiday Inn",
    description:
      "Dashboard de gestión de tickets con panel de control, métricas en tiempo real, gráficas de tendencia semanal y gestión de usuarios.",
    tags: ["Angular 17+", "TypeScript", "NgZorro", "Firebase"],
    github: "",
    demo: "",
    image: "/projects/holidayinn-dashboard.jpg",
  },
];

export const skills = [
  {
    category: "Frontend",
    icon: "Palette",
    items: [
      { name: "Angular 17+", level: 90 },
      { name: "TypeScript", level: 90 },
      { name: "Astro", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Alpine.js", level: 80 },
    ],
  },
  {
    category: "Backend & Bases de Datos",
    icon: "Cpu",
    items: [
      { name: "PHP / Laravel", level: 85 },
      { name: "Livewire", level: 80 },
      { name: "MySQL", level: 85 },
      { name: "SQL Server", level: 80 },
      { name: "REST APIs", level: 85 },
      { name: "WordPress", level: 75 },
    ],
  },
  {
    category: "DevOps & Herramientas",
    icon: "Wrench",
    items: [
      { name: "Git / GitHub / GitLab", level: 85 },
      { name: "Firebase (OAuth)", level: 80 },
      { name: "Google Analytics", level: 75 },
      { name: "Scrum / Kanban", level: 85 },
    ],
  },
];
