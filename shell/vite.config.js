import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shell",
      remotes: {
        headerMfe: "http://localhost:3001/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3000,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    modulePreload: false,
  },
});
