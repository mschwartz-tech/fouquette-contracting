import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://www.fouquettecontracting.com',
      dynamicRoutes: [
        '/',
        '/about',
        '/services',
        '/gallery',
        '/testimonials',
        '/faq',
        '/booking',
        '/contact'
      ],
      generateRobotsTxt: false,
      changefreq: 'weekly',
      priority: 0.7
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          helmet: ['react-helmet-async']
        }
      }
    },
    sourcemap: false,
    minify: true
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'react-helmet-async']
  },
  server: {
    port: 5173,
    host: true
  },
  preview: {
    port: 5173,
    host: true
  },
  define: {
    'process.env': {}
  }
})
