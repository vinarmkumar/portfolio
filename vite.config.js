import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react')) return 'vendor-react';
          if (id.includes('node_modules/framer-motion')) return 'motion';
          if (id.includes('node_modules/react-icons')) return 'icons';
          if (id.includes('node_modules/react-router-dom')) return 'router';
        }
      }
    },
    // Compression settings
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // Source maps only in production for better debugging
    sourcemap: false,
    // Target modern browsers
    target: 'esnext',
    // CSS code splitting
    cssCodeSplit: true,
    // Report compressed size
    reportCompressedSize: true,
    // Chunk size warning
    chunkSizeWarningLimit: 600,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'react-icons', 'react-router-dom']
  }
})
