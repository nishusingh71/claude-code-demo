import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  plugins: [
    react({
      // Optimize React runtime
      jsxRuntime: 'automatic'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // Performance optimizations
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    // Pre-bundle dependencies
    force: false
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    // Reduce chunk size warnings
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          cloudinary: ['@cloudinary/react', '@cloudinary/url-gen']
        },
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || 'asset'
          const info = name.split('.')
          const ext = info[info.length - 1]
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(name)) {
            return `assets/images/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        }
      }
    },
    // Enable minification
    minify: 'esbuild',
    // Target modern browsers for better performance
    target: 'es2020'
  },
  // Dev server optimizations
  server: {
    hmr: {
      overlay: false
    }
  }
})
