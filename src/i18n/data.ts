import {
  personalInfo as baseInfo,
  experiences as esExperiences,
  projects as esProjects,
  skills as esSkills,
  navLinks as esNavLinks,
  contactServices as esContactServices,
  typingWords as esTypingWords,
  aboutStats as esAboutStats,
} from "../data/index";

import type { Lang } from "./ui";

// ─────────────────────────────────────────────────────────────────────────────
// English data
// ─────────────────────────────────────────────────────────────────────────────

const enData = {
  personalInfo: {
    ...baseInfo,
    role: "Full Stack Web Developer",
    bio: "I'm a Full Stack Developer specialized in building robust, modern web systems for the public sector. I'm passionate about clean code, modular architecture, and mastering technologies like Angular, Astro, and Laravel to solve complex problems efficiently.",
    shortBio:
      "I turn ideas into functional, scalable web systems with great user experience. Specialized in the public sector with a focus on clean code and solid architecture.",
  },
  navLinks: [
    { name: "Home", href: "#intro" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ],
  contactServices: [
    "Web application development",
    "Technical consulting",
    "Code review & mentoring",
    "Freelance projects",
    "Job opportunities",
  ],
  typingWords: [
    "Full Stack Developer",
    "Frontend Engineer",
    "UI/UX Enthusiast",
    "Open Source Lover",
  ],
  aboutStats: [
    { label: "Years of experience", value: "2+" },
    { label: "Completed projects", value: "10+" },
    { label: "Satisfied clients", value: "200+" },
    { label: "Mastered technologies", value: "5+" },
  ],
  experiences: [
    {
      title: "Non-SAP Programmer",
      company: "Ministry of Finance, Investment and Administration",
      location: "Guanajuato, Mexico",
      period: "Feb 2025 — Present",
      description: [
        "Build complete web systems with a frontend focus using Angular 17+ with Signals and Astro.",
        "Implement OAuth authentication, REST API consumption, and modular architectures.",
        "Design responsive interfaces with Tailwind CSS and NgZorro.",
      ],
      icon: "Laptop",
    },
    {
      title: "Tech Support / Full Stack Developer",
      company: "Ministry of Social and Human Development",
      location: "Guanajuato, Mexico",
      period: "Sep 2023 — Jan 2025",
      description: [
        "Built a vehicle assignment system from scratch using Laravel, Livewire, and Alpine.js.",
        "Maintained and evolved legacy systems in PHP 5 and Laravel 7.",
        "Developed custom WordPress modules and MySQL integrations.",
      ],
      icon: "Rocket",
    },
    {
      title: "IT Specialist",
      company: "Schnellecke Logistics",
      location: "Guanajuato, Mexico",
      period: "Nov 2021 — Sep 2023",
      description: [
        "Managed users, networks, and services via Active Directory.",
        "Provided technical support and infrastructure maintenance across 7 national sites.",
        "Performed database queries and management in SQL Server.",
      ],
      icon: "Settings",
    },
  ],
  projects: [
    {
      title: "QR Code Generator",
      description:
        "Interactive web app to generate and customize QR codes with theme persistence and HTML5 canvas download.",
      tags: ["Astro", "TypeScript", "Tailwind CSS"],
      github: "",
      demo: "",
      image: "/projects/generador-qr.jpg",
    },
    {
      title: "Institutional Admin System",
      description:
        "Multi-module platform for public institutions: inventory and stationery control, role-based user management, real-time metric dashboards, and PDF/Excel report generation.",
      tags: ["Angular 17+", "TypeScript", "Firebase", "NgZorro", "Tailwind CSS"],
      github: "",
      demo: "",
      image: "/projects/holidayinn-usuarios.jpg",
    },
    {
      title: "Procuraduría Fiscal al Día",
      description:
        "Newsletter subscription platform with OAuth admin login, user roles, charts, and Google Analytics tracking.",
      tags: ["Angular", "TypeScript", "Firebase"],
      github: "",
      demo: "https://procuraduriafiscalaldia.guanajuato.gob.mx/#/landing",
      image: "/projects/portal-finanzas.jpg",
    },
    {
      title: "The Simpsons Archive",
      description:
        "Simpsons character explorer consuming the official API with Zod data validation and a dark fan-site design.",
      tags: ["Astro", "TypeScript", "Zod", "Tailwind CSS"],
      github: "",
      demo: "",
      image: "/projects/simpsons-api.jpg",
    },
    {
      title: "Ticket System — Holiday Inn",
      description:
        "Ticket management dashboard with control panel, real-time metrics, weekly trend charts, and user management.",
      tags: ["Angular 17+", "TypeScript", "NgZorro", "Firebase"],
      github: "",
      demo: "",
      image: "/projects/holidayinn-dashboard.jpg",
    },
  ],
  skills: [
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
      category: "Backend & Databases",
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
      category: "DevOps & Tools",
      icon: "Wrench",
      items: [
        { name: "Git / GitHub / GitLab", level: 85 },
        { name: "Firebase (OAuth)", level: 80 },
        { name: "Google Analytics", level: 75 },
        { name: "Scrum / Kanban", level: 85 },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Spanish data (delegates to existing index.ts)
// ─────────────────────────────────────────────────────────────────────────────

const esData = {
  personalInfo: baseInfo,
  navLinks: esNavLinks,
  contactServices: esContactServices,
  typingWords: esTypingWords,
  aboutStats: esAboutStats,
  experiences: esExperiences,
  projects: esProjects,
  skills: esSkills,
};

// ─────────────────────────────────────────────────────────────────────────────
// Public API
// ─────────────────────────────────────────────────────────────────────────────

export function getData(lang: Lang) {
  return lang === "en" ? enData : esData;
}
