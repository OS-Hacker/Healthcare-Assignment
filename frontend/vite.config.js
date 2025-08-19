// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react({
      include: ["**/*.jsx", "**/*.js"], // Allow JSX in .js files
    }),
    tailwindcss(),
  ],
});
