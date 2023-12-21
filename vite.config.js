import { defineConfig } from "vite";

export default defineConfig({
  // Your Vite-specific configurations
  base: "./", // This can be important for correct path resolution
  build: {
    // Options for the build process
    outDir: "dist", // Output directory for build files
    // ... other build options
  },
  server: {
    // Development server options
    // ... server options
  },
  // ... any other configurations you need
});
