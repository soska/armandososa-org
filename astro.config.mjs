import { defineConfig, fontProviders } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  site: 'https://armandososa.org',
  fonts: [{
    provider: fontProviders.google(),
    name: 'Noto Serif',
    cssVariable: '--font-noto-serif',
    weights: [400, 700, 900],
    styles: ['normal', 'italic'],
    fallbacks: ['Georgia', 'serif'],
  }],
  redirects: {
    '/keyboardist': 'https://soska.github.io/keyboardist.js',
    '/keyboardist.js': 'https://soska.github.io/keyboardist.js',
    '/react-keyboardist': 'https://soska.github.io/react-keyboardist',
  },
});
