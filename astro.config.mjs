// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://el22or.github.io', // or custom domain
  base: 'pedaleros-website',        // omit or '/' if using user site repo
});
