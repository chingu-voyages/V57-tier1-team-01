import { defineConfig } from "vite"; // Brings in Vite's config helper
import react from "@vitejs/plugin-react-swc"; // Enables React with SWC (fast compiler)
import tailwindcss from "@tailwindcss/vite"; // Adds official Tailwind plugin for Vite

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()], // Activates both React and Tailwind
});
