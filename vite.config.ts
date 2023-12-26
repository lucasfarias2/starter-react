import pluginReact from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const isDev = process.env.BUN_ENV === 'development';

export default defineConfig({
  plugins: [pluginReact(), tsconfigPaths()],
  publicDir: false,
  build: {
    outDir: './dist',
    emptyOutDir: true,
    manifest: true,
    minify: !isDev,
    cssMinify: !isDev,
    rollupOptions: {
      input: ['src/client/entries/app.ts', 'src/client/entries/global.css'],
    },
  },
});
