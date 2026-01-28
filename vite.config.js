import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: './', // Using relative paths so it works on any subdirectory
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                products: resolve(__dirname, 'products.html'),
            },
        },
    },
})
