import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@components", replacement: "/src/components" },
      { find: "@layout", replacement: "/src/layout" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@store", replacement: "/src/store" },
      { find: "@style", replacement: "/src/style" },
      { find: "@utils", replacement: "/src/utils" },
    ],
  },
});
