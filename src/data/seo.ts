export const siteUrl = "https://ngmigthy.netlify.app";
export const ogImage = `${siteUrl}/og-image.jpg`;
export const author = "Cesar Alejandro Jaramillo Ramirez";

export const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  name: author,
  url: siteUrl,
  jobTitle: "Full Stack Developer",
  worksFor: { "@type": "Organization", name: "Freelance" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Irapuato",
    addressRegion: "Guanajuato",
    addressCountry: "MX",
  },
  email: "cesarjaramillormz@gmail.com",
  sameAs: [
    "https://github.com/ngMigthy-astro",
    "https://www.linkedin.com/in/cesar-jaramillo/",
    "https://twitter.com/C_jaramz",
  ],
  knowsAbout: [
    "Angular",
    "Astro",
    "Laravel",
    "TypeScript",
    "Tailwind CSS",
    "PHP",
    "MySQL",
    "Firebase",
  ],
});
