// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "compose-layouts",
      customCss: ["./src/styles/global.css"],
      components: {
        Header: "./src/components/Header.astro",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/BDuong0/compose-layouts/tree/main",
        },
      ],
      sidebar: [
        { slug: "guides/introduction" },
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        { slug: "guides/introduction" },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
    react(),
    mdx(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
