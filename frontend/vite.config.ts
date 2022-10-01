// import built-in modules
import path from "path";
// import third-party modules
import react from "@vitejs/plugin-react";
import vitePluginForArco from "@arco-plugins/vite-react";
import { defineConfig } from "vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginForArco({
      style: "css",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
