import { defineConfig, fontProviders } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://armandososa.org',
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Space Grotesk',
      cssVariable: '--font-space-grotesk',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
  redirects: {
    '/projects': '/',
    '/keyboardist': 'https://soska.github.io/keyboardist.js',
    '/keyboardist.js': 'https://soska.github.io/keyboardist.js',
    '/react-keyboardist': 'https://soska.github.io/react-keyboardist',
  },
});
