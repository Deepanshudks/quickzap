import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      Shared: path.resolve(__dirname, "./src/Shared"),
      Resources: path.resolve(__dirname, "./src/Resources"),
      Pages: path.resolve(__dirname, "./src/Pages"),
      Utils: path.resolve(__dirname, "src/Utils"),
      Routes: path.resolve(__dirname, "src/Routes"),
      Layout: path.resolve(__dirname, "src/Layout"),
      Components: path.resolve(__dirname, "src/Components"),
    },
  },
});
