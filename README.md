# Portfolio — Cesar Jaramillo

Portfolio personal desarrollado con **Astro** y **Tailwind CSS v4**. Incluye animaciones, sección de proyectos con imágenes reales, experiencia, habilidades, formulario de contacto y SEO completo.

🌐 **Demo en vivo:** [ngmigthy.netlify.app](https://ngmigthy.netlify.app)

---

## ✨ Características

- Diseño **responsivo** y moderno con tema oscuro/claro
- Animaciones con [`tailwind-animations`](https://github.com/midudev/tailwind-animations)
- Iconografía con **Lucide Icons**
- Formulario de contacto conectado a **Web3Forms**
- SEO completo: Open Graph, Twitter Card, JSON-LD Schema.org
- Botón flotante de **WhatsApp**
- Grid de proyectos con imágenes reales y overlay hover
- Favicon personalizado `</>`

---

## 🛠️ Stack tecnológico

| Tecnología | Descripción |
| :--- | :--- |
| [Astro](https://astro.build) | Framework principal (SSG) |
| [Tailwind CSS v4](https://tailwindcss.com) | Estilos utilitarios |
| [Lucide Icons](https://lucide.dev) | Iconografía (`@lucide/astro`) |
| [tailwind-animations](https://github.com/midudev/tailwind-animations) | Animaciones CSS |
| [Web3Forms](https://web3forms.com) | Backend del formulario de contacto |
| [pnpm](https://pnpm.io) | Gestor de paquetes |

---

## 📁 Estructura del proyecto

```text
/
├── public/
│   ├── favicon.svg
│   ├── hero.jpg
│   ├── og-image.png
│   └── projects/
│       ├── generador-qr.jpg
│       ├── holidayinn-dashboard.jpg
│       ├── holidayinn-usuarios.jpg
│       ├── portal-finanzas.jpg
│       └── simpsons-api.jpg
├── src/
│   ├── components/
│   │   ├── About.astro
│   │   ├── Contact.astro
│   │   ├── Experience.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Intro.astro
│   │   ├── Projects.astro
│   │   ├── SectionDivider.astro
│   │   └── Skills.astro
│   ├── data/
│   │   └── index.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
└── package.json
```

---

## 🧞 Comandos

Ejecutar desde la raíz del proyecto:

| Comando | Acción |
| :----- | :----- |
| `pnpm install` | Instala dependencias |
| `pnpm dev` | Servidor local en `localhost:4321` |
| `pnpm build` | Genera el sitio en `./dist/` |
| `pnpm preview` | Vista previa del build |

---

## 🔧 Personalización

Todos los datos (nombre, bio, proyectos, experiencia, habilidades, etc.) están centralizados en [`src/data/index.ts`](src/data/index.ts). Solo edita ese archivo para actualizar el contenido.

---

## 📬 Contacto

- 🌐 [ngmigthy.netlify.app](https://ngmigthy.netlify.app)
- 💼 [LinkedIn](https://www.linkedin.com/in/c-jaramillo-dev/)
- 🐙 [GitHub](https://github.com/ngMigthy-astro)

---

Hecho con ❤️ y [Astro](https://astro.build)
