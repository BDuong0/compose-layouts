import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    copyPublicDir: false,
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, 'component-lib/index.ts'),
      name: "compose-layouts",
      formats: ['es'],
      fileName: "compose-layouts"
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        preserveModules: true,
        preserveModulesRoot: 'component-lib',
        exports: "named"
      }
    }
  }
})
