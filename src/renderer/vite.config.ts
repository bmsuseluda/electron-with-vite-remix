import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    reactRouter(),
    // tsconfigPaths(), // no need to use this plugin. I don't like path aliases so much.
  ],
  build: {
    minify: false,
    emptyOutDir: false,
    rollupOptions: {
      external: [
        "fs", // suppress vite warning: [plugin:vite:resolve] [plugin vite:resolve] Module "fs" has been externalized for browser compatibility
        "path", // suppress vite warning: [plugin:vite:resolve] [plugin vite:resolve] Module "path" has been externalized for browser compatibility
      ],
    },
  },
});
