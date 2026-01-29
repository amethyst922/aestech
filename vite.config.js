import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: '/aestechmockup/', // Explicit base path for GitHub Pages subfolder compatibility
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                products: resolve(__dirname, 'products.html'),
            },
        },
    },
})
