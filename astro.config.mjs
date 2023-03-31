import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx"; 

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), mdx()]
});