import { defineConfig } from 'vite'
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    server: {
        host: '0.0.0.0', // Bind to all available network interfaces
        port: 3000, // Default port, change if necessary
    },
  base: "/personalblog/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
