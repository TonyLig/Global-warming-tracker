import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      assets: path.resolve(__dirname, "src/assets"),
      components: path.resolve(__dirname, "src/components"),
      store: path.resolve(__dirname, "src/store"),
      features: path.resolve(__dirname, "src/features"),
      routes: path.resolve(__dirname, "src/routes"),
      types: path.resolve(__dirname, "src/types"),
    },
  },
});
