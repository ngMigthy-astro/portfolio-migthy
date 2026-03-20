import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://ngMigthy-astro.github.io",
  base: "/portfolio-migthy",
  vite: {
    plugins: [tailwindcss()],
  },
});
