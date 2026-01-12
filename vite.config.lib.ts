import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { globSync } from 'glob';
import { fileURLToPath } from 'node:url';

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
      input: Object.fromEntries(
        globSync('component-lib/**/*.{ts,tsx}').map(file => [
          // This removes `src/` as well as the file extension from each
          // file, so e.g. src/nested/foo.js becomes nested/foo
          path.relative(
            'component-lib',
            file.slice(0, file.length - path.extname(file).length)
          ),
          // This expands the relative paths to absolute paths, so e.g.
          // src/nested/foo becomes /project/src/nested/foo.js
          fileURLToPath(new URL(file, import.meta.url))
        ])
      ),
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        exports: "named",
        entryFileNames: '[name].js',
      }
    }
  }
})
