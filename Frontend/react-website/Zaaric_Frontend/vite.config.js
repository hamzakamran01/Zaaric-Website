import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/', // Absolute base — required for deep routes like /careops to resolve assets
    build: {
        outDir: 'dist', // Build output in 'dist' folder
        // NOT 'assets': public/Assets/ is copied to dist/Assets/, and on a
        // case-insensitive filesystem (Windows/macOS) the two merge into one
        // directory. index.html then requests lowercase /assets/*, which a
        // case-sensitive server route map cannot resolve — every chunk 404s.
        assetsDir: 'static',
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom', 'framer-motion'], // Split vendor deps
                    animations: ['gsap'], // Separate animation libs
                },
            },
        },
    },
    optimizeDeps: {
        exclude: ['framer-motion', 'gsap'], // Exclude from pre-optimization
    },
    assetsInclude: ['**/*.woff2'], // Recognize WOFF2 files
});