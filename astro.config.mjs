// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  site: 'https://zittogustavo.vercel.app',
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  // The whole stylesheet is a few KB: inline it so there is no render-blocking request.
  build: { inlineStylesheets: 'always' },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Geist',
      cssVariable: '--font-sans',
      weights: ['100 900'],
      styles: ['normal'],
      subsets: ['latin'],
      // Preloaded and small: on any decent connection it is ready for first paint.
      // If not, the metric-matched fallback stays for that visit instead of swapping (no CLS, no re-layout).
      display: 'optional',
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Geist Mono',
      cssVariable: '--font-mono',
      weights: ['400 600'],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'optional',
      fallbacks: ['ui-monospace', 'monospace'],
    },
  ],
});
