// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), starlight()],
  vite: {
    plugins: [tailwindcss()],
  },
});