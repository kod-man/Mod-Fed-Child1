import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "child1",
      remotes: {
        parent: "http://localhost:5173/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
      filename: "remoteEntryChild1.js",
      exposes: {
        "./Urun": "./src/pages/Urun",
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
