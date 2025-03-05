import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    allowedHosts: true,
  },
  preview: {
    port: 3000,
    allowedHosts: true
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"],
  },
});
