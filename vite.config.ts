
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const crypto = require('crypto');

// patch para corrigir libs que chamam crypto.hash
if (!crypto.hash && crypto.createHash) {
  crypto.hash = crypto.createHash;
}

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
