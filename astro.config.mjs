// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from "@astrojs/node";


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  server: {
    host: '0.0.0.0'
  },
  output: 'server',

  adapter: node({
    mode: 'standalone',
  }),
});
