import { defineConfig } from "vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), basicSsl()],
  //plugins: [react()],
  build: {
    outDir: "docs",
  },
  // @ts-ignore
  base: process.env.GH_PAGES ? "/ZOUL-TMA/" : "./",
  server: {
    fs: {
      allow: ["../sdk", "./"],
    },
  },
});
