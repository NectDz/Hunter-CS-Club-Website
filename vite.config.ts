import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-svg-loader";

export default {
  server: {
    hmr: {
      overlay: false
    }
  }
}